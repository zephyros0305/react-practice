import styled from 'styled-components'
import { FC } from 'react'

const Header = styled.div`
  background-color: red;
`
const SideNav = styled.div`
  background-color: yellow;
`
const Footer = styled.div`
  background-color: green;
`

const Layout: FC = props => {
  return (
    <>
      <Header>Header</Header>
      <SideNav>SideNav</SideNav>
      {props.children}
      <Footer>Footer</Footer>
    </>
  )
}

export default Layout
