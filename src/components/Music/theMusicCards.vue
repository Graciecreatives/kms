<template>
  <section class="musicCardSection">
    <div class="container musicCards">
      <div class="row">
        <div class="col-md-4" v-for="song in musicList" :key="song.id">
          <musicCard :musicData="song" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.musicCardSection {
  background-color: black;
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
