import logo from '../LOGO-10.png'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <span tooltip='NHÓM Contrucciones'>
          <a className='navbar-brand page-scroll' href='#page-top'>
          NHÓM
            
          </a>
          </span>
          {' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          
            <li>
              <a href='#about' className='page-scroll'>
                QEUIENES SOMOS
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              EL EQUIPO
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
              PORTFOLIO
                
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                CONTACTOS
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
