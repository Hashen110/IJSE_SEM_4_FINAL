<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="darkTheme ? ['bg-dark', 'text-white'] : ['bg-white', 'text-black']">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" class="q-mr-sm" @click="toggleLeftDrawer"/>
        <q-toolbar-title class="cursor-pointer" @click="$router.push('/')">MTC</q-toolbar-title>
        <q-space />
        <q-input class="w-50" dense outlined v-model="search" label="Search" :model-value="search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
        </q-input>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-toggle :model-value="darkTheme" v-model="darkTheme" unchecked-icon="light_mode" checked-icon="dark_mode" @update:model-value="onToggleDarkTheme" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="280">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-ripple v-for="link in links" :key="link.text" clickable :to="link.to">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const $q = useQuasar()

    const leftDrawerOpen = ref(false)
    const search = ref('')

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      links: [
        { icon: 'home', text: 'Home', to: '/' },
        { icon: 'local_fire_department', text: 'Trending', to: '/trending' },
        { icon: 'trending_up', text: 'Popular', to: '/popular' },
        { icon: 'whatshot', text: 'Top Rated', to: '/top_rated' },
        { icon: 'recommend', text: 'Recommend', to: '/recommend' }
      ],
      toggleLeftDrawer,
      search,
      darkTheme: ref(true),
      onToggleDarkTheme () {
        $q.dark.toggle()
      }
    }
  }
})
</script>

<style scoped>
.w-50 {
width: 50%
}
</style>
