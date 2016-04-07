/*
	Loader Component
	<Loader />
*/

import React from 'react';


class Loader extends React.Component {
	render() {
		return(
			<div className="loader">Loading...
				<br/>
				<br/>
				<i className="hourglass fa fa-hourglass"></i>
			</div>

		)
	}
}

export default Loader;