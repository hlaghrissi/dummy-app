// MyComponent.js
import React from "react";

function testComponent() {
	const unusedVariable = "This is not used anywhere";
	return <div>Hello World!</div>;
}

function ComplexComponent({ condition1, condition2, condition3 }) {
	return (
		<div>
			{condition1 ? (
				<span>Condition 1</span>
			) : condition2 ? (
				condition3 ? (
					<span>Condition 2 and 3</span>
				) : (
					<span>Condition 2</span>
				)
			) : (
				<span>No conditions met</span>
			)}
		</div>
	);
}

export { testComponent, ComplexComponent };
