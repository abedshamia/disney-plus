/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import styled from 'styled-components'
import {  selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import {auth, provider} from '../firebase'
import { useNavigate } from 'react-router-dom'
const Nav = styled.nav `
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;

`

const Logo = styled.img `
    width: 80px;
`

const NavMenu = styled.div `
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: '';
            height: 2px;
            width: 0;
            background: #fff;
            position: absolute;
            bottom: -6px;
            left: 0;
            transition: all 0.3s ease-in-out;
            opacity: 0;
        }

        &:hover:after {
            width: 100%;
            opacity: 1;
        }
    }
}
`

const UserImg = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.button `

    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div `
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
   
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user
            const userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            dispatch(setUserLogin(userData))
            navigate('/')
        })
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(setSignOut())
            navigate('/')
        })
    }


    // Fix the user state on refresh, if user is logged in
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
           if(user) {
                const userData = {
                     name: user.displayName,
                     email: user.email,
                     photo: user.photoURL
                }
                dispatch(setUserLogin(userData))
           }
        })
    }, [])
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        {
            !userName ? (
            <LoginContainer>
                <Login
                onClick={signIn}
                >Login</Login>
            </LoginContainer>
            ) :
            <>
            <NavMenu>
            <a>
                <img src='/images/home-icon.svg' alt='home-link' />
                <span>HOME</span>
            </a>
            <a>
                <img src='/images/search-icon.svg' alt='search-link' />
                <span>SEARCH</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg' alt='watchlist-link' />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src='/images/original-icon.svg' alt='original-link' />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg' alt='movie-link' />
                <span>MOVIES</span>
            </a>
            <a>
                <img src='/images/series-icon.svg' alt='series-link' />
                <span>SERIES</span>
            </a>
             </NavMenu>

             <UserImg src={userPhoto} onClick={signOut} />
            </>
        }

    </Nav>
  )
}

export default Header

