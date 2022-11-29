import Header from './components/Header';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
function App() {
	return (
		<div className="w-screen h-screen">
			<Header className="text-red-500" />
			<CreateTodo />
			<TodoList />
		</div>
	);
}

export default App;
