import React from 'react'
import Logo from '../../assets/images/zurich-logo.png';
import { Link , useNavigate} from 'react-router-dom';
import Sidebar from '../../shared/components/Sidebar';

const Home = () => {
  
    const navigate = useNavigate();

    return (
        
                            <div className="row edit-matrics">
                                <div className="col-12 col-xl-5">
                                    <div className="text-center text-lg-start pt-4 pb-3 ps-3">
                                        <div className="text-center">
                                            <span className="h1 --primary-text border-bottom border-2 border-primary ">Welcome Admin</span>
                                        </div>
                                        <ul className="pt-3">
                                            <li className="--primary-text">Here the metric list will be displayed.</li>
                                            <li className="--primary-text">By this we can define weightage and eligible for customer view of an Indicidual.</li>
                                        </ul>
                                    </div>
                                  {/*  <div className="bg-white mb-4 p-4 shadow-sm bg-body rounded">
                                        <div className="">
                                            <div className="">
                                                <h4>EDIT METRIC CONFIGURATION</h4>
                                            </div>
                                            <div className="d-flex w-100 pt-3">
                                                <div className="pe-2">
                                                    <p className="m-0">MATRIC NAME</p>
                                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                                <div className="">
                                                    <p className="m-0">WEIGHTAGE % </p>
                                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center pt-3">
                                                <div className="pe-2">
                                                    <p className="m-0">CUSTOMER CAN VIEW</p>
                                                </div>
                                                <div className="form-check d-flex align-items-center">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>  

                                    <div className="bg-white mb-4 p-4 shadow-sm bg-body rounded">
                                        <div className="">
                                            <div className="">
                                                <h4>ADD METRICS</h4>
                                            </div>
                                            <div className="d-flex w-100 pt-3">
                                                <div className="pe-2">
                                                    <p className="m-0">MATRIC NAME</p>
                                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                                <div className="">
                                                    <p className="m-0">WEIGHTAGE % </p>
                                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center pt-3">
                                                <div className="pe-2">
                                                    <p className="m-0">CUSTOMER CAN VIEW</p>
                                                </div>
                                                <div className="">
                                                    <button type="button" className="btn btn-light me-2">YES</button>
                                                    <button type="button" className="btn btn-light">No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                */}
                                </div>
                               {/* <div className="col-12 col-xl-7">
                                    <div className="--grey-bg text-center py-4">
                                        <div className="bg-light">
                                            <div className="">
                                                <h5 className="text-start p-3 m-0">Matrics</h5>
                                            </div>
                                            <table className="table bg-light">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="border-end-1 border-1 border-start-0 border-top-0">#</th>
                                                        <th scope="col" className="border-end-1 border-1 border-top-0">Metric</th>
                                                        <th scope="col" className="border-end-1 border-1 border-top-0">Weightage %</th>
                                                        <th scope="col" className="border-end-1 border-1 border-top-0">Customer Can View</th>
                                                        <th scope="col" className="border-top-0">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { }
                                                    <tr>
                                                        <th scope="row" className="border-end-1 border-start-0 border-1 ">1</th>
                                                        <td className="border-end-1 border-1 ">APE Issued</td>
                                                        <td className="border-end-1 border-1 ">5%</td>
                                                        <td className="border-end-1 border-1 ">Yes</td>
                                                        <td><img src="images/edit-icon.png" width="17px" alt="edit-image" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                   
    )
}

export default Home