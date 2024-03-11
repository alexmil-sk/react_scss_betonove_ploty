import {useState, useEffect} from 'react';


const useLocalStorage = (initialValue, key) => {
	const getValue = () => {
		const ls = localStorage.getItem(key);

		if (ls) {
			return JSON.parse(ls);
		}
		return initialValue;
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	});

	return {value, setValue};
};

export {useLocalStorage};