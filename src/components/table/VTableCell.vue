<template>
  <td class="table-cell">
    <slot />
  </td>
</template>

<script>
export default {
  name: 'VTableCell',
  props: {
    cell: {
      type: String,
    },
  },
};

</script>

<style scoped>

</style>
