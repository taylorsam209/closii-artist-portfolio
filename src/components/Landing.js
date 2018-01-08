import React, { Component } from 'react';
import './Landing.css';


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            audio: []
        }
    }
    render() {
        return (
            <div id="Landing">
                <header id="banner" className='grid'>
                    <div className="bg-image">
                        Closii
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
                    <h3>Song, Artist, Info</h3>
                    

                    </section>

                </main>

                <footer>

                </footer>
            </div>
        );
    }
}

export default Landing;