import Head from 'next/head'
import styled from 'styled-components'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import { useContext } from 'react'
import { CountContext } from '../lib/countContext'
import CountViewer from '../components/CountViewer'

const PageContainer = styled.div`
  margin: 0;
  padding: 5 px;
`

const PageContent = styled.div`
  background-color: white;
  grid-column: 2/7;
  grid-row: 2/6;
  margin: 10px;
`

const Page: NextPage = () => {
  const { count } = useContext(CountContext)

  return (
    <PageContainer>
      <Head>
        <title>Page2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageContent>
          <div>{count}</div>
        </PageContent>
      </Layout>
    </PageContainer>
  )
}
export default Page
