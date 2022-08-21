import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import "./css/slider.css";


export const Slider = () => {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={3000}>
          <div className='container-slider'>
              <div className='publicidad'>
                <div className='publicidad-content'>
                  <h2>Ropa para hombres</h2>
                  <br/>
                  <p>Tanto para niños, jovenes y adultos</p>
                </div>
              </div>
              <img src="images/woman.png" alt="" className='img-model'/>
          </div>
          <div className='container-slider'>
              <img src="images/model.png" alt="" className='img-model'/>
              <div className='publicidad'>
                <div className='publicidad-content'>
                    <h2>Ropa para los más jovenes</h2>
                    <br/>
                    <p>Ofertas especiales para niños y niñas</p>
                </div>
              </div>
          </div>
          <div className='container-slider'>
              <div className='publicidad'>
                <div className='publicidad-content'>
                  <h2>Ropa para mujeres</h2>
                  <br/>
                  <p>Tanto para niñas, jovenes y adultos</p>
                </div>
              </div>
              <img src="images/man.png" alt="" className='img-model'/>
          </div>
      </Carousel>
    </div>
  )
}
