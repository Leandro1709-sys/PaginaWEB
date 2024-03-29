import ParticlesBg from "particles-bg";
import ImageSlider from "./Slider";


export const Header = (props) => {
  return (
   
    <header id='header'>
     
  
    
  
        <div className='intro'>
         <ParticlesBg type="cobweb"  bg={{zIndex: 0, position:"absolute", top:0}} /> 
        <div className='overlay'>
          <div className='container'>
  
  

            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <img src={props.data ? props.data.icon : 'Loading'} className='logo12'></img>

                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
              
                 
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                > 
                  Saber más
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
        </div>
       
     
 
     
    </header>
   
  )
}
