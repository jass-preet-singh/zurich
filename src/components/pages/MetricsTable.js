import Sidebar from '../../shared/components/Sidebar'
import TableData from "../json-data/data"
import EditIcon from "../../assets/images/edit-icon.png"
import Popup from "reactjs-popup";
import Form from "react-validation/build/form";
import React, { useEffect, useRef, useState } from 'react';
import { Modal, SSRProvider } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AuthService from "../../shared/Services/auth.service";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const MetricsTable = (tableData) => {
	const [data, setData] = useState([])
	const [addShow, setAddShow] = useState(false);
	const [editShow, setEditShow] = useState(false);
	const [metric, setMetric] = useState("");
	const [id, setId] = useState("");
	const [weightage, setWeightage] = useState(null);
	const [customerView, setCustomerView] = useState("");

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const form = useRef();
	const checkBtn = useRef();

	const onChangeMetric = (e) => {
		const metric = e.target.value;
		setMetric(metric);
	};

	const onChangeWeightage = (e) => {
		const weightage = e.target.value;
		setWeightage(weightage);
	};
	const onChangeCustmerView = (e) => {
		const customerView = e.target.value;
		setCustomerView(customerView);
	};

	const handleAddClose = () => setAddShow(false);
	const handleAddShow = () => setAddShow(true);
	const handleEditClose = () => setEditShow(false);
	const handleEditShow = () => setEditShow(true);


	useEffect(() => {
		console.log("tableData", tableData)
		setData(tableData)
	}, [tableData])

	const onUpdate = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);
		form.current.validateAll();
	}
	const onSubmit = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);
		form.current.validateAll();
	}
	return (
		<div className="col-12 col-xl-7">
			<div className="text-center py-4">
				<div className="bg-light">
					<div className="">
						<h5 className="text-start p-3 m-0">Matrics</h5>
					</div>
					<table className="table ">
						<thead>
							<tr>
								<th scope="col" className="border-end-1 border-1 border-start-0 border-top-0 text-center">#</th>
								<th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Metric</th>
								<th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Weightage %</th>
								<th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Customer Can View</th>
								<th scope="col" colSpan={2} className="border-end-1 border-1 border-start-0 border-top-0 text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{data &&
								data.map((item, i) => (
									<tr key={i}>
										<th scope="row" className="border-end-1 border-start-0 border-1 text-center">{i + 1}</th>
										<td className="border-end-1 border-1 text-center">{item.metric}</td>
										<td className="border-end-1 border-1 text-center">{item.weightage}</td>
										<td className="border-end-1 border-1 text-center">{item.cutomercanView}</td>
										<td className="border-end-1 border-1 text-center">
											<Button variant="" onClick={handleAddShow}>
												Add +
											</Button>
										</td>
										<td className="border-end-1 border-1 text-center"><Button variant="" onClick={handleEditShow}>
											<img src={EditIcon} width="17px" alt="edit-image" />
										</Button></td>
										<Modal show={editShow} onHide={handleEditClose}>
											<Modal.Header closeButton>
												<Modal.Title>EDIT METRIC CONFIGURATION</Modal.Title>
											</Modal.Header>
											<Form onSubmit={onUpdate} ref={form}>
												<Modal.Body>
													<div className="d-flex w-100 pt-3">
														<div className="pe-2">
															<p className="m-0">MATRIC NAME</p>
															<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
																name="metric" value={metric} onChange={onChangeMetric}
																validations={[required]} />
														</div>
														<div className="">
															<p className="m-0">WEIGHTAGE % </p>
															<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
																name="weightage"
																value={weightage}
																onChange={onChangeWeightage}
																validations={[required]} />
														</div>
													</div>
													<div className="d-flex align-items-center pt-3">
														<div className="pe-2">
															<p className="m-0">CUSTOMER CAN VIEW</p>
														</div>
														<div className="">
															<input type="radio" name="customerView"
																className="btn btn-light me-2"
																value={customerView}
																onChange={onChangeCustmerView}
															/>YES
															<input type="radio" name="customerView" className="btn btn-light"
																value={customerView}
																onChange={onChangeCustmerView} />No
														</div>
														<div>
															<input type={"hidden"} className=""
																value={id} onChange={onChangeCustmerView} />
														</div>
													</div>
												</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleEditClose}>
														Close
													</Button>
													<Button variant="primary" onClick={onUpdate}>
														Save Changes
													</Button>
												</Modal.Footer>
											</Form>
										</Modal>
										<Modal show={addShow} onHide={handleAddClose}>
											<Modal.Header closeButton>
												<Modal.Title>ADD METRIC</Modal.Title>
											</Modal.Header>

											<Form onSubmit={onsubmit} ref={form}>
												<Modal.Body>
													<div className="d-flex w-100 pt-3">
														<div className="pe-2">
															<p className="m-0">MATRIC NAME</p>
															<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
																name="metric" value={metric} onChange={onChangeMetric}
																validations={[required]} />
														</div>
														<div className="">
															<p className="m-0">WEIGHTAGE % </p>
															<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
																name="weightage"
																value={weightage}
																onChange={onChangeWeightage}
																validations={[required]} />
														</div>
													</div>
													<div className="d-flex align-items-center pt-3">
														<div className="pe-2">
															<p className="m-0">CUSTOMER CAN VIEW</p>
														</div>
														<div className="">
															<input type="radio" name="customerView"
																className="btn btn-light me-2"
																value={customerView}
																onChange={onChangeCustmerView}
															/>YES
															<input type="radio" name="customerView" className="btn btn-light"
																value={customerView}
																onChange={onChangeCustmerView} />No
														</div>
													</div>
												</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleAddClose}>
														Close
													</Button>
													<Button variant="primary" onClick={onSubmit}>
														Save Changes
													</Button>
												</Modal.Footer>
											</Form>
										</Modal>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div></div>
	)

}

export default MetricsTable;