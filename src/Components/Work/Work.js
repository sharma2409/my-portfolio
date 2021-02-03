
import './Work.css';
import React from 'react'
import { Row, Col } from "react-bootstrap";
import Shockwave from "../../assets/Shockwave.jpg";
import blast from "../../assets/blast.jpg";
import stress from "../../assets/stress.png";
import cnn from "../../assets/cnn.jpg";


function Work() {
	return (
		<section className="work  py-5 px-5">
			<Row>
				<Col className="text-center section-heading">
					<h2>My Work</h2>
				</Col>
			</Row>
			<div className="container">
				<Row className="mt-3">
					<Col md="6" className="my-3">
						<div className="my-project">
							<img src={Shockwave} alt="laser driven shockwaves" />
							<div className="overlay p-3 text-center flex-column">
								<h5>Finite Element Analysis of Laser Driven Shockwaves</h5>
								<a href="https://github.com/sharma2409/Finitelement-code-laser-driven-focusing-shockwave" rel="noreferrer" target="_blank" className="btn mt-4">View Code</a>
							</div>
						</div>
					</Col>
					<Col md="6" className="my-3">
						<div className="my-project">
							<img src={blast} alt="Finite Element Analysis" />
							<div className="overlay p-3 text-center flex-column">
								<h5>Finite Element Analysis of Rubber Cap subjected to Blast Loading</h5>
								<a href="https://github.com/sharma2409/FEA-Rubber-Cap-subjected-to-blast-load" rel="noreferrer" target="_blank" className="btn mt-4">View Code</a>
							</div>
						</div>
					</Col>
					<Col md="6" className="my-3">
						<div className="my-project">
							<img src={stress} alt="Stress constrained Topology" />
							<div className="overlay p-3 text-center flex-column">
								<h5>Stress constrained Topology Optimization</h5>
								<a href="https://github.com/sharma2409/Stress-Constrained-TopOpt" rel="noreferrer" target="_blank" className="btn mt-4">View Code</a>
							</div>
						</div>
					</Col>
					<Col md="6" className="my-3">
						<div className="my-project">
							<img src={cnn} alt="Convolutional Neural Networks" />
							<div className="overlay p-3 text-center flex-column">
								<h5>Real time learning of Material Constitutive Models using Convolutional Neural Networks</h5>
								<a href="https://github.com/sharma2409/Real-time-Learning-of-Material-Constitutive-Models-Using-Convolutional-Neural-Networks" rel="noreferrer" target="_blank" className="btn mt-4">View Code</a>
							</div>
						</div>
					</Col>
					<div id="for-work"></div>

				</Row>

			</div>

		</section>
	)
}

export default Work
