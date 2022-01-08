<template>
  <q-page padding>
    <q-ajax-bar ref="bar" position="top" />
    <q-ajax-bar ref="bar" position="right" />
    <q-ajax-bar ref="bar" position="bottom" reverse />
    <q-ajax-bar ref="bar" position="left" reverse />
    <q-card>
      <q-img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" style="max-height: 75vh;" />
      <q-item>
        <q-item-section avatar>
          <q-avatar size="10rem">
            <q-img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label v-if="movie.title">
            <div class="text-h6">{{movie.title}}</div>
          </q-item-label>
          <q-item-label v-if="movie.overview">{{movie.overview}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn :disable="!externalIds.id" icon="thumb_up" color="positive" class="q-my-sm" @click="onLike">
            <q-tooltip>I like this</q-tooltip>
          </q-btn>
          <q-btn :disable="!externalIds.id" icon="thumb_down" color="negative" class="q-my-sm" @click="onDislike">
            <q-tooltip>I dislike this</q-tooltip>
          </q-btn>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-card-section>
        <div class="row text-center justify-center">
          <div v-if="movie.adult" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.adult}}</div>
            <div class="text-subtitle2 text-weight-bold text-capitalize text-grey">Adult</div>
          </div>
          <div v-if="movie.budget" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.budget}}$</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">BUDGET</div>
          </div>
          <div v-if="movie.popularity" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.popularity}}</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">POPULARITY</div>
          </div>
          <div v-if="movie.release_date" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.release_date}}</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">RELEASE DATE</div>
          </div>
          <div v-if="movie.revenue" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.revenue}}$</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">REVENUE</div>
          </div>
          <div v-if="movie.runtime" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.runtime}}</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">RUNTIME</div>
          </div>
          <div v-if="movie.status" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.status}}</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">STATUS</div>
          </div>
          <div v-if="movie.tagline" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md shadow-5">
            <div class="text-subtitle1 text-weight-bold text-capitalize">{{movie.tagline}}</div>
            <div class="text-subtitle2 text-weight-regular text-capitalize text-grey">TAGLINE</div>
          </div>
        </div>
      </q-card-section>
      <q-separator spaced />
      <q-card-section>
        <div class="text-subtitle2">Genres</div>
        <q-chip v-for="genre in movie.genres" :key="genre.id" :color="getRandomColor()" class="glossy">
          {{genre.name}}
        </q-chip>
      </q-card-section>
      <q-separator spaced />
      <q-card-section>
        <div class="text-subtitle2">Production Countries</div>
        <q-chip v-for="production_country in movie.production_countries" :key="production_country.id" :color="getRandomColor()" class="glossy">
          {{production_country.name}}
        </q-chip>
      </q-card-section>
      <q-separator spaced />
      <q-card-section>
        <div class="text-subtitle2">Production Companies</div>
        <q-chip v-for="production_company in movie.production_companies" :key="production_company.id" :color="getRandomColor()" class="glossy">
          {{production_company.name}}
        </q-chip>
      </q-card-section>
      <q-separator v-if="keywords.length" spaced />
      <q-card-section v-if="keywords.length">
        <div class="text-subtitle2">Keywords</div>
        <q-chip v-for="keyword in keywords" :key="keyword.id" :color="getRandomColor()" class="glossy">
          {{keyword.name}}
        </q-chip>
      </q-card-section>
      <q-separator v-if="reviews.length" spaced />
      <q-card-section v-if="reviews.length">
        <div class="text-subtitle2">Reviews</div>
        <q-chat-message
          v-for="review in reviews"
          :key="review.id"
          :name="review.author"
          :stamp="review.created_at"
          :avatar="review.author_details.avatar_path ? 'https://image.tmdb.org/t/p/w500/' + review.author_details.avatar_path : 'https://via.placeholder.com/640.png?text=No%20Image'"
          :text="[review.content]"
          bg-color="grey-4"
        />
      </q-card-section>
      <q-separator v-if="similar.length" spaced />
      <q-card-section v-if="similar.length">
        <div class="text-subtitle2">Similar Movies</div>
        <div class="row">
          <div v-for="s in similar" :key="s.id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 q-pa-md">
            <movie-card :card="s" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api, imdbApi } from 'boot/axios'
import MovieCard from 'components/MovieCard'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageMovie',
  components: {
    MovieCard
  },
  setup () {
    const $q = useQuasar()
    const route = useRoute()
    const id = ref(route.query.id)
    const movie = ref({})
    const reviews = ref([])
    const similar = ref([])
    const keywords = ref([])
    const colors = ref(['primary', 'secondary', 'accent', 'positive', 'negative', 'info', 'warning'])
    const bar = ref(null)
    const externalIds = ref({ id: 0 })

    onMounted(() => {
      const barRef = bar.value
      if (barRef) { barRef.start() }
      imdbApi.get('/movie/' + id.value).then((response) => {
        movie.value = response.data
      }).finally(() => {
        imdbApi.get('/movie/' + id.value + '/reviews').then((response) => {
          reviews.value = response.data.results
        }).finally(() => {
          imdbApi.get('/movie/' + id.value + '/similar').then((response) => {
            similar.value = response.data.results
          }).finally(() => {
            imdbApi.get('/movie/' + id.value + '/keywords').then((response) => {
              keywords.value = response.data.keywords
            }).finally(() => {
              imdbApi.get('/movie/' + id.value + '/external_ids').then((response) => {
                api.post('/watch', {
                  ...response.data,
                  type: 'movie',
                  content: movie.value
                }).then(() => {})
                externalIds.value = response.data
                if (barRef) { barRef.stop() }
              })
            })
          })
        })
      })
    })

    return {
      bar,
      movie,
      reviews,
      similar,
      keywords,
      externalIds,
      getRandomColor () {
        return colors.value[Math.floor(Math.random() * colors.value.length)]
      },
      onLike () {
        api.post('/like', {
          ...externalIds.value,
          type: 'movie',
          like: true
        }).then(() => {
          $q.notify({ message: 'Like added successfully :)', type: 'positive' })
          externalIds.value = { id: 0 }
        })
      },
      onDislike () {
        api.post('/like', {
          ...externalIds.value,
          type: 'movie',
          like: false
        }).then(() => {
          $q.notify({ message: 'Dislike added successfully :(', type: 'negative' })
          externalIds.value = { id: 0 }
        })
      }
    }
  }
})
</script>
