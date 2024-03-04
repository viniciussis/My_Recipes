import style from './Header.module.scss'
import LogoSVG from '@/assets/images/logo.svg'

const Header = () => {
  return (
    <header className={style.header}>
      <img src={LogoSVG} alt="Logo do App" />
    </header>
  )
}

export default Header
