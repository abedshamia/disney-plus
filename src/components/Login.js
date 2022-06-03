import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        z-index: -1;
        opacity: 0.7;
        

    }
`

const CTA = styled.div `
        max-width: 650px;
        padding: 80px 40px;
        width: 90%;
        display: flex;
        flex-direction: column;
        text-align:center;
        align-items: center;
        margin-top: 40px;
`

const CTALogoOne = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`

const CTALogoTwo = styled(CTALogoOne) `
 width: 90%;
`
const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Access to Raya and the Last Dragon to watch on your TV. with a Disney+ subscription.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login