<template>
  <q-page padding>
    <div class="row q-col-gutter-md full-width">
      <div v-for="i in topRated" :key="i.id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <movie-card :card="i" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { imdbApi } from 'boot/axios'
import MovieCard from 'components/MovieCard'

export default defineComponent({
  name: 'PageTopRated',
  components: { MovieCard },
  setup () {
    const topRated = ref([])

    function shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }

    const getTrending = async (page) => {
      try {
        const movies = await imdbApi.get('/movie/top_rated?page=' + page)
        const tv = await imdbApi.get('/tv/top_rated?page=' + page)
        topRated.value = topRated.value.concat(shuffleArray([...movies.data.results, ...tv.data.results]))
      } catch (e) {}
    }

    onMounted(() => {
      getTrending(1).finally(() => {
        setTimeout(() => {
          getTrending(2)
        }, 5000)
      })
    })

    return {
      topRated
    }
  }
})
</script>
