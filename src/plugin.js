import CardWidget from "./components/widgets/stats/CardWidget";
import Employees from "./components/widgets/stats/ListWrapper";
import EmployeeList from "./components/widgets/stats/List";
import Card from "./components/widgets/stats/Card";

const bgsAdminLteVueUIComponents = {
  install(Vue) {
    Vue.component("bgs-widget-stats-card", CardWidget);
    Vue.component("bgs-widget-stats-employees", Employees);
    Vue.component("bgs-widget-stats-employee-list", EmployeeList);
    Vue.component("bgs-widget-stats-employee-card", Card);

    Vue.prototype.$bgsComponentsEventBus = new Vue();
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.bgsAdminLteVueUIComponents = bgsAdminLteVueUIComponents;
}

export default bgsAdminLteVueUIComponents;
