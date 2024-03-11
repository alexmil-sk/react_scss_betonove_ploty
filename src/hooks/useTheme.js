import {useLayoutEffect, useState} from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';


const useTheme = () => {

	const [theme, setTheme] = useState(defaultTheme);

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme]);

	return {theme,setTheme};
}

export {useTheme};