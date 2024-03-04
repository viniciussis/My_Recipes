import { ITags } from '@/interfaces/ITags'
import style from './Tags.module.scss'
import tags from './tags.json'
import classNames from 'classnames'

interface TagsProps {
  tagSelected: null | number
  setTagSelected: React.Dispatch<React.SetStateAction<number | null>>
}

const Tags = ({ tagSelected, setTagSelected }: TagsProps) => {
  function selectTag(tag: ITags) {
    if (tagSelected === tag.id) return setTagSelected(null)
    return setTagSelected(tag.id)
  }

  return (
    <div className={style.tagsWrapper}>
      {tags.map((tag) => (
        <button
          className={classNames({
            [style.tagsWrapper__tag]: true,
            [style['tagsWrapper__tag--active']]: tagSelected === tag.id,
          })}
          onClick={() => selectTag(tag)}
          key={tag.id}
        >
          {tag.label}
        </button>
      ))}
    </div>
  )
}

export default Tags
