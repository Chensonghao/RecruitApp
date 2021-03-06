const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//reducer
export function auth(state = { isAuth: false, user: '' }, action) {
	switch (action.type) {
		case LOGIN:
			return { ...state, isAuth: true };
			break;
		case LOGOUT:
			return { ...state, isAuth: false };
			break;
		default:
			return state;
	}
}

//action
export function login() {
	return {
		type: LOGIN
	};
}
export function logout() {
	return {
		type: LOGOUT
	};
}
