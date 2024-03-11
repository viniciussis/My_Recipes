import classNames from 'classnames'
import style from './TagsMeal.module.scss'
import { IRecipe } from '@/interfaces/IRecipe'

export const TagsMeal = ({ category, serving, size, price }: IRecipe) => {
  return (
    <div className={style.tags}>
      <div
        className={classNames(
          style.tags__type,
          style[`tags__type--${category.label.toLowerCase()}`],
        )}
      >
        {category.label}
      </div>
      <div className={style.tags__portion}>{size}g</div>
      <div className={style.tags__mealServing}>
        Serve {serving == 1 ? serving + ' pessoa' : serving + ' pessoas'}
      </div>
      <div className={style.tags__price}>R$ {price.toFixed(2)}</div>
    </div>
  )
}
