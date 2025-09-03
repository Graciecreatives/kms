<template>
  <div class="container musicCardSection mb-5 pb-5">
  <div class="music-card">
    <img :src="musicData.cover" alt="Album Cover" class="img-fluid w-100 artwork-img">

    <div class="card-body ps-3 pt-3">
      <h5>{{musicData.title}}</h5>
      <p>{{musicData.artist}}</p>


      <audio :src="musicData.audio" controls class="w-100"></audio>

    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.artwork-img{
  border-radius: 10px 10px 0px 0px;
}
.musicCardSection{
  background: rgba(255, 255, 255, 0.15); /* transparent white */
  // backdrop-filter: blur(10px);
  // background: #080c14;
  border-radius:10px;
  padding-left:0px;
  padding-right:0px;
  border:1px solid rgba(255, 255, 255, 0.518);
    font-family:"Rethink Sans", "Rethink Sans Placeholder", sans-serif;
}
.musicCardSection:hover{
  border: 2px solid #fbbc04
}
.card-body h5{
  color:#fbbc04
}
.card-body p{
  color:white
}
.playbtn{
  background-color:#D08700 !important;
  border:none  !important;
  color:white  !important;
}
.playbtn:hover{
  background-color: #d08700d0  !important;
}
audio {
  width: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
}
// .controls{
//   controls
// }
</style>
<script setup>
import { onMounted, ref} from 'vue'
const props = defineProps({
  musicData : Object
})

const audioPlayer = ref(null)        // reference to <audio>
const isPlaying = ref(false)         // play / pause state
const duration = ref(0)              // total song length (seconds)
const currentTime = ref(0)           // current playback time

// When audio metadata is loaded, set duration
onMounted(() => {
  audioPlayer.value.addEventListener("loadedmetadata", () => {
    duration.value = Math.floor(audioPlayer.value.duration)
  })
})

// Update progress bar as audio plays
function updateProgress() {
  currentTime.value = Math.floor(audioPlayer.value.currentTime)
}

// Toggle play / pause
function togglePlay() {
  if (!audioPlayer.value) return
  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}

// Skip forward 10 seconds
function forward() {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime += 10
  }
}

// Rewind 10 seconds
function rewind() {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime -= 10
  }
}

// Seek when user drags the range input
function seek() {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = currentTime.value
  }
}


</script>
