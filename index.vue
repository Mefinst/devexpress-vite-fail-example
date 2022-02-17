<style>

</style>

<template>
  <DxDataGrid :data-source="data"></DxDataGrid>
</template>

<script>
import DxDataGrid from 'devextreme-vue/data-grid'
import {data} from "./data";
export default {
  components: {DxDataGrid},
  name: "index",
  data() {
    return {
      data: data()
    }
  }
}
</script>
