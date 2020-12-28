import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hi, I'm Aviral, an IIT Kanpur graduate passionate about web technologies, development and cloud. I'm currently working as a Cloud Administrator at Bajaj Finserv. I maintain a blog on Quora where I have <b>7.4K+</b> followers, <b>2M+</b> views and <b>80K+</b> upvotes on my content so far.</p>

<br/>
<p>I’ve experience working with Full Stack Web Development technologies such as <b>HTML, CSS, JavaScript, Angular, React, Node.js, Express.js, NgRx, MySQL, Shopify, Docker, Kubernetes</b>, etc. During my free time, I focus on learning and up-skilling myself in various domains</p>
<br></br>
<p>I'm fascinated with Entreprenurship, Digital Marketing, and Product Management and keep learning about the same.

If you wish to reach out to me, you can connect with me on LinkedIn or Instagram.
</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my interests</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-brush" />
                </span>
                <div className="desc">
                    <h3>Building a Community on LinkedIn</h3>
                    <p>I share articles, posts, and stories on LinkedIn to build a positive community on LinkedIn that can constantly grow together.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Web Development & Cloud Computing </h3>
                    <p>I've experience in building, deploying and managing web applications using technologies such as Angular, Node.js, NgRx, MySQL, Docker, Kubernetes</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon timeline-icon color-1">
                    <i className="icon-pen2" />
                </span>
                <div className="desc">
                    <h3>Writing</h3>
                    <p>I love maintaining a blog on <a target="_blank" href="https://www.quora.com/profile/Aviral-Verma-8">Quora</a> as well as <a target="_blank" href="https://medium.com/@aviralverma">Medium</a>. I write about my knowledge, experiences and perspectives.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
