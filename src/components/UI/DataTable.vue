<template>
  <div class="box" v-if="items.length">
    <div class="box-header" v-if="header">
      <h3 class="box-title">{{header}}</h3>
    </div>

    <div class="box-body">
      <div class="row">
        <div class="col-sm-12">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th v-for="(header, index) in headers" :key="index">{{header.text}}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="index"
                :class="(index % 2 === 0) ? 'odd' : 'even'"
              >
                <slot name="items" :item="item"></slot>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- /.box-body -->
  </div>
  <div v-else style="text-align: center; font-size:30px; color: #9f9f9f">No data</div>
</template>

<script>
export default {
  props: {
    header: {
      type: String
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>