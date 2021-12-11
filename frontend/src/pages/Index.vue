<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <q-ajax-bar ref="bar" position="top" />
      <q-ajax-bar ref="bar" position="right" />
      <q-ajax-bar ref="bar" position="bottom" reverse />
      <q-ajax-bar ref="bar" position="left" reverse />
      <div class="row q-col-gutter-md full-width">
        <div v-for="discover in discovers" :key="discover.id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <movie-card :card="discover" />
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
import { imdbApi } from 'boot/axios'
import MovieCard from 'components/MovieCard'

export default defineComponent({
  name: 'PageIndex',
  components: { MovieCard },
  setup () {
    const discovers = ref([])
    const bar = ref(null)

    function shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }

    return {
      discovers,
      bar,
      onLoad: async (index, done) => {
        try {
          const barRef = bar.value
          if (barRef) { barRef.start() }
          const movies = await imdbApi.get('/discover/movie?page=' + index)
          const tv = await imdbApi.get('/discover/tv?page=' + index)
          discovers.value = discovers.value.concat(shuffleArray([...movies.data.results, ...tv.data.results]))
          done()
          if (barRef) { barRef.stop() }
        } catch (e) {}
      }
    }
  }
})
</script>
