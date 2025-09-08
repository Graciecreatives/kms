<template>
  <div class="container musicCardSection mb-5 pb-5">
    <div class="music-card">
      <img :src="musicData.cover" alt="Album Cover" class="img-fluid w-100 artwork-img" />

      <div class="card-body ps-3 pt-3">
        <h5>{{ musicData.title }}</h5>
        <p>{{ musicData.artist }}</p>

        <audio
          :src="musicData.audio"
          ref="player"
          @timeupdate="updateTime"
          @loadedmetadata="loadMeta"
        ></audio>
        <div class="container text-center audiocontainer p-2">
          <div class="controls">
            <button @click="prev" class="me-3">
              <i class="bi bi-skip-backward-fill"></i>
            </button>

            <button @click="toggleplay" class="me-3">
              <i :class="isPlaying ? 'bi bi-pause-circle' : 'bi bi-play-circle'"> </i>
            </button>
            <button @click="next" class="me-3">
              <i class="bi bi-fast-forward-fill"></i>
            </button>
            <a :href="musicData.audio" download>
              <i class="bi bi-download"></i>
            </a>
          </div>

          <div class="container d-flex p-0 justify-content-evenly mt-2">
            <input
              id="seekBar"
              type="range"
              v-model="currentTime"
              :max="duration"
              step="any"
              @input="seek"
              class="w-50"
            />

            <div class="time" style="color: white">
              <span>{{ formatTime(currentTime) }}</span> /
              <span> {{ formatTime(duration) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.artwork-img {
  border-radius: 10px 10px 0px 0px;
}
.musicCardSection {
  background: rgba(255, 255, 255, 0.15); /* transparent white */
  // backdrop-filter: blur(10px);
  // background: #080c14;
  border-radius: 10px;
  padding-left: 0px;
  padding-right: 0px;
  border: 1px solid rgba(255, 255, 255, 0.518);
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
}
.musicCardSection:hover {
  border: 2px solid #fbbc04;
}
.card-body h5 {
  color: #fbbc04;
}
.card-body p {
  color: white;
}
.playbtn {
  background-color: #d08700 !important;
  border: none !important;
  color: white !important;
}
.playbtn:hover {
  background-color: #d08700d0 !important;
}
audio {
  width: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
}
.audiocontainer {
  width: 98%;
  background-color: #d08700;
  margin: 0;
  border-radius: 12px;
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
}

.controls button,
.controls a {
  background: white;
  border: none;
  padding: 10px;
  border-radius: 15px;
  color: #d08700;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s;
}

.controls button:hover,
.controls a:hover {
  background: rgba(255, 255, 255, 0.5);
}

#seekBar {
  accent-color: black;
  cursor: pointer;
}

// .controls{
//   controls
// }
</style>
<script setup>
import { ref} from 'vue'

const props = defineProps({
  musicData: Object,
})

const player = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const toggleplay = () => {
  if (!player.value) return

  if (player.value.paused) {
    player.value.play()
    isPlaying.value = true
  } else {
    player.value.pause()
    isPlaying.value = false
  }
}

const updateTime = () => {
  if(player.value){
  currentTime.value = player.value.currentTime
}
}

// update the duration
const loadMeta = () => {
if (player.value) {
  duration.value = player.value.duration
}
}
//seekk to chooede time using the input
const seek = (e) => {
  const value = parseFloat(e.target.value)
    player.value.currentTime = value
    currentTime.value = value

}

const formatTime = (time) => {
  if (!time || isNaN(time)) return '0:00'
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
</script>
