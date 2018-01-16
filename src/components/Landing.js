import React, { Component } from 'react';
import './Landing.css';
import musicFile from '../assets/headOverHeels.mp3';
import 'font-awesome/css/font-awesome.min.css';
import Checkout from './Checkout';
import bicycle from '../assets/bicycle.JPG';
import flowerOfLife from '../assets/flowerOfLife.JPG';
import classroom from '../assets/classroom.JPG';
import stump from '../assets/stump.JPG';
import lightSpeed from '../assets/lightSpeed.JPG';
import intro from '../assets/intro.jpg';
import video from '../assets/video.mp4';

class Landing extends Component {
    constructor() {
        super();
        var songObj = {
            name: "Head Over Heels",
            src: '../assets/headOverHeels.mp3'
        };

        this.state = {
            donationAmount: '',
            audio: ["Ooh Baby Baby", "Let's Dance under the Moonlight", "Paparazzi"],
            playlist: [
                songObj = {
                    name: "Head Over Heels",
                    src: musicFile,
                    img: classroom
                }
            ]
        }

        this.handleAudio = this.handleAudio.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAudio() {
        return this.state.audio.map((e, i, arr) => {
            return <div key={i}>Song: {e}</div>
        })
    }

    handleChange(e) {
        this.setState({
            donationAmount: e.target.value
        })
    }

    render() {
        console.log(process.env.REACT_TEST)
        return (
            <div id="Landing">
                <header id="banner" className='grid'>
                    <img className="bg-image" src={flowerOfLife} alt='cover' />
                </header>
                <main>
                    <section id="section-bio" className="grid">
                    <h1>ClosII Music</h1>
                        <img className="bio-image" src={intro} alt="Carlos Perez" />
                        <h2>Bio</h2>
                        <p>Please give me money for new shoes. Lorem Ipsum etc erefdaofsdfosafmdof dos fadfaso
                            fdsjofs ioajfs ioanfmsio fmiasmfiasnmofo o ofdmsaoifms ofmajw9nfo dsalkm oim\avpmv
                             vsavcpaksuvj auvnizjnv knaij valuevvao vmosmo ij9uvawr9gnawo ndvskvcosnoino
                             fiajfdj9wjfoisa jfoiawgfihwoug owjfowiakfoj dwojadfwj90jvoi oadfmsoi afidjowfion .
                        </p>
                    </section>

                    <section id="section-music" className="grid">
                        <h2>Music</h2>

                        <h3>Free Download!</h3>
                        <audio src={musicFile} type="audio/mp3" controls />

                        <h3>Song, Artist, Info</h3>
                        <audio src={musicFile} type="audio/mp3" controls controlsList="nodownload" />


                        <h3>Song, Artist, Info</h3>
                        <audio src={musicFile} type="audio/mp3" controls controlsList="nodownload" />

                        <h3>Song, Artist, Info</h3>
                        <audio style={{ marginBottom: '20px' }} src={musicFile} type="audio/mp3" controls controlsList="nodownload" />
                    </section>
                    <section id="section-video" className='grid'>
                    <h2>Videos</h2>
                    <video width="80%" height="auto" controls controlsList="nodownload">
                        <source src={video} type='video/mp4'/>
                    </video>
                    </section>

                    <section id="section-contact" className="grid">
                        <h2>Reach Out and Connect</h2>
                        <p>closii@musicislife.com</p>
                        <a className="instagram" href="https://www.instagram.com/closprez/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i> Follow me on Instagram at closprez
                            </a>
                        <h3>Would you like to support? Make a donation!</h3>
                        <h4>Help fund the cost of hosting music, equipment, and live shows.</h4>

                        <input className="input-field" type="number" step="0.01" value={this.state.donationAmount}
                            onChange={(e) => this.handleChange(e)} placeholder="Enter dollar amount" />

                        <Checkout
                            name={'Donations Appreciated'}
                            description={'Support CLOSII Music!'}
                            amount={this.state.donationAmount}
                        />
                    </section>

                </main>

                <footer id="main-footer" className="grid">
                    <div>CLOSII Music, inc.</div>
                    <div>Project By
                        <a href="http://taylorsam209.wixsite.com/home" target="_blank" rel="noopener noreferrer"> Saylor Designs</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Landing;

