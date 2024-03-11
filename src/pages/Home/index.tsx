import style from './Home.module.scss'
import meals from '@/data/meals.json'
import ourHouse from '@/assets/images/our_house.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
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
            <button
              className={style.recs__meal__button}
              onClick={() => navigate(`/meal/${meal.id}`)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={style.title}> Nossa casa </h3>
      <div className={style.ourHouse}>
        <img src={ourHouse} alt="Casa do aluroni" />
        <div className={style.ourHouse__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  )
}

export default Home
