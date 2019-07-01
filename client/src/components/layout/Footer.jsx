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
								<li><Link to="/" style={{fontFamily: "monospace"}} className="white-text brand-logo" ><i className="material-icons">vpn_key</i>{" "}Privacy Policy</Link></li>
								<li><Link to="/" style={{fontFamily: "monospace"}} className="white-text brand-logo" ><i className="material-icons">import_contacts</i>{" "}Code of Conduct</Link></li>
								<li><Link to="/" style={{fontFamily: "monospace"}} className="white-text brand-logo" ><i className="material-icons">report</i>{" "}Cookie Policy</Link></li>
							</ul>
						</div>
						<div className="col l3 s12">
							<br/>
							<ul>
								<li><Link to="/" style={{fontFamily: "monospace"}} className="white-text brand-logo" ><i className="material-icons">copyright</i>{" "}Copyright Policy</Link></li>
								<li><Link to="/" style={{fontFamily: "monospace"}} className="white-text brand-logo" ><i className="material-icons">info_outline</i>{" "}FAQ</Link></li>
								<li><Link to="/" style={{fontFamily: "monospace"}} className="white-text brand-logo" ><i className="material-icons">feedback</i>{" "}Contact & Feedback</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright center-align">
					<div className="container">
				 	letWork © 2019
				 	</div>
				</div>
			</footer>
		)
	}
}

export default Footer