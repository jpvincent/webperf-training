import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

// import DatePicker from './component/date-picker.js'
const DatePicker = React.lazy(() =>
	import(/* webpackChunkName: "date-picker" */ './component/date-picker.js')
)

import loadable from '@loadable/component'
// import Autocomplete from './component/autocomplete.js'
const Autocomplete = loadable(() =>
	import(/* webpackChunkName: "autocomplete" */ './component/autocomplete.js')
)

ReactDOM.render(
	<>
		<Suspense fallback={<div>Chargement…</div>}>
			<DatePicker />
		</Suspense>
		<h4 className='h3'>Then pick a language</h4>
		<Autocomplete />
	</>,
	globalThis.document.getElementById('application-date-picker')
)
