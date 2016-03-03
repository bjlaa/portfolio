import React from "react";
import {Link} from 'react-router';

class Backbutton extends React.Component {
	render() {
		return (
			<Link to='/'>
				<button className="backbutton">
					<div>
						<i className="fa fa-arrow-circle-left"></i>
					</div>
				</button>
			</Link>
		)
	}
}

export default Backbutton;