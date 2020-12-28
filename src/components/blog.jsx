import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
				<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a target="_blank" href="https://aviralverma.medium.com/how-to-integrate-azure-monitor-with-ms-teams-fc6766344640" className="blog-img"><img src="images/blog1.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Nov 26, 2020 </small> | <small> Web Design </small></span>
							<h3><a target="_blank" href="https://aviralverma.medium.com/how-to-integrate-azure-monitor-with-ms-teams-fc6766344640">How To Integrate Azure Monitor With MS Teams</a></h3>
							<p>Keeping a track of critical alerts from all your cloud servers can be a daunting task...</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a target="_blank" href="https://medium.com/aviral-verma/showcase-your-work-as-a-software-developer-in-a-professional-way-7896c5b609d2?source=---------2------------------" className="blog-img"><img src="images/blog-1.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>May 19, 2019 </small> | <small> Web Design </small></span>
							<h3><a target="_blank" href="https://medium.com/aviral-verma/showcase-your-work-as-a-software-developer-in-a-professional-way-7896c5b609d2?source=---------2------------------">Showcase your work as a Software Developer in a professional way</a></h3>
							<p>Are you a busy developer without a website of your own? If yes, I've something for you...</p>
						</div>
					</div>
					</div>

					{/* <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
					<a target="_blank" href="https://aviralverma.medium.com/how-to-integrate-azure-monitor-with-ms-teams-fc6766344640" className="blog-img"><img src="images/blog2.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Oct 27, 2020 </small> | <small> Interview </small></span>
							<h3><a target="_blank" href="https://aviralverma.medium.com/how-i-got-an-interview-for-the-position-of-a-cto-b6f7f35abef7">How To Integrate Azure Monitor With MS Teams</a></h3>
							<p>I remember during my final year of undergrad at the Indian Institute of Technology Kanpur, I was looking for off-campus opportunities...</p>
						</div>
					</div>
					</div> */}
					{/* <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Make website from scratch</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div> */}
				</div>
				{/* <div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div> */}
			</div>
			</section>
      </div>
    )
  }
}
