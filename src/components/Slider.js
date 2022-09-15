import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import "./css/slider.css";
import { Link } from 'react-router-dom';


export const Slider = () => {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={3000}>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-left'>
                <div>
                  <h2>Ropa para hombres</h2>
                  <p>Para todo tipo de ocación</p>
                  <Link to='/products' className='shop-now'>Comprar ahora</Link>
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
                  <p>Luce con lo que más quieres</p>
                  <Link to='/products' className='shop-now'>Comprar ahora</Link>
                </div>
              </div>
              <img src="images/woman2.png" alt="" className='img-model-right img-model'/>
          </div>
          <div className='container-slider'>
              <div className='publicidad-content publicidad-content-left'>
                <div>
                  <h2>Accesorios</h2>
                  <p>Para tus eventos importantes</p>
                  <Link to='/products' className='shop-now'>Comprar ahora</Link>
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
