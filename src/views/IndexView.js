/* eslint-disable */

import React from 'react'
import { Link } from "react-router-dom";
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61b91d17e8f31b1dd3ed4f0a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61b91d17e8f31b1e3eed4f0e'
    htmlEl.dataset['wfSite'] = '61b91d17e8f31b1dd3ed4f0a'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

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
                <a href="index.html" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/ECP-Logo.png" loading="lazy" width={536} sizes="(max-width: 767px) 84vw, (max-width: 991px) 70vw, 39vw"  srcSet="images/ECP-Logo-p-500.png 500w, images/ECP-Logo-p-800.png 800w, images/ECP-Logo-p-1080.png 1080w, images/ECP-Logo-p-1600.png 1600w, images/ECP-Logo.png 2000w" className="af-class-logo-icon" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="#About" className="af-class-nav-link w-nav-link">story</a>
                  <a href="#Agenda" className="af-class-nav-link af-class-left-margin w-nav-link">Roadmap </a>
                  <a href="#Speakers" className="af-class-nav-link af-class-left-margin w-nav-link">team</a>
                  <a href="#Contact" className="af-class-nav-link af-class-left-margin w-nav-link">Contact</a>
                  <div className="af-class-buttons-container"
                      style={{
                        whiteSpace : 'nowrap'
                      }}>
                    <a href="#" 
                      className="af-class-primary-button w-button">Connect Wallet</a>
                  </div>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="af-class-burger-icon">
                    <div className="af-class-top-burger-line" />
                    <div className="af-class-middle-burger-line" />
                    <div className="af-class-bottom-burger-line" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-hero af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-center-container">
                  <h1 data-w-id="f16083d7-8362-90e8-c637-b4b8e290894c" style={{opacity: 1}} className="af-class-h1 af-class-bottom-margin">WELCOME TO<br />EQUAL CRYPTO PEOPLE<br /></h1>
                  <div data-w-id="a8fdeaa4-85b8-2c7a-f132-70416e65eb55" style={{opacity: 1}} className="af-class-small-text af-class-white">The war against sharing culture, art, and music ends here. </div>
                  <div data-w-id="be82ec17-97f6-5e3a-781f-442e406d11fd" style={{opacity: 1}} className="af-class-small-text af-class-white">10,000 Equal Crypto People will mint in January 2022. <br /></div><img src="images/arrow.svg" loading="lazy" style={{opacity: 1}} data-w-id="ad62e81f-8e3f-e022-2e4c-d2516283b71e"  className="af-class-image" />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-wf-section">
              <div className="af-class-container">
                <div data-w-id="1be5832c-61ad-0e81-33be-a713efe6cb68" style={{opacity: 1}} className="af-class-main-grid">
                  <div id="w-node-_57a007fa-019b-1d82-0c7b-ac1cee56b797-3eed4f0e" className="af-class-small-container">
                    <h1 className="af-class-h1">10K</h1>
                    <div className="af-class-text">Drop Count</div>
                  </div>
                  <div id="w-node-b7e2d586-4fa0-9a00-1c9f-3dcbe77ba90c-3eed4f0e" className="af-class-small-container">
                    <h1 className="af-class-h1">1 of 1 </h1>
                    <div className="af-class-text">Ultra-rare | 200+ Traits</div>
                  </div>
                  <div id="w-node-_8c7fc336-19ae-d9e6-16a1-a4cb5a283079-3eed4f0e" className="af-class-small-container">
                    <h1 className="af-class-h1">Merch</h1>
                    <div className="af-class-text">Exclusive merchandise</div>
                  </div>
                  <div id="w-node-a1524ee4-9327-3473-5edf-d1738736a5eb-3eed4f0e" className="af-class-small-container">
                    <h1 className="af-class-h1">0.0314</h1>
                    <div className="af-class-text">ETH | Floor Price</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="About" className="af-class-section af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-two-col-grid">
                  <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce74" style={{opacity: 1}} className="af-class-small-container">
                    <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce75" style={{opacity: 1}} className="af-class-small-text af-class-primary">Equal Crypto People (ECP)</div>
                    <h2 data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce77" style={{opacity: 1}} className="af-class-h2 af-class-margin">WHO ARE THE&nbsp;ECP?</h2>
                    <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce79" style={{opacity: 1}} className="af-class-text">Before going underground, there was a population of the world that survived solely by the curation of art and music – but then the war happened…<br /><br />Imagine a world where…regardless of race, creed, gender, or socioeconomic status – you were considered a lifeline to the very thing that would keep us alive… oxygen.<br /><br />In our world, oxygen is the curation of art and music – globally.<br /><br />The world you’re entering into is the Equal Crypto People – The ECP…<br /><br />The ECP went underground because there was a war against humanity – and the embrace of culture. It is your duty, as a member of the ECP, to share some of the best art and music that touches your soul – and that you feel others should breathe. <br /><br />Remember… our oxygen is art and music – we are depending on you. <br /><br />We must find all of the ECPs that went underground…Take a look at our roadmap to begin the journey back.</div>
                    <div className="af-class-columns-2 w-row">
                      <div className="w-col w-col-6"
                        style={{
                          whiteSpace : 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}>
                        <Link to="/mint" className="af-class-primary-button af-class-_2 w-button" 
                         style={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'

                         }}
                        >
                        Mint your ECP&nbsp;Male
                        </Link>
                      </div>
                      <div className="w-col w-col-6"
                        style={{
                          whiteSpace : 'nowrap',
                        }}>
                        <Link to="/mint" className="af-class-primary-button af-class-_2 w-button"
                        
                        style={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'

                         }}>Mint your ECP&nbsp;FEMale</Link>
                      </div>
                    </div>
                  </div>
                  <div data-w-id="2a4e826d-972b-9756-0c5c-ea029763ce7e" style={{opacity: 1}} className="af-class-image-wrapper">
                    <a href="#" className="af-class-video-wrapper w-inline-block w-lightbox">
                      <div className="af-class-play-button"><img src="images/play_button_icon.svg" loading="lazy" className="af-class-play-icon af-class-large" /></div><img src="images/Screen-Shot-2021-12-18-at-3.11.54-PM.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 767px) 364.6875px, (max-width: 991px) 47vw, 45vw" srcSet="images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-500.png 500w, images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-800.png 800w, images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-1080.png 1080w, images/Screen-Shot-2021-12-18-at-3.11.54-PM-p-1600.png 1600w, images/Screen-Shot-2021-12-18-at-3.11.54-PM.png 1754w"  className="af-class-image-section af-class-v1" />
                    </a>
                    <div className="af-class-square" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-_2 af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-two-col-grid">
                  <div className="af-class-small-container">
                    <div data-w-id="1933ef09-3461-666a-4b4f-65c0da79e404" style={{opacity: 1}} className="af-class-small-text af-class-primary">Join Us | Sharing of Culture is Our Oxygen. </div>
                    <h2 data-w-id="1933ef09-3461-666a-4b4f-65c0da79e406" style={{opacity: 1}} className="af-class-h2 af-class-margin">ECP | RARITY</h2>
                    <div data-w-id="1933ef09-3461-666a-4b4f-65c0da79e40a" style={{opacity: 1}} className="af-class-text">ECPs are unique and programmatically generated. They represent freedom of expression and boast unique swag. From the trendsetters, loners, jokesters, jocks to the socially awkward, the ECP is a collective of us all.</div>
                    <a href="#" className="af-class-primary-button af-class-_3 w-button">Join our discord</a>
                  </div>
                  <div className="af-class-two-col-grid af-class-small-gap">
                    <div className="af-class-host-image"><img className="af-class-image-section" src="images/Sample_NFT.png" alt="ECP Woman loves afrobeats" style={{opacity: 1}} sizes="(max-width: 479px) 84vw, (max-width: 767px) 41vw, (max-width: 991px) 30vw, 21vw" data-w-id="9a6fca1b-f1aa-0e41-8e0a-f783b8608c9f" loading="lazy" srcSet="images/Sample_NFT-p-500.png 500w, images/Sample_NFT-p-800.png 800w, images/Sample_NFT.png 1000w" />
                      <div className="af-class-host-square" />
                    </div>
                    <div className="af-class-host-image"><img className="af-class-image-section" src="images/Blue-background.png" alt="ECP Man loves graffiti art " style={{opacity: 1}} sizes="(max-width: 479px) 84vw, (max-width: 767px) 41vw, (max-width: 991px) 30vw, 21vw" data-w-id="4533fe7f-cffe-ec4b-38a8-eae6a7f81ca1" loading="lazy" srcSet="images/Blue-background-p-500.png 500w, images/Blue-background-p-800.png 800w, images/Blue-background.png 1000w" />
                      <div className="af-class-host-square" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Speakers" className="af-class-section af-class-white af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-center-container">
                  <h2 data-w-id="c7399da4-4767-7835-dc3a-0b382c8a1a4f" style={{opacity: 1}} className="af-class-h2 af-class-dark">EQUAL CRYPTO PEOPLE&nbsp;TEAM</h2>
                </div>
                <div className="w-col w-col-12">
                  <div className="w-col w-col-3 af-class-small-container" style={{opacity: 1}}>
                    <div className="af-class-avatar-wrapper"><img src="images/Male-Sample-2.png" loading="lazy" srcSet="images/Male-Sample-2-p-500.png 500w, images/Male-Sample-2-p-800.png 800w, images/Male-Sample-2.png 1000w" sizes="(max-width: 479px) 89vw, (max-width: 991px) 20vw, 61.712501525878906px" alt="Co-Creator of Equal Crypto People" className="af-class-image-section" /></div>
                    <h3 className="af-class-h4 af-class-dark">Oscar</h3>
                    <div className="af-class-text af-class-dark">Co-Creator<br />‍</div>
                  </div>
                  <div className="w-col w-col-3 af-class-small-container" style={{opacity: 1, paddingLeft: '20px' }}>
                    <div className="af-class-avatar-wrapper"><img src="images/Kiya-ECP-NFT.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 20vw, 53.97500228881836px" srcSet="images/Kiya-ECP-NFT-p-500.png 500w, images/Kiya-ECP-NFT-p-800.png 800w, images/Kiya-ECP-NFT.png 1000w" className="af-class-image-section" /></div>
                    <h3 className="af-class-h4 af-class-dark">Kiya</h3>
                    <div className="af-class-text af-class-dark">Co-Creator<br />‍</div>
                  </div>
                  <div className="w-col w-col-3 af-class-small-container" style={{opacity: 1, paddingLeft: '20px'}}>
                    <div className="af-class-avatar-wrapper"><img src="images/Melissa-ECP-NFT.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 20vw, 83.76250457763672px" srcSet="images/Melissa-ECP-NFT-p-500.png 500w, images/Melissa-ECP-NFT-p-800.png 800w, images/Melissa-ECP-NFT.png 1000w" alt="Lead Developer of Equal Crypto People" className="af-class-image-section" /></div>
                    <h3 className="af-class-h4 af-class-dark">Melissa</h3>
                    <div className="af-class-text af-class-dark">Lead Developer<br />‍</div>
                  </div>
                  <div className="w-col w-col-3 af-class-small-container" style={{opacity: 1, paddingLeft: '20px'}}>
                    <div className="af-class-avatar-wrapper"><img src="images/Male-Sample-1.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 20vw, 89.9749984741211px" srcSet="images/Male-Sample-1-p-500.png 500w, images/Male-Sample-1-p-800.png 800w, images/Male-Sample-1.png 1000w" alt="Lead Developer of Equal Crypto People" className="af-class-image-section" /></div>
                    <h3 className="af-class-h4 af-class-dark">Thomas</h3>
                    <div className="af-class-text af-class-dark">Engagement &amp; Marketing </div>
                  </div>
                </div>
                <div className="af-class-text-block">Every member of the ECP team is an art, music, and culture-sharing enthusiast by nature and successful entrepreneurs by heart. We created the Equal Crypto People project from a passion for finding and connecting with people worldwide who are open-minded and wish to explore and embrace universal culture. We are curators of new music, art, talent, and all things culture.</div>
              </div>
            </div>
            <div id="Agenda" className="af-class-section af-class-white af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-center-container">
                  <h2 data-w-id="23b06ef8-5a23-aefe-3fe6-0c8916779d46" style={{opacity: 1}} className="af-class-h2 af-class-dark">OUR ROADMAP &amp;&nbsp;FAQs</h2>
                  <div className="af-class-columns w-row">
                    <div className="af-class-column w-col w-col-6">
                      <a href="https://online.flippingbook.com/view/957040670/" target="_blank" className="af-class-primary-button af-class-_4 w-button"><strong className="af-class-bold-text-2">DOWNLOAD our<br />EXECUTIVE SUMMARY</strong></a>
                    </div>
                    <div className="af-class-column-2 w-col w-col-6">
                      <a href="https://online.flippingbook.com/view/956668842/" target="_blank" className="af-class-primary-button af-class-_4 w-button"><strong className="af-class-bold-text-2 af-class-v2">DOWNLOAD OUR<br />Financial Plan</strong></a>
                    </div>
                  </div>
                </div>
                <div data-w-id="b13cdc34-87d1-4c58-63b8-cac155197fe1" style={{opacity: 1}} data-current="Tab 1" data-easing="ease" data-duration-in={300} data-duration-out={100} className="af-class-tabs w-tabs">
                  <div className="af-class-tabs-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="af-class-tab-link w-inline-block w-tab-link w--current">
                      <div>Time-based</div>
                    </a>
                    <a data-w-tab="Tab 2" className="af-class-tab-link w-inline-block w-tab-link">
                      <div>Sales-based</div>
                    </a>
                    <a data-w-tab="Tab 3" className="af-class-tab-link w-inline-block w-tab-link">
                      <div>FAQs</div>
                    </a>
                  </div>
                  <div className="af-class-tabs-content w-tab-content">
                    <div data-w-tab="Tab 1" className="af-class-tab-pane w-tab-pane w--tab-active">
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-b62165f3-3ea4-bab0-41b9-b57220e1dcda-3eed4f0e" className="af-class-bold-text af-class-hour">1/1/22</div><img id="w-node-b62165f3-3ea4-bab0-41b9-b57220e1dcdc-3eed4f0e" loading="lazy" src="images/ECP-256x256.png" className="af-class-small-avatar" />
                            <h3 id="w-node-b62165f3-3ea4-bab0-41b9-b57220e1dcde-3eed4f0e" className="af-class-h4 af-class-dark">ECP Drop to Discord &amp; Whitelist Community</h3>
                            <div id="w-node-b62165f3-3ea4-bab0-41b9-b57220e1dce0-3eed4f0e" className="af-class-text af-class-dark">Early Access to Our Community</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">The ECPs come back from the underground! In order for us to breathe, we must find culture through music &amp; art curation. 5,000 ECPs will be released at presale. Remaining 5,000 ECPs will be available to mint on main launch.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_2a8c1e70-70ba-3e95-38ef-1e8b127bcfe8-3eed4f0e" className="af-class-bold-text af-class-hour">1/15/22</div><img id="w-node-_2a8c1e70-70ba-3e95-38ef-1e8b127bcfea-3eed4f0e" sizes="(max-width: 479px) 22vw, (max-width: 767px) 2vw, (max-width: 991px) 7vw, 70px" src="images/135.jpg" loading="lazy" srcSet="images/135-p-500.jpeg 500w, images/135-p-800.jpeg 800w, images/135-p-1080.jpeg 1080w, images/135-p-1600.jpeg 1600w, images/135-p-2000.jpeg 2000w, images/135-p-2600.jpeg 2600w, images/135-p-3200.jpeg 3200w, images/135.jpg 5000w"  className="af-class-small-avatar" />
                            <h3 id="w-node-_2a8c1e70-70ba-3e95-38ef-1e8b127bcfeb-3eed4f0e" className="af-class-h4 af-class-dark">ECP Community Search for Best &amp; Brightest Talent Globally</h3>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Our Discord will consist of weekly "top picks"&nbsp;for global art and music across all genres. The ECP will use voting systems that every community ECP member will have 100% access to and voting privileges. At the end of the weekly voting, the ECP will share top picks across all social media platforms. Our goal is to help talented artists and musicians go viral!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_7db7ff47-d599-594b-3bab-93b18c892548-3eed4f0e" className="af-class-bold-text af-class-hour">1/29/22</div><img id="w-node-_7db7ff47-d599-594b-3bab-93b18c89254a-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/next_step.jpg" loading="lazy" srcSet="images/next_step-p-500.jpeg 500w, images/next_step-p-800.jpeg 800w, images/next_step-p-1080.jpeg 1080w, images/next_step-p-1600.jpeg 1600w, images/next_step-p-2000.jpeg 2000w, images/next_step-p-2600.jpeg 2600w, images/next_step-p-3200.jpeg 3200w, images/next_step.jpg 4167w"  className="af-class-small-avatar" />
                            <h3 id="w-node-_7db7ff47-d599-594b-3bab-93b18c89254b-3eed4f0e" className="af-class-h4 af-class-dark">Release of Full Biz Plan to ECP Community on Discord</h3>
                            <div id="w-node-_7db7ff47-d599-594b-3bab-93b18c89254d-3eed4f0e" className="af-class-text af-class-dark">Detailed ECP&nbsp;Growth 3-Year Biz Plan</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">While the ECP members were underground after the war, some of the leaders were building a robust business plan that analyzed what it would take to fund global culture tours for the next three years. That business plan contains a deep financial analysis of talent acquisition, venue procurement, and growth strategies. It's time to get our oxygen back!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_09ec31a1-d94d-27d5-3dc1-76182a737c46-3eed4f0e" className="af-class-bold-text af-class-hour">2/26/22</div><img id="w-node-_09ec31a1-d94d-27d5-3dc1-76182a737c48-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/159.jpg" loading="lazy" srcSet="images/159-p-500.jpeg 500w, images/159-p-800.jpeg 800w, images/159-p-1080.jpeg 1080w, images/159-p-1600.jpeg 1600w, images/159-p-2000.jpeg 2000w, images/159-p-2600.jpeg 2600w, images/159-p-3200.jpeg 3200w, images/159.jpg 5000w"  className="af-class-small-avatar" />
                            <h3 id="w-node-_09ec31a1-d94d-27d5-3dc1-76182a737c49-3eed4f0e" className="af-class-h4 af-class-dark">Consolidation of Top Global Talent into ECP Favs Tour List</h3>
                            <div id="w-node-_09ec31a1-d94d-27d5-3dc1-76182a737c4b-3eed4f0e" className="af-class-text af-class-dark">Our Community will Help Artists &amp;&nbsp;Musicians go Viral prior to Global Tour</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">The weekly "top picks" our community has selected will be further consolidated down and our community will invite them to perform and/or showcase their talent(s) at our global culture tour!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_662d2c4b-1f3f-f32a-b2f6-08acafdf3248-3eed4f0e" className="af-class-bold-text af-class-hour">3/12/22</div><img id="w-node-_662d2c4b-1f3f-f32a-b2f6-08acafdf324a-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/617455930f1ea325a21fb1ae.jpg" loading="lazy" srcSet="images/617455930f1ea325a21fb1ae-p-500.jpeg 500w, images/617455930f1ea325a21fb1ae-p-800.jpeg 800w, images/617455930f1ea325a21fb1ae-p-1080.jpeg 1080w, images/617455930f1ea325a21fb1ae-p-1600.jpeg 1600w, images/617455930f1ea325a21fb1ae-p-2000.jpeg 2000w, images/617455930f1ea325a21fb1ae-p-2600.jpeg 2600w, images/617455930f1ea325a21fb1ae-p-3200.jpeg 3200w, images/617455930f1ea325a21fb1ae.jpg 7974w" className="af-class-small-avatar" />
                            <h3 id="w-node-_662d2c4b-1f3f-f32a-b2f6-08acafdf324b-3eed4f0e" className="af-class-h4 af-class-dark">Procure Tour Locations &amp; Venues</h3>
                            <div id="w-node-_662d2c4b-1f3f-f32a-b2f6-08acafdf324d-3eed4f0e" className="af-class-text af-class-dark">As Outlined in Our Financial Plan, NFT &amp; Merch Funds will Procure Venues</div><img src="placeholder.svg" loading="lazy" />
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Based on the success of our NFT release and Merch sales, we will utilize funds to procure talent, venues, travel logistics, and marketing for our global tour! Tour freebies and giveaways will be spread across our top NFT community members.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-ac38f526-cd73-9302-4bcc-575edfb51ac5-3eed4f0e" className="af-class-bold-text af-class-hour">6/1/22</div><img id="w-node-ac38f526-cd73-9302-4bcc-575edfb51ac7-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/02581.jpg" loading="lazy" srcSet="images/02581-p-500.jpeg 500w, images/02581-p-800.jpeg 800w, images/02581-p-1080.jpeg 1080w, images/02581-p-1600.jpeg 1600w, images/02581-p-2000.jpeg 2000w, images/02581-p-2600.jpeg 2600w, images/02581-p-3200.jpeg 3200w, images/02581.jpg 6000w" className="af-class-small-avatar" />
                            <h3 id="w-node-ac38f526-cd73-9302-4bcc-575edfb51ac8-3eed4f0e" className="af-class-h4 af-class-dark">Release Tour Dates &amp; Locations to ECP&nbsp;Community</h3>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Ready to breathe and live the ECP dream?? Buckle up - it's time to introduce the best and brightest talent to the world!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-e63ad79e-4366-0903-836c-de1f480d057b-3eed4f0e" className="af-class-bold-text af-class-hour">7/1/22</div><img id="w-node-e63ad79e-4366-0903-836c-de1f480d057d-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/11Z_Neon_815.jpg" loading="lazy" srcSet="images/11Z_Neon_815-p-500.jpeg 500w, images/11Z_Neon_815-p-800.jpeg 800w, images/11Z_Neon_815-p-1080.jpeg 1080w, images/11Z_Neon_815-p-1600.jpeg 1600w, images/11Z_Neon_815-p-2000.jpeg 2000w, images/11Z_Neon_815-p-2600.jpeg 2600w, images/11Z_Neon_815-p-3200.jpeg 3200w, images/11Z_Neon_815.jpg 4000w" className="af-class-small-avatar" />
                            <h3 id="w-node-e63ad79e-4366-0903-836c-de1f480d057e-3eed4f0e" className="af-class-h4 af-class-dark">Commence with Global Tour</h3>
                            <div id="w-node-e63ad79e-4366-0903-836c-de1f480d0580-3eed4f0e" className="af-class-text af-class-dark">Awesome ECP&nbsp;Community Tour Access, Giveaways, and Merch</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">All expense paid giveaways and merch will be announced weekly within our ECP&nbsp;community! The giveaways will be exclusively available to our NFT community.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_78c2dd65-3d04-affb-7e8d-d7e58686f03c-3eed4f0e" className="af-class-bold-text af-class-hour">10/1/22</div><img id="w-node-_78c2dd65-3d04-affb-7e8d-d7e58686f03e-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/5379727.jpg" loading="lazy" srcSet="images/5379727-p-500.jpeg 500w, images/5379727-p-800.jpeg 800w, images/5379727-p-1080.jpeg 1080w, images/5379727-p-1600.jpeg 1600w, images/5379727.jpg 2000w" className="af-class-small-avatar" />
                            <h3 id="w-node-_78c2dd65-3d04-affb-7e8d-d7e58686f03f-3eed4f0e" className="af-class-h4 af-class-dark">Release New NFT Arts &amp;&nbsp;Seek Addt'l Funding</h3>
                            <div id="w-node-_78c2dd65-3d04-affb-7e8d-d7e58686f041-3eed4f0e" className="af-class-text af-class-dark">ECP Community will seek Influencer &amp; Media Label Financial Infusions for 2023</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">As outlined in our financial plan, our goal is to release a new NFT in 2023 and seek the support of Influencers and Media Labels. It's time to make the best and brightest talent the biggest and most well-known oxygen-givers this world has to offer! Culture is back!!</p>
                        </nav>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="af-class-tab-pane w-tab-pane">
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c0413829499-3eed4f0e" className="af-class-bold-text af-class-hour">10%</div><img id="w-node-cecf1ef9-d9e1-39e8-69a8-5c041382949b-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/5351324.jpg" loading="lazy" srcSet="images/5351324-p-800.jpeg 800w, images/5351324-p-1080.jpeg 1080w, images/5351324-p-1600.jpeg 1600w, images/5351324.jpg 2000w" className="af-class-small-avatar" />
                            <h4 id="w-node-cecf1ef9-d9e1-39e8-69a8-5c041382949c-3eed4f0e" className="af-class-h4 af-class-dark">Blitz the Market!</h4>
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c041382949e-3eed4f0e" className="af-class-text af-class-dark">Invest $100k in retargeting and remarketing</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Our ECP community only grows if art/music enthusiasts know about our movement! We've conducted extensive analysis to understand our Total Available Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM). Our marketing blitz will focus on the SOM, but we will need every ECP community member socializing their NFT on social media also!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294a9-3eed4f0e" className="af-class-bold-text af-class-hour">25%</div><img id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294ab-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/6443477.jpg" loading="lazy" srcSet="images/6443477-p-800.jpeg 800w, images/6443477-p-1080.jpeg 1080w, images/6443477-p-1600.jpeg 1600w, images/6443477.jpg 2000w" className="af-class-small-avatar" />
                            <h4 id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294ac-3eed4f0e" className="af-class-h4 af-class-dark">Start Investing in Global Talent</h4>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Our ECP community will invest $160k in the best and brightest global talent. Specifically, we will invest in getting talent booked and taking care of rider fees/logistics for the upcoming global tour!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294b7-3eed4f0e" className="af-class-bold-text af-class-hour">50%</div><img id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294b9-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/4912366.jpg" loading="lazy" srcSet="images/4912366-p-500.jpeg 500w, images/4912366-p-800.jpeg 800w, images/4912366-p-1080.jpeg 1080w, images/4912366-p-1600.jpeg 1600w, images/4912366.jpg 2000w" className="af-class-small-avatar" />
                            <h4 id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294ba-3eed4f0e" className="af-class-h4 af-class-dark">Procure 3-Country, 25-City Tour Performance Venues</h4>
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294bc-3eed4f0e" className="af-class-text af-class-dark">It's almost showtime! </div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Our ECP community will invest $75k+ in procuring venues for our global tour. This effort will take ECP community engagement and input to locate venues that support our vision!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294c7-3eed4f0e" className="af-class-bold-text af-class-hour">75%</div><img id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294c9-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/19198911.jpg" loading="lazy" srcSet="images/19198911-p-500.jpeg 500w, images/19198911-p-800.jpeg 800w, images/19198911-p-1080.jpeg 1080w, images/19198911-p-1600.jpeg 1600w, images/19198911-p-2000.jpeg 2000w, images/19198911-p-2600.jpeg 2600w, images/19198911-p-3200.jpeg 3200w, images/19198911.jpg 7730w" className="af-class-small-avatar" />
                            <h4 id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294ca-3eed4f0e" className="af-class-h4 af-class-dark">ECP Community Giveaways!</h4>
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294cc-3eed4f0e" className="af-class-text af-class-dark">Pack your bags! You're booked and busy!!</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">All ECP&nbsp;community members will have an opportunity to win weekly tour giveaways, all-inclusive tour packages, and merch! We're investing in YOU because you believe in the vision!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294e7-3eed4f0e" className="af-class-bold-text af-class-hour">100%</div><img id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294e9-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/Df_1886.jpg" loading="lazy" srcSet="images/Df_1886-p-1080.jpeg 1080w, images/Df_1886-p-1600.jpeg 1600w, images/Df_1886-p-2000.jpeg 2000w, images/Df_1886-p-2600.jpeg 2600w, images/Df_1886-p-3200.jpeg 3200w, images/Df_1886.jpg 5833w" className="af-class-small-avatar" />
                            <h4 id="w-node-cecf1ef9-d9e1-39e8-69a8-5c04138294ea-3eed4f0e" className="af-class-h4 af-class-dark">New NFT Giveaways</h4>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">We made it! The ECP community is here to stay and global culture has been restored. Before we release our new ECP NFT, each community member will receive FREE NFTs on us - YOU&nbsp;deserve it!!</p>
                        </nav>
                      </div>
                    </div>
                    <div data-w-tab="Tab 3" className="af-class-tab-pane w-tab-pane">
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf39-3eed4f0e" className="af-class-bold-text af-class-hour">1.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf3b-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf3c-3eed4f0e" className="af-class-h4 af-class-dark">How can I buy an ECP?</h4>
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf3e-3eed4f0e" className="af-class-text af-class-dark">Get started here.</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">After sales start, you can buy on mint page. There's a mint button above to get your ECP! Once initial 10k ECPs are sold out, the collection will be available on Opensea.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf49-3eed4f0e" className="af-class-bold-text af-class-hour">2.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf4b-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf4c-3eed4f0e" className="af-class-h4 af-class-dark">Do ECPs have rarities?</h4>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">ECP rarity list will be revealed once you've minted from this site, and after Opensea listing. Once you've minted your ECP, login to your Opensea account. You'll be able to access your new ECP in your collections. ECPs are each 1 of 1. Each extremely rare.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf57-3eed4f0e" className="af-class-bold-text af-class-hour">3.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf59-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf5a-3eed4f0e" className="af-class-h4 af-class-dark">What is the mint price?</h4>
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf5c-3eed4f0e" className="af-class-text af-class-dark">Small investment; Big impact.</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">0.0314 ETH for presale<br />ETH increase for public sale</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf67-3eed4f0e" className="af-class-bold-text af-class-hour">4.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf69-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf6a-3eed4f0e" className="af-class-h4 af-class-dark">How many can I mint?</h4>
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf6c-3eed4f0e" className="af-class-text af-class-dark">We love our minters!</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">Max 15 per person.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf77-3eed4f0e" className="af-class-bold-text af-class-hour">5.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf79-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf7a-3eed4f0e" className="af-class-h4 af-class-dark">What are the royalties?</h4>
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf7c-3eed4f0e" className="af-class-text af-class-dark">Keep our oxygen coming!</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">We charge 5% royalties, and Opensea charges another approx. 2.5% commission on all sales, tallying 7.5% commission in total.</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf87-3eed4f0e" className="af-class-bold-text af-class-hour">6.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf89-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf8a-3eed4f0e" className="af-class-h4 af-class-dark">What are the benefits of owning an ECP?</h4>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">ECP NFTs is the first step in restoring global appreciation for art and music. The ECP NFT token gets you access to our club, granting access to members-only benefits including global tours, merch, giveaways, more! Imagine a world where our ECP community can tour the world finding the best and brightest artists and musicians!!</p>
                        </nav>
                      </div>
                      <div className="af-class-line" />
                      <div data-delay={300} data-hover="false" className="af-class-accordion w-dropdown">
                        <div className="af-class-accordion-container w-dropdown-toggle">
                          <div className="af-class-event-content">
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf95-3eed4f0e" className="af-class-bold-text af-class-hour">7.</div><img id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf97-3eed4f0e" sizes="(max-width: 479px) 48px, (max-width: 767px) 10vw, (max-width: 991px) 7vw, 70px" src="images/17973866.jpg" loading="lazy" srcSet="images/17973866-p-500.jpeg 500w, images/17973866-p-800.jpeg 800w, images/17973866-p-1080.jpeg 1080w, images/17973866-p-1600.jpeg 1600w, images/17973866-p-2000.jpeg 2000w, images/17973866-p-2600.jpeg 2600w, images/17973866-p-3200.jpeg 3200w, images/17973866.jpg 4001w" className="af-class-small-avatar" />
                            <h4 id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf98-3eed4f0e" className="af-class-h4 af-class-dark">How are ECPs made?</h4>
                            <div id="w-node-_56a82b20-1fbe-b171-5f9c-7f1fcf4abf9a-3eed4f0e" className="af-class-text af-class-dark">Rare or not?</div>
                          </div>
                          <div className="af-class-horizontal-container"><img loading="lazy" src="images/plus-icon.svg" alt="plus icon" className="af-class-plus" /></div>
                        </div>
                        <nav className="af-class-accordion-text w-dropdown-list">
                          <p className="af-class-small-text af-class-dark">ECPs are programmatically generated based on 200+ attributes including: face, shirt, mouth, eyes, hair, tattoos, piercings, stamps, and more!</p>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-white af-class-_1 af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-center-container">
                  <h5 data-w-id="aaafed61-71f3-ebe3-6125-af1a363845c5" style={{opacity: 1}} className="af-class-h2 af-class-dark af-class-_1">OUR LEADERSHIP HAS BEEN SEEN ON </h5>
                  <div data-w-id="85846458-9e2b-9c25-a12c-12c29060ea92" style={{opacity: 1}} className="af-class-main-grid af-class-top-margin"><img src="images/Forbes-download-3.png" loading="lazy" width={125} id="w-node-ca8da137-fdb5-69e6-aebb-e5b44761fff5-3eed4f0e" /><img src="images/fox2_logo.png" loading="lazy" width={91} id="w-node-_0deb5812-1eb9-a44a-5b7e-31844dcf6300-3eed4f0e" /><img src="images/nbc-logo.png" loading="lazy" width={173} id="w-node-f8998c8e-9054-5db5-81f6-72a64c0939aa-3eed4f0e" srcSet="images/nbc-logo-p-500.png 500w, images/nbc-logo-p-800.png 800w, images/nbc-logo-p-1080.png 1080w, images/nbc-logo-p-1600.png 1600w, images/nbc-logo-p-2000.png 2000w, images/nbc-logo.png 4096w" sizes="(max-width: 991px) 100vw, 1vw" /><img src="images/cbs-logo-png-transparent.png" loading="lazy" width={130} id="w-node-_7705689c-d0f2-6de9-53b0-6f847de71193-3eed4f0e" srcSet="images/cbs-logo-png-transparent-p-500.png 500w, images/cbs-logo-png-transparent-p-800.png 800w, images/cbs-logo-png-transparent-p-1080.png 1080w, images/cbs-logo-png-transparent-p-1600.png 1600w, images/cbs-logo-png-transparent-p-2000.png 2000w, images/cbs-logo-png-transparent.png 2200w" sizes="(max-width: 991px) 100vw, 1vw" /><img src="images/business-ghana-color-1.png" loading="lazy" id="w-node-_48bbf775-1b7e-9609-6857-5b786e7e990b-3eed4f0e" /><img src="images/black-enterprise-logo-1.png" loading="lazy" id="w-node-bc1b8b02-a175-ae8a-8584-c061495e6e61-3eed4f0e" /></div>
                  <h2 data-w-id="bfad7f7d-a39e-c746-7563-53a9e0dac9ba" style={{opacity: 1}} className="af-class-h2 af-class-dark af-class-_1 af-class-_2">&amp; EXECUTED GLOBAL PROJECTS IN </h2>
                  <div data-w-id="10c71d20-f6d1-053f-be84-f56312c4fd24" style={{opacity: 1}} className="af-class-main-grid af-class-top-margin af-class-_2"><img src="images/Flag_of_Kenya_sm.png" loading="lazy" width={117} id="w-node-_10c71d20-f6d1-053f-be84-f56312c4fd25-3eed4f0e" srcSet="images/Flag_of_Kenya_sm-p-500.png 500w, images/Flag_of_Kenya_sm-p-800.png 800w, images/Flag_of_Kenya_sm.png 900w" sizes="(max-width: 479px) 1.8625000715255737px, (max-width: 767px) 1vw, 2vw" /><img src="images/Flag_of_Somalia_sm.png" loading="lazy" width={114} id="w-node-_10c71d20-f6d1-053f-be84-f56312c4fd26-3eed4f0e" srcSet="images/Flag_of_Somalia_sm-p-500.png 500w, images/Flag_of_Somalia_sm.png 900w" sizes="(max-width: 479px) 1.8625000715255737px, (max-width: 767px) 1vw, 2vw" /><img src="images/Flag_of_Angola_sm.png" loading="lazy" width={173} id="w-node-_10c71d20-f6d1-053f-be84-f56312c4fd27-3eed4f0e" srcSet="images/Flag_of_Angola_sm-p-500.png 500w, images/Flag_of_Angola_sm-p-800.png 800w, images/Flag_of_Angola_sm.png 900w" sizes="(max-width: 479px) 1.8625000715255737px, (max-width: 767px) 1vw, 2vw" /><img src="images/Flag_of_Djibouti_sm.png" loading="lazy" width={130} id="w-node-_10c71d20-f6d1-053f-be84-f56312c4fd28-3eed4f0e" srcSet="images/Flag_of_Djibouti_sm-p-500.png 500w, images/Flag_of_Djibouti_sm.png 900w" sizes="(max-width: 479px) 1.8625000715255737px, (max-width: 767px) 1vw, 2vw" /><img src="images/Flag_of_Ethiopia_sm.png" loading="lazy" width={130} id="w-node-_350939a5-2960-668a-2c03-4dca87756752-3eed4f0e" srcSet="images/Flag_of_Ethiopia_sm-p-500.png 500w, images/Flag_of_Ethiopia_sm-p-800.png 800w, images/Flag_of_Ethiopia_sm.png 900w" sizes="(max-width: 479px) 1.8625000715255737px, (max-width: 767px) 1vw, 2vw" /><img src="images/Flag_of_the_Democratic_Republic_of_the_Congo_sm.png" loading="lazy" width={130} id="w-node-_119e8622-7c4d-4791-8dce-90d84cd89887-3eed4f0e" /><img src="images/640px-Flag_of_Albania.svg.png" loading="lazy" width={109} id="w-node-_10c71d20-f6d1-053f-be84-f56312c4fd2a-3eed4f0e" srcSet="images/640px-Flag_of_Albania.svg-p-500.png 500w, images/640px-Flag_of_Albania.svg.png 640w" sizes="(max-width: 479px) 1.8625000715255737px, (max-width: 767px) 1vw, 2vw" /></div>
                </div>
              </div>
            </div>
            <div id="Contact" className="af-class-section af-class-contact af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-center-container">
                  <div data-w-id="6f37687e-f405-7acd-b318-aaa8afd285d1" style={{opacity: 1}} className="af-class-small-text af-class-white">GOT QUESTIONS?</div>
                  <h2 data-w-id="6f37687e-f405-7acd-b318-aaa8afd285d3" style={{opacity: 1}} className="af-class-h2 af-class-margin">CONTACT US</h2>
                  <div className="af-class-form-block w-form">
                    <form method="get" name="email-form" data-name="Email Form" style={{opacity: 1}} data-w-id="6f37687e-f405-7acd-b318-aaa8afd285d6" id="email-form" className="af-class-form"><input type="text" className="af-class-input w-input" maxLength={256} name="Name" data-name="Name" placeholder="Your Name" id="Name-2" required /><input type="email" className="af-class-input w-input" maxLength={256} name="Email" data-name="Email" placeholder="Email" id="Email-2" /><textarea placeholder="Message..." maxLength={5000} id="Message" name="Message" required data-name="Message" className="af-class-input af-class-message w-node-_6f37687e-f405-7acd-b318-aaa8afd285d9-3eed4f0e w-input" defaultValue={""} /><input type="submit" defaultValue="SUBMIT MESSAGE" data-wait="Please wait..." id="w-node-_6f37687e-f405-7acd-b318-aaa8afd285da-3eed4f0e" className="af-class-primary-button w-button" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                  <div className="af-class-social-links">
                    <a href="https://www.facebook.com/" target="_blank" className="af-class-social af-class-right-margin w-inline-block"><img src="images/open-sea-white.png" loading="lazy" className="af-class-social-icon" /></a>
                    <a href="https://www.facebook.com/" target="_blank" className="af-class-social af-class-right-margin w-inline-block"><img src="images/Discord-Logo_White.png" loading="lazy" sizes="28px" srcSet="images/Discord-Logo_White-p-500.png 500w, images/Discord-Logo_White-p-800.png 800w, images/Discord-Logo_White-p-1080.png 1080w, images/Discord-Logo_White-p-1600.png 1600w, images/Discord-Logo_White.png 2747w" className="af-class-social-icon" /></a>
                    <a href="https://www.instagram.com/" target="_blank" className="af-class-social af-class-right-margin w-inline-block"><img src="images/instagram.svg" loading="lazy" alt="instagram" className="af-class-social-icon" /></a>
                    <a href="https://www.twitter.com/" target="_blank" className="af-class-social w-inline-block"><img src="images/twitter.svg" loading="lazy" alt="twitter" className="af-class-social-icon" /></a>
                  </div>
                  <div className="af-class-small-text af-class-bottom-margin">info@equalcryptopeople.com</div>
                  <a href="index.html" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/ECP-Logo.png" loading="lazy" width={522} sizes="(max-width: 767px) 92vw, 522px" alt="Equal Crypto People Logo - All rights reserved" srcSet="images/ECP-Logo-p-500.png 500w, images/ECP-Logo-p-800.png 800w, images/ECP-Logo-p-1080.png 1080w, images/ECP-Logo-p-1600.png 1600w, images/ECP-Logo.png 2000w" className="af-class-logo-icon" /></a>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-footer af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-footer-grid">
                  <div id="w-node-_90bfa88c-8878-3a06-b1ed-93e81799a55b-1799a550" className="af-class-footer-bottom">
                    <div className="af-class-small-text">© 2021 Equal Crypto People | All Rights Reserved. Copy or duplication is prohibited.</div>
                  </div>
                  <div id="w-node-_90bfa88c-8878-3a06-b1ed-93e81799a565-1799a550" className="af-class-footer-bottom">
                    <div className="af-class-small-text">Site Developed by: <a href="https://govcon.ndemandconsulting.com/" target="_blank" className="af-class-link-2">nDemand Consulting Services Inc.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */