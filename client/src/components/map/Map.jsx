import { useState } from 'react'
import classes from './Map.module.scss'

export default function Map() {
  const people = [
    {
      id: 0,
      name: 'Emily',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
      imagePath: '/images/person_1.png',
      imageAtrribute: `Photo by <a href="https://unsplash.com/@wocintechchat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christina @ wocintechchat.com</a> on <a href="https://unsplash.com/photos/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      `,
    },
    {
      id: 1,
      name: 'Emma',
      opinion: 'I love codemates, best platform for lonely programmers!',
      imagePath: '/images/person_2.jpg',
      imageAtrribute: `Photo by <a href="https://unsplash.com/@aiony?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aiony Haust</a> on <a href="https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      `,
    },
    {
      id: 2,
      name: 'Alex',
      opinion:
        'I met here guys with I have run my startup, thank you codemates <3',
      imagePath: '/images/person_1.png',
    },
    {
      id: 3,
      name: 'Rose',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
      imagePath: '/images/person_1.png',
    },
    {
      id: 4,
      name: 'Max',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
      imagePath: '/images/person_1.png',
    },
    {
      id: 5,
      name: 'Max',
      opinion:
        'Thank you very much I am very happy to be able find employees in here the features is really amaizng!',
      imagePath: '/images/person_1.png',
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
            src={person.imagePath}
            alt={person.imageAtrribute}
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
