import styled from 'styled-components'
import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCount } from '../lib/getCount'
import { CountContext } from '../lib/countContext'

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(150px, auto);
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
`
const Header = styled.div`
  grid-column: 1/7;
  grid-row: 1;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SideNav = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  grid-column: 1;
  grid-row: 2/ 6;
  background-color: rgba(170, 170, 170, 0.8);
`
const Footer = styled.div`
  grid-column: 1/7;
  grid-row: 6;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Layout: FC = (props) => {
  return (
    <LayoutContainer>
      <Header>Header</Header>
      <SideNav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/page2">
          <a>Page2</a>
        </Link>
      </SideNav>
      {props.children}
      <Footer>Footer</Footer>
    </LayoutContainer>
  )
}

export default Layout
