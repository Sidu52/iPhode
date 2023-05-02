import React, { Component } from 'react'
import './music.css'

export default class music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0
        };
    }

    // Update Time 
    componentDidMount() {
        // Add event listeners to audio element
        this.audio.addEventListener('timeupdate', this.updateTime);
        this.audio.addEventListener('durationchange', this.updateDuration);
    }

    componentWillUnmount() {
        // Remove event listeners from audio element
        this.audio.removeEventListener('timeupdate', this.updateTime);
        this.audio.removeEventListener('durationchange', this.updateDuration);
    }

    updateTime = () => {
        // Update the currentTime state property
        this.setState({
            currentTime: this.audio.currentTime
        });
    }

    updateDuration = () => {
        // Update the duration state property
        this.setState({
            duration: this.audio.duration
        });
    }

    handleTimeChange = (e) => {
        // Update the currentTime property of the audio element
        this.audio.currentTime = e.target.value;
    }

    render() {
        const { musicList, musicdata, playPause } = this.props;

        const { currentTime, duration } = this.state;
        const timeStart = new Date(currentTime * 1000).toISOString().substr(14, 5);
        const timeEnd = new Date(duration * 1000).toISOString().substr(14, 5);


        // Audio Play Pause Controll 

        // Audio Play Pause Control 
        if (this.audio) {
            if (playPause) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        }

        // Song Change
        // const nextTrack = () => {
        //     const nextId = this.state.id + 1;
        //     if (nextId < this.props.musicList.length) {
        //         this.setState({ id: nextId });
        //         this.audio.src = this.props.musicList[nextId].song;
        //         this.audio.play();
        //     } else {
        //         const firstId = 0;
        //         this.setState({ id: firstId });
        //         this.audio.src = this.props.musicList[firstId].song;
        //         this.audio.play();
        //     }
        // }

        //PrevSong
        // const prevTrack = () => {
        //     const prevId = this.state.id - 1;
        //     if (prevId >= 0) {
        //         this.setState({ id: prevId });
        //         this.audio.src = this.props.musicList[prevId].song;
        //         this.audio.play();
        //     }
        //     else {
        //         const lastId = this.props.musicList.length - 1;
        //         this.setState({ id: lastId });
        //         this.audio.src = this.props.musicList[lastId].song;
        //         this.audio.play();
        //     }
        // }

        return (
            <div className='display'>
                <div className="music-player">
                    <div className="music-bg">

                        {/* <img src={musicList[this.state.id].img} alt="img" /> */}
                        <img src={musicdata[0].img} alt="img" />
                        {/* <audio ref={audio => this.audio = audio} src={musicList[this.state.id].song} autoPlay /> */}
                        <audio ref={audio => this.audio = audio} src={musicdata[0].song} autoPlay />


                        <div className="music-heading">
                            <marquee width="100%" direction="left" height="20px">{musicdata[0].title}</marquee>
                        </div>
                    </div>
                    <div className="button-controls">
                        <button className="previous-track" ><i className="uil uil-previous"></i></button>
                        <button className="play-pause">
                            {this.audio && this.audio.paused ? (
                                <i className="uil uil-play"></i>
                            ) : (
                                <i className="uil uil-pause"></i>
                            )}
                        </button>
                        <button className="next-track"><i className="uil uil-step-forward"></i></button>
                    </div>
                    <div className="music-controls">
                        <div className="timeline">
                            <div className="time-start">{timeStart}</div>
                            <input type="range" className="time-control" min="0" max={duration} value={currentTime} onChange={this.handleTimeChange} />
                            <div className="time-end">{timeEnd}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
