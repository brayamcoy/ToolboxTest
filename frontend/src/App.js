import { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/stores/app/actions'

// Components
import { TableHeader } from './components/table/header'
import { TableBody } from './components/table/body'
import { SearchForm } from './components/searchform'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import { HashLoader } from 'react-spinners'

// Assets
import {
  boxTableStyles,
  containerStyles,
  WrapperStyles
} from './App.styles'
import { NavBar } from './components/navbar'

const App = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const { data } = useSelector((state) => state.App)

  const headerTableOptions = ['FileName', 'Text', 'Number', 'Hex']

  useEffect(() => {
    dispatch(
      getData('', type => {
        if (type === 'success') {
          setLoading(false)
        }
      })
    )
  }, [dispatch])

  const handleInput = value => setSearchValue(value)

  const handleSubmit = key => {
    if (key.toLowerCase() === 'enter' || key.toLowerCase() === 'click') {
      setLoading(true)
      dispatch(
        getData(searchValue, type => {
          if (type === 'success') {
            setLoading(false)
          }
        })
      )
      setSearchValue('')
    }
  }

  return (
    <Container style={WrapperStyles}>
      <NavBar />
      <Container style={containerStyles}>
        {loading
          ? (
            <HashLoader size={40} color='#FF2617' style={{ display: 'block' }} />
            )
          : (
            <Row style={boxTableStyles}>
              <SearchForm handleInput={handleInput} handleSubmit={handleSubmit} />
              {!data.length
                ? (
                  <span>Not results.</span>
                  )
                : (
                  <Table striped bordered width='100%'>
                    <TableHeader options={headerTableOptions} />
                    <TableBody data={data} />
                  </Table>
                  )}
            </Row>
            )}
      </Container>
    </Container>
  )
}

export default App
