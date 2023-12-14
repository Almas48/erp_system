import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Commission = () => {
  const [modal, setModal] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="card" style={{ padding: "20px", height: "400px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Commission</h4>
        <button
          onClick={toggle}
          className="btn btn-pill btn-info btn-air-info btn-air-info"
          style={{ padding: "5px 10px", borderRadius: "5px" }}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <p className="text-center">No Commission Found!</p>
          </div>
          {/* <div className="col">
            <p>Salary</p>
          </div> */}
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Commission</ModalHeader>
        <ModalBody>
          <form className="m-t-15">
            <div className="m-t-15">
              <label htmlFor="exampleFormControlInput1">Title</label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                required={true}
                type="text"
              />
            </div>
            <div className="row m-t-15">
              <div className="col">
                <label htmlFor="exampleFormControlInput1">Type</label>
                <select
                  className="form-control digits"
                  id="exampleFormControlSelect9"
                  defaultValue="1"
                >
                  <option>{"Fixed"}</option>
                  <option>{"Percentage"}</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="exampleFormControlInput1">Amount</label>
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  required={true}
                  type="number"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Commission;
