import React from "react"

import portrait_img from "../../../main_assets/images/portrait.jpg"

import "./About_content.css"

const myIntroduction= "I am a mobile and web developer.";

const skills = [
	'python',
	'django',
	'react.js',
	'node.js',
	'sqlite',
	'java',
	'C/C++',
	'HTML & CSS',
	'javaScript',
	'Flutter',
	'Dart'
];

const skill_list = skills.map((skill) =>
	<li>{skill}</li>
);

const AboutContent = () => {
	return (
		<div className="about-content">
			<img src={portrait_img} alt="portrait" className="portrait"/>
			<div>
				<p className="introduction">{myIntroduction}</p>
				<p className="skill-statement">I am familiar with:</p>
				<ul className="my-skills">
					{skill_list}
				</ul>
				<a href="#" type="button" className="github-repo">My projects on github</a>
			</div>
		</div>
	)
}

export default AboutContent