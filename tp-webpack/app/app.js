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
// à utiliser autour datepicker, 2nd exemple de la doc https://github.com/joshwnj/react-visibility-sensor
import VisibilitySensor from 'react-visibility-sensor/visibility-sensor'

class App extends React.Component {
	constructor() {
		super()
		// isActivated nous servira à savoir si l'utilisateur a envie d'interagir avec l'autocomplete
		this.state = { isActivated: false }
	}
	activate() {
		this.setState(() => ({
			isActivated: true,
		}))
	}
	// Génère un bout de HTML statique qui ressemble au composant final.
	// Au focus dans ce champs this.state.isActivated passe à true
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
				<Autocomplete />
			</>
		)
	}
}

ReactDOM.render(
	<App />,
	globalThis.document.getElementById('application-date-picker')
)
