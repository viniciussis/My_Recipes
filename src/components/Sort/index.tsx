import classNames from 'classnames'
import style from './Sort.module.scss'
import options from './options.json'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface SortProps {
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
}

const Sort = ({ sort, setSort }: SortProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const sortName = sort && options.find(option => (option.value = sort))?.value
  return (
    <button
      className={classNames({
        [style.sort]: true,
        [style['sort--active']]: sort !== '',
      })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{sortName != '' ? sortName : 'Ordenar Por...'}</span>
      {isOpen ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25}/>}
      <div
        className={classNames({
          [style.sort__options]: true,
          [style['sort__options--active']]: isOpen,
        })}
      >
        {options.map((option) => (
          <div
            className={style.sort__options__option}
            key={option.value}
            onClick={() => setSort(option.nome)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Sort
