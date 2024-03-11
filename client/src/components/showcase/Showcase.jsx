import { Code } from './Icons'

import classes from './Showcase.module.scss'

export default function Showcase() {
  const tiles = [
    {
      icon: <Code />,
      title: 'Design & Development',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Pierwsza kolumna',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Design & Development',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Design & Development',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Druga kolumna',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Design & Development',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Design & Development',
      description: '15K+ Posts Jobs',
    },
    {
      icon: <Code />,
      title: 'Design & Development',
      description: '15K+ Posts Jobs',
    },
  ]

  return (
    <section className={classes['showcase']}>
      <div className={classes['image-wrapper']}>
        <img
          className={classes['image-wrapper__image']}
          src="https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className={classes['slider']}>
        <div className={classes['slider__control']}>
          <button className={classes['slider__button']}>{'<'}</button>
          <button className={classes['slider__button']}>{'>'}</button>
        </div>

        <div className={classes['slider__tiles']}>
          {tiles.map((tile, index) => {
            return (
              <div key={index} className={classes['slider__tile']}>
                <div className={classes['slider__icon']}>{tile.icon}</div>
                <h3 className={classes['slider__title']}>{tile.title}</h3>
                <p>{tile.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
