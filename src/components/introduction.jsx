import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url()'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi<span  style={{color: 'red'}}>. </span><br />I am <br />Aviral</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://aviral-verma.github.io/personal-website/" target="_blank">View My Projects <i className="icon-briefcase3" /></a></p>
                          {/* <p><a className="btn btn-primary btn-learn" href="" target="_blank">View CV<i className="icon-download4" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url()'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 >I love building<br /> THINGS <span  style={{color: 'red'}}>!!</span></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://aviral-verma.github.io/personal-website/" target="_blank">Have a Look <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url()'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write <span  style={{color: 'red'}}>...</span> </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://aviralverma.medium.com/" target="_blank">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
      </div>
    )
  }
}
