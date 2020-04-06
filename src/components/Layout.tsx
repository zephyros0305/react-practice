import styled from 'styled-components'
import { FC, useState, useEffect } from 'react'
import { getCount } from '../lib/getCount'
import { CountContext } from '../lib/countContext'

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(150px, auto);
`

const Header = styled.div`
  grid-column: 1/6;
  grid-row: 1;
  background-color: red;
`
const SideNav = styled.div`
  display: flex;
  flex-flow: column;
  grid-column: 1;
  grid-row: 2/ 6;
  background-color: yellow;
`
const Footer = styled.div`
  grid-column: 1/6;
  grid-row: 6;
  background-color: green;
`

const Layout: FC = (props) => {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const fetchCount = async () => {
      const count = await getCount()

      setCount(count)
    }

    fetchCount()
  }, [])

  return (
    <LayoutContainer>
      <Header>Header</Header>
      <SideNav>
        <a href="index">Index</a>
        <a href="page2">Page2</a>
      </SideNav>
      <CountContext.Provider value={{ count: count, addCount: addCount }}>
        {props.children}
      </CountContext.Provider>
      <Footer>Footer</Footer>
    </LayoutContainer>
  )
}

export default Layout
