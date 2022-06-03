import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 25px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb (0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
    box-shadow: rgb (0 0 0 / 80%) 0 40px 58px -16px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    `
const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' alt='viewers-1' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' alt='viewers-2' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' alt='viewers-3' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' alt='viewers-4' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' alt='viewers-5' />
        </Wrap>
    </Container>
  )
}

export default Viewers