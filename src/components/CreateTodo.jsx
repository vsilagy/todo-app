import React from 'react';

const CreateTodo = () => {
	return (
		<section className="container max-w-xl mx-auto mb-2">
			<form
				className="flex px-4"
				// onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="text"
					placeholder="Create a new todo..."
					className=" w-full py-4 px-2 text-lg rounded shadow-md placeholder:text-lightGrayishBlue dark:bg-veryDarkGrayishBlue outline-none"
					// value={input}
					// onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		</section>
	);
};

export default CreateTodo;
