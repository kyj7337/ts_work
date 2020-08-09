import React from 'react';
import { Button } from 'antd';
import Top from './Top';
import './Main.css';

const Main = () => {
	return (
		<div className="main">
			타입스크립트로 만든 작업물이될것입니다.
			{/* <Top table="xpdlqmf" /> */}
			<Button type="primary" className="ant-btn" onClick={() => alert('antd')}>
				엔트디 버튼
			</Button>
		</div>
	);
};

export default Main;
