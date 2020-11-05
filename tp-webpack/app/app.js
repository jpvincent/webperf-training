import DatePicker from './component/date-picker.js'

import ReactDOM from 'react-dom'

ReactDOM.render(
	<DatePicker
		language='English'
		colorsPalette='enabled'
		format='YY-MM-DD'
		selectAllButton='enabled'
		startDate={new Date(2000, 8, 21)}
		endDate={new Date(2024, 9, 21)}
		firstDayOfWeekIndex={0}
		pickMethod='range'
		defaultColor='#178905'
		daysAmountTab='enabled'
		boardsNum={2}
	/>,
	globalThis.document.getElementById('application-date-picker')
)
