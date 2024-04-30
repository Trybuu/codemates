import classes from './AnnouncementsFilter.module.scss'

export default function AnnouncementsFilter({ handleSortByMethod }) {
  function onHandleSortByMethod(e) {
    console.log(e.target.value)
    handleSortByMethod(e.target.value)
  }

  return (
    <div className={classes['filter']}>
      {/* <div>
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
      </div> */}
      <div>
        <h3>Sort by</h3>
        <select
          name=""
          id=""
          onChange={(e) => onHandleSortByMethod(e)}
          className={classes['filter__select']}
        >
          <option value="publishedDesc">From the newest</option>
          <option value="publishedAsc">From the oldest</option>
          <option value="difficultyAsc">From the easiest</option>
          <option value="difficultyDesc">From the hardest</option>
        </select>
      </div>
    </div>
  )
}
