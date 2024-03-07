import catImage from '/images/cat-8000855_1280.png'
import classes from './Home.module.scss'

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

        <section className={classes['section-about']}>
          <h2>How it Works?</h2>
          <p>
            Explore the following steps will help ypu to find someone to
            cooperate easily
          </p>

          <div>
            <div>
              <div>01</div>
              <div>
                <h3>Register Account</h3>
                <p>First, you need to make an account.</p>
              </div>
            </div>
            <div>
              <div>02</div>
              <div>
                <h3>Find Project</h3>
                <p>Second, find or create your own project.</p>
              </div>
            </div>
            <div>
              <div>03</div>
              <div>
                <h3>Cooperate</h3>
                <p>
                  Third, make contact with project owner or wait for response.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={classes['section-features']}>
          <h2>Explore by your preferences</h2>
          <p>Find project that fits your skills!</p>
        </section>

        <section className={classes['section-map']}>
          <h2>Find your codemate at the end of the world!</h2>
          <p>
            Codemates its platform that connect programmers from around the
            world.
          </p>
        </section>
      </div>
    </>
  )
}
