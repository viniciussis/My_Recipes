import { useNavigate } from 'react-router-dom'
import style from './NotFound.module.scss'
import NotFoundImage from '@/assets/images/not_found.svg?react'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.container__goBack}>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
      </div>
      <NotFoundImage />
    </div>
  )
}

export default NotFound
