import { IRecipe } from '@/interfaces/IRecipe'
import style from './Recipe.module.scss'
import { TagsMeal } from '@/components/TagsMeal'
import { useNavigate } from 'react-router-dom'

const Recipe = (props: IRecipe) => {
  const { title, description, photo, id } = props
  const navigate = useNavigate()
  return (
    <div className={style.recipe} onClick={() => navigate(`/meal/${id}`)}>
      <div className={style.recipe__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.recipe__description}>
        <div className={style.recipe__description__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsMeal {...props} />
      </div>
    </div>
  )
}

export default Recipe
