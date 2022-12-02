import { useState } from 'react';

const TodoInput = ({ input, setInput, todos, setTodos }) => {
	const [todoId, setTodoId] = useState(5);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (input.trim().length === 0) return;
		setTodos([
			...todos,
			{ id: todoId, title: input, isCompleted: false },
		]);
		setInput('');
		setTodoId((prevId) => prevId + 1);
	};
	const handleInput = (e) => {
		setInput(e.target.value);
	};
	return (
		<section className="container max-w-2xl mx-auto mb-8">
			<form className="flex" onSubmit={handleSubmit}>
				<input
					type="text"
					name="text"
					placeholder="Create a new todo..."
					className=" w-full mx-4 p-4 text-lg rounded shadow-md placeholder:text-lightGrayishBlue placeholder:dark:text-darkGrayishBlue dark:bg-veryDarkGrayishBlue outline-none focus:ring-2 dark:ring-white ring-brightBlue"
					value={input}
					onChange={handleInput}
				/>
			</form>
		</section>
	);
};

export default TodoInput;
