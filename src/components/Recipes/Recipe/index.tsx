import { IRecipe } from '@/interfaces/IRecipe'
import style from './Recipe.module.scss'
import classNames from 'classnames'

const Recipe = ({
  title,
  description,
  price,
  serving,
  size,
  photo,
  category,
}: IRecipe) => {
  return (
    <div className={style.recipe}>
      <div className={style.recipe__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.recipe__description}>
        <div className={style.recipe__description__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.recipe__description__tags}>
          <div
            className={classNames(
              style.tags__type,
              style[`tags__type--${category.label.toLowerCase()}`]
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
      </div>
    </div>
  )
}

export default Recipe
