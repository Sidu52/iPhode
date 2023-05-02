import React, { Component } from 'react'
import styled from 'styled-components'
const Screen = styled.div`
    border: 2px solid black;
    position: absolute;
    top: 7vh;
    width: 275px;
    height: 228px;
    text-align:center;
    background-color:#fff;
    z-index: 8;
`;
const Img = styled.img`
width: 110px;
padding: 30px;
`
export default class game extends Component {
  render() {
    return (
        <>
        <Screen>
          <h1>Setting</h1>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpXoIl7yd2gAmIowIFVV4r1ufs9McwJWPfvk2yT61wnXMRZi39Slky5hc_4eOxzjqvQY" alt="" />
        </Screen>
        </>
      
    )
  }
}