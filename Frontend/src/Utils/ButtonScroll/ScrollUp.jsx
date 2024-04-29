import './ScrollUp.css'

const ScrollUp = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }
  return (
    <div className='button-scroll'>
      <button onClick={handleScroll}><i className="fa-solid fa-chevron-up"></i></button>
    </div>
  )
}

export default ScrollUp