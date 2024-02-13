import React, { useState } from 'react';
import Card from '../Card/Card';
import AddCard from '../Primitives/AddCard';
const Column = (props) => {
	const { title, headingColor, column, cards, setCards } = props;
	const [active, setActive] = useState(false);
	const filteredCards = cards.filter((card) => card.column === column);
	return (
		<div className="w-60 shrink-0">
			<div className="mb-3 flex items-center justify-between">
				<h3 className={`text-${headingColor}-300 font-medium`}>
					{title}
				</h3>
				<span className="rounded text-sm text-neutral-400">
					{filteredCards?.length}
				</span>
			</div>
			<div
				className={`h-full w-full transition-colors 
        ${!active ? 'bg-neutral-800/50' : 'bg-neutral-800/0'}`}
			>
				{filteredCards?.map((card) => (
					<Card
						key={card.id}
						{...card}
					/>
				))}
				<AddCard
					column={column}
					setCards={setCards}
				/>
			</div>
		</div>
	);
};

export default Column;
