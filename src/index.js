import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { counter } from './store/count.redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

const store = createStore(
	counter,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f //chrome redux调试
	)
);
class AppText extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props);
		return (
			<h1>
				AppText router {this.props.match.params.text}
			</h1>
		);
	}
}
class Page1 extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props);
		return (
			<h1>
				Page1 router {this.props.match.params.text}
			</h1>
		);
	}
}
class Page2 extends React.Component {
	render() {
		return <h1>Page2 router</h1>;
	}
}
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Link to="/">跳转app</Link>
				<Link to="/page1/111">page1</Link>
				<Link to="/page2">page2</Link>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path="/page1" component={Page1} />
					<Route path="/page2" component={Page2} />
					<Route path="/:text" component={AppText} />
					<Redirect to="/" />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
