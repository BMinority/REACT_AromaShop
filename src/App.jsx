import './App.css'
import './css/headerStyle.css'
import './css/menuStyle.css'
import './css/bannerStyle.css'
import './css/anunciosStyle.css'
import './css/perfumLOne.css'
import './css/perfumLTwo.css'
import './css/perfumLThree.css'
import './css/perfumLFour.css'

import './css/titleTwo.css'

import './css/footer.css'

import Banner from './components/Banner'
import Header from './components/Header'
import Menu from './components/Menu'
import Anuncios from './components/Anuncios'
import PerfumLineOne from './components/PerfumLineOne'
import PerfumLineTwo from './components/PerfumLineTwo'
import PerfumLineThree from './components/PerfumLineThree'
import PerfumLineFour from './components/PerfumLineFour'
import TitleOne from './components/TitleOne'
import TitleTwo from './components/TitleTwo'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Anuncios />
      <TitleOne />
      <PerfumLineOne />
      <TitleTwo />
      <PerfumLineTwo />
      <PerfumLineThree />
      <PerfumLineFour />
      <Footer />
    </>
  )
}

export default App
