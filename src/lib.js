import Vue from "vue";

import CardWidget from "./components/employee/CardWidget";
import Employees from "./components/employee/ListWrapper";
import EmployeeList from "./components/employee/List";

Vue.component("bgs-employee-card-widget", CardWidget);
Vue.component("bgs-employees", Employees);
Vue.component("bgs-employee-list", EmployeeList);

Vue.prototype.$bgsComponentsEventBus = new Vue();

export default {
  "bgs-employee-card-widget": CardWidget,
  "bgs-employees": Employees,
  "bgs-employee-list": EmployeeList
};
