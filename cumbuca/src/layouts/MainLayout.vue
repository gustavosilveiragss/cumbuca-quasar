<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Cumbuca Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-primary"
      :width="250"
      :breakpoint="767"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          class="text-white"
          header
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in navLinks"
          :key="link.title"
          v-bind="link"
          :openInNewTab="link.openInNewTab"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
const EssentialLink = defineAsyncComponent(() => import('components/EssentialLink.vue'))

const leftDrawerOpen = ref(false)

const navLinks = [
  {
    title: 'Menu',
    icon: 'savings',
    link: '/#/',
    openInNewTab: false
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/#/settings',
    openInNewTab: false
  }
]
</script>
