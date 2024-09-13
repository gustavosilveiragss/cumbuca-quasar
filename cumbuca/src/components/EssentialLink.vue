<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    :target="openInNewTab ? '_blank' : '_self'"
    class="q-mb-xs"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" class="white-icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="white-text">{{ title }}</q-item-label>
      <q-item-label caption class="white-text">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialLink'
});

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  openInNewTab?: boolean;
};

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
  openInNewTab: false,
});
</script>

<style scoped>
.white-icon {
  color: white;
}
.white-text {
  color: white;
}
</style>
