<template>
  <q-page padding>
    <q-ajax-bar ref="bar" position="top" />
    <q-ajax-bar ref="bar" position="right" />
    <q-ajax-bar ref="bar" position="bottom" reverse />
    <q-ajax-bar ref="bar" position="left" reverse />
    <q-tabs v-model="tab" :model-value="tab" indicator-color="primary" align="justify" narrow-indicator>
      <q-tab name="movie" label="Movie Providers" icon="movie" />
      <q-tab name="tv" label="Tv Providers" icon="tv" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated :model-value="tab" keep-alive :keep-alive-max="2">
      <q-tab-panel name="movie">
        <div class="row">
          <div v-for="provider in movieProviders" :key="provider.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 q-pa-md">
            <q-card>
              <q-img :src="'https://image.tmdb.org/t/p/w500/' + provider.logo_path" :alt="provider.provider_name">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-grey text-white text-uppercase text-bold">
                    No Image
                  </div>
                </template>
                <q-tooltip>{{provider.provider_name}}</q-tooltip>
              </q-img>
              <q-card-section>
                <div class="text-subtitle1">{{provider.provider_name}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="tv">
        <div class="row">
          <div v-for="provider in tvProviders" :key="provider.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 q-pa-md">
            <q-card>
              <q-img :src="'https://image.tmdb.org/t/p/w500/' + provider.logo_path" :alt="provider.provider_name">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-grey text-white text-uppercase text-bold">
                    No Image
                  </div>
                </template>
                <q-tooltip>{{provider.provider_name}}</q-tooltip>
              </q-img>
              <q-card-section>
                <div class="text-subtitle1">{{provider.provider_name}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { imdbApi } from 'boot/axios'

export default defineComponent({
  name: 'PageWatchProviders',
  setup () {
    const movieProviders = ref([])
    const tvProviders = ref([])
    const bar = ref(null)

    onMounted(() => {
      const barRef = bar.value
      if (barRef) { barRef.start() }
      imdbApi.get('/watch/providers/movie').then((response) => {
        movieProviders.value = response.data.results
      })
      imdbApi.get('/watch/providers/tv').then((response) => {
        tvProviders.value = response.data.results
      })
      if (barRef) { barRef.stop() }
    })

    return {
      movieProviders,
      tvProviders,
      bar,
      tab: ref('movie')
    }
  }
})
</script>
