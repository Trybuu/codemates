import classes from './AnnouncementStack.module.scss'

export default function AnnouncementStack({ techStack }) {
  return (
    <div className={classes['tech-stack']}>
      {techStack.map((tech) => (
        <div key={tech} className={classes['tech-stack__tech']}>
          {tech}
        </div>
      ))}
    </div>
  )
}
