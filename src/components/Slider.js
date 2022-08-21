import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import "./css/slider.css";


export const Slider = () => {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={3000}>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-left'>
                <h2>Ropa para hombres</h2>
                <br/>
                <p>Tanto para niños, jovenes y adultos</p>
                <a href='#' className='shop-now'>Comprar ahora</a>
              </div>
              <div className='img-content'>
                <img src="images/woman.png" alt="" className='img-model-left'/>
              </div>
          </div>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-right'>
                  <h2>Ropa para mujeres</h2>
                  <br/>
                  <p>Tanto para niñas, jovenes y adultos</p>
                  <a href='#' className='shop-now'>Comprar ahora</a>
              </div>
              <img src="images/man.png" alt="" className='img-model-right'/>
          </div>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-left'>
                <h2>Ropa para los más jovenes</h2>
                <br/>
                <p>Ofertas especiales para niños y niñas</p>
                <a href='#' className='shop-now'>Comprar ahora</a>
              </div>
              <div className='img-content'>
                <img src="images/model.png" alt="" className='img-model-left'/>
              </div>
          </div>
      </Carousel>
    </div>
  )
}
