import React, { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState({
		primary: {
			blue: '#4169E1',
		},
		secondary: {
			grey: '#eee',
		},
		backgroundcolor: {
			primary: '#000000',
		},
		textcolor: {
			light: '#ffffff',
			dark: '#222222',
			black: 'black',
		},
		transparent: 'transparent',
		current: 'inherit',
	});
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
