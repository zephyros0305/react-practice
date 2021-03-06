import Head from 'next/head'
import styled from 'styled-components'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Counter from '../components/Counter'

const PageContainer = styled.div`
  margin: 0;
  padding: 5 px;
`

const PageContent = styled.div`
  grid-column: 2/7;
  grid-row: 2/6;
  background-color: white;
  margin: 10px;
`

const Page: NextPage = () => (
  <PageContainer>
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <PageContent>
        <Counter />
      </PageContent>
    </Layout>
  </PageContainer>
)

export default Page
