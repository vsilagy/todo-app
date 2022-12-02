import { useState } from 'react';
import useLocalStorage from './hook/useLocalStorage';
import data from './assets/data';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useLocalStorage('local-todos', data);

	return (
		<div className="w-screen h-screen flex flex-col overflow-hidden">
			<Header />
			<TodoInput
				input={input}
				setInput={setInput}
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
			<Footer />
		</div>
	);
}

export default App;
