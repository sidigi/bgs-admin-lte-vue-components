<template>
  <div id="app">
    <bgs-employee-card-widget
      header="header"
      subheader="subheader"
      class="col-xs-12 col-sm-4 col-md-3"
      @bgs-widget-stats-item-click="itemClick"
      @bgs-widget-stats-collapse="collapse"
    >
      <template v-slot:buttons>
        <span
          role="button"
          title="Show detailed statistics"
          class="info-box-toolbar-button hover-translucent employee-statistics-show-details-button"
        >
          <i class="fa fa-list"></i>
        </span>
        <span
          role="button"
          title="Set plan"
          class="info-box-toolbar-button hover-translucent employee-statistics-show-planning-button"
        >
          <i class="fa fa-gears"></i>
        </span>
        <span
          role="button"
          title="Refresh"
          class="info-box-toolbar-button hover-translucent employee-statistics-refresh-button"
        >
          <i class="fa fa-refresh"></i>
        </span>
      </template>

      <template>
        <bgs-employees :items="items"></bgs-employees>
      </template>
    </bgs-employee-card-widget>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      items: [
        {
          id: 1,
          active: true,
          collapsed: false,
          avatar:
            "https://bitrix.bgs-group.eu/upload/main/aa7/aa70f9667a924257fd12ad71e6b41e9d/foto.jpg",
          name: "Korotkova Olesya",
          data: "Data",
          collapsed_data: "expanded",
          other: [1, 2, 3],
          items: [
            {
              id: 2,
              active: false,
              collapsed: false,
              avatar:
                "https://bitrix.bgs-group.eu/upload/main/cb5/cb59bc5fefe8bab6abf2fbc2e93eb208/gDAc5YF0mgY.jpg",
              name: "Monakhova Margarita",
              data: "text"
            },
            {
              id: 3,
              active: true,
              collapsed: false,
              avatar:
                "https://bitrix.bgs-group.eu/upload/main/c9b/c9bb87ac014475a903790c317fb1efc5/MAKJOEIRd9c.jpg",
              name: "Karapetyan Ani",
              data: "text"
            }
          ],
          disabledItems: [
            {
              id: 122,
              avatar:
                "https://bitrix.bgs-group.eu/upload/main/c9b/c9bb87ac014475a903790c317fb1efc5/MAKJOEIRd9c.jpg",
              name: "Name"
            }
          ]
        },
        {
          id: 51,
          active: true,
          collapsed: false,
          avatar: "https://bitrix.bgs-group.eu/upload/main/e90/IMG_1402.png",
          name: "Filatova Darya",
          data: "data",
          items: [
            {
              id: 52,
              active: true,
              collapsed: false,
              avatar:
                "https://bitrix.bgs-group.eu/upload/main/0b4/%D0%9B%D1%8E%D0%B1%D0%B0%20%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3.png",
              name: "Khvostova Lyubov",
              data: "data",
              items: [
                {
                  id: 53,
                  active: true,
                  collapsed: false,
                  avatar:
                    "https://bitrix.bgs-group.eu/upload/main/10b/xgFmfkZaEHg.jpg",
                  name: "Khadiulina Daria",
                  data: "data"
                },
                {
                  id: 54,
                  active: false,
                  collapsed: false,
                  avatar:
                    "https://bitrix.bgs-group.eu/upload/main/953/IMG_0257-10-09-18-02-17.JPG",
                  name: "Grishina Elena",
                  data: "data"
                }
              ]
            }
          ]
        }
      ]
    };
  },

  methods: {
    itemClick(item) {},

    collapse(item) {}
  }
};
</script>