import { Link } from 'react-router-dom'
import style from './Header.module.scss'
import Logo from '@/assets/images/logo.svg?react'

const Header = () => {
  const pages = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: 'menu',
      label: 'Cardápio',
    },
    { to: 'about', label: 'Sobre' },
  ]

  return (
    <header className={style.header}>
      <Logo />
      <ul className={style.header__list}>
        {pages.map((page, index) => (
          <li key={index} className={style.header__list__link}>
            <Link to={page.to}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
