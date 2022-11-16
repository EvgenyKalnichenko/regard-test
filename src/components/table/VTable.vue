<template>
  <div>
    <h3>{{title}}</h3>
    <table class="table">
      <thead>
        <tr>
          <td
            v-for="(field, index) in fields"
            :key="index"
          >
            <b>{{field}}</b>
          </td>
        </tr>
      </thead>
      <tbody>
      <v-table-row
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      >
        <v-table-cell
          v-for="(name, index) in fields"
          :key="index"
        >
          <slot :name="name" :item="item"/>
        </v-table-cell>
      </v-table-row>
      </tbody>
    </table>
  </div>
</template>

<script>
import VTableRow from '@/components/table/VTableRow.vue';
import VTableCell from '@/components/table/VTableCell.vue';

export default {
  name: 'VTable',
  components: { VTableRow, VTableCell },
  props: {
    title: {
      type: String,
      default: 'head',
    },
    items: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  },
};
</script>

<style scoped>

</style>
