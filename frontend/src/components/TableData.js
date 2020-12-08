import React from 'react'

const TableData = ({ sortedData, rowClickHandler, active }) => {
  return (
    <>
      {sortedData &&
        sortedData.map((e, index) => (
          <tr
            key={e._id}
            className={active === e._id ? 'active' : null}
            onClick={() => rowClickHandler(e)}
          >
            <td>{e.city}</td>
            <td>{e.street}</td>
            <td>{e.animal}</td>
            <td>{e.count}</td>
          </tr>
        ))}
    </>
  )
}

export default TableData
