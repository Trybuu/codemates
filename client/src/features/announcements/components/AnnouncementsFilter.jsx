import classes from './AnnouncementsFilter.module.scss'

export default function AnnouncementsFilter() {
  return (
    <div className={classes['filter']}>
      <div>
        <div>
          <h3>Select Tech</h3>
          <label htmlFor="">
            <input type="checkbox" value="javascript" />
            Javascript
          </label>
        </div>

        <div>
          <h3>Select level</h3>
          <label htmlFor="">
            <input type="checkbox" />
            Beginner
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Intermediate
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Advanced
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Master
          </label>
        </div>
      </div>
      <div>
        <h3>Sort by</h3>
        <select name="" id="">
          <option value="publishedAscending">Published Ascending</option>
          <option value="publishedDescending">Published Descending</option>
        </select>
      </div>
    </div>
  )
}
