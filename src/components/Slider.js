import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import "./css/slider.css";


export const Slider = () => {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={3000}>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-left'>
                <div>
                  <h2>Ropa para hombres</h2>
                  <p>Tanto para niños, jovenes y adultos</p>
                  <a href='#' className='shop-now'>Comprar ahora</a>
                </div>
              </div>
              <div className='img-content'>
                <img src="images/man2.png" alt="" className='img-model-left img-model'/>
              </div>
          </div>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-right'>
                <div>
                  <h2>Ropa para mujeres</h2>
                  <p>Tanto para niñas, jovenes y adultos</p>
                  <a href='#' className='shop-now'>Comprar ahora</a>
                </div>
              </div>
              <img src="images/woman2.png" alt="" className='img-model-right img-model'/>
          </div>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-left'>
                <div>
                  <h2>Ropa para los más jovenes</h2>
                  <p>Ofertas especiales para niños y niñas</p>
                  <a href='#' className='shop-now'>Comprar ahora</a>
                </div>
              </div>
              <div className='img-content'>
                <img src="images/model2.png" alt="" className='img-model-left img-model'/>
              </div>
          </div>
      </Carousel>
    </div>
  )
}
