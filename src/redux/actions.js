import VisibilityFilters from "./components/VisibilityFilters";
import { ADD_BILL, TOGGLE_BILL, SET_FILTER } from "./constants";

export function addArticle(payload) {
    return { type: "ADD_ARTICLE", payload }
  };

  export const toggleBill = id => ({
    type: TOGGLE_BILL,
    payload: { id }
  });