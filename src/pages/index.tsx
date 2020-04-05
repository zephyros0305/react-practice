import Head from 'next/head'
import styled from 'styled-components'
import { NextPage } from 'next'
import Layout from '../components/Layout'

const PageContainer = styled.div`
  background-color: purple;
  margin: 0;
  padding: 5 px;
`

const PageContent = styled.div`
  background-color: blue;
`

const Page: NextPage = () => (
  <PageContainer>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <PageContent>Index</PageContent>
    </Layout>
  </PageContainer>
)

export default Page
