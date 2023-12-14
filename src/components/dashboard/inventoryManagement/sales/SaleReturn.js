import React from "react";
import Breadcrumb from "../../../common/breadcrumb";
import FilesComponent from "../../../common/filesComponent/FilesComponent";
import CommonSearchComponet from "../../../common/salaryCard/CommonSearchComponet";
import Paginationbtn from "../../../common/Paginationbtn";
import { Link } from "react-router-dom";

const SaleReturn = () => {
  return (
    <div>
      <Breadcrumb parent="Inventory management" title="Sale Return List" />
      <div
        style={{ padding: "0px 20px" }}
        className="d-flex justify-content-between align-items-center pb-3"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "",
            marginBottom: "20px",
          }}
        >
          <Link
            to={`/dashboard/inventory-management/sale/sales-list`}
            className="btn btn-pill btn-info btn-air-info btn-air-info"
          >
            Create Sale Return
          </Link>
        </div>

        <FilesComponent />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card" style={{ padding: "20px" }}>
              <CommonSearchComponet />
              <div className="table-responsive ">
                <table className="table">
                  <thead className=" table-border">
                    <tr className="">
                      <th scope="col">{"No"}</th>
                      <th scope="col">{"Invoice"}</th>
                      <th scope="col">{"Branch"}</th>
                      <th scope="col">{"Biller"}</th>
                      <th scope="col">{"Customer"}</th>
                      <th scope="col">{"Quantity"}</th>
                      <th scope="col">{"Total Amount"}</th>
                      <th scope="col">{"Return Amount"}</th>
                      <th scope="col">{"Status"}</th>
                      <th scope="col">{"Action"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>{"1"}</td>
                      <td>{"24th Jul, 2023"}</td>
                      <td>{"INV-230712"}</td>
                      <td>{"Super admin"}</td>
                      <td>{"	kjdsghddsfbdsf"}</td>
                      <td>{"	$ 6,000.00"}</td>
                      <td>{"	$ 0.00"}</td>
                      <td>{"	$ 6,000.00"}</td>
                      <td className="text-success">{"Approved"}</td>
                      <td>
                        <button
                          class="btn btn-pill btn-outline-info btn-xs p-1 px-4"
                          type="button"
                        >
                          Select
                        </button>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
                <p className="text-center p-t-10">No data available in table</p>
              </div>
            </div>
            <Paginationbtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleReturn;
