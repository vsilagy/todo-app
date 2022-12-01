import React from 'react';

const TodoList = ({ todos }) => {
	return (
		<section className="container max-w-2xl mx-auto">
			<ul className="flex flex-col mx-4 p-4 group-first:rounded-t last:rounded-b">
				{todos.map((todo) => (
					<li
						className="px-4 py-4 shadow-lg list-rounded last:border-none bg-white border-b border-veryLightGrayishBlue dark:bg-veryDarkGrayishBlue dark:border-darkGrayishBlue "
						key={todo.id}>
						{todo.title}
					</li>
				))}
			</ul>
		</section>
	);
};

export default TodoList;
