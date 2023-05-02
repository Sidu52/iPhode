import React, { Component } from 'react'
import Iphods from './iPhode/iphods'
import Screen from './screen/screen'
import Game from './game/game';
import Artise from './artise/artise';
import Setting from './setting/setting'
import Music from './musicPlayer/music';
import Allmusic from './musicPlayer/allMusic';
import ZingTouch from 'zingtouch';

import { music } from './musicData/musicData'

export default class homebody extends Component {

    constructor() {
        super();
        this.state = {

            activeItem: "Songs",
            activePage: "Home",
            playing:true,
            musicdata: [{
                id: 0,
                song: music[0].song,
                img: music[0].img,
                title: music[0].title
            }
            ],
            screendata: [
                { heading: "iPhods.js", data: ["Songs", "Games", "Setting", "Artise"] }
            ],
            musicList: music
        };
    }

    componentDidMount() {
        let element = document.querySelector(".nav-options");
        let activeRegion = new ZingTouch.Region(element);
        let change = 0;

        activeRegion.bind(element, 'rotate', function (event) {

            // ConrollWhell When Whell Rotate activeitem change
            var newAngle = event.detail.distanceFromLast;
            if (newAngle > 0) {
                change++;
                if (change === 15) {
                    change = 0;
                    if (this.state.activePage === "Home") {
                        if (this.state.activeItem === "Songs") {
                            this.setState({
                                activeItem: "Games"
                            })
                        } else if (this.state.activeItem === "Games") {
                            this.setState({
                                activeItem: "Setting"
                            })
                        } else if (this.state.activeItem === "Setting") {
                            if (this.state.screendata[0].heading === "My Music") {
                                return this.setState({
                                    activeItem: "All Song"
                                })
                            }
                            this.setState({
                                activeItem: "Artise"
                            })


                        } else {
                            this.setState({
                                activeItem: "Songs"
                            })
                        }
                    }

                    if (this.state.activePage === "Songs") {
                        if (this.state.activeItem === "All Song") {
                            this.setState({
                                activeItem: "Music"
                            })
                        } else if (this.state.activeItem === "Music") {
                            this.setState({
                                activeItem: "Artise"
                            })
                        } else {
                            this.setState({
                                activeItem: "All Song"
                            })
                        }
                    }

                }
            } else {
                change--;
                if (change === -15) {
                    change = 0;
                    if (this.state.activePage === "Home") {
                        if (this.state.activeItem === "Songs") {
                            if (this.state.screendata[0].heading === "My Music") {
                                return this.setState({
                                    activeItem: "Artists"
                                })
                            }
                            this.setState({
                                activeItem: "Artise"
                            })
                        } else if (this.state.activeItem === "Artise") {
                            this.setState({
                                activeItem: "Setting"
                            })
                        } else if (this.state.activeItem === "Setting") {
                            this.setState({
                                activeItem: "Games"
                            })
                        } else {
                            this.setState({
                                activeItem: "Songs"
                            })
                        }
                    }
                    if (this.state.activePage === "Songs") {
                        if (this.state.activeItem === "All Song") {
                            this.setState({
                                activeItem: "Artise"
                            })
                        } else if (this.state.activeItem === "Artise") {
                            this.setState({
                                activeItem: "Music"
                            })
                        } else {
                            this.setState({
                                activeItem: "All Song"
                            })
                        }
                    }

                }
            }
        }.bind(this), false);
    }
    // Change On Screen 

    selectItem = () => {
        const { activeItem } = this.state
        if (activeItem === "Songs") {
            this.setState({
                activeItem: "All Song",
                activePage: "Songs",
                screendata: [
                    { heading: "My Music", data: ["All Song", "Music", "Artise"] }
                ]
            });
        }
        else {
            this.setState({
                activePage: activeItem
            });
        }
    }

    // When User Click on Menu Button these function run and Move One Step Back
    backButton = () => {
        const { activePage } = this.state;
        if (activePage === "Songs" || activePage === "Games" || activePage === "Setting" || activePage === "Artise") {
            this.setState({
                activeItem: activePage,
                activePage: "Home",
                screendata: [
                    { heading: "iPhods.js", data: ["Songs", "Games", "Setting", "Artise"] }
                ]
            });
        } else if (activePage === "All Song" || activePage === "Music") {
            this.setState({
                activeItem: activePage,
                activePage: "Songs",
                screendata: [
                    { heading: "My Music", data: ["All Song", "Music", "Artise"] }
                ]
            });
        }
    }


    //Music Controller
    //PrevSong
    prevTrack = () => {
        const { musicdata } = this.state
        const prevId =musicdata[0].id -1;
        if (prevId >= 0) {
            this.setState({
                musicdata: [{
                    id: prevId,
                    song: music[prevId].song,
                    img: music[prevId].img,
                    title: music[prevId].title
                }],
            });
            
        }
        else {
            const lastId = music.length - 1;
            this.setState({
                musicdata: [{
                    id: lastId,
                    song: music[lastId].song,
                    img: music[lastId].img,
                    title: music[lastId].title
                }],
                
            });
        }
    }

    //PlayPause
    playPause=()=>{
        const {playing}=this.state
        this.setState({
          playing:!playing
        })
    }

    //Next Song
    nextTrack = () => {
        const { musicdata } = this.state
        const nextId =musicdata[0].id +1;
        if (nextId < music.length) {
            this.setState({
                musicdata: [{
                    id: nextId,
                    song: music[nextId].song,
                    img: music[nextId].img,
                    title: music[nextId].title
                }],
            });
            
        }
        else {
            const firstId = 0;
            this.setState({
                musicdata: [{
                    id: firstId,
                    song: music[firstId].song,
                    img: music[firstId].img,
                    title: music[firstId].title
                }],
                
            });
        }
    }



    render() {
        const { activeItem, screendata, activePage, musicList, musicdata, playing} = this.state;
        let componentToRender;

        switch (activePage) {
            case "Games":
                componentToRender = <Game />;
                break;
            case "Setting":
                componentToRender = <Setting />;
                break;
            case "Artise":
                componentToRender = <Artise />;
                break;
            case "Music":
                componentToRender = <Music musicList={musicList} musicdata={musicdata} playPause={playing} />;
                break;
            case "All Song":
                componentToRender = <Allmusic musicList={musicList} />;
                break;
            default:
                componentToRender = <Screen activeItem={activeItem} screendata={screendata} />;
                break;
        }

        return (
            <div className='main'>
                {componentToRender}
                <Iphods 
                selectItem={this.selectItem}
                backButton={this.backButton} 
                prevTrack={this.prevTrack}
                nextTrack={this.nextTrack}
                playPause={this.playPause}
                />
            </div>
        )
    }
}
