import React from 'react';

const TodoInput = ({ input, setInput, todos, setTodos }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ id: todos.length + 1, title: input, isCompleted: false },
		]);
		setInput('');
	};
	return (
		<section className="container max-w-2xl mx-auto mb-2">
			<form className="flex px-4" onSubmit={handleSubmit}>
				<input
					type="text"
					name="text"
					placeholder="Create a new todo..."
					className=" w-full mx-4 py-4 px-2 text-lg rounded shadow-md placeholder:text-lightGrayishBlue dark:bg-veryDarkGrayishBlue outline-none"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		</section>
	);
};

export default TodoInput;
