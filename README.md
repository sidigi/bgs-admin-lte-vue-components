# bgs-admin-lte-vue-components

```
<bgs-employee-card-widget
      header="header"
      subheader="subheader"
      class="col-xs-12 col-sm-4 col-md-3"
      @bgs-widget-item-click="itemClick"
      @bgs-widget-collapse="collapse"
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
```

```
	items: [
	    {
		id: 1,
		active: true,
		collapsed: false,
		avatar: 'image url',
		name: 'Name',
		data: '',
		items: [
			{
				id: 1,
				active: false,
				collapsed: false,
				avatar: 'image url',
				name: 'Name',
				data: 'text',
			},
			{
				id: 1,
				active: true,
				collapsed: false,
				avatar: 'image url',
				name: 'Name',
				data: 'text',
			},
		],
		disabledItems: [
			{
				id: 1,
				avatar: 'image url',
				name: 'Name',
			}
		]
	    },
	    {
		id: 1,
		active: true,
		collapsed: false,
		avatar: 'image url',
		name: 'Name',
		data: ''
	    }
	],
```
