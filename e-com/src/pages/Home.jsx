import React from 'react'
import styled from "styled-components"

const Wrapper = styled.section`
  background-color:${({theme})=>theme.colors.bg};
  width: 20rem;
  height: 20rem;

`

const Home = () => {
  return (
    <Wrapper>Home</Wrapper>
  )
}

export default Home