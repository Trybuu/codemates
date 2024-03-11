import catImage from '/images/cat-8000855_1280.png'
import classes from './Home.module.scss'
import Steps from '../components/steps/Steps'
import SectionTitle from '../components/section-title/SectionTitle'
import Showcase from '../components/showcase/Showcase'

export default function Home() {
  return (
    <>
      <div className={classes['bg']}></div>
      <div>
        <section className={classes['section-hero']}>
          <div className={classes['section-hero__text']}>
            <h1 className={classes['section-hero__title']}>
              Millions of Projects are waiting for you!
            </h1>
            <p className={classes['section-hero__description']}>
              Lorem ipsum is simply text printing and Lorem Ipsum is simply
              dummy text.
            </p>
          </div>
          <div className={classes['section-hero__image']}>
            <img
              className={classes['section-hero__img']}
              src={catImage}
              alt=""
            />
          </div>
        </section>

        <SectionTitle
          title="How it works?"
          text="Lorem ipsum dolor selor, cebulion."
        />
        <Steps />

        <SectionTitle
          title="Explore by your preferences"
          text="Find project that fits your skills!"
        />
        <Showcase />

        <SectionTitle
          title="Find your codemate at the end of the world!"
          text=" Codemates its platform that connect programmers from around the
          world."
        />
      </div>
    </>
  )
}
