import React, { Component } from 'react';
import yinyangSky from '../yinyangSky.jpg';
import '../App.css';
import Carousel from 'react-easy-carousel'

export default class Cycle extends Component {
	constructor() {
		super();
		this.state = {
			modalities: []
		};
	}



	render() {
		return (
			<Carousel animation = "slide" animationDuration = "1000" dots dotColor = "#F608DDFF" dotActiveColor = "black">
				<img src={yinyangSky} alt="Yoga" /> 
				<img src={yinyangSky} alt="Reiki"/>
				<img src={yinyangSky} alt="Crunchi"/>
			</Carousel>
		); 
	}
}

