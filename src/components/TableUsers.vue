<template>
  <div class="container">
    <h1>Задача 2</h1>
    <v-table
      :items="table.body"
      :fields="table.fields"
      title="Таблица пользователей"
    >
      <template #id="slotProps">
        {{slotProps.item.id}}
      </template>
      <template #name="slotProps">
        <a href="#" @click.prevent="handlerClick(slotProps.item)">
          {{ slotProps.item.name }}
        </a>
      </template>
      <template #power="slotProps">
        <span>{{ slotProps.item.power }}</span>
      </template>
      <template #email="slotProps">
        <a :href="`mailto:${slotProps.item.email}`">{{ slotProps.item.email }}</a> &nbsp;
      </template>
      <template #event="slotProps">
        <button @click="remove(slotProps.item.id)">удалить</button>
      </template>
    </v-table>
  </div>
</template>

<script>
import VTable from '@/components/table/VTable.vue';

export default {
  name: 'HelloWorld',
  components: { VTable },
  props: {
    msg: String,
  },
  data() {
    return {
      table: {
        fields: ['id', 'name', 'power', 'email', 'event'],
        head: 'Заголовок таблицы',
        body: [
          {
            id: 1,
            name: 'Chuck Norris',
            power: Infinity,
            email: 'Norris@mail.ru',
          },
          {
            id: 2,
            name: 'Bruce Lee',
            power: 9000,
            email: 'Lee@mail.ru',
          },
          {
            id: 3,
            name: 'Jackie Chan',
            power: 7000,
            email: 'Chan1994@mail.ru',
          },
          {
            id: 4,
            name: 'Jet Li',
            power: 8000,
            email: 'Jet228@mail.ru',
          },
        ],
      },
    };
  },
  methods: {
    handlerClick(val) {
      // eslint-disable-next-line
      alert(`handlerClick ${val}`);
    },
    remove(id) {
      console.log('remove', id);
      this.table.body = this.table.body.filter((el) => el.id !== id);
    },
  },
};
</script>

<style>
.container {
  max-width: 1300px;
  margin: auto;
}

.table {
  min-width: 600px;
  width: 600px;
  margin: 30px auto;
  border: 1px solid grey;
}

.table td {
  border: 1px solid grey;
  padding: 5px;
}
</style>
