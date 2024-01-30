class StatefulComponent extends React.Component {
	state = { count: 0 };

	incrementCount() {
		this.state.count += 1; // Directly modifying state
	}

	render() {
		return <button onClick={() => this.incrementCount()}>Increment</button>;
	}
}

