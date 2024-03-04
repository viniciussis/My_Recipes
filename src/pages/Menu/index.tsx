import Search from '@/components/Search'
import style from './Menu.module.scss'
import { useState } from 'react'

const Menu = () => {
  const [search, setSearch] = useState('')
  return (
    <main className={style.menuWrapper}>
      <h3 className={style.menuWrapper__title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
    </main>
  )
}

export default Menu
