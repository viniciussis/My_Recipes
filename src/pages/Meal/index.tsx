import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import style from './Meal.module.scss'
import meals from '@/data/meals.json'
import NotFound from '../NotFound'
import { TagsMeal } from '@/components/TagsMeal'
import Default from '@/components/Default'

export const Meal = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const meal = meals.find((meal) => Number(id) === meal.id)
  if (!meal) return <NotFound />
  return (
    <Routes>
      <Route path="*" element={<Default />}>
        <Route
          index
          element={
            <>
              <button className={style.back} onClick={() => navigate(-1)}>
                {'< Voltar'}
              </button>
              <div className={style.container}>
                <h1 className={style.container__title}>{meal.title}</h1>
                <div className={style.container__image}>
                  <img src={meal.photo} alt={meal.title} />
                </div>
                <div className={style.container__content}>
                  <p className={style.container__content__description}>
                    {meal.description}
                  </p>
                </div>
                <TagsMeal {...meal} />
              </div>
            </>
          }
        />
      </Route>
    </Routes>
  )
}
