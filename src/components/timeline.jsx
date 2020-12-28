import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/* <span className="heading-meta">highlights</span> */}
                <h2 className="colorlib-heading animate-box">Internships And Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Internship at Hackcave</a> <span>May'19-July'19</span><br /><small>IIT Kanpur</small></h2>
                        <p>I interned at Hackcave where I worked on a scalable web application which is basically an EdTech platform. I used technologies like <b>Angular 8, TypeScript</b>, redux architecture library for Angular – <b>NgRx</b>(for state management), Angular Material design with
                        flex layout, HTML and CSS to work on the frontend part of this Web Application. I modified the sidebar of the web app to display breakdown of different facets along with their counts. I also implemented a feature which will filter out the posts on clicking upon those facets. I implemented the frontend for reacting on items such as 'like', 'love', 'laugh', 'wow', 'sad', 'angry' reacts on any post. I worked on improving the <b>UX/UI</b> in search bar. I employed development best practices like linting and tools used were <b>Git, Phabricator and Arcanist</b>.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://phool.co/">Internship at Phool.co</a> <span>May'18-July'18</span><br /><small>Mentored by Ankit Agrawal, Founder And CEO of Helpusgreen</small></h2>
                        <p>I worked on the conceptualisation and development of <b>UX/UI</b> for the e-commerce website of the company. I translated designer mock-ups and wireframes into front-end code and optimised the user interface to increase sales and implemented it through coding. I implemented RWD principles to render the website well across multiple devices and browsers. I improved SEO and content quality of articles through writing blogs, articles and newsletters.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://www.treadwill.org/">TreadWill: An IIT Kanpur initiative</a> <span>Jan'19-Apr'19</span><br /><small>Under Graduate Project, Under Prof. Nitin Gupta, IIT Kanpur</small></h2>
                        <p>TreadWill is an IIT Kanpur initiative to treat depression patients through Cognitive Behavioral Therapy. I worked on the frontend part of the Web App using <b>Angular</b>. I developed the side navigation and a collapsible side navigation of the entire Web App using routing. I incorporated an emoticons feature into a wysiwyg editor of the TreadWill. I learnt how to publish our own npm packages and also contributed to an Open Source npm package in the process.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://www.treadwill.org/">Cognitive Distortion Game</a> <span>July'19-Nov'19</span><br /><small>Under Graduate Project, Under Prof. Nitin Gupta, IIT Kanpur</small></h2>
                        <p>Cognitive Distortion Game is a part of TreadWill that I built from scratch where I was leading a team of a designer and a backend developer. I built the entire frontend of the game using Angular 8 and developed the backend architecture by creating a json server. The game is a kind of quizzing platform where a person suffering from depression would be presented with a situation and he/she needs to choose from the options that are given. Based on the chosen options, a user can identify the defects in his/her thinking patterns.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://bonzersearch.000webhostapp.com/">Bonzer: A Search Engine</a> <span>Dec'18-Feb'19</span><br /><small>Self Project</small></h2>
                        <p>Built a search engine with Google like interface using <b>JavaScript</b>, <b>PHP</b>, <b>MySQL</b>, <b>HTML</b> and <b>CSS</b>. Designed the search engine logo. Created a web-crawler and a database as a part of the system. Coded a feature to display the most clicked results on top. Added features like site search, image search, pagination system, image full screen preview, etc. Resulted in an efficient, fast search engine which can be used for searching within database.<br />Some example keywords to search on Bonzer: Dog, BBC, IIT Kanpur, Aviral Verma, etc.</p> 
                        <p> <span><a target="_blank" href="https://bonzersearch.000webhostapp.com/"> See project</a></span> 
                        <span style={{marginLeft: "20px"}}><a target="_blank" href="https://github.com/aviral-verma/bonzer"> See Code</a></span></p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://faceecognition-aviralverma.herokuapp.com/">FaceRecognition: A complex Image Recognition Web Application</a> <span>May'19-Present</span><br /><small>Self Project</small></h2>
                        <p>I built the frontend of this full-stack image recognition Web App using <b>React</b> and used a Machine Learning API to detect faces in any image. The Machine Learning model returns probability scores on the likelihood that the image contains human faces and gives the coordinate locations of those faces. I built the server using <b>Node.js + Express.js</b> to enable authentication of users during sign in. Also, I employed bcrypt-nodejs to encrypt passwords using hashing. I built the database using <b>PostgreSQL</b> to persist the number of
                        times a particluar user detects a face on images.</p>
                        <p> <a target="_blank" href="https://faceecognition-aviralverma.herokuapp.com/"> See project</a>
                        <span style={{marginLeft: "20px"}}><a target="_blank" href="https://github.com/aviral-verma/facerecognition"> See Code</a></span>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://motionsapp.herokuapp.com/">Motions: A Video Streaming Site</a> <span>Aug'19</span><br /><small>Self Project</small></h2>
                        <p>I built a personalised video surfing web app using Angular where I utilized the YouTube API to display the video search results. I used Routing & Navigation in Angular to navigate to the video player. Also, I also designed web app's typographic logo using Adobe Illustrator. I have completed building the basic necessary features required in a video streaming site, now I'm working to add several more features to it to make it truly stand out.</p> 
                        <p> <a target="_blank" href="https://motionsapp.herokuapp.com/"> See project</a>
                        <span style={{marginLeft: "20px"}}><a target="_blank" href="https://github.com/aviral-verma/Motions"> See Code</a></span>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="http://message-board-connect.herokuapp.com/">Blogs: A blogging Web Application</a> <span>Jun'18-Jul'18</span><br /><small>Learnathon organized by Programming Club, IIT Kanpur</small></h2>
                        <p>Developed a <b>Ruby on Rails</b> web app, where users can post, edit or delete blogs once they sign up.  I added a feature to display email ID of the blogger along with the time interval prior to blog posting. I added a feature to enable bloggers to comment on a blog along with editing and deleting features. Then I deployed the web application to Heroku.</p> 
                        <p> <a target="_blank" href="http://message-board-connect.herokuapp.com/"> See project</a>
                        <span style={{marginLeft: "20px"}}><a target="_blank" href="https://github.com/aviral-verma/Blogs"> See Code</a></span>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://aviral-verma.github.io/robofriends/">Robofriends: A React Web Application.</a> <span>Apr'19</span><br /><small>Self Project</small></h2>
                        <p>Robofriends is a basic Web Application that I developed using <b>React</b>. I implemented a search feature to search amongst the various robots being displayed. Then I deployed the React web app using GitHub pages.</p> 
                        <p> <a target="_blank" href="https://aviral-verma.github.io/robofriends/"> See project</a>
                        <span style={{marginLeft: "20px"}}><a target="_blank" href="https://github.com/aviral-verma/robofriends"> See Code</a></span>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a target="_blank" href="https://aviral-verma.github.io/h3pl/">H3PL: An Intra Hostel Cricket Tournament Website</a> <span>Mar'17</span><br /><small>Hall-3, IIT Kanpur</small></h2>
                        <p>I created a website to display the real-time announcements and
scores for a league of 8 teams - 116 players in the hostel. The website was used by 500+ hall residents for a duration of 11 days</p>
                        <p> <a target="_blank" href="https://aviral-verma.github.io/h3pl/"> See project</a>
                        <span style={{marginLeft: "20px"}}><a target="_blank" href="https://github.com/aviral-verma/h3pl"> See Code</a></span>
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
