<template>
  <q-card flat bordered @click="onCardClick" class="cursor-pointer">
    <q-img :src="'https://image.tmdb.org/t/p/w500/' + card.poster_path">
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-grey text-white text-uppercase text-bold">
          No Image
        </div>
      </template>
      <q-tooltip v-if="card.title || card.name">{{card.title || card.name}}</q-tooltip>
    </q-img>
    <q-card-section>
      <div v-if="card.release_date || card.first_air_date" class="text-overline text-orange-9">{{card.release_date || card.first_air_date}}</div>
      <div v-if="card.title || card.name" class="text-h5 q-mt-sm q-mb-xs">{{card.title || card.name}}</div>
      <div v-if="card.overview" class="text-caption text-grey">{{card.overview}}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MovieCard',
  props: {
    card: {
      type: Object,
      required: true
    },
    noLink: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const router = useRouter()

    return {
      onCardClick () {
        if (!props.noLink) {
          if (props.card.title) {
            router.push({ path: '/movie', query: { id: props.card.id } })
          } else if (props.card.name) {
            router.push({ path: '/tv', query: { id: props.card.id } })
          }
        }
      }
    }
  }
})
</script>
