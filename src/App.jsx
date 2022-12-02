import { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Buy coffee',
			isComplete: true,
		},
		{
			id: 2,
			title: 'Memento Mori',
			isComplete: true,
		},
		{
			id: 3,
			title: 'Finish todo app',
			isComplete: false,
		},
	]);
	return (
		<div className="w-screen h-screen">
			<Header />
			<TodoInput
				input={input}
				setInput={setInput}
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
