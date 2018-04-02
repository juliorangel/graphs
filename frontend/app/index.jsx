import React from 'react'
import ReactDOM from 'react-dom'
import GraphComponent from './graphComponent'
import WorldMap from './worldMap'

ReactDOM.render (
	// <GraphComponent />
	// <GraphComponent data={[5,8,1,3]} size={[500,500]} />
	<WorldMap />
	, document.getElementById('app')
)