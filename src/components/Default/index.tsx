import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import style from './Default.module.scss'

const Default = () => {
  return (
    <>
      <Banner />
      <main className={style.container}>
        <Outlet />
      </main>
    </>
  )
}

export default Default
