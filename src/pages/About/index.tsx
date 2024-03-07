import style from './About.module.scss'
import house from '@/assets/images/house.png'
import massa1 from '@/assets/images/massa1.png'
import massa2 from '@/assets/images/massa2.png'

const images = [ massa1, massa2 ]

const About = () => {
  return (
    <section>
      <h3 className="title"> Sobre </h3>
      <div className={style.about}>
        <img src={house} alt="Casa Aluroni" />
        <div className={style.about__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={style.images}>
        {images.map((image, index) => (
          <div key={index} className={style.images__image}>
            <img src={image} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
