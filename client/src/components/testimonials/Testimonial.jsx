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
            {`"Codemates is not just a place where we code - it's a community that
            fuels our passion for programming. Thanks to Codemates, I can not
            only create amazing projects, but also meet inspiring individuals
            with whom I can learn and grow every day. It's more than just a
            platform - it's an opportunity for discovery, collaboration, and
            mutual motivation. Join Codemates and spread your wings in the world
            of programming!"`}
          </p>

          <p className={classes['testimonial__author']}>Elizabeth Taylor</p>
        </div>
      </div>
    </section>
  )
}
