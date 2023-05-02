import React, { Component } from 'react'
import './iphods.css'
export default class iphods extends Component {
    
    render() {
        const {selectItem,backButton, prevTrack, nextTrack,playPause,iconcha}=this.props;
        
        return (
           
                <div className="circlebox">
                    <div className="circle nav-options">
                        <p id='my-div' className='menubutton' onClick={backButton}>Menu</p>
                        <p className='forwardbutton'onClick={nextTrack}><i className="uil uil-forward"></i></p>
                        <p className='backwardbutton'onClick={prevTrack}><i className="uil uil-backward"></i></p>
                        <p className='playpausebutton1'onClick={playPause}>
                            {!iconcha? (
                                <i className="uil uil-play"></i>
                            ) : (
                                <i className="uil uil-pause"></i>
                            )}</p>
                        <div className="menucircle" onClick={selectItem}>
                        </div>
                    </div>
                </div>
        )
    }
}
