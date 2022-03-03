import React from 'react'
import Image from 'next/image'
import { Carousel } from 'antd'
import image1 from '../../public/assets/images/c-1.png'
import image2 from '../../public/assets/images/c-2.png'
import image3 from '../../public/assets/images/c-3.png'
import image4 from '../../public/assets/images/c-4.png'

const contentStyle = {
  height: '50vh',
  color: '#000',
  backgroundSize: 'cover',
  textAlign: 'center',
  background: '#FFF',
};

export default function CarouselComponent() {
  return (
    <Carousel autoplay>
      <div>
        <Image src={image1} alt="Carousel 1" style={contentStyle}/>
      </div>
      <div>
        <Image src={image2} alt="Carousel 2" style={contentStyle}/>
      </div>
      <div>
        <Image src={image3} alt="Carousel 3" style={contentStyle}/>
      </div>
      <div>
        <Image src={image4} alt="Carousel 4" style={contentStyle}/>
      </div>
    </Carousel>
  );
}
