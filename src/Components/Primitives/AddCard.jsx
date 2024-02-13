import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const AddCard = ({ column, setCards }) => {
	const [text, setText] = useState('');
	const [adding, setAdding] = useState(false);
	return (
		<>
			{adding ? (
				<></>
			) : (
				<button className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50">
					<span>Add card</span>
					<FiPlus />
				</button>
			)}
		</>
	);
};

export default AddCard;
