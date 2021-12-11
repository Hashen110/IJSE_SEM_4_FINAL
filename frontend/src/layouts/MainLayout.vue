<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated :class="darkTheme ? ['bg-dark', 'text-white'] : ['bg-white', 'text-black']">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" class="q-mr-sm" @click="toggleLeftDrawer"/>
        <q-toolbar-title class="cursor-pointer" @click="$router.push('/')">MTC</q-toolbar-title>
        <q-space />
        <q-input class="half-width q-my-sm" dense outlined v-model="search" placeholder="Search" :model-value="search" @keyup="onSearch">
          <template v-slot:prepend>
          <q-icon name="search" />
        </template>
          <template v-if="search" v-slot:append>
            <q-icon name="close" class="cursor-pointer" @click="onClearSearch">
              <q-tooltip>Clear search</q-tooltip>
            </q-icon>
            <q-spinner color="primary" v-if="searching">
              <q-tooltip>Searching...</q-tooltip>
            </q-spinner>
          </template>
          <q-menu fit :touch-position="false" no-parent-event no-route-dismiss no-refocus no-focus :model-value="searchMenu" v-model="searchMenu">
            <q-list padding>
              <q-item clickable v-for="result in searchResult" :key="result.id" :to="result.media_type === 'movie' ? '/movie/' + result.id : result.media_type === 'tv' ? '/tv/' + result.id : null" @click="onClearSearch">
                <q-item-section avatar v-if="result.poster_path || result.profile_path">
                  <q-avatar>
                    <q-img :src="'https://image.tmdb.org/t/p/w500/' + (result.poster_path || result.profile_path)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">{{result.title || result.name}}</q-item-label>
                  <q-item-label lines="1" caption v-if="result.release_date || result.first_air_date">{{result.release_date || result.first_air_date}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-input>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-toggle :model-value="darkTheme" v-model="darkTheme" unchecked-icon="light_mode" checked-icon="dark_mode" @update:model-value="$q.dark.toggle">
            <q-tooltip>Toggle themes</q-tooltip>
          </q-toggle>
          <sign-in v-if="!isAuthorized" />
          <q-btn v-else color="primary" round icon="account_circle">
            <q-tooltip>{{user.user.username}}</q-tooltip>
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column items-center">
                  <q-avatar size="xl">
                    <q-img :src="'https://via.placeholder.com/640.png?text=' + user.user.username" :alt="user.user.username" />
                  </q-avatar>
                  <div class="text-subtitle1 q-my-sm">{{user.user.username}}</div>
                  <q-btn outline color="secondary" size="sm" label="Logout" @click="onLogout" />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="300">
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
          <q-separator spaced />
          <q-item v-ripple clickable to="recommend">
            <q-item-section avatar>
              <q-icon name="recommend" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Recommend</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator spaced />
          <q-item v-ripple v-for="link in links2" :key="link.text" clickable :to="link.to">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="!isAuthorized" spaced />
          <q-item v-if="!isAuthorized">
            <q-item-section>
              <div class="text-subtitle2 text-center">Sign In to like, review, recommend and many more</div>
              <div class="q-my-sm"></div>
              <sign-in />
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
import { api, imdbApi } from 'boot/axios'
import SignIn from 'components/SignIn'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  components: { SignIn },
  setup () {
    const $q = useQuasar()
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const searchMenu = ref(false)
    const searchResult = ref([])
    const searchTimeout = ref(null)
    const searching = ref(false)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function onSearch () {
      if (search.value.trim()) {
        searching.value = true
        clearTimeout(searchTimeout.value)
        searchTimeout.value = setTimeout(() => {
          imdbApi.get('/search/multi?include_adult=true&query=' + encodeURIComponent(search.value)).then((response) => {
            searchResult.value = response.data.results
            searchMenu.value = true
            searching.value = false
            api.post('/search', {
              search: search.value.trim()
            }).then(() => {})
          })
        }, 250)
      } else {
        searchMenu.value = false
        searchResult.value = []
        clearTimeout(searchTimeout.value)
        searching.value = false
      }
    }

    return {
      leftDrawerOpen,
      links: [
        { icon: 'home', text: 'Home', to: '/' },
        { icon: 'local_fire_department', text: 'Trending', to: '/trending' },
        { icon: 'trending_up', text: 'Popular', to: '/popular' },
        { icon: 'whatshot', text: 'Top Rated', to: '/top_rated' }
      ],
      links2: [
        { icon: 'face', text: 'Celebrities', to: '/celebrities' },
        { icon: 'theaters', text: 'Watch Providers', to: '/watch_providers' }
      ],
      toggleLeftDrawer,
      onSearch,
      search,
      searchMenu,
      searchResult,
      searching,
      darkTheme: ref(true),
      onClearSearch () {
        search.value = ''
        searchMenu.value = false
        searchResult.value = []
        clearTimeout(searchTimeout.value)
        searching.value = false
      },
      isAuthorized: $q.cookies.has('token'),
      user: $q.localStorage.getItem('user'),
      onLogout () {
        $q.cookies.remove('token')
        window.location.reload()
      }
    }
  }
})
</script>
