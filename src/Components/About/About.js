import './About.css';
import React from 'react';
import image from "../../../src/assets/pic.png";
import { Row, Col } from "react-bootstrap";

function About() {
	return (
		<section className="about pt-5">
			{/* Heading */}
			<Row>
				<Col className="text-center section-heading">
					<h2>About Me</h2>
				</Col>
			</Row>

			{/* Description */}
			<Row className="p-3">
				<Col md="6" className="d-flex my-image justify-content-center">
					<img src={image} alt="" />
				</Col>
				<Col className="p-4 pr-lg-5">
					<p className="into-text">
						A mechanician who enjoys solving challenging problems
						in the field of mechanical engineering by employing computational
						tools and then validating results with experiments.
						I did my Masters of Science (MS) from Arizona
						State University under the tutelage of
						Dr. Dhruv Bhate as a member of the 3DX Research Group.
						Currently looking for an advisor for a Ph.D. degree,
						who shares my research interests and passion for solving
						such problems. I am targeting admission for the Spring/Fall
						2021 semesters.
					</p>
				</Col>
			</Row>

			{/* Interests */}
			<Row className="pt-5">
				<Col className="border-right">
					<Row className="interests-skills text-center">
						<div className="mx-auto">

							<Col className="d-flex" sm="12">
								<i className="fas fa-cogs pr-2"></i>
								<p>
									Structural Computational Mechanics
						</p>
							</Col>
							<Col className="d-flex" sm="12">
								<i className="fas fa-magic pr-2"></i>
								<p>
									Design Optimization
						</p>
							</Col>
							<Col className="d-flex" sm="12">

								<i className="fas fa-magic pr-2"></i>
								<p>
									Additive Manufacturing
						</p>
							</Col>
							<Col className="d-flex" sm="12">
								<i className="fas fa-magic pr-2"></i>
								<p>
									Metamaterial Design
						</p>
							</Col>
							<Col className="d-flex" sm="12">
								<i className="fas fa-magic pr-2"></i>
								<p>
									Computational transport phenomenon
						</p></Col>
						</div>

					</Row>
				</Col>
				<Col className="d-flex justify-content-center align-items-center">
					<h3 className="interests-skills-heading">Research Interests</h3>
				</Col>
			</Row>

			{/* Skills */}
			<Row className="pt-5">
				<Col className="d-flex border-right justify-content-center align-items-center">
					<h3 className="interests-skills-heading">My SkillSet</h3>
				</Col>
				<Col>
					<Row className="interests-skills text-center">
						<div className="mx-auto">

							<Col className="d-flex" sm="12">
								<i className="fas fa-cogs pr-2"></i>
								<p>
									Structural Computational Mechanics
						</p>
							</Col>
							<Col className="d-flex" sm="12">
								<i className="fas fa-magic pr-2"></i>
								<p>
									Design Optimization
						</p>
							</Col>
							<Col className="d-flex" sm="12">

								<i className="fas fa-magic pr-2"></i>
								<p>
									Additive Manufacturing
						</p>
							</Col>
							<Col className="d-flex" sm="12">
								<i className="fas fa-magic pr-2"></i>
								<p>
									Metamaterial Design
						</p>
							</Col>
							<Col className="d-flex" sm="12">
								<i className="fas fa-magic pr-2"></i>
								<p>
									Computational transport phenomenon
						</p></Col>
						</div>

					</Row>
				</Col>
			</Row>
		</section>
	)
}

export default About
