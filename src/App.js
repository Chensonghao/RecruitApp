// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { createStore } from 'redux';
// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<h1 className="App-title">Welcome to React</h1>
// 				</header>
// 				<p className="App-intro">
// 					To get started, edit <code>src/App.js</code> and save to reload.
// 				</p>
// 			</div>
// 		);
// 	}
// }
//
import React from 'react';
import { connect } from 'react-redux';
import { addCount, removeCount, addCountAsync } from './store/count.redux';
import { Button } from 'antd-mobile';

// const mapStateToProps = state => {
// 	return {
// 		num: state
// 	};
// };
// const actionCreators = { addCount, addCountAsync, removeCount };
//App = connect(mapStateToProps, actionCreators)(App);

@connect(
	//你要什么state属性放入props
	state => ({ num: state }),
	//你要什么方法放入props,自动dispatch
	{ addCount, addCountAsync, removeCount }
)
class App extends React.Component {
	render() {
		const addCount = this.props.addCount;
		const removeCount = this.props.removeCount;
		const addCountAsync = this.props.addCountAsync;
		const num = this.props.num;
		return (
			<div>
				<App1 name="p1name" />
				<App2 name="p2name" />
				<h1>
					数量：{num}
				</h1>
				<Button onClick={addCount}>加一</Button>
				<Button onClick={removeCount}>减一</Button>
				<Button onClick={addCountAsync}>一s后加一</Button>
			</div>
		);
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps');
	}
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return true;
	}
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
}

function App2(props) {
	return (
		<div>
			hahah{props.name}
		</div>
	);
}
class App1 extends React.Component {
	constructor() {
		super();
		this.state = {
			colors: ['#333', '#666']
		};
	}
	render() {
		console.log('render');
		return (
			<div>
				hahah{this.props.name}
				<Button type="primary" onClick={this.onClick}>
					点击
				</Button>
				<ul>
					{this.state.colors.map(c => {
						return (
							<li key={c}>
								{c}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	onClick = () => {
		console.log('clicked');
		this.setState({
			colors: ['#333', '#666', '#999']
		});
	};
}
export default App;
