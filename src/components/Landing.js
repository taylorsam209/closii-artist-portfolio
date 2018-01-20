import React, { Component } from 'react';
import './Landing.css';
import 'font-awesome/css/font-awesome.min.css';
import Checkout from './Checkout';
import flowerOfLife from '../assets/flowerOfLife.JPG';
import bioPhoto from '../assets/intro.jpg';
import video from '../assets/video.mp4';
import Music from "./Music";
import profile from "../assets/profile.jpg";

class Landing extends Component {
    constructor() {
        super();

        this.state = {
            donationAmount: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            donationAmount: e.target.value
        })
    }

    render() {
        return (
            <div id="Landing">
                <header id="banner" className='grid'>
                    <img className="bg-image" src={flowerOfLife} alt='cover' />
                </header>
                <main>
                    <section id="section-bio" className="grid">
                        <h1>ClosII Music</h1>
                        <img className="bio-image" src={profile} alt="Carlos Perez" />
                        <h2>Bio</h2>
                        <p>Please give me money for new shoes. Lorem Ipsum etc erefdaofsdfosafmdof dos fadfaso
                            fdsjofs ioajfs ioanfmsio fmiasmfiasnmofo o ofdmsaoifms ofmajw9nfo dsalkm oim\avpmv
                            vsavcpaksuvj auvnizjnv knaij valuevvao vmosmo ij9uvawr9gnawo ndvskvcosnoino
                            fiajfdj9wjfoisa jfoiawgfihwoug owjfowiakfoj dwojadfwj90jvoi oadfmsoi afidjowfion.
                        </p>
                    </section>
                    <Music />
                    <section id="section-video" className='grid'>
                        <h2>Videos</h2>
                        <video width="80%" height="auto" controls controlsList="nodownload">
                            <source src={video} type='video/mp4' />
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

