import { useState } from 'react';
import useLocalStorage from './hook/useLocalStorage';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useLocalStorage('local-todos', [
		{
			id: 1,
			title: 'Make coffee',
			isComplete: true,
			isEditing: false,
		},
		{
			id: 2,
			title: 'Run a 5k',
			isComplete: false,
			isEditing: false,
		},
		{
			id: 3,
			title: 'Order food',
			isComplete: false,
			isEditing: false,
		},
		{
			id: 4,
			title: 'Finish todo app',
			isComplete: false,
			isEditing: false,
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
