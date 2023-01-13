import logo from '../LOGO-10.png'


export const Navigation = (props) => {

  function cerrar(){
    
    document.getElementById('bs-example-navbar-collapse-1').className='collapse navbar-collapse'
    
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            id='toggle1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <span tooltip='NHÓM Contrucciones'>
          <a className='navbar-brand page-scroll' href='#page-top' onClick={()=>cerrar()}>
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
              <a href='#about' className='page-scroll'  onClick={()=>cerrar()}>
                QEUIENES SOMOS?
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll' onClick={()=>cerrar()}>
              QUÉ HACEMOS?
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll' onClick={()=>cerrar()}>
              PORTFOLIO
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll' onClick={()=>cerrar()}>
                CONTACTOS
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
