import React, { Component } from 'react'

export default class Timelinework extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="http://message-board-connect.herokuapp.com/">Bajaj Finance Limited</a> <span>Jul'20-Present</span><br /><small>Bajaj Finserv</small></h2>
                        <p> - I'm currently working as a Cloud Administrator at Bajaj Finserv. <br></br> - I've integrated Azure Monitor with MS Teams to receive alerts from all the critical servers directly on MS Teams. <br></br> - Working on setting up a monitoring system for critical servers using Prometheus and Grafana. <br></br> - Working on achieving high concurrency on servers by identifying and tuning the required parameters of Linux kernel.
                        </p> 
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
