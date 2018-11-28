const initialState = {
	someText: 'header text',
	test: 1,
}

const todos = (state = initialState, action) => {
	switch (action.type) {

		case 'CHANGE_TEXT':
			return {
				...state,
				someText: action.someText,
			}

		default:
			return state
	}
}

export default todos
