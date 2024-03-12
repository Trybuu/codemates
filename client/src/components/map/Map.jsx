import { useState } from 'react'
import classes from './Map.module.scss'

export default function Map() {
  const people = [
    {
      id: 0,
      name: 'Jonathan',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
    },
    {
      id: 1,
      name: 'Emma',
      opinion: 'I love codemates, best platform for lonely programmers!',
    },
    {
      id: 2,
      name: 'Alex',
      opinion:
        'I met here guys with I have run my startup, thank you codemates <3',
    },
    {
      id: 3,
      name: 'Rose',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
    },
    {
      id: 4,
      name: 'Max',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
    },
    {
      id: 5,
      name: 'Max',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
    },
  ]

  const [activePerson, setActivePerson] = useState(0)

  function handleChangeActivePerson(id) {
    setActivePerson(id)
  }

  return (
    <section className={classes['map']}>
      <div className={classes['map__photo']}></div>
      <div className={classes['opinion']}>
        <p className={classes['opinion__name']}>{people[activePerson].name}</p>
        <p className={classes['opinion__text']}>
          {people[activePerson].opinion}
        </p>
      </div>

      <div>
        {people.map((person, index) => (
          <img
            src={`/images/thispersondoesnotexist_${person.id}.jpeg`}
            alt="Person picture"
            className={`${classes['map__picture']} ${
              classes[`map__picture--${person.id}`]
            } ${
              activePerson === person.id
                ? classes['map__picture--active']
                : null
            }`}
            key={index}
            onClick={() => handleChangeActivePerson(person.id)}
          />
        ))}
      </div>
    </section>
  )
}
