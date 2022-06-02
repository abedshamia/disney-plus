/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
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
`
const Header = () => {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
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

             <UserImg src='https://avatars.githubusercontent.com/u/73759748?v=4' />
    </Nav>
  )
}

export default Header

