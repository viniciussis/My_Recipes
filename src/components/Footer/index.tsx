import style from './Footer.module.scss'
import Insta from '@/assets/icons/instagram.svg?react'
import GitHub from '@/assets/icons/github.svg?react'
import LinkedIn from '@/assets/icons/linkedin.svg?react'
import Twitter from '@/assets/icons/twitter.svg?react'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__media}>
        <a
          href="https://www.linkedin.com/in/viniciussis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/viniciussis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.instagram.com/_devinicius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Insta />
        </a>
        <a
          href="https://twitter.com/_devinicius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
      <p className={style.footer__para}>
        &copy;Copyright | Project created by Vinícius Silva Santos & Alura |
        2024
      </p>
    </footer>
  )
}

export default Footer
