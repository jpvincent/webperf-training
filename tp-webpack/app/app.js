import loadable from '@loadable/component'
// import DatePicker from './component/date-picker.js'
const DatePicker = loadable(() =>
	import(/* webpackChunkName: "date-picker" */ './component/date-picker.js')
)

import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(
	<DatePicker />,
	globalThis.document.getElementById('application-date-picker')
)
