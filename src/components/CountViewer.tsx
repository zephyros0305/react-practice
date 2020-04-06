import styled from 'styled-components'
import { FC, useContext } from 'react'
import { CountContext } from '../lib/countContext'

const CountViewer: FC = (props) => {
  const ctx = useContext(CountContext)

  return <div>{ctx.count}</div>
}

export default CountViewer
