import heroImage from '/images/undraw_world_re_768g.svg'
import classes from './Home.module.scss'
import Steps from '../components/steps/Steps'
import SectionTitle from '../components/section-title/SectionTitle'
import Showcase from '../components/showcase/Showcase'
import Map from '../components/map/Map'

export default function Home() {
  return (
    <>
      <div>
        <div className={classes['bg']}></div>
        <section className={classes['section-hero']}>
          <div className={classes['section-hero__text-wrapper']}>
            <h1 className={classes['section-hero__title']}>
              Ambitious projects await your participation!
            </h1>
            <p className={classes['section-hero__description']}>
              Are you struggling to find people to collaborate with on a major
              project that will impress recruiters? Codemates offers you the
              opportunity to make this process easier. Utilize it to start
              meeting new people and working on real-world projects!
            </p>
          </div>
          <div className={classes['section-hero__image']}>
            <img
              className={classes['section-hero__img']}
              src={heroImage}
              alt="Cartoon woman points to locations on Earth"
            />
          </div>
        </section>

        <SectionTitle
          title="How it works?"
          text="Codemates aims to connect programmers from around the world, thus giving the opportunity to work together on the projects."
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
        <Map />
      </div>
    </>
  )
}
