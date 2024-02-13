import React, { useState } from 'react';
import Column from '../Column/Column';
import BurnBarrel from '../Primitives/BurnBarrel';

const Board = () => {
	const [cards, setCards] = useState(defaultCards);
	return (
		<div className="flex h-full w-full gap-3 overflow-scroll p-12">
			<Column
				title="Backlog"
				headingColor="red"
				column="backlog"
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title="To-Do"
				headingColor="blue"
				column="to-do"
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title="In Progress"
				headingColor="lime"
				column="in-progress"
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title="Done"
				headingColor="teal"
				column="done"
				cards={cards}
				setCards={setCards}
			/>
			<BurnBarrel setCards={setCards} />
		</div>
	);
};

const defaultCards = [
	{
		id: 1,
		title: 'Card 1',
		description: 'Description of card 1',
		column: 'backlog',
	},
	{
		id: 2,
		title: 'Card 2',
		description: 'Description of card 2',
		column: 'backlog',
	},
	{
		id: 3,
		title: 'Card 3',
		description: 'Description of card 3',
		column: 'done',
	},
	{
		id: 4,
		title: 'Card 4',
		description: 'Description of card 4',
		column: 'to-do',
	},
	{
		id: 5,
		title: 'Card 5',
		description: 'Description of card 5',
		column: 'in-progress',
	},
];

export default Board;
