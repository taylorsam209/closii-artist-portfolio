import React, { Component } from 'react';
import teachThis from "../assets/1teachThis.mp3";
import sacredGeometry from "../assets/2sacredGeometry.mp3";
import pachaMama from "../assets/3pachaMama.mp3";
import neverAgain from "../assets/4neverAgain.mp3";
import wakeUp from "../assets/5wakeUp.mp3";
import wakeUpRemix from "../assets/6wakeUp.mp3";
import classroom from '../assets/classroom.JPG';


class Music extends Component {
    constructor() {
        super()

        this.state = {
            playlist: [
                {
                    track: "1. Teach This",
                    src: teachThis,
                    artist: "Closii",
                    album: "Teach This EP",
                },
                {
                    track: "2. Sacred Geometry",
                    src: sacredGeometry,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "3. PachaMama",
                    src: pachaMama,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "4. Never Again",
                    src: neverAgain,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "5. Wake Up",
                    src: wakeUp,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "6. Wake Up (Don Draper REMIX)",
                    src: wakeUpRemix,
                    artist: "Closii",
                    album: "Teach This EP"
                }
            ]
        }

        this.handleAudio = this.handleAudio.bind(this);
    }

    handleAudio() {
        return this.state.playlist.map((e, i) => {
            return (<div className="track-list" key={i}> {e.track}
                <div>
                    <audio src={e.src} type="audio/mp3" controls controlsList="nodownload" />
                </div>
            </div>
            )
        })
    }

    render() {
        return (
            <div id="section-music" className="grid">
                <h2>Music</h2>
                <h3>-Album- Teach This EP</h3>
                <img className="album-cover" src={classroom} alt="teach this" />
                <div id="playlist-container" className="grid1">
                    {this.handleAudio()}
                </div>
            </div>
        )
    }

}

export default Music;