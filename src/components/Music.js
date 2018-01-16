import React, { Component } from 'react';
import teachThis from "../assets/1teachThis.mp3";
import sacredGeometry from "../assets/2sacredGeometry.mp3";
import pachaMama from "../assets/3pachaMama.mp3";
import neverAgain from "../assets/4neverAgain.mp3";
import wakeUp from "../assets/5wakeUp.mp3";
import wakeUpRemix from "../assets/6wakeUp.mp3";

class Music extends Component {
    constructor() {
        super()

        this.state = {
            playlist: [
                {
                    track: "Teach This",
                    src: teachThis,
                    artist: "Closii",
                    album: "Teach This EP",
                },
                {
                    track: "Sacred Geometry",
                    src: sacredGeometry,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "Pacha Mama",
                    src: pachaMama,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "Never Again",
                    src: neverAgain,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "Wake Up",
                    src: wakeUp,
                    artist: "Closii",
                    album: "Teach This EP"
                },
                {
                    track: "Wake Up (Don Draper REMIX)",
                    src: wakeUpRemix,
                    artist: "Closii",
                    album: "Teach This EP"
                }
            ]
        }
    }

    render() {
        return (
            <div></div>
        )
    }

}

export default Music;