<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Add New Menu Item</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="name"
          label="Name"
          outlined
          dense
        />
        <q-input
          v-model="price"
          label="Price"
          type="number"
          outlined
          dense
        />
        <q-input
          v-model="description"
          label="Description"
          outlined
          dense
        />
        <q-input
          v-model="imageUrl"
          label="Image URL"
          outlined
          dense
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancel"
          color="primary"
          @click="showDialog = false"
        />
        <q-btn
          flat
          label="Add"
          color="primary"
          @click="addItem"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMenuStore } from '../../stores/menuStore';
import { MenuItem } from '../../models/MenuItem';

const showDialog = ref(false);
const name = ref('');
const price = ref(0);
const description = ref('');
const imageUrl = ref('');

const menuStore = useMenuStore();

console.log(menuStore.menu);

const addItem = () => {
  const newItem = new MenuItem(
    menuStore.menu.length,
    name.value,
    price.value,
    description.value,
    imageUrl.value
  );
  menuStore.addMenuItem(newItem);
  showDialog.value = false;

  name.value = '';
  price.value = 0;
  description.value = '';
  imageUrl.value = '';
};
</script>

<style scoped>
.q-card {
  min-width: 350px;
}
</style>
