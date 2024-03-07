import { Outlet } from 'react-router-dom'
import Banner from '../Banner'

const Default = () => {
  return (
    <>
      <Banner />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Default
