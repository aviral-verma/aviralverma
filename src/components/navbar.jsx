import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return ( 
        <div className="mobile_nav_hide">
   
          <aside className="border">

            <nav id="mobile_nav">
              <ul id="mobile_ul">
              <li className="mobile_li"><a style={{color: '#000000'}}target="_blank" href="https://github.com/aviral-verma" target="_blank"><i className="icon-github"></i></a></li>
              <li className="mobile_li"><a style={{color: '#000000'}}target="_blank"href="https://www.linkedin.com/in/aviraliitk" target="_blank"><i className="icon-linkedin2" /></a></li>
              <li className="mobile_li"><a style={{color: '#000000'}}target="_blank"href="https://medium.com/@aviralverma" target="_blank"><i className="icon-blogger2"></i></a></li>
                <li className="mobile_li"><a style={{color: '#000000'}}target="_blank"href="https://www.facebook.com/aviraliitk" target="_blank"><i className="icon-facebook2" /></a></li>    
                <li className="mobile_li"><a style={{color: '#000000'}}target="_blank" href="https://www.instagram.com/aviral_verma_official/" target="_blank"><i className="icon-instagram" /></a></li>
                <li className="mobile_li"><a style={{color: '#000000'}}target="_blank"href="https://twitter.com/aviraliitk" target="_blank"><i className="icon-twitter2" /></a></li>
              </ul>
            </nav>
            
          </aside>
        </div>
    )
  }
}
