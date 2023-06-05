import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<>
			<p>{count}</p>
			<button onClick={increment}>Add</button>
			<button onClick={decrement}>Subtract</button>
		</>
	);
}

export default App;
