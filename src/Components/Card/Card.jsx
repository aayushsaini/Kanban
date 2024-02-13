import react from 'react';
import DropIndicator from '../Primitives/DropIndicator';

const Card = ({ id, title, description, column }) => {
	return (
		<>
			<DropIndicator
				beforeId={id}
				column={column}
			/>
			<div
				draggable="true"
				className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
			>
				<p className="text-sm text-neutral-100">{title}</p>
			</div>
			<DropIndicator
				beforeId={'-1'}
				column={column}
			/>
		</>
	);
};

export default Card;
