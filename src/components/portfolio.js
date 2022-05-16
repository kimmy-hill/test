import React from 'react';
import Project from './project'
import RPG from '../assets/RPG.png'
import Code from '../assets/CQ.png'
import Tech from '../assets/TD.png'
import Budget from '../assets/BT.png'
import Weather from '../assets/WD.png'
import Note from '../assets/NT.png'

function Portfolio() {

const projectInfo = [

{
name: "Random Password Generator",
link: 'https://kimmy-hill.github.io/Random_Password_Generator/',
githubLink: 'https://github.com/kimmy-hill/Random_Password_Generator',
image: RPG
},
{
name: "Coding Quiz",
link: 'https://kimmy-hill.github.io/coding_quiz/',
githubLink: 'https://github.com/kimmy-hill/coding_quiz',
image: Code
},
{
name: "Tech Blog",
link: 'https://enigmatic-chamber-67717.herokuapp.com',
githubLink: 'https://github.com/kimmy-hill/Tech-Blog',
image: Tech
},
{
name: "Budget Tracker",
link: 'https://stark-inlet-08375.herokuapp.com',
githubLink: 'https://github.com/kimmy-hill/Budget-Tracker',
image: Budget
},
{
name: "Weather Data App",
link: 'https://kimmy-hill.github.io/Weather_Data/' ,
githubLink: 'https://github.com/kimmy-hill/Weather_Data',
image: Weather
},
{
name: "Note Taker",
link: 'https://mysterious-earth-23188.herokuapp.com',
githubLink: 'https://github.com/kimmy-hill/NoteTaker',
image: Note
}
]

  return (
<div class="container d-flex flex-column align-items-center justify-content-between portfolio-page" >
  <div class="row">
	<Project info = {projectInfo[0]}/>
  	<Project info = {projectInfo[1]}/>
  </div>
 
<div class="row">
	<Project info = {projectInfo[2]}/>
  	<Project info = {projectInfo[3]}/>
  </div>

<div class="row">
	<Project info = {projectInfo[4]}/>
  	<Project info = {projectInfo[5]}/>
  </div>

</div>


  );
}

export default Portfolio;