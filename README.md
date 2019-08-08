# bgs-admin-lte-vue-components

## Подключение

```html
<!-- Insert the vue core before vue-toasted -->
<script src="./dist/bgs-admin-lte-vue-ui-components.umd.js"></script>

<link rel="stylesheet" href="./bgs-admin-lte-vue-ui-components.css" />

<script>
  Vue.use(window.bgsAdminLteVueUIComponents);
</script>
```

## Компонент bgs-widget-stats-card

```html
<bgs-widget-stats-card
  header="header"
  subheader="subheader"
  :loader="loader"
  class="col-xs-12 col-sm-4 col-md-3"
  @bgs-widget-stats-item-click="itemClick"
  @bgs-widget-stats-collapse="collapse"
>
  <template v-slot:employee-card>
    <!-- Слот для карточки со статистикой для сотрудника -->
  </template>

  <template v-slot:buttons>
    <!-- Слот для кнопок -->
    <span
      role="button"
      title="Show detailed statistics"
      class="info-box-toolbar-button hover-translucent employee-statistics-show-details-button"
    >
      <i class="fa fa-list"></i>
    </span>
  </template>

  <template>
    <!-- Слот основного контента -->
  </template>
</bgs-widget-stats-card>
```

| Property                     | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| header                       | Заголовок                                             |
| subheader                    | Подпись                                               |
| loader                       | Загрузчик                                             |
| @bgs-widget-stats-item-click | Событие по клику на аватарку                          |
| @bgs-widget-stats-collapse   | Событие при разворачивании/разворачивании подчинённых |

## Компонент bgs-widget-stats-employee-card

```html
<bgs-widget-stats-employee-card
  :header="30001"
  icon="eye"
  :link="{href: 'link'}"
  class="bg-maroon"
  @bgs-widget-stats-employee-card-click="clickCard"
>
  <template v-slot:subheader>
    <!-- Слот подписи -->
    <p>
      Last modified 2 month ago
      <br />on LNG
    </p>
  </template>
</bgs-widget-stats-employee-card>
```

| Property                              | Description                                                     |
| ------------------------------------- | --------------------------------------------------------------- |
| header                                | Заголовок                                                       |
| icon                                  | ion иконка                                                      |
| link                                  | Объект ссылка ( `{link: 'http://link.eu', title: 'Заголовок'}`) |
| @bgs-widget-stats-employee-card-click | Событие по клику на аватарку                                    |

## Компонент bgs-widget-stats-employees

```html
<bgs-widget-stats-employees :items="items"></bgs-widget-stats-employees>
```

| Property | Description                                      |
| -------- | ------------------------------------------------ |
| items    | Определённого вида массив объектов (сотрудников) |

## Полный пример

```html
<template>
  <bgs-widget-stats-card
    header="header"
    subheader="subheader"
    :loader="loader"
    class="col-xs-12 col-sm-4 col-md-3"
    @bgs-widget-stats-item-click="itemClick"
    @bgs-widget-stats-collapse="collapse"
  >
    <template v-slot:employee-card>
      <bgs-widget-stats-employee-card
        :header="30001"
        icon="eye"
        :link="{href: 'link'}"
        class="bg-maroon"
        @bgs-widget-stats-employee-card-click="clickCard"
      >
        <template v-slot:subheader>
          <p>
            Last modified 2 month ago
            <br />on LNG
          </p>
        </template>
      </bgs-widget-stats-employee-card>
    </template>

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
      <bgs-widget-stats-employees :items="items"></bgs-widget-stats-employees>
    </template>
  </bgs-widget-stats-card>
</template>

<script>
  import { setTimeout } from "timers";
  export default {
    mounted() {
      //загрузчик
      this.loader = true;

      //пример получения данных
      setTimeout(() => {
        this.items = this.getItems();

        this.loader = false;
      }, 5000);
    },

    data() {
      return {
        // Загрузчик
        loader: false,
        items: null
      };
    },

    methods: {
      //Клик по аватарке
      itemClick(item) {},

      //Событие при развороте
      collapse(item) {},

      //Клик по карте
      clickCard(e) {
        // Отключить стандартное поведение клика
        e.preventDefault();
      },

      getItems() {
        return [
          {
            id: 1, // уникальный id
            active: true, // флаг активности
            collapsed: false, // показывать развёрнутым (показывать список сотрудников)
            avatar: "foto.jpg", // Аватарка
            name: "Name 1", // Имя
            data: "Data", // Данные для показа
            collapsed_data: "expanded", // Данные, которые будут показаны при раскрытом списке сотрудников
            other: [1, 2, 3], // любые другие данные, необязательно other
            items: [
              // Вложенные элементы
              {
                id: 2,
                active: false,
                collapsed: false,
                avatar: "cb59bc5fefe8bab6abf2fbc2e93eb208/gDAc5YF0mgY.jpg",
                name: "Name 12",
                data: "text"
              },
              {
                id: 3,
                active: true,
                collapsed: false,
                avatar: "MAKJOEIRd9c.jpg",
                name: "Name 13",
                data: "text"
              }
            ],
            // группа элементов вне иерархии, элементы, которые под чертой
            disabledItems: [
              {
                id: 122, // уникальный id
                avatar: "MAKJOEIRd9c.jpg", // Аватарка
                name: "Name" // Имя
              }
            ]
          },
          {
            id: 51,
            active: true,
            collapsed: false,
            avatar: "IMG_1402.png",
            name: "Name 14",
            data: "data",
            items: [
              {
                id: 52,
                active: true,
                collapsed: false,
                avatar: "%D0%BE%D0%B3.png",
                name: "Name 15",
                data: "data",
                items: [
                  {
                    id: 53,
                    active: true,
                    collapsed: false,
                    avatar: "xgFmfkZaEHg.jpg",
                    name: "Name 152",
                    data: "data"
                  },
                  {
                    id: 54,
                    active: false,
                    collapsed: false,
                    avatar: "IMG_0257-10-09-18-02-17.JPG",
                    name: "Name 1ваы",
                    data: "data"
                  }
                ]
              }
            ]
          }
        ];
      }
    }
  };
</script>
```
