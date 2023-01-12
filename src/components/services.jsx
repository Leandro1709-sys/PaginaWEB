export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Que hacemos?</h2>
          <p>
          Nos dedicamos al diseño y ejecución integral de viviendas, oficinas y locales comerciales, así como a la ejecución de proyectos
          <br></br>con sistema steel concrete y cassaforma.
          <br></br>
          <br></br>
        
Creemos en el trabajo en equipo para brindar mejores respuesta al cliente, apuntando a sistemas constructivos no tradicionales,   
<br></br> que mejoren los procesos y la calidad de obra.
          </p>
        </div>
        <div className="contLogo">
        <div className='row'>
         {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <img src={d.icon} className='iconos'></img>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    
                  </div>
                </div>
              ))
            : 'loading'}
            </div>
        </div>
      </div>
    </div>
  )
}
