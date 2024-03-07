import './main.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './assets/styles/typography.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Default from './components/Default'
import Header from './components/Header'
import Footer from './components/Footer'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
