import { AppProps } from 'next/app'
import { CountContext } from '../lib/countContext'
import { useState, useEffect } from 'react'
import { getCount } from '../lib/getCount'

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }

  //   useEffect(() => {
  //     const fetchCount = async () => {
  //       const count = await getCount()

  //       setCount(count)
  //     }

  //     fetchCount()
  //   }, [])

  return (
    <CountContext.Provider value={{ count: count, addCount: addCount }}>
      <Component {...pageProps} />
    </CountContext.Provider>
  )
}

export default MyApp
