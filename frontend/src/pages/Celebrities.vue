<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <q-ajax-bar ref="bar" position="top" />
      <q-ajax-bar ref="bar" position="right" />
      <q-ajax-bar ref="bar" position="bottom" reverse />
      <q-ajax-bar ref="bar" position="left" reverse />
      <div class="row q-col-gutter-md full-width">
        <div v-for="celebrity in celebrities" :key="celebrity.id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <celebrity-card :card="celebrity" no-link />
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
import CelebrityCard from 'components/CelebrityCard'

export default defineComponent({
  name: 'PageCelebrities',
  components: { CelebrityCard },
  setup () {
    const celebrities = ref([])
    const bar = ref(null)

    return {
      celebrities,
      bar,
      onLoad: async (index, done) => {
        try {
          const barRef = bar.value
          if (barRef) { barRef.start() }
          const people = await imdbApi.get('/person/popular?page=' + index)
          celebrities.value = celebrities.value.concat([...people.data.results])
          done()
          if (barRef) { barRef.stop() }
        } catch (e) {}
      }
    }
  }
})
</script>
