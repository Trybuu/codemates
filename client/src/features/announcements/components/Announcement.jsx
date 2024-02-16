import { Link } from 'react-router-dom'
import formatDate from '../../../utils/formatDate'
import classes from './Announcement.module.scss'
import UserIcon from './UserIcon'
import CalendarIcon from './CalendarIcon'

export default function Announcement({
  id,
  title,
  author,
  date,
  shortDescription,
  level,
  techStack,
}) {
  return (
    <div className={classes['announcement']}>
      <div className={classes['header']}>
        <div className={classes['header__info']}>
          <div className={classes['header__author']}>
            <UserIcon />
            {author}
          </div>
          <div className={classes['header__date']}>
            <CalendarIcon />
            {formatDate(date)}
          </div>
        </div>
        <Link to={`${id}`} relative="path">
          <h3 className={classes['header__title']}>{title}</h3>
        </Link>
      </div>

      <p>{shortDescription}</p>
      <div>
        <div className={classes['level']}>Level: {level}</div>
      </div>
      <div className={classes['tech-stack']}>
        {techStack.map((tech) => (
          <div key={tech} className={classes['tech-stack__tech']}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}
