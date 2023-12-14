import React from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../../common/breadcrumb";
import FilesComponent from "../../../common/filesComponent/FilesComponent";
import Input from "../../../common/modal/Input";
import CommonSearchComponet from "../../../common/salaryCard/CommonSearchComponet";

const SalesTax = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Breadcrumb parent="Accounts" title="Sales Tax" />
      <h4>Select Criteria</h4>
      <div className="card p-30">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-4 col-sm-1">
              <Input
                labelName={"DATE FROM"}
                inputName={"start_from"}
                inputType={"date"}
                validation={{ ...register("start_from", { required: true }) }}
              />
            </div>
            <div className="col-lg-4 col-sm-1">
              <Input
                labelName={"DATE TO"}
                inputName={"start_to"}
                inputType={"date"}
                validation={{ ...register("start_to", { required: true }) }}
              />
            </div>
            <div className="col-lg-4 col-sm-1">
              <button
                className="btn btn-pill btn-info btn-air-info btn-air-info w-100 m-t-30"
                style={{ borderRadius: "5px" }}
              >
                <i className="fa fa-search" style={{ marginRight: "5px" }}></i>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-between align-items-center pb-3 p-10">
        <div>
          <h4>Sales Tax</h4>
        </div>
        <FilesComponent />
      </div>
      <div className="card p-30">
        <CommonSearchComponet />
        <div className="table-responsive">
          <table className="table">
            <thead className="table-border">
              <tr>
                <th scope="col">{"INVOICE"}</th>
                <th scope="col">{"SALES TAX"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <p className="text-center">No Tax Information Found</p>
              </tr>
              <tr>
                <td>{"Total"}</td>
                <td>{"$ 00.00"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesTax;