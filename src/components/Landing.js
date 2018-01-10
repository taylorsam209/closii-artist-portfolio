import React, { Component } from 'react';
import './Landing.css';
import music from '../assets/headOverHeels.mp3';
import 'font-awesome/css/font-awesome.min.css';


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            audio: ["Ooh Baby Baby", "Let's Dance under the Moonlight", "Paparazzi"]
        }

        this.handleAudio = this.handleAudio.bind(this);
    }

    handleAudio() {
        return this.state.audio.map((e, i, arr) => {
            return <div key={i}>Song: {e}</div>
        })

    }
    render() {
        return (
            <div id="Landing">
                <header id="banner" className='grid'>
                    <div className="bg-image">
                        <h1>Closii</h1>
                        <h2>Artist of the Mind</h2>
                    </div>
                </header>
                <main>
                    <section id="section-bio" className="grid">
                        <img src="https://www.idjnow.com/wordpress/wp-content/uploads/2017/04/placeholder.png" alt="Photo of Carlos Perez" />
                        <h2>Bio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.</p>
                    </section>
                    <section id="section-music" className="grid">
                        <h2>Music</h2>

                        {this.handleAudio()}

                        <h3>Song, Artist, Info...Free Download! Click on the download icon on the control bar.</h3>
                        <audio src={music} type="audio/mp3" controls />

                        <h3>Song, Artist, Info</h3>
                        <audio src={music} type="audio/mp3" controls controlsList="nodownload" />


                        <h3>Song, Artist, Info</h3>
                        <audio src={music} type="audio/mp3" controls controlsList="nodownload" />

                        <h3>Song, Artist, Info</h3>
                        <audio style={{ marginBottom: '20px' }} src={music} type="audio/mp3" controls controlsList="nodownload" />
                    </section>
                    <section id="section-contact" className="grid">
                        <h2>Reach Out and Connect</h2>
                        <p>closii@musicislife.com</p>
                        <a className="instagram" href="https://www.instagram.com/closprez/" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i> closprez
                            </a>
                        <h3>Would you like to support?</h3>
                        <div className="donate-btn"><a href="#" >Donate!</a></div>
                    </section>

                </main>

                <footer id="main-footer" class="grid">
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