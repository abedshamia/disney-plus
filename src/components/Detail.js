import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import db from '../firebase'
const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div `
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div `
    display: flex;
    align-items: center;
`

const PlayButton = styled.div `
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    color: #000;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton) `
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button `
    width: 44px;
    height: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.6);
    border: 2px solid #fff;
    cursor: pointer;
    margin-right: 16px;
    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
 background-color: rgb(0, 0, 0);
`

const Subtitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`
const Description = styled.div `

    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;

`
const Detail = () => {

    const { id } = useParams();

    const [movie, setMovie] = React.useState(null);

    useEffect(() => {

        db.collection('movies').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setMovie(doc.data())
            } else {
                console.log('No such document!');
            }
        })
    }, [id])
    
  return (
    <Container>
        {movie && (
            <>
        <Background>
            <img src={movie.backgroundImg} alt='detail-background' />
        </Background>
        <ImageTitle>
            <img src={movie.titleImg} alt='detail-title' />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' alt='play-button' />
                <span>Play</span>
            </PlayButton>
            <TrailerButton>
            <img src='/images/play-icon-white.png' alt='trailer-button' />
                <span>Trailer</span>       
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png' alt='group-watch-button' />
            </GroupWatchButton>
        </Controls>
        <Subtitle>
            {movie.subTitle}
        </Subtitle>
        <Description>
           {movie.description} 
        </Description>
            </>
        )}
    </Container>
  )
}

export default Detail