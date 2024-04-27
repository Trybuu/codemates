import { useCookies } from 'react-cookie'
import useFetch from '../../../hooks/useFetch'
import { PaperPlaneIcon } from './Icons'
import classes from './AnnouncementCreator.module.scss'
import { useEffect, useRef, useState } from 'react'
import InfoMessage from '../../../components/ui/messages/InfoMessage'
import LoadingCircles from '../../../components/ui/loadings/LoadingCircles'
import Overlay from '../../../components/ui/overlays/Overlay'
import ButtonFullWidth from '../../../components/ui/buttons/ButtonFullWidth'

export default function AnnouncementCreator() {
  const [cookies, , ,] = useCookies()

  // handle form submit
  const [selectedTech, setSelectedTech] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isUserAnnouncement, setIsUserAnnouncement] = useState(false)

  const titleRef = useRef()
  const shortDescRef = useRef()
  const levelSelectRef = useRef()
  const longDescRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REST_SERVER_URL}/announcements`,
        )
        const data = await response.json()

        console.log('-- DATA --')
        console.log(data)

        const userAnnouncement = await data.filter(
          (announcement) => announcement.username === cookies.Username,
        )

        setIsUserAnnouncement(userAnnouncement.length > 0)
      } catch (error) {
        console.error('Error fetching data:', error)
        return [-1]
      }
    }

    fetchData()
  }, [cookies.Username])

  function handleCheckboxChange(e) {
    const { id, name, checked } = e.target
    console.log(id, name, checked)
    console.log(selectedTech)
    if (checked && selectedTech.includes(Number(id))) return

    const updatedTech = checked
      ? [...selectedTech, Number(id)]
      : selectedTech.filter((tech) => tech !== Number(id))

    setSelectedTech(updatedTech)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const fd = {
      userId: cookies.UserId,
      title: titleRef.current.value,
      shortDescription: shortDescRef.current.value,
      level: levelSelectRef.current.value,
      technologies: selectedTech,
      longDescription: longDescRef.current.value,
    }

    const errors = validateForm(fd)

    if (errors.length === 0) {
      setErrors([])
      const response = await fetch(
        `${import.meta.env.VITE_REST_SERVER_URL}/announcements/post`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fd),
        },
      )

      const data = await response.json()

      if (data.detail) {
        console.log('Error')
      } else {
        window.location.reload()
      }
    } else {
      setErrors(errors)
    }

    setIsLoading(false)
  }

  function validateForm(formData) {
    const errors = []

    if (formData.title.length < 10 || formData.shortDescription.length <= 10) {
      errors.push(
        'Title and short description must be at least 10 characters long.',
      )
    }
    if (formData.technologies.length === 0) {
      errors.push('You must choose at least one technology.')
    }
    if (formData.longDescription.length < 50) {
      errors.push('Description must be at least 50 characters long.')
    }

    return errors
  }

  // fetch technologies and create jsx
  const { data: technologies, isPending } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/technologies`,
  )

  const technologiesList = technologies?.map((technology) => (
    <label
      htmlFor={technology.technology_id}
      key={technology.technology_id}
      className={classes['question__checkbox']}
    >
      <input
        type="checkbox"
        id={technology.technology_id}
        name={technology.name}
        checked={selectedTech.includes(technology.technology_id)}
        onChange={(e) => handleCheckboxChange(e)}
      />{' '}
      {technology.name}
    </label>
  ))

  return (
    <>
      {isLoading && <Overlay />}

      <form onSubmit={handleSubmit} className={classes['creator']}>
        <div className={classes['question']}>
          <label className={classes['question__label']} htmlFor="title">
            Announcement title
          </label>
          <input
            className={classes['question__input']}
            type="text"
            id="title"
            name="title"
            placeholder="e.g. monopoly online game"
            ref={titleRef}
          />
        </div>

        <div className={classes['question']}>
          <label
            className={classes['question__label']}
            htmlFor="shortDescription"
          >
            Short description
          </label>
          <input
            className={classes['question__input']}
            type="text"
            id="shortDescription"
            name="shortDescription"
            placeholder="e.g. project uses mern stack. backend developer needed."
            ref={shortDescRef}
          />
        </div>

        <div className={classes['question']}>
          <label className={classes['question__label']} htmlFor="level">
            Select an level
          </label>
          <select
            className={classes['question__select']}
            id="level"
            ref={levelSelectRef}
          >
            <option
              className={classes['question__select__option']}
              value="Beginner"
              name="Beginner"
            >
              Beginner
            </option>
            <option
              className={classes['question__select__option']}
              value="Intermediate"
              name="Intermediate"
            >
              Intermediate
            </option>
            <option
              className={classes['question__select__option']}
              value="Advanced"
              name="Advanced"
            >
              Advanced
            </option>
            <option
              className={classes['question__select__option']}
              value="Master"
              name="Master"
            >
              Master
            </option>
          </select>
        </div>

        <div className={`${classes['question']} `}>
          <p className={classes['question__label']}>
            Select project tech stack
          </p>
          <div className={classes['question__checkboxes']}>
            {isPending ? <LoadingCircles /> : technologiesList}
          </div>
        </div>

        <div className={classes['question']}>
          <label
            className={classes['question__label']}
            htmlFor="longDescription"
          >
            Long Description
          </label>
          <textarea
            className={classes['question__textarea']}
            placeholder={
              'Include as much detail about your project here as possible. If you have created a repository, post a link. Write what you expect from the person you will cooperate with. Write who you are looking for. What skills do you offer and what skills do you expect?'
            }
            ref={longDescRef}
          ></textarea>
        </div>

        <div className={classes['error']}>
          {errors.length > 0 &&
            errors.map((error, index) => (
              <InfoMessage key={index} type={'error'} info={error} />
            ))}
        </div>

        <ButtonFullWidth
          icon={<PaperPlaneIcon />}
          text={'Post an announcement'}
          disabled={isUserAnnouncement}
        />
      </form>
    </>
  )
}
