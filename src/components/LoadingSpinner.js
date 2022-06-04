import React from 'react'
import styled from 'styled-components'

const Centered = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
        width: 150px;

    }    
`
const LoadingSpinner = () => {
  return (
    <Centered>
      <img src='/images/loading.svg' alt='loading' />
      <p>Loading...</p>
    </Centered>
  )
}

export default LoadingSpinner