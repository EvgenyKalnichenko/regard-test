<template>
  <div class="home">
    <TableUsers />
  </div>
</template>

<script>
import TableUsers from '@/components/TableUsers.vue';

export default {
  name: 'HomeView',
  components: {
    TableUsers,
  },
};
</script>
