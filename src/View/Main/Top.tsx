import React, { useState } from 'react';
type Format = {
	table: string;
};
const Top = ({ table }: Format) => {
	const [name, setName] = useState('');
	console.log(name);
	console.log(table);
	return (
		<div>
			<input type="text" onChange={(e) => setName(e.target.value)} />
		</div>
	);
};

export default Top;
