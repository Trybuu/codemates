import useFetch from '../../../hooks/useFetch'
import { PaperPlaneIcon } from './Icons'
import classes from './AnnouncementCreator.module.scss'

export default function AnnouncementCreator() {
  const technologies = useFetch(
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
        name={technology.technology_id}
      />{' '}
      {technology.name}
    </label>
  ))

  console.log(technologies)

  return (
    <form action="" className={classes['creator']}>
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
        />
      </div>

      <div className={classes['question']}>
        <label className={classes['question__label']} htmlFor="level">
          Select an level
        </label>
        <select className={classes['question__select']} id="level">
          <option
            className={classes['question__select__option']}
            value="Beginner"
          >
            Beginner
          </option>
          <option
            className={classes['question__select__option']}
            value="Intermediate"
          >
            Intermediate
          </option>
          <option
            className={classes['question__select__option']}
            value="Advanced"
          >
            Advanced
          </option>
          <option
            className={classes['question__select__option']}
            value="Master"
          >
            Master
          </option>
        </select>
      </div>

      <div className={`${classes['question']} `}>
        <p className={classes['question__label']}>Select project tech stack</p>
        <div className={classes['question__checkboxes']}>
          {technologiesList}
        </div>
      </div>

      <div className={classes['question']}>
        <label className={classes['question__label']} htmlFor="longDescription">
          Long Description
        </label>
        <textarea
          className={classes['question__textarea']}
          placeholder={
            'Include as much detail about your project here as possible. If you have created a repository, post a link. Write what you expect from the person you will cooperate with. Write who you are looking for. What skills do you offer and what skills do you expect?'
          }
        ></textarea>
      </div>

      <button className={classes['creator__button']}>
        <PaperPlaneIcon /> {'Post an announcement'}{' '}
      </button>
    </form>
  )
}
