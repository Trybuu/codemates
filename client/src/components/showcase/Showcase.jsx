import { Code } from './Icons'

import classes from './Showcase.module.scss'

export default function Showcase() {
  const slides = [
    {
      icon: <Code />,
      title: 'Announcements',
      description: 'Dozens of projects',
    },
    {
      icon: <Code />,
      title: 'Communicate with others',
      description: '100+ active users',
    },
    {
      icon: <Code />,
      title: 'Filter by experience',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Filter by tech stack',
      description: '15K+ Posts Jobs',
    },
    // {
    //   icon: <Code />,
    //   title: 'Druga kolumna',
    //   description: '15K+ Posts Jobs',
    // },
    // {
    //   icon: <Code />,
    //   title: 'Design & Development',
    //   description: '15K+ Posts Jobs',
    // },
    // {
    //   icon: <Code />,
    //   title: 'Design & Development',
    //   description: '15K+ Posts Jobs',
    // },
    // {
    //   icon: <Code />,
    //   title: 'Design & Development',
    //   description: '15K+ Posts Jobs',
    // },
  ]

  return (
    <section className={classes['showcase']}>
      <div className={classes['gallery']}>
        <div className={classes['gallery__control']}>
          <button className={classes['gallery__button']}>{'<'}</button>
          <button className={classes['gallery__button']}>{'>'}</button>
        </div>

        <div className={classes['gallery__slides']}>
          <div className={classes['gallery__column']}>
            {slides.map((slide, index) => (
              <div className={classes['gallery__slide']} key={index}>
                <div className={classes['gallery__image-wrapper']}>
                  {slide.icon}
                </div>
                <h3 className={classes['gallery__title']}>{slide.title}</h3>
                <p className={classes['gallery__subtitle']}>
                  {slide.description}
                </p>
              </div>
            ))}
            {/* <div className={classes['gallery__slide']}>
              <div className={classes['gallery__image-wrapper']}>
                <Code />
              </div>
              <h3 className={classes['gallery__title']}>
                Design & Development
              </h3>
              <p className={classes['gallery__subtitle']}>15K+ Post Jobs</p>
            </div>
            <div className={classes['gallery__slide']}></div>
            <div className={classes['gallery__slide']}></div>
            <div className={classes['gallery__slide']}></div> */}
          </div>

          <div className={classes['gallery__column']}>
            <div className={classes['gallery__slide']}></div>
            <div className={classes['gallery__slide']}></div>
            <div className={classes['gallery__slide']}></div>
            <div className={classes['gallery__slide']}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
