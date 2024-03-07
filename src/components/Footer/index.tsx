import style from './Footer.module.scss'
import Logo from '@/assets/images/logo.svg?react'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Logo />
    </footer>
  )
}

export default Footer
