<template>
  <q-slide-item
    class="menu-item-card q-mb-md shadow-2"
    @up="confirmDelete"
  >
    <q-card>
      <q-card-section class="image-section">
        <q-icon
          name="close"
          class="delete-icon"
          @click="confirmDelete"
          color="red"
          size="md"
        />
        <q-img
          :src="props._image"
          :alt="props._name"
          class="menu-image rounded-borders"
        />
      </q-card-section>

      <q-card-section class="content-section">
        <q-card-title
          class="menu-title text-primary cursor-pointer"
          @click="editName"
        >
          {{ props._name }}
        </q-card-title>

        <q-card-subtitle class="menu-price text-secondary">
          ${{ Number(props._price).toFixed(2) }}
        </q-card-subtitle>

        <div class="menu-description">
          {{ props._description }}
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showNameDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Edit Name</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="editableName"
            label="Name"
            outlined
            dense
            v-select-all
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" @click="cancelEdit" />
          <q-btn flat label="Save" color="primary" @click="saveName" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showConfirmDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Confirm Deletion</div>
          <div class="q-mt-md">Are you sure you want to delete this item?</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" @click="cancelDelete" />
          <q-btn flat label="Delete" color="negative" @click="deleteConfirmed" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-slide-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStoreSettings } from 'src/stores/settingsStore';

const storeSettings = useStoreSettings();

const props = defineProps<{
  _menuItemId: number;
  _name: string;
  _price: number;
  _description: string;
  _image: string;
}>();

const emit = defineEmits(['updateName', 'deleteItem']);

const showNameDialog = ref(false);
const editableName = ref('');
const showConfirmDialog = ref(false);

function editName() {
  editableName.value = props._name;
  showNameDialog.value = true;
}

function cancelEdit() {
  showNameDialog.value = false;
}

function saveName() {
  emit('updateName', editableName.value);
  showNameDialog.value = false;
}

function confirmDelete() {
  if (!storeSettings.settings.promptToDelete) {
    deleteItem();
    return;
  }
  showConfirmDialog.value = true;
}

function cancelDelete() {
  showConfirmDialog.value = false;
}

function deleteConfirmed() {
  deleteItem();
}

function deleteItem() {
  emit('deleteItem', props._menuItemId);
  showConfirmDialog.value = false;
}
</script>

<style scoped>
.menu-item-card {
  width: 280px;
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

.cursor-pointer {
  cursor: pointer;
}

.delete-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  z-index: 999999;
}
</style>
