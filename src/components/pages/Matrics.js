
import React, { useEffect, useRef, useState } from 'react';
import MetricsTable from './MetricsTable';
import Sidebar from '../../shared/components/Sidebar'
import TableData from "../json-data/data"
import EditIcon from "../../assets/images/edit-icon.png"
import Popup from "reactjs-popup";
import Form from "react-validation/build/form";
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


const Matrics = () => {
  const [content, setContent] = useState([]);

  const [data, setData] = useState([])
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [metric, setMetric] = useState("");
  const [id, setId] = useState(0);
  const [weightage, setWeightage] = useState(null);
  const [customerview, setCustomerview] = useState("");
  const [editItem, setEditItem] = useState({
    metric: "",
    id: 0,
    weightage: 0,
    customerview: ""
  });
  const [addItem, setAddItem] = useState({
    metric: "",
    weightage: 0,
    customerview: "No"
  });


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useRef();
  const checkBtn = useRef();

  //////// On Add Metric ///////
  const onAddMetric = (e) => {
    const metric = e.target.value;
    setAddItem({ ...addItem, metric: metric });
  };

  const onAddWeightage = (e) => {
    const weightage = e.target.value;
    setAddItem({ ...addItem, weightage: weightage });
  };
  const onAddCustmerView = (e) => {
    const customerview = e.target.value;
    setAddItem({ ...addItem, customerview: customerview });
    console.log(addItem);
  };

  ////// On Edit Metric ////////
  const onChangeMetric = (e) => {
    const metric = e.target.value;
    setEditItem({ ...editItem, metric: metric });
  };

  const onChangeWeightage = (e) => {
    const weightage = e.target.value;
    setEditItem({ ...editItem, weightage: weightage });
  };
  const onChangeCustmerView = (e) => {
    const customerview = e.target.value;
    setEditItem({ ...editItem, customerview: customerview });
    console.log(editItem);
  };

  const onChangeId = (e) => {
    const id = e.target.value;
    setEditItem({ ...editItem, id: id })
  }

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (item) => {
    setEditItem({ metric: item.metric, id: item.id, weightage: item.weightage, customerview: item.customerview })
    setEditShow(true)
  };

  /////// Get Metrics ///////
  useEffect(() => {
    AuthService.getMetrics().then(
      (response) => {
        setContent(response.data.data);
        console.log(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

/////// On Update //////
  const onUpdate = (item) => {
    setMessage("");
    setLoading(true);
    console.log(item)
    AuthService.updateMetrics(item).then((response) => {
      console.log(response)
      if (response) {
        // window.location.reload();
      }
    }, (error) => {
      const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      setContent(_content);
    })
    handleEditClose()

  }

  ////// On Submit ///////
  const onSubmit = () => {
    console.log('mertic', addItem);

    AuthService.addMetrics(addItem).then((response) => {
      console.log(response)
      if (response) {
        // window.location.reload();
      }
    }, (error) => {
      const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      setContent(_content);
    })
    handleAddClose()
  }




  console.log(content)
  return (
    <div className='--grey-bg p-0'>
      <div className='row'>
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
          <div className="text-center">
            <Button  className="--primary-bg " variant="primary" onClick={handleAddShow}>
              Add New Metric +
            </Button>

          </div>
          <div className="bg-white mb-4 p-3 shadow-sm bg-body rounded ml-3" style={{ display: 'none' }}>
            <div className="">
              <div className="">
                <h4>{'EDIT METRIC CONFIGURATION'}</h4>
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
          <div className="bg-white mb-4 p-3 shadow-sm bg-body rounded ml-3" style={{ display: 'none' }}>
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
        </div>

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
                  {content != null &&
                    content.map((item, i) =>
                    (
                      <tr key={i}>
                        <th scope="row" className="border-end-1 border-start-0 border-1 text-center">{item.id}</th>
                        <td className="border-end-1 border-1 text-center">{item.metric}</td>
                        <td className="border-end-1 border-1 text-center">{item.weightage} %</td>
                        <td className="border-end-1 border-1 text-center">{item.customerview}</td>
                        {/* <td className="border-end-1 border-1 text-center">
                          <Button variant="" onClick={() => handleAddShow(item)}>
                            +
                          </Button>
                        </td> */}
                        <td className="border-end-1 border-1 text-center"><Button variant="" onClick={() => handleEditShow(item)} >
                          <img src={EditIcon} width="17px" alt="edit-image" />
                        </Button></td>
                      </tr>

                    )
                    )
                  }
                </tbody>
              </table>
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
                          name="metric" value={editItem.metric} onChange={onChangeMetric}
                          validations={[required]} />
                      </div>
                      <div className="">
                        <p className="m-0">WEIGHTAGE % </p>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                          name="weightage"
                          value={editItem.weightage}
                          onChange={onChangeWeightage}
                          validations={[required]} />
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div className="pe-2">
                        <p className="m-0">CUSTOMER CAN VIEW</p>
                      </div>
                      <div className="" onChange={onChangeCustmerView}>
                        <input type="radio" name="customerview"
                          className="btn btn-light me-2"
                          value={"Yes"} checked={editItem.customerview = "Yes"}
                        /> Yes
                        <input type="radio" name="customerview" className="btn btn-light"
                          value={"No"} checked={editItem.customerview = "No"} /> No
                      </div>
                      <div>
                        <input type={"hidden"} className=""
                          value={editItem.id} onChange={onChangeId} />
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => onUpdate(editItem)}>
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
                          name="metric" value={addItem.metric} onChange={onAddMetric}
                          validations={[required]} />
                      </div>
                      <div className="">
                        <p className="m-0">WEIGHTAGE % </p>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                          name="weightage"
                          value={addItem.weightage}
                          onChange={onAddWeightage}
                          validations={[required]} />
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div className="pe-2">
                        <p className="m-0">CUSTOMER CAN VIEW</p>
                      </div>
                      <div className="">
                        <input type="radio" name="customerview"
                          className="btn btn-light me-2"
                          value={"Yes"} checked={editItem.customerview = "Yes"}
                          onChange={onAddCustmerView}
                        />YES
                        <input type="radio" name="customerview" className="btn btn-light"
                          value={"No"} checked={editItem.customerview = "No"}
                          onChange={onAddCustmerView} />No
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matrics