import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const TodoList = ({ todos, setTodos, input, setInput }) => {
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
	const handleEdit = (id) => {
		const updateList = todos.map((todo) => {
			if (todo.id === id) {
				todo.isEditing = true;
			}
			return todo;
		});
		setTodos(updateList);
	};
	const handleUpdate = (event, id) => {
		const updateList = todos.map((todo) => {
			if (todo.id === id) {
				if (event.target.value.trim().length === 0) {
					todo.isEditing = false;
					return todo;
				}
				todo.title = event.target.value;
				todo.isEditing = false;
			}
			return todo;
		});
		setTodos(updateList);
	};
	const remainingTodos = () => {
		return todos.filter((todo) => !todo.isComplete).length;
	};
	console.log(remainingTodos());
	return (
		<section className="container max-w-2xl mx-auto">
			{todos.length > 0 ? (
				<ul className="flex flex-col mx-4">
					{todos.map((todo) => (
						<li
							className="flex items-center justify-between p-4 first-of-type:rounded-t bg-white border-b border-veryLightGrayishBlue dark:bg-veryDarkGrayishBlue dark:border-darkGrayishBlue"
							key={todo.id}>
							<div className="flex gap-4 w-full mr-4">
								<input
									type="checkbox"
									checked={todo.isComplete ? true : false}
									onChange={() => handleComplete(todo.id)}
									className="outline-none"
								/>
								{!todo.isEditing ? (
									<p
										onDoubleClick={() => handleEdit(todo.id)}
										className={
											todo.isComplete
												? 'line-through cursor-pointer'
												: 'cursor-pointer'
										}>
										{todo.title}
									</p>
								) : (
									<input
										onBlur={(e) => handleUpdate(e, todo.id)}
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												handleUpdate(e, todo.id);
											}
										}}
										type="text"
										defaultValue={todo.title}
										autoFocus
										className="px-1 bg-white dark:bg-veryDarkGrayishBlue w-full rounded outline-none ring-2 ring-veryDarkBlue dark:ring-veryLightGrayishBlue"
									/>
								)}
							</div>
							<button onClick={() => handleDelete(todo.id)}>
								{<TfiClose />}
							</button>
						</li>
					))}
				</ul>
			) : (
				<div className="mx-4 p-4 text-center rounded-t bg-white dark:bg-veryDarkGrayishBlue">
					<h2 className="text-xl pt-8">
						Your peace of mind is priceless
					</h2>
					<p className="pb-8 border-b border-veryLightGrayishBlue dark:border-darkGrayishBlue">
						You're all done for today
					</p>
				</div>
			)}
			<div className="mx-4">
				<p className="p-4 rounded-b shadow-lg bg-white dark:bg-veryDarkGrayishBlue">
					Remaining todos {remainingTodos()}
				</p>
			</div>
		</section>
	);
};

export default TodoList;
