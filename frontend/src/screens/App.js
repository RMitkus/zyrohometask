import { useEffect, useState } from 'react'
import './App.css'
import Paginate from '../components/Paginate'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getAllData } from '../actions/dataActions'
import TableData from '../components/TableData'
import Loader from '../components/Loader'
import { GET_ALL_DATA_RESET } from '../constants/constants'
import InfiniteScroll from 'react-infinite-scroll-component'

function App({ match, history }) {
  const [active, setActive] = useState(null)
  const [sortConfig, setSortConfig] = useState(null)
  const [showFullTable, setShowFullTable] = useState(false)
  const [markedData, setMarkedData] = useState({})
  const [allDataPage, setAllDataPage] = useState(1)
  const [scrollData, setScrollData] = useState([])
  const dispatch = useDispatch()

  // Getting and setting current page
  const pageNumber = match.params.pageNumber || 1

  // Accessing store
  // Paginated data
  const data = useSelector((state) => state.getData)
  const { loading, infoData, pages } = data

  // All data
  const allData = useSelector((state) => state.getAllData)
  const { allInfoData, loading: loadingAllInfoData } = allData

  useEffect(() => {
    allInfoData && setScrollData([...scrollData, ...allInfoData])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allInfoData])

  // Dispatching getData to fetch data
  useEffect(() => {
    dispatch(getData(pageNumber))
  }, [pageNumber, dispatch])

  // Sorting methods below
  let sortedData = showFullTable ? [...scrollData] : infoData && [...infoData]
  if (sortConfig !== null) {
    sortedData &&
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
  }
  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  // Handler to get all data from db
  const getAllHandler = (e) => {
    e.preventDefault()

    if (showFullTable) {
      dispatch({ type: GET_ALL_DATA_RESET })
      setScrollData([])
    } else {
      dispatch(getAllData(allDataPage))
    }
    setShowFullTable(!showFullTable)
  }

  // handler to mark and show certain row
  const rowClickHandler = (e) => {
    setActive(e._id)
    setMarkedData(e)
  }
  // Scroll loop handler
  const fetchData = () => {
    dispatch(getAllData(allDataPage + 1))
    setAllDataPage(allDataPage + 1)
  }

  return (
    <div className='App'>
      <button
        className={'showAllBtn'}
        type='submit'
        onClick={(e) => getAllHandler(e)}
      >
        {!showFullTable
          ? 'Rodyti sąrašą viename puslapyje'
          : 'Rodyti sąrašą puslapiais'}
      </button>
      {markedData._id && (
        <div className={'markedData'}>
          <h3>Pažymėta eilutė</h3>|<p>{markedData.city}</p>|
          <p>{markedData.street}</p>|<p>{markedData.animal}</p>|
          <p>{markedData.count}</p>|
          <button type='button' onClick={() => setMarkedData({})}>
            x
          </button>
        </div>
      )}
      <InfiniteScroll
        dataLength={(sortedData && sortedData.length) || 1}
        next={showFullTable && fetchData}
        hasMore={true}
        loader={showFullTable && <h4>Loading...</h4>}
      >
        <table>
          <thead>
            <tr>
              <th onClick={() => requestSort('city')}>Miestas</th>
              <th onClick={() => requestSort('street')}>Gatvė</th>
              <th onClick={() => requestSort('animal')}>Gyvūnas</th>
              <th onClick={() => requestSort('count')}>Skaičius</th>
            </tr>
          </thead>
          <tbody>
            <TableData
              sortedData={sortedData}
              rowClickHandler={rowClickHandler}
              active={active}
            />
          </tbody>
        </table>
      </InfiniteScroll>
      {loadingAllInfoData || (loading && <Loader />)}
      {!showFullTable && <Paginate pages={pages} page={pageNumber} />}
    </div>
  )
}

export default App
