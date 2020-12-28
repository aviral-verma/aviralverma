import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return ( 
      <div  style={{height: '100 vh'}}>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/Aviral_image.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Aviral Verma</a></h1>
             <a style={{color: '#48484A'}}target="_blank" href="mailto:aviralverma.verma@gmail.com"> <span className="email"><i className="icon-mail"></i> 
              aviralverma.verma@gmail.com</span></a>
              <a style={{color: '#48484A'}} target="_blank" href="mailto:aviralv@iitk.ac.in"> <span className="email"><i className="icon-mail"></i> 
              aviralv@iitk.ac.in</span></a>
              <span className="email"><i ></i> 
              Indian Institute of Technology Kanpur</span>
              <br />
              {/* <span className="number"><i className="icon-phone"></i> +91-790-574-2965</span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://github.com/aviral-verma" target="_blank"><i className="icon-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/aviraliitk" target="_blank"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://medium.com/@aviralverma" target="_blank"><i className="icon-blogger2"></i></a></li>
                <li><a href="https://www.facebook.com/aviraliitk" target="_blank"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.facebook.com/aviraliitk" target="_blank"><i className="icon-quora2" /></a></li>             
                <li><a href="https://www.instagram.com/aviral_verma_official/" target="_blank"><i className="icon-instagram" /></a></li>
                <li><a href="https://twitter.com/aviraliitk" target="_blank"><i className="icon-twitter2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">    
            <br />
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i>
              </small></p>
              <br />
              <p><small>Thanks <a href="https://colorlib.com" target="_blank">Colorlib</a></small> for inspiration</p>
              {/* <p><small>
                  Automated deployment on gh-pages using Travis-CI
              </small></p> */}
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
