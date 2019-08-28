import "./assets/flexbox-util.css";

import CardWidget from "./components/widgets/stats/CardWidget";
import Employees from "./components/widgets/stats/ListWrapper";
import EmployeeList from "./components/widgets/stats/List";
import Card from "./components/widgets/stats/Card";
import DatePaymentByContractExpire from "./components/widgets/stats/DatePaymentByContractExpire";
import DataTable from "./components/UI/DataTable";
import Modal from "./components/UI/Modal";
import Loader from "./components/Loader";

const bgsAdminLteVueUIComponents = {
  install(Vue) {
    Vue.component("bgs-widget-stats-card", CardWidget);
    Vue.component("bgs-widget-stats-employees", Employees);
    Vue.component("bgs-widget-stats-employee-list", EmployeeList);
    Vue.component("bgs-widget-stats-employee-card", Card);
    Vue.component(
      "bgs-widget-payment-by-contract-expire",
      DatePaymentByContractExpire
    );
    Vue.component("bgs-ui-data-table", DataTable);
    Vue.component("bgs-ui-modal", Modal);
    Vue.component("bgs-ui-loader", Loader);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.bgsAdminLteVueUIComponents = bgsAdminLteVueUIComponents;
}

export default bgsAdminLteVueUIComponents;
