import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return(
			<footer className="page-footer yellow darken-4">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<Link to="/" style={{fontFamily: "monospace"}} >
								<h4 className="white-text">
									<i className="material-icons">code</i>{" "}letWork
								</h4>
							</Link>
							<p className="grey-text text-lighten-4">We are a team of university students working on this project. It's like our full time job. Any contributions are greatly appreciated and would help enhance the development process.</p>
						</div>
						<div className="col l3 s12">
							<br/>
							<ul>
								<li><h6 className="white-text"><a className="white-text" href="#!">Privacy Policy</a></h6></li>
								<li><h6 className="white-text"><a className="white-text" href="#!">Community Guidelines</a></h6></li>
								<li><h6 className="white-text"><a className="white-text" href="#!">Cookie Policy</a></h6></li>
							</ul>
						</div>
						<div className="col l3 s12">
							<br/>
							<ul>
								<li><h6 className="white-text"><a className="white-text" href="#!">Copyright Policy</a></h6></li>
								<li><h6 className="white-text"><a className="white-text" href="#!">FAQ</a></h6></li>
								<li><h6 className="white-text"><a className="white-text" href="#!">Contact & Feedback</a></h6></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright center-align">
					<div class="container">
				 	letWork © 2019 &nbsp;
				 	</div>
				</div>
			</footer>
		)
	}
}

export default Footer