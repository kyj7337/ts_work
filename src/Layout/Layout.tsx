import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Header from './Header';
import Footer from './Footer';
import { Layout } from 'antd';

type LayoutProps = {
	children: React.ReactNode;
	// style: Object;
};
type Props = {};

const basicLayout = ({ children }: LayoutProps) => {
	// console.log(children);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header />
			<Layout.Content>{children}</Layout.Content>
			<Footer />
		</Layout>
	);
};

export default basicLayout;
