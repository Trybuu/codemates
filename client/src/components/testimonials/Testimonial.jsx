import { BiSolidQuoteSingleRight } from 'react-icons/bi'
import classes from './Testimonial.module.scss'

export default function Testimonial() {
  return (
    <section className={classes['testimonial']}>
      <div className={classes['testimonial__image-container']}></div>

      <div className={classes['testimonial__content']}>
        <div className={classes['testimonial__quote-icon']}>
          <BiSolidQuoteSingleRight />
          <BiSolidQuoteSingleRight />
        </div>
        <div className={classes['testimonial__quote']}>
          <p>
            {' '}
            I love codemates! I found someone with passion to programming and we
            made a huge project together!
          </p>

          <p className={classes['testimonial__author']}>Jenny Wilson</p>
        </div>
      </div>
    </section>
  )
}
