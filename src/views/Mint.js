import React from "react";
import { Link } from "react-router-dom";

class Mint extends React.Component {
    constructor() {
        super();
        this.state = {
            mint : 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.changeMintCount =  this.changeMintCount.bind(this)
    }

    changeMintCount(e) {
        this.setState({
            mint: parseInt(e.target.value)
        })
    }

    increase() {
        this.setState({
            mint: this.state.mint + 1
        })
    }

    decrease() {
        if(this.state.mint < 1) {
            this.setState({
                mint: 0
            })
        } else {
            this.setState({
                mint: this.state.mint - 1
            })
        }
    }

    render () {
        return (
            <span>
                <style dangerouslySetInnerHTML={{ __html: `
                    @import url(/css/normalize.css);
                    @import url(/css/webflow.css);
                    @import url(/css/equal-crypto-people.webflow.css);
                ` }} />
                <span className="af-view">
                    <div style = {{backgroundColor: '#000'}}>
                    <div data-w-id="fcfa5286-5b7c-c2c2-7daf-2da334289062" data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav">
                        <div className="af-class-navbar-container">
                        <Link to="/" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/ECP-Logo.png" loading="lazy" width={536} sizes="(max-width: 767px) 84vw, (max-width: 991px) 70vw, 39vw"  srcSet="images/ECP-Logo-p-500.png 500w, images/ECP-Logo-p-800.png 800w, images/ECP-Logo-p-1080.png 1080w, images/ECP-Logo-p-1600.png 1600w, images/ECP-Logo.png 2000w" className="af-class-logo-icon" /></Link>
                        {/* <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                            <Link to="/#About" className="af-class-nav-link w-nav-link">story</Link>
                            <Link to="/#Agenda" className="af-class-nav-link af-class-left-margin w-nav-link">Roadmap </Link>
                            <Link to="/#Speakers" className="af-class-nav-link af-class-left-margin w-nav-link">team</Link>
                            <Link to="/#Contact" className="af-class-nav-link af-class-left-margin w-nav-link">Contact</Link>
                            <div className="af-class-buttons-container">
                            <a href="#" className="af-class-primary-button w-button">Connect Wallet</a>
                            </div>
                        </nav> */}
                        <div className="af-class-menu-button w-nav-button">
                            <div className="af-class-burger-icon">
                            <div className="af-class-top-burger-line" />
                            <div className="af-class-middle-burger-line" />
                            <div className="af-class-bottom-burger-line" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="mint" style={{ height: '100%', minHeight: '100vh'}} className="af-class-section af-class-wf-section">
                        <div className="af-class-container">
                                <div className="w-col w-col-3"></div>
                                <div className="w-col w-col-6" style={{ color: 'white' }}>
                                    <div className="w-col w-col-12">
                                        <h1 style={{ textAlign: 'center' }}>
                                            234 / 1000
                                        </h1>
                                    </div>
                                    <div className="w-col w-col-3" style={{
                                        
                                        "@media only screen and (max-width: 991px)" : {
                                            width: "100%"
                                        }
                                    }}>
                                    <button 
                                        onClick={this.decrease} 
                                        style={{ width: '100%',
                                        padding: '9px 15px',
                                     }}
                                        className="af-class-primary-button af-class-_2 w-button">-</button>
                                    </div>
                                    <div className="w-col w-col-6" style={{
                                        
                                        "@media only screen and (max-width: 991px)" : {
                                            width: "100%"
                                        }
                                    }}>
                                        <input
                                            className="af-class-primary-button af-class-_2 w-button" 
                                            min={0}
                                            onChange={this.changeMintCount}
                                            value={this.state.mint}
                                            type="number"
                                            style={{ 
                                                backgroundColor: 'white',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                padding: '9px 15px',
                                                color: 'black',
                                                "&:hover" : {
                                                    backgroundColor: 'white',
                                                } 
                                            }} 
                                        />
                                    </div>
                                    <div className="w-col w-col-3" 
                                        style={{ 
                                            textAlign: 'center',
                                            '&' : {
                                                "@media only screen and (max-width: 991px)" : {
                                                    width: "100%"
                                                }
                                            } 
                                        }}>
                                        <button 
                                            onClick={this.increase} 
                                            style={{ width: '100%', padding: '9px 15px',
                                             }}
                                            className="af-class-primary-button af-class-_2 w-button">+</button>
                                    </div>
                                    
                                    <div className="w-col w-col-12">
                                        <a href="#" className="af-class-primary-button af-class-_2 w-button" style={{
                                            padding: '9px 15px'
                                        }}>Mint</a>
                                    </div>
                                </div>
                                <div className="w-col w-col-3"></div>
                                {/* <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce74" style={{opacity: 1}} className="af-class-small-container">
                                    <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce75" style={{opacity: 1}} className="af-class-small-text af-class-primary">
                                        Equal Crypto People (ECP)
                                    </div>
                                    <h2 data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce77" style={{opacity: 1}} className="af-class-h2 af-class-margin">WHO ARE THE&nbsp;ECP?</h2>
                                    <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce79" style={{opacity: 1}} className="af-class-text">
                                        Before going underground, there was a population of the world that survived solely by the curation of art and music – but then the war happened…<br /><br />Imagine a world where…regardless of race, creed, gender, or socioeconomic status – you were considered a lifeline to the very thing that would keep us alive… oxygen.<br /><br />In our world, oxygen is the curation of art and music – globally.<br /><br />The world you’re entering into is the Equal Crypto People – The ECP…<br /><br />The ECP went underground because there was a war against humanity – and the embrace of culture. It is your duty, as a member of the ECP, to share some of the best art and music that touches your soul – and that you feel others should breathe. <br /><br />Remember… our oxygen is art and music – we are depending on you. <br /><br />We must find all of the ECPs that went underground…Take a look at our roadmap to begin the journey back.
                                    </div>
                                    <div className="af-class-columns-2 w-row">
                                        <div className="w-col w-col-6">
                                            <Link to="/mint" className="af-class-primary-button af-class-_2 w-button">
                                            Mint your ECP&nbsp;Male
                                            </Link>
                                        </div>
                                        <div className="w-col w-col-6">
                                            <a href="#" className="af-class-primary-button af-class-_2 w-button">Mint your ECP&nbsp;FEMale</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce7e" style={{opacity: 1}} className="af-class-image-wrapper">
                                    <a href="#" className="af-class-video-wrapper w-inline-block w-lightbox">
                                        <div className="af-class-play-button"><img src="images/play_button_icon.svg" loading="lazy" className="af-class-play-icon af-class-large" /></div><img src="images/Screen-Shot-2021-12-18-at-3.11.54-PM.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 767px) 364.6875px, (max-width: 991px) 47vw, 45vw" srcSet="images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-500.png 500w, images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-800.png 800w, images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-1080.png 1080w, images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-1600.png 1600w, images/Screen-Shot-2021-12-18-at-3.11.54-PM.png 1754w"  className="af-class-image-section af-class-v1" />
                                    </a>
                                    <div className="af-class-square" />
                                </div> */}
                        </div>
                    </div>
                    </div>
                </span>
            </span>
        );
    }
}

export default Mint;