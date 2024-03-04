import style from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'

interface SearchProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className={style.search}>
      <input
        className={style.search__searchBar}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <CgSearch className={style.search__icon} size={20} />
    </div>
  )
}

export default Search
