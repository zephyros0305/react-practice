import Head from 'next/head'
import styled from 'styled-components'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import { useContext } from 'react'
import { CountContext } from '../lib/countContext'
import CountViewer from '../components/CountViewer'

const PageContainer = styled.div`
  background-color: purple;
  margin: 0;
  padding: 5 px;
`

const PageContent = styled.div`
  background-color: white;
  grid-column: 2/6;
  grid-row: 2/6;
`

const Page: NextPage = () => {
  const ctx = useContext(CountContext)

  return (
    <PageContainer>
      <Head>
        <title>Page2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageContent>
          <CountViewer />
        </PageContent>
      </Layout>
    </PageContainer>
  )
}
export default Page
