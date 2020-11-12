// import loadable from '@loadable/component'
import DatePicker from './component/date-picker.js'

import Autocomplete from './component/autocomplete.js'

import React from 'react'

import ReactDOM from 'react-dom'

ReactDOM.render(
	<>
		<DatePicker />
		<h4 className='h3'>Then pick a language</h4>
		<Autocomplete />
	</>,
	globalThis.document.getElementById('application-date-picker')
)
