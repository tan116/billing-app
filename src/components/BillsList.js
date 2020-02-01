import React from "react";
import { connect } from "react-redux";
import Bill from "./Bill";
// import { getBills } from "../redux/selectors";
import { getBillsByVisibilityFilter } from "../redux/selectors";

const VISIBILITY_FILTERS = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};

const BillsList = ({ Bills }) => (
  <ul className="Bill-list">
    {Bills && Bills.length
      ? Bills.map((Bill, index) => {
          return <Bill key={`Bill-${Bill.id}`} Bill={Bill} />;
        })
      : "No Bills, yay!"}
  </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.Bills || {};
//   const Bills =
//     allIds && state.Bills.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { Bills };
// };

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const Bills = getBillsByVisibilityFilter(state, visibilityFilter);
  return { Bills };
  //   const allBills = getBills(state);
  //   return {
  //     Bills:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allBills
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allBills.filter(Bill => Bill.completed)
  //           : allBills.filter(Bill => !Bill.completed)
  //   };
};
// export default BillsList;
export default connect(mapStateToProps)(BillsList);
