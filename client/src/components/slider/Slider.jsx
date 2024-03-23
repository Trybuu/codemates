import Testimonial from '../testimonials/Testimonial'
import classes from './Slider.module.scss'

export default function Slider() {
  return (
    <div className={classes['slider']}>
      <div className={classes['slider__content']}>
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  )
}
