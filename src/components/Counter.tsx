import styled from 'styled-components'
import { FC, useState, useEffect, useContext } from 'react'
import { getCount } from '../lib/getCount'
import CountViewer from './CountViewer'
import { CountContext } from '../lib/countContext'

const PlusButton = styled.button``

const ToggleButton = styled.button``
const Counter: FC = (props) => {
  const ctx = useContext(CountContext)

  const [disabled, setDisabled] = useState(false)
  const handleDisabledChange = () => {
    setDisabled(!disabled)
  }

  return (
    <>
      <PlusButton onClick={ctx.addCount} disabled={disabled}>
        Plus
      </PlusButton>
      <CountViewer />
      <ToggleButton onClick={handleDisabledChange}>Toggle</ToggleButton>
    </>
  )
}

export default Counter
