import style from './Home.module.scss'
import meals from '@/data/meals.json'

const Home = () => {
  let recMeals = [...meals]
  recMeals = recMeals.sort(() => 0.5 - Math.random()).splice(0, 3)
  return (
    <section>
      <h3 className={style.title}>Recomendações da cozinha</h3>
      <div className={style.recs}>
        {recMeals.map((meal) => (
          <div key={meal.id} className={style.recs__meal}>
            <div className={style.recs__meal__image}>
              <img src={meal.photo} alt={meal.title} />
            </div>
            <button className={style.recs__meal__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home
