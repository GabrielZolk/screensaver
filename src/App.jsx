import './App.css'
import Music from './components/Music/Music'
import Weather from './components/Weather/Weather'

function App() {

  return (
    <>
      <video style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }} autoPlay muted loop id="background-video">
        <source src="ocean.mp4" type="video/mp4" />
      </video>
    <div className='main-content'>
      <Music />
      <Weather />
    </div>
    </>
  )
}

export default App
