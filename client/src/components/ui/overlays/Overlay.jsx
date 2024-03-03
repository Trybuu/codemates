import LoadingCircles from '../loadings/LoadingCircles'
import classes from './Overlay.module.scss'

export default function Overlay() {
  return (
    <div className={classes['overlay']}>
      <LoadingCircles />
    </div>
  )
}
