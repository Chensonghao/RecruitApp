// import { createStore } from 'redux';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
//reducer
export function counter(state = 0, action) {
	switch (action.type) {
		case ADD:
			return state + 1;
		case REMOVE:
			return state - 1;
		default:
			return 10;
	}
}

//action add
export function addCount() {
	return {
		type: ADD
	};
}
//action remove
export function removeCount() {
	return {
		type: REMOVE
	};
}

export function addCountAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type: ADD
			});
		}, 1000);
	};
}
// const store = createStore(counter);
// console.log(store.getState());
// //事件监听变化
// store.subscribe(() => {
// 	console.log(store.getState());
// });
// store.dispatch({
// 	type: 'add'
// });
// store.dispatch({
// 	type: 'remove'
// });
// export default store;
