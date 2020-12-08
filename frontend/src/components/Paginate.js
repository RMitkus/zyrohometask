import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'
import { Link } from 'react-router-dom'
const Paginate = ({ pages, page }) => {
  let paginateArray = []

  for (let i = 1; i < pages; i++) {
    paginateArray[i] = i
  }

  return (
    <div>
      <Pagination
        page={Number(page)}
        count={paginateArray.length}
        renderItem={(item) => (
          <PaginationItem component={Link} to={`/${item.page}`} {...item} />
        )}
        defaultPage={1}
        siblingCount={1}
        boundaryCount={1}
      />
    </div>
  )
}

export default Paginate
