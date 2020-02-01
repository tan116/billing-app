import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleBill } from "../redux/actions.js";

const Bill = ({ bill, toggleBill }) => (
  <li className="bill-item" onClick={() => toggleBill(bill.id)}>
    {bill && bill.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "bill-item__text",
        bill && bill.completed && "bill-item__text--completed"
      )}
    >
      {bill.content}
    </span>
  </li>
);

// export default Bill;
export default connect(
  null,
  { toggleBill }
)(Bill);
