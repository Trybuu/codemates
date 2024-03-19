import { FaUsers, FaCode, FaFilter, FaLevelUpAlt } from 'react-icons/fa'
import { IoIosDocument } from 'react-icons/io'
import { MdAddToPhotos } from 'react-icons/md'
import { LuPartyPopper } from 'react-icons/lu'

import classes from './Showcase.module.scss'
import { useState } from 'react'

export default function Showcase() {
  const slides = [
    [
      {
        icon: <FaCode />,
        title: 'Embark on Ambitious Projects',
        description:
          'Select a project that interests you and become a part of it!',
      },
      {
        icon: <FaUsers />,
        title: 'Find somebody to colaborate',
        description: "Find an interesting project and contact with it's owner.",
      },
      {
        icon: <FaFilter />,
        title: 'Filter projects fits to your skills',
        description:
          'Choose projects with technology stack you know or you would like to learn.',
      },
      {
        icon: <FaLevelUpAlt />,
        title: 'Choose projects by your experience',
        description:
          "Whether you're a beginner or a master, you will find something for you.",
      },
    ],
    [
      {
        icon: <IoIosDocument />,
        title: 'Supercharge your resume',
        description:
          'Take part in huge projects and showcase them on your resume!',
      },
      {
        icon: <MdAddToPhotos />,
        title: 'Increase your chances of finding a job',
        description:
          'With more complex projects on your resume you are more attractive for recruiters!',
      },
      {
        icon: <FaCode />,
        title: 'Cooperate with each other',
        description:
          "The main aspect of a programmer's job is to collaborate with other programmers, making it crucial to know how to do so effectively.",
      },
      {
        icon: <LuPartyPopper />,
        title: 'To enjoy your journey in web development',
        description:
          "Showcase the projects you've been involved in and take pride in knowing that real users benefit from them.",
      },
    ],
  ]

  const [activeSlides, setActiveSlides] = useState(0)

  function changeSlide(action) {
    if (action === 'PREV' && activeSlides > 0) {
      setActiveSlides((prevState) => prevState - 1)
    } else if (action === 'NEXT' && activeSlides < slides.length - 1) {
      setActiveSlides((prevState) => prevState + 1)
    }
  }

  return (
    <section className={classes['showcase']}>
      <div className={classes['gallery']}>
        <div className={classes['gallery__control']}>
          <button
            className={`${classes['gallery__button']} ${
              activeSlides === 0 ? classes['gallery__button--disabled'] : null
            }`}
            onClick={() => changeSlide('PREV')}
          >
            {'<'}
          </button>
          <button
            className={`${classes['gallery__button']} ${
              activeSlides === slides.length - 1
                ? classes['gallery__button--disabled']
                : null
            }`}
            onClick={() => changeSlide('NEXT')}
          >
            {'>'}
          </button>
        </div>

        <div className={classes['gallery__slides']}>
          <div className={classes['gallery__column']}>
            {slides[activeSlides].map((slide, index) => (
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
