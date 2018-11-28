const initialState = {
	form: {
		someText: 'header text',
	},
	test: 1,
}

const todos = (state = initialState, action) => {
	switch (action.type) {

		case 'CHANGE_TEXT':
			return {
				...state,
				form: {
					someText: action.someText,
				},
			}

		default:
			return state
	}
}

export default todos
