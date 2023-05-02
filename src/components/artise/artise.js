import React, { Component } from 'react'
import styled from 'styled-components'
import Image from '../../assets/image/ME.jpg'

const Profile= styled.div`
text-align: center;
border: 2px solid black;
position: absolute;
top: 7vh;
width: 275px;
height: 228px;
background: linear-gradient(200deg, rgb(20 20 20), rgb(4 122 87));
  
`;
const Heading =styled.h1`
    color:white
`;
const Img =styled.img`
    color:white;
    width:100px;
    height:100px;
    border-radius:50%;
    border:3px solid green;
    padding:3px;
`;
const Youtube = styled.a`
    text-decoration:none;
    color:#fff;
    background-color:red;
    border-radius:5px;
    padding:5px;
    
   
`
export default class artise extends Component {
  render() {
    return (
      <Profile>
        <div>
            <Heading className="heading">iPhode</Heading>
            <Img src={Image} alt="Profile"/>
            <h3 style={{color:"#e0dbdb",textTransform:"capitalize"}}>Siddhant Shamra</h3>
            <p style={{color:"#d8c2c2",marginBottom:"10px"}}>MERN Developer & Content Creator</p>
            <Youtube href="https://www.youtube.com/channel/UCTSVXRcEA9idWJv_4RT8m9Q" target='blank'>YouTube</Youtube>
        </div>
      </Profile>
    )
  }
}
