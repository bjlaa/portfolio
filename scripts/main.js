import $ from 'jquery';
import React from 'react';
import {ReactDOM, render} from 'react-dom';

import { Router, Route, Navigation, Link, browserHistory } from 'react-router';
import reactMixin from 'react-mixin';
/*
	Components Imports
*/
import FrontPage from '../components/front-page.js';
import Skills from '../components/skills.js';
import Work from '../components/work.js';
import AboutMe from '../components/about-me.js';
import NotFound from '../components/NotFound.js';

/*
	Data model:
*/

var data = {
  	work: [
		{	
			id: "11",
			title: "Build A Portfolio Site",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",

		},
		{	
			id:"12",
			title: "Online Resume",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
		
		},
		{
			id:"13",
			title: "Classic Arcade Game Clone",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
		
		},
		{
			id: "14",
			title: "Website Optimisation",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
	
		},
		{
			id: "15",
			title: "Neighborhood Map Project",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
		
		},
		{	
			id:"16",
			title:"Feed Reader Testing",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
			
		}
	],
	skills: [
		{
			id: "21",
			title: "HTML/CSS",
			imageAlt:"The HTML logo.",
			imageURL: "css/html.svg",
			keywords:["HTML5/CSS3", "Responsive Design", "Animations", "Sass"]
		},
		{
			id: "22",
			title: "Javascript",
			imageAlt:"The JS logo.",
			imageURL: "css/javascript.svg",
			keywords:["Javascript ES5 ES6", "jQuery", "Ajax"]
		},	
		{
			id: "23",
			title: "Frameworks",
			imageAlt: "The React logo.",
			imageURL: "css/react.svg",
			keywords:["React", "Bootstrap", "Backbone/Knockout", "Jasmine"]
		},	
	]
};


/*
	Main Component:
*/

class App extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<Skills data={data} />
				<Work data={data} />
				<AboutMe />
			</div>
		)
	}
}

reactMixin.onClass(App, Navigation);

/*
	Routes
*/
var routes = (
	<Router history={browserHistory} data={data}>
		<Route path="/" component={FrontPage}/>
		<Route path="/skills" component={Skills}/>
		<Route path="/work" component={Work}/>
		<Route path="/about-me" component={AboutMe}/>
		<Route path="*" component={NotFound}/>
	</Router>
)

/*
	Renders to the DOM element with the id "main"
*/

var main = $('#main').get(0);
/*
ReactDOM.render(<App data={data} />, main);*/
render(routes, main);



