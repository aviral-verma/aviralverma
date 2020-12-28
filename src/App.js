import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'
import Timelinework from './components/timelinework';

class App extends Component { 
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
        <Navbar></Navbar>
					<Introduction></Introduction>
					<About></About>
          <Timelinework></Timelinework>
					<Timeline></Timeline>
          <Blog></Blog>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
