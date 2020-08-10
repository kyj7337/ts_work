import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Modal, Menu, Drawer } from 'antd';
import {
	LogoutOutlined,
	UnorderedListOutlined,
	TeamOutlined,
	TagsOutlined,
	SoundOutlined,
	LoginOutlined,
	CarOutlined,
	HomeOutlined,
	MenuFoldOutlined,
	CustomerServiceOutlined,
	BellOutlined,
	UserOutlined,
	EnvironmentOutlined,
} from '@ant-design/icons';
import './header.css';

const Header = () => {
	return (
		<div className="header-view">
			<div className="inner-header-view">
				<div>
					<img className="header-logo" src={require('./imgs/ferrari_logo.png')} alt="logo" />
				</div>
				<div className="menu-txt">
					<div className="for-space">
						<span className="tab">홈</span>
						<span className="tab">
							<a href="/counter">ts-redux</a>
						</span>
						<span className="tab">연락</span>
						<span className="tab">잇스토어 클론하기</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default compose(withRouter)(Header);
