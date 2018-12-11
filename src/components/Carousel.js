import React, { Component } from 'react';
import yinyangSky from '../yinyangSky.jpg';
import yinyangPuzzle from '../yinyangPuzzle.jpg';
import treepose from '../treepose.png';
import crunchiBlush from '../crunchiBlush.png';
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
			<Carousel className="carousel" animation = "slide" animationDuration = "1000" dots dotColor = "#F608DDFF" dotActiveColor = "black">
				<img className="carouselImages" src={yinyangPuzzle} alt="Yoga" /> 
				<img className="carouselImages" src={yinyangSky} alt="Reiki"/>
				<img className="carouselImages" src={crunchiBlush} alt="Crunchi"/>
			</Carousel>
		); 
	}
}

