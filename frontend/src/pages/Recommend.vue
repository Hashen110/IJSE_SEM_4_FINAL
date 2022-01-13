<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <q-ajax-bar ref="bar" position="top" />
      <q-ajax-bar ref="bar" position="right" />
      <q-ajax-bar ref="bar" position="bottom" reverse />
      <q-ajax-bar ref="bar" position="left" reverse />
      <div class="row q-col-gutter-md full-width">
        <div v-for="recommend in recommends" :key="recommend.id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <movie-card :card="recommend" />
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner color="primary" size="50px">
            <q-tooltip>Loading</q-tooltip>
          </q-spinner>
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'
import MovieCard from 'components/MovieCard'

export default defineComponent({
  name: 'PageRecommend',
  components: { MovieCard },
  setup () {
    const recommends = ref([])
    const bar = ref(null)

    return {
      recommends,
      bar,
      onLoad: async (index, done) => {
        try {
          const barRef = bar.value
          if (barRef) { barRef.start() }
          const movies = await api.get('/recommend?page=' + index)
          try {
            if (typeof movies.data.results === 'string') {
              recommends.value = recommends.value.concat([...JSON.parse(movies.data).results])
            } else {
              recommends.value = recommends.value.concat([...movies.data.results])
            }
          } catch (e) {}
          done()
          if (barRef) { barRef.stop() }
        } catch (e) {}
      }
    }
  }
})
</script>
