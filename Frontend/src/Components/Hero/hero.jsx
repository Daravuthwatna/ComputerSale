import LeftMenu from '../LeftMenu/leftmenu.jsx'
import CustomSlider from '../Custom/custom.slider'
import './hero.css'
import images from '../../assets/images'

const hero = () => {
  return (
    <div className='hero'>
      <div className="hero-List">
        <LeftMenu/>
        <CustomSlider>
          {images.map((image, index) =>{
            return (
              <img key={index} src={image.imgURL} alt={image.imgAlt} />
            )
          })}
        </CustomSlider>
      </div>
    </div>
  )
}

export default hero