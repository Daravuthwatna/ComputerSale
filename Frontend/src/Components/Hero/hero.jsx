import './Hero.css'
import CustomSlider from './Custom/custom.slider.jsx'
import images from '../../assets/Data/images'

const Hero = () => {
  return (
    <div className='hero'>
      <CustomSlider>
        {images.map((image, index) =>{
          return (
            <img key={index} src={image.imgURL} alt={image.imgAlt}/>
          )
        })}
      </CustomSlider>
    </div>
  )
}

export default Hero