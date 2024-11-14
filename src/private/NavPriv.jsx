import avatar from  '../../../assets/img/default.png';

export const NavPriv = () => {

  return (
    <nav className="navbar__container-lists">

        <ul className="container-lists__menu-list">
          <li className='menu-list__item'>
            <a href="#" className='menu-list__link'>
              <i className='fa-solid fa-house'></i>
              <span className='menu-list__title'>Inicio Profile</span>
            </a>
          </li>

          <ul className="container-lists__menu-list">
          <li className='menu-list__item'>
            <a href="#" className='menu-list__link'>
              <i className='fa-solid fa-house'></i>
              <span className='menu-list__title'>Timeline Profile</span>
            </a>
          </li>

          <ul className="container-lists__menu-list">
          <li className='menu-list__item'>
            <a href="#" className='menu-list__link'>
              <i className='fa-solid fa-house'></i>
              <span className='menu-list__title'>Gente Profile</span>
            </a>
          </li>

    </nav>



  )


}