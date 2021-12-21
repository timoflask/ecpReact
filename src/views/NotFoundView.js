/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61b91d17e8f31b1dd3ed4f0a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61b91d17e8f31b36d9ed4f13'
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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(E:\\css\\normalize.css);
          @import url(E:\\css\\webflow.css);
          @import url(E:\\css\\equal-crypto-people.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-w-id="fcfa5286-5b7c-c2c2-7daf-2da334289062" data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav">
              <div className="af-class-navbar-container">
                <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/ECP-Logo.png" loading="lazy" width={536} sizes="(max-width: 767px) 84vw, (max-width: 991px) 70vw, 39vw" alt="Equal Crypto People Logo - All rights reserved" srcSet="images/ECP-Logo-p-500.png 500w, images/ECP-Logo-p-800.png 800w, images/ECP-Logo-p-1080.png 1080w, images/ECP-Logo-p-1600.png 1600w, images/ECP-Logo.png 2000w" className="af-class-logo-icon" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="#" className="af-class-nav-link w-nav-link">story</a>
                  <a href="#" className="af-class-nav-link af-class-left-margin w-nav-link">Roadmap </a>
                  <a href="#" className="af-class-nav-link af-class-left-margin w-nav-link">team</a>
                  <a href="#" className="af-class-nav-link af-class-left-margin w-nav-link">Contact</a>
                  <div className="af-class-buttons-container">
                    <a href="#" className="af-class-primary-button w-button">Connect Wallet</a>
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
            <div className="af-class-utility-page-wrap">
              <div className="af-class-utility-page-content w-form"><img src="images/error-404-1.png" sizes="100px" srcSet="images/error-404-1-p-500.png 500w, images/error-404-1.png 512w" className="af-class-large-icon" />
                <h2 className="af-class-h2">Page Not Found</h2>
                <div className="af-class-text">The page you are looking for doesn't exist or has been moved</div>
                <a href="index.html" className="af-class-primary-button w-button">Go Back Home</a>
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

export default NotFoundView

/* eslint-enable */