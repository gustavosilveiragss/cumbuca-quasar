<template>
  <q-card class="menu-item-card q-mb-md shadow-2">
    <q-card-section class="image-section">
      <q-img
        :src="_image"
        :alt="_name"
        class="menu-image rounded-borders"
      />
    </q-card-section>

    <q-card-section class="content-section">
      <q-card-title class="menu-title text-primary">
        {{ _name }}
      </q-card-title>

      <q-card-subtitle class="menu-price text-secondary">
        ${{ Number(_price).toFixed(2) }}
      </q-card-subtitle>

      <div class="menu-description">
        {{ _description }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MenuItemCard',
});

export interface MenuItemCardProps {
  _menuItemId: number;
  _name: string;
  _price: number;
  _description: string;
  _image: string;
}

withDefaults(defineProps<MenuItemCardProps>(), {
  _menuItemId: 0,
  _name: '',
  _price: 0,
  _description: '',
  _image: '',
});
</script>

<style scoped>
.menu-item-card {
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 12px; 
}

.menu-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-section {
  flex-grow: 1;
}

.menu-image {
  height: 200px;
  object-fit: cover;
  width: 100%;
  border-radius: 4px;
}

.content-section {
  padding: 16px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
}

.menu-title {
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 1.2em;
}

.menu-price {
  color: #FF5722;
  margin-bottom: 8px;
  font-size: 1.1em;
}

.menu-description {
  font-size: 0.9em;
  color: #757575;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shadow-2 {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.rounded-borders {
  border-radius: 8px;
}
</style>
