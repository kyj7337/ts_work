import React from 'react';
import Loadable from 'react-loadable';
import SpinContainer from '../components/SpinContainer';

export const Main = Loadable({
	loader: () => import('./Main/Main'),
	loading: () => <SpinContainer />,
});

export const Contact = Loadable({
	loader: () => import('./Contact/ContactView'),
	loading: () => <SpinContainer />,
});
