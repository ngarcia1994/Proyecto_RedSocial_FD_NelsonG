import { Outlet } from 'react-router-dom';
import { HeaderPrive } from './HeaderPriv';
import { Sibebar } from './Sidebar';

export const PrivateLayout = () => {
  return (
    <>
      {/* Menu de Navegacion Princial - Private*/}
      <HeaderPriv />

      {/* Contenido Principal - private*/}
      <section className='layout__content'>
        <Outlet />
      </section>

      {/* Sidebar o Barra Lateral */}
      <Sibebar />
    </>
  )
}