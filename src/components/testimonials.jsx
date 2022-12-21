

export const Testimonials = (props) => {
 
  return (
    
    <div id='testimonials'>
      <div class="container">
    <div class="row">
        <div class="col-md-12">

                <form class="form-horizontal" id='form'>
                    <fieldset>
                    
                    <div className='section-title'>
                    <div class="col-md-12 text-center"  >
              <h2>FROMULARIO DE CONTACTO</h2>
              </div>
           
            </div>
          
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-1 text-center"></span>
                            <div class="col-md-8">
                                <input id="from_name" name="from_name" type="text" placeholder="NOMBRE" class="form-control"/>
                            </div>
                        </div>
                                          <div class="form-group">
                            <span class="col-md-1 col-md-offset-1 text-center"></span>
                            <div class="col-md-8">
                                <input id="email_id" name="email_id" type="text" placeholder="EMAIL" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-1 text-center"></span>
                            <div class="col-md-8">
                                <input id="phone_id" name="phone_id" type="text" placeholder="TELÉFONO" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-1 text-center"></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Introduzca su masaje para nosotros aquí. Nos pondremos en contacto con usted dentro de 2 días hábiles." rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" id='button' class="btn btn-custom btn-lg page-scroll">Send Email</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
        </div>
    </div>
</div>
    </div>
    
  )
}
