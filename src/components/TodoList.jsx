import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const TodoList = ({ todos, setTodos }) => {
	const handleDelete = (id) => {
		setTodos([...todos].filter((todo) => todo.id !== id));
	};
	const handleComplete = (id) => {
		const updateList = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updateList);
	};
	return (
		<section className="container max-w-2xl mx-auto">
			<ul className="flex flex-col mx-4">
				{todos.map((todo) => (
					<li
						className="flex items-center justify-between p-4  first-of-type:rounded-t bg-white border-b border-veryLightGrayishBlue dark:bg-veryDarkGrayishBlue dark:border-darkGrayishBlue"
						key={todo.id}>
						<div className="flex gap-4">
							<input
								type="checkbox"
								checked={todo.isComplete ? true : false}
								onChange={() => handleComplete(todo.id)}
							/>
							<p className={todo.isComplete ? 'line-through' : ''}>
								{todo.title}
							</p>
						</div>
						<button onClick={() => handleDelete(todo.id)}>
							{<TfiClose />}
						</button>
					</li>
				))}
			</ul>
			<div className="mx-4">
				<p className="p-4 rounded-b shadow-lg bg-white dark:bg-veryDarkGrayishBlue">
					Remaining todos {todos.length}
				</p>
			</div>
		</section>
	);
};

export default TodoList;
