import { useState } from 'react';
import Header from './components/Header';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
function App() {
	const [input, setInput] = useState('');
	return (
		<div className="w-screen h-screen">
			<Header />
			<CreateTodo />
			<TodoList />
		</div>
	);
}

export default App;
