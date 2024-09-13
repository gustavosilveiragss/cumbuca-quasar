<template>
  <q-page class="items-center justify-evenly q-pa-md">
    <q-virtual-scroll
      v-if="menuStore.menu.length"
      :items="menuStore.menu"
      class="row items-center justify-evenly"
      virtual-scroll-horizontal
    >
      <template v-slot="{ item }">
        <MenuItemCard
          :_menuItemId="item.menuItemId"
          :_name="item.name"
          :_price="item.price"
          :_description="item.description"
          :_image="item.imageUrl"
          @updateName="updateMenuItemName(item.menuItemId, $event)"
          @deleteItem="deleteMenuItem(item.menuItemId)"
        />
      </template>
    </q-virtual-scroll>
    
    <Transition
      appear
      enter-active-class="animated jackInTheBox"
    >
      <div
        v-if='!menuStore.menu.length'
        class="text-h5 text-center"
      >
        No menu items found
      </div>
    </Transition>

    <q-btn
      label="Add New Item"
      color="primary"
      @click="enableDialog"
      class="q-mb-md"
    />

    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Add New Menu Item</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="name"
            label="Name"
            class="q-mt-md"
            outlined
            dense
          />
          <q-input
            v-model="price"
            label="Price"
            class="q-mt-md"
            type="number"
            outlined
            dense
          />
          <q-input
            v-model="description"
            label="Description"
            class="q-mt-md"
            outlined
            dense
          />
          <q-input
            v-model="imageUrl"
            label="Image URL"
            class="q-mt-md"
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
  </q-page>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useMenuStore } from '../stores/menuStore';
import { MenuItem } from '../models/MenuItem';

const MenuItemCard = defineAsyncComponent(() => import('../components/Menu/MenuItemCard.vue'));

const showDialog = ref(false);
const name = ref('');
const price = ref(0);
const description = ref('');
const imageUrl = ref('');

const menuStore = useMenuStore();

function enableDialog() {
  showDialog.value = true;
}

function addItem() {
  const newItem = new MenuItem(
    menuStore.menu.length,
    name.value,
    Number(price.value),
    description.value,
    imageUrl.value
  );
  menuStore.addMenuItem(newItem);
  showDialog.value = false;

  // Clear inputs
  name.value = '';
  price.value = 0;
  description.value = '';
  imageUrl.value = '';
}

function updateMenuItemName(menuItemId: number, newName: string) {
  const item = menuStore.menu.find((item) => item.menuItemId === menuItemId);
  if (!item) {
    return;
  }
  item.name = newName;
  menuStore.editMenuItem(item);
}

function deleteMenuItem(menuItemId: number) {
  menuStore.deleteMenuItem(menuItemId);
}
</script>

<style scoped>
.q-card {
  min-width: 350px;
}
</style>
