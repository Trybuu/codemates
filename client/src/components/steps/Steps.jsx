import { useState } from 'react'
import classes from './Steps.module.scss'

export default function Steps() {
  const [content, setContent] = useState([
    {
      no: '01',
      title: 'Register Account',
      desc: 'First, you need to create an account.',
      active: true,
    },
    {
      no: '02',
      title: 'Find a Project',
      desc: 'Second, find or create your own project announcement.',
      active: false,
    },
    {
      no: '03',
      title: 'Start Cooperate',
      desc: 'Third, make contact with project owner or wait for response to your project announcement.',
      active: false,
    },
  ])

  function handleSetActive(id) {
    console.log(id)

    const newContent = [...content]
    newContent.forEach((val) => {
      val.active = false

      if (val.no === id) val.active = true
    })

    setContent(newContent)
    console.log(newContent)
  }

  return (
    <div className={classes['cards']}>
      {content.map((el, index) => (
        <div
          key={index}
          className={`${classes['card']} ${
            el.active && classes['card--active']
          }`}
          onClick={() => handleSetActive(el.no)}
        >
          <div className={`${classes['card__number']}`}>{el.no}</div>
          <div className={classes['card__content']}>
            <h3 className={classes['card__title']}>{el.title}</h3>
            <p className={classes['card__desc']}>{el.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
