import Search from '@/components/Search'
import style from './Menu.module.scss'
import { useState } from 'react'
import Tags from '@/components/Tags'
import Sort from '@/components/Sort'
import Recipes from '@/components/Recipes'

const Menu = () => {
  const [search, setSearch] = useState('')
  const [tagSelected, setTagSelected] = useState<number | null>(null)
  const [sort, setSort] = useState('')
  return (
    <main className={style.menuWrapper}>
      <h3 className={style.menuWrapper__title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={style.menuWrapper__filters}>
        <Tags tagSelected={tagSelected} setTagSelected={setTagSelected} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <Recipes search={search} sort={sort} tag={tagSelected} />
    </main>
  )
}

export default Menu
