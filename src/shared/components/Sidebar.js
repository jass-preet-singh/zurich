import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dash from '../../assets/images/dash.png';
import Band from '../../assets/images/bands-icon.png';
import AdminView from '../../assets/images/admin-view.png';
import RightArrow from '../../assets/images/32213.png'
// import { useRouter } from "next/router";


const sidebar = () => {
	// const router = useRouter();
	// const [active, setActive] = useState('');

	// useEffect(() => {
	// 	if (router.pathname = '/matrics') {
	// 		setActive('matrics');
	// 	} else if (router.pathname = '/') {
	// 		setActive('home');
	// 	} else {
	// 		setActive('home');
	// 	}
	// }, [])



	return (
		<div>
			<div className="main_sidebar  --primary-bg h-100">
				<div className="side-bar">
					<div className="sidebar-header pt-2">
						<div className="px-4">
							<p className="text-light border-light-opacity py-2 ">MENU</p>
						</div>
						<div className="sidebar-content">
							<div className="sidebar-sub-content d-flex justify-content-between px-4 py-2" activeClassName="is-active">
								<div className="d-grid align-items-center">
									<img src={Dash} alt="" className="w-100" />
									<div className="ellipsis w-100 ps-3 pe-1">
										{/* <Link className="text-light text-decoration-none" to='/matrics'>METRIC CONFIRURATION</Link> */}
										<NavLink className="text-light text-decoration-none navbar-item" activeClassName="is-active" to="/matrics">
											METRIC CONFIGURATION
										</NavLink>
									</div>
									<div className="arrow-icon w-100 d-flex align-items-center justify-content-end">
										<img src={RightArrow} alt="" className='w-75' />
									</div>
								</div>
							</div>
						</div>
						<div className="sidebar-content">
							<div className="sidebar-sub-content d-flex justify-content-between px-4 py-2">
								<div className="d-grid align-items-center">
									<img src={Band} alt="" className="w-100" />

									<div className="ellipsis w-100 ps-3 pe-1">
										<Link className="text-light text-decoration-none" to='/matrics'>BANDS</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="sidebar-content">
							<div className="sidebar-sub-content d-flex justify-content-between px-4 py-2">
								<div className="d-grid align-items-center">
									<img src={AdminView} alt="" className="w-100" />

									<div className="ellipsis w-100 ps-3 pe-1">
										<Link className="text-light text-decoration-none" to='/matrics'>QUIZ</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default sidebar