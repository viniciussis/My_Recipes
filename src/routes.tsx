import './main.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './assets/styles/typography.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './pages/Menu'
import Banner from './components/Banner'

const Routes = () => {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <Footer />
    </>
  )
}

export default Routes
