import { useState } from 'react';
import close from '../assets/icon-cross.svg';

const TodoList = ({ todos, setTodos }) => {
	const [filter, setFilter] = useState('all');
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
	const handleClear = () => {
		const completed = todos.filter((todo) => !todo.isComplete);
		setTodos(completed);
	};
	const todosFiltered = (filter) => {
		if (filter === 'all') {
			return todos;
		} else if (filter === 'active') {
			return todos.filter((todo) => !todo.isComplete);
		} else if (filter === 'completed') {
			return todos.filter((todo) => todo.isComplete);
		}
	};
	return (
		<section className="container max-w-2xl mx-auto">
			{todos.length > 0 ? (
				<ul className="flex flex-col mx-4">
					{todosFiltered(filter).map((todo) => (
						<li
							className="flex items-center justify-between p-4 first-of-type:rounded-t bg-white border-b border-veryLightGrayishBlue dark:bg-veryDarkGrayishBlue dark:border-darkGrayishBlue"
							key={todo.id}>
							<div className="flex gap-4 w-full mr-4">
								<input
									type="checkbox"
									checked={todo.isComplete ? true : false}
									onChange={() => handleComplete(todo.id)}
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
										className="px-1 bg-white dark:bg-veryDarkGrayishBlue w-full rounded outline-none ring-2 ring-brightBlue dark:ring-veryLightGrayishBlue"
									/>
								)}
							</div>
							<button onClick={() => handleDelete(todo.id)}>
								<img src={close} alt="delete todo" />
							</button>
						</li>
					))}
				</ul>
			) : (
				<div className="relative mx-4 p-4 text-center rounded-t bg-white dark:bg-veryDarkGrayishBlue bg-[">
					<h2 className="text-xl pt-8">
						Your peace of mind is priceless
					</h2>
					<p className="pb-8 border-b border-veryLightGrayishBlue dark:border-darkGrayishBlue">
						You're all done for today
					</p>
				</div>
			)}
			<div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-1 mx-4 p-4 text-veryDarkGrayishBlue dark:text-darkGrayishBlue bg-white dark:bg-veryDarkGrayishBlue  rounded-b shadow-lg text-xs md:text-sm">
				<p className="order-last sm:order-first">
					{remainingTodos()} tasks left
				</p>
				<div className="flex gap-2">
					<button
						onClick={() => setFilter('all')}
						className={
							filter === 'all' ? 'text-brightBlue font-bold' : ''
						}>
						All
					</button>
					<button
						onClick={() => setFilter('active')}
						className={
							filter === 'active' ? 'text-brightBlue font-bold' : ''
						}>
						Active
					</button>
					<button
						onClick={() => setFilter('completed')}
						className={
							filter === 'completed'
								? 'text-brightBlue font-bold'
								: ''
						}>
						Completed
					</button>
				</div>
				<button
					onClick={() => handleClear()}
					className="active:text-brightBlue active:font-bold">
					Clear Completed
				</button>
			</div>
		</section>
	);
};

export default TodoList;
