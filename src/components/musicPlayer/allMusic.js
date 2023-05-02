import React, { Component } from 'react'
import styled from 'styled-components';
import './music.css'
const Display = styled.div`
    border: 2px solid black;
    position: absolute;
    top: 7vh;
    width: 275px;
    height: 228px;
    z-index: 5;
    background-color: white;
    overflow-y: scroll;
}
`;
const ImgDiv =styled.div`
    display:flex;
    padding: 15px;
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    padding: 6px 15px;
    border-radius: 50%;
`
export default class allMusic extends Component {
    render() {
        const { musicList,activeItem } = this.props;
        return (
            <Display className='display'>
                <ul>
                    {musicList.map((data) => {
                        return (  
                            <li >
                                <ImgDiv className="allsong-img">
                                    <Img src={data.img} alt="music img" />
                                    <p className={activeItem===data.id?"actives":""}>{data.title}</p>
                                </ImgDiv>
                            </li>
                        )
                    })}
                </ul>
            </Display>
        )
    }
}


// const styles = {
//   active: {
//     color: "#fff",
//     background: "red",
//   }
// }