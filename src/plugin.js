import CardWidget from "./components/widgets/stats/CardWidget";
import Employees from "./components/widgets/stats/ListWrapper";
import EmployeeList from "./components/widgets/stats/List";

const bgsAdminLteVueUIComponents = {
  install(Vue) {
    Vue.component("bgs-employee-card-widget", CardWidget);
    Vue.component("bgs-employees", Employees);
    Vue.component("bgs-employee-list", EmployeeList);

    Vue.prototype.$bgsComponentsEventBus = new Vue();
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.bgsAdminLteVueUIComponents = bgsAdminLteVueUIComponents;
}

export default bgsAdminLteVueUIComponents;
