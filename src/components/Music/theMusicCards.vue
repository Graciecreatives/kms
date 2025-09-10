<template>
  <section class="musicCardSection pt-5 pb-5">
    <div class="container musicCards">
      <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="song in musicList" :key="song.id">
          <musicCard :musicData="song" />
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<style>
.musicCardSection {
  background: #17002c;
  background: linear-gradient(
    90deg,
    rgba(23, 0, 44, 1) 0%,
    rgba(23, 0, 44, 1) 27%,
    rgba(0, 0, 0, 1) 52%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
}
</style>

<script setup>
import musicCard from '../Music/musicCard.vue';
import { onMounted, ref} from 'vue';
const musicList = ref([])

onMounted (async() => {
  const res = await fetch ("/musicData.json")
  musicList.value = await res.json()
})
</script>
