import loadable from '@loadable/component'
// import DatePicker from './component/date-picker.js'
const DatePicker = loadable(() =>
	import(/* webpackChunkName: "date-picker" */ './component/date-picker.js')
)

// import Autocomplete from './component/autocomplete.js'
const Autocomplete = loadable(() =>
	import(/* webpackChunkName: "autocomplete" */ './component/autocomplete.js')
)

import React from 'react'

import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor() {
		super()
		this.state = { isActivated: false }
	}
	activate() {
		this.setState(() => ({
			isActivated: true,
		}))
	}

	fakeAutocomplete() {
		return (
			<div role='combobox' className='react-autosuggest__container'>
				<input
					type='text'
					className='react-autosuggest__input'
					placeholder="Type 'c'"
					value=''
					onFocus={this.activate.bind(this)}
				/>
			</div>
		)
	}

	render() {
		return (
			<>
				<DatePicker />
				<h4 className='h3'>Then pick a language</h4>
				{!this.state.isActivated ? this.fakeAutocomplete() : <Autocomplete />}
			</>
		)
	}
}

ReactDOM.render(
	<App />,
	globalThis.document.getElementById('application-date-picker')
)
