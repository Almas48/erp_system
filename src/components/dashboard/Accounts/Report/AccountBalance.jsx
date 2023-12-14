import React from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../../common/breadcrumb";
import FilesComponent from "../../../common/filesComponent/FilesComponent";
import Input from "../../../common/modal/Input";
import CommonSearchComponet from "../../../common/salaryCard/CommonSearchComponet";

const AccountBalance = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Breadcrumb parent="Accounts" title="Account Balance" />
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
          <h4>Asset</h4>
        </div>
        <FilesComponent />
      </div>
      <div className="card p-30">
        <CommonSearchComponet />
        <div className="table-responsive">
          <table className="table">
            <thead className="table-border">
              <tr>
                <th scope="col">{"ACCOUNT"}</th>
                <th scope="col">{"OPENING BALANCE"}</th>
                <th scope="col">{"INCOME EXPENSE"}</th>
                <th scope="col">{"NET MOVIMENT"}</th>
                <th scope="col">{"TOTAL BALANCE"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Walk in Customer"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
              </tr>
              <tr>
                <td>{"Main Branch(Cash)"}</td>
                <td>{"13500"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"13500"}</td>
              </tr>
              <tr>
                <td>{"P;L"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
              </tr>
              <tr>
                <td>{"Paypal"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
              </tr>
              <tr>
                <td>{"Total"}</td>
                <td>{"10329.44"}</td>
                <td>{"0"}</td>
                <td>{"0"}</td>
                <td>{"10329.44"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
