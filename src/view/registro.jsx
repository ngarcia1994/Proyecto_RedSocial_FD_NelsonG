import { useState } from 'react';
import { useform } from '///hooks/useform';
import { useNavigate } from 'react-router-dom';
import $wal from 'sweetalert2';

export const Register = () => {

  //User el hook personalizado useform para cargar los datos del formulario
  const { form, changed } = userform({});

  //Estado para mostrar el resultado del registro del user en la BD
  const navigate = useNavigate();

  //Hook para redirigir
  const saveUser = async (e) => {

    //Prevenir que se actualice la pantalla
    e.PreventDefault();

    // Obtener los datos del formulario
    let newUser = form;

    // Peticion a la API (Backend) para guarder el usuario en la BD
    const request = await fetch(Global.url = 'user/register',
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
  )};

  // Obtener la informacion retornada por el backend
  const data = await request.json();

  // Verificar si el estado de la respuesta es 'created' seteamos la variable de estado save con saved
  if(request.status === 201 && data.status === 'created'){
    setSaved('saved');

    // Mostrar el model de exito
    Swal.fire({
      title: data.message,
      icon: 'success',
      confirmButtonText: 'continuar',
    }).then(() => {
      // Redirigir despues de cerra el modal
      navigate('/login');
    })
    } else {
      setSaved('error');

      // Mostrar el modal del error
      Swal.fire({
          title: data.message || "!Error en el registro",
          icon: 'error',
          confirmButtonText: 'Intentar nuevamente',
        });
    };
  };

  return (
    <>
      <header className='content__header content__header-public'>
        <h1 className='content__tittle'>Registro</h1>
      </header>

      {/* Formulariio o Registro*/}
      <div className='content__posts'>
        <div className='form-style'>

            {/* Respuesta de usuario registrado */}
            {save  == 'saved' ? (<strong className='alert alert-success'>¡Usuario registrado correctamente!</strong>
            ) : ''}
            {saved == 'error' ? (
                <strong className='alert alert-success'>!El usuario no se ha registrado correctamente:</strong>
            ): ''}

            <form className='register-form' onSubmit={saveUser}>
                <div className='form-group'>
                  <label htmlFor='form-group'></label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    onChange={''}
                    value={''}
                    autoComplete="given-name"
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='last_name'>Apellidos</label>
                  <input
                    type='text'
                    id='last_name'
                    name='last_name'
                    required
                    onChange={''}
                    value={''}
                    autoComplete="family-name"
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='last_name'>Apellidos</label>
                  <input
                    type='text'
                    id='last_name'
                    name='last_name'
                    required
                    onChange={''}
                    value={''}
                    autoComplete="family-name"
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='last_name'>nick</label>
                  <input
                    type='text'
                    id='nick'
                    name='nick'
                    required
                    onChange={''}
                    value={''}
                    autoComplete="username"
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Correo Electronico</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    onChange={''}
                    value={''}
                    autoComplete="email"
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Biografia</label>
                  <input
                    type='email'
                    id='bio'
                    name='bio'
                    required
                    onChange={''}
                    value={''}
                    autoComplete="biografia"
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='Password'>Contraseña</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    required
                    onChange={changed}
                    value={''}
                    autoComplete="new-password"
                  />
                </div>

                <input
                  type='submit'
                  value='Registrate'
                  className='btn b tn-success'
                />
            </form>
        </div>
      </div>
    </>
  )

