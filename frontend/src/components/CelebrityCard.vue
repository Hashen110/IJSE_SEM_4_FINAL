<template>
  <q-card flat bordered v-once>
    <q-img :src="'https://image.tmdb.org/t/p/w500/' + card.profile_path">
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-grey text-white text-uppercase text-bold">
          No Image
        </div>
      </template>
      <q-tooltip v-if="card.name">{{card.name}}</q-tooltip>
    </q-img>
    <q-card-section>
      <div v-if="card.known_for_department" class="text-overline text-orange-9">{{card.known_for_department}}</div>
      <div v-if="card.name" class="text-h5 q-mt-sm q-mb-xs">{{card.name}}</div>
      <div v-if="card.known_for.length">
        <q-separator spaced />
        <q-chip v-for="cast in card.known_for" :key="cast.id" class="glossy">
          {{cast.title || cast.name}}
          <q-tooltip class="bg-transparent" :delay="1000">
            <q-card>
              <q-img v-if="cast.backdrop_path" :src="'https://image.tmdb.org/t/p/w500/' + cast.backdrop_path" />
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img v-if="cast.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + cast.poster_path" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label caption lines="1" class="text-bold">{{cast.title || cast.name}}</q-item-label>
                  <q-item-label caption lines="1">
                    <span>{{cast.release_date || cast.first_air_date}}</span>
                    &nbsp;
                    <span class="text-bold">|</span>
                    &nbsp;
                    <span class="text-uppercase">{{cast.original_language}}</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </q-tooltip>
        </q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CelebrityCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
})
</script>
