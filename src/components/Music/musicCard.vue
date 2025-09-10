<template>
  <div class="music-card-container">
    <div class="music-card">
      <!-- Album Artwork -->
      <div class="album-artwork">
        <img :src="musicData.cover" :alt="musicData.title" class="artwork-img" />
        <div class="play-overlay">
          <button class="play-button" @click="togglePlay" :class="{ playing: isPlaying }">
            <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
          </button>
        </div>
        <div class="track-duration">{{ musicData.duration }}</div>
        <div class="track-badge" v-if="isFeatured">Featured</div>
      </div>

      <!-- Track Info -->
      <div class="track-info">
        <h3 class="track-title">{{ musicData.title }}</h3>
        <p class="artist-name">{{ musicData.artist }}</p>

        <!-- Custom Audio Player -->
        <div class="custom-audio-player">
          <audio
            ref="audioPlayer"
            :src="musicData.audio"
            @timeupdate="updateProgress"
            @loadedmetadata="setDuration"
            @ended="onTrackEnd"
            @play="onPlay"
            @pause="onPause"
          ></audio>

          <!-- Progress Bar -->
          <div class="progress-container">
            <div class="progress-bar" @click="seekTo">
              <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
              <div class="progress-thumb" :style="{ left: progressPercentage + '%' }"></div>
            </div>
          </div>

          <!-- Time Display -->
          <div class="time-display">
            <span class="current-time">{{ formatTime(currentTime) }}</span>
            <span class="total-time">{{ formatTime(duration) }}</span>
          </div>

          <!-- Control Buttons -->
          <div class="player-controls">
            <button class="control-btn prev-btn" @click="previousTrack" title="Previous">
              <i class="bi bi-skip-backward-fill"></i>
            </button>

            <button class="control-btn play-pause-btn" @click="togglePlay" :class="{ playing: isPlaying }">
              <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
            </button>

            <button class="control-btn next-btn" @click="nextTrack" title="Next">
              <i class="bi bi-skip-forward-fill"></i>
            </button>

            <button class="control-btn volume-btn" @click="toggleMute" :class="{ muted: isMuted }" title="Volume">
              <i :class="isMuted ? 'bi bi-volume-mute-fill' : 'bi bi-volume-up-fill'"></i>
            </button>

            <button class="control-btn download-btn" @click="downloadTrack" title="Download">
              <i class="bi bi-download"></i>
            </button>

            <button class="control-btn like-btn" @click="toggleLike" :class="{ liked: isLiked }" title="Like">
              <i :class="isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
            </button>
          </div>

          <!-- Volume Slider -->
          <div class="volume-container" v-show="showVolumeSlider">
            <input
              type="range"
              class="volume-slider"
              min="0"
              max="100"
              v-model="volume"
              @input="updateVolume"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  musicData: {
    type: Object,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
})

// Audio player refs
const audioPlayer = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(70)
const isMuted = ref(false)
const isLiked = ref(false)
const showVolumeSlider = ref(false)

// Computed properties
const progressPercentage = computed(() => {
  if (duration.value === 0) return 0
  return (currentTime.value / duration.value) * 100
})

// Audio player methods
const togglePlay = () => {
  if (!audioPlayer.value) return

  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
}

const updateProgress = () => {
  if (audioPlayer.value) {
    currentTime.value = audioPlayer.value.currentTime
  }
}

const setDuration = () => {
  if (audioPlayer.value) {
    duration.value = audioPlayer.value.duration
  }
}

const seekTo = (event) => {
  if (!audioPlayer.value) return

  const progressBar = event.currentTarget
  const rect = progressBar.getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const percentage = clickX / rect.width
  const newTime = percentage * duration.value

  audioPlayer.value.currentTime = newTime
  currentTime.value = newTime
}

const updateVolume = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value / 100
  }
}

const toggleMute = () => {
  if (audioPlayer.value) {
    if (isMuted.value) {
      audioPlayer.value.volume = volume.value / 100
      isMuted.value = false
    } else {
      audioPlayer.value.volume = 0
      isMuted.value = true
    }
  }
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const downloadTrack = () => {
  const link = document.createElement('a')
  link.href = props.musicData.audio
  link.download = `${props.musicData.title} - ${props.musicData.artist}.mp3`
  link.click()
}

// const previousTrack = () => {
//   // Emit event to parent component
//   emit('previous')
// }

// const nextTrack = () => {
//   // Emit event to parent component
//   emit('next')
// }

const onTrackEnd = () => {
  isPlaying.value = false
  currentTime.value = 0
}

const onPlay = () => {
  isPlaying.value = true
}

const onPause = () => {
  isPlaying.value = false
}

const formatTime = (time) => {
  if (!time || isNaN(time)) return '0:00'
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// Initialize volume
onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value / 100
  }
})

// Cleanup
onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause()
  }
})
</script>

<style lang="scss" scoped>
.music-card-container {
  margin-bottom: 2rem;
}

.music-card {
  background: #0f0f23;
  border: 1px solid rgba(255, 255, 255, 0.731);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  font-family: 'Rethink Sans', 'Rethink Sans Placeholder', sans-serif;
}

.music-card:hover {
  box-shadow: 2px 2px 25px 0px rgba(0, 255, 255, 0.4);
  transform: translateY(-8px);
  border-color: #00ffff;
}

// Album Artwork
.album-artwork {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.artwork-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.music-card:hover .artwork-img {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.music-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: white;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 255, 255, 0.5);
}

.play-button.playing {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 8px 30px rgba(0, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
  }
}

.track-duration {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.track-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

// Track Info
.track-info {
  padding: 1.5rem;
}

.track-title {
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.artist-name {
  color: #00ffff;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

// Custom Audio Player
.custom-audio-player {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

// Progress Bar
.progress-container {
  margin-bottom: 1rem;
}

.progress-bar {
  position: relative;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.progress-bar:hover {
  height: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  border-radius: 3px;
  transition: width 0.1s ease;
  position: relative;
}

.progress-thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
}

.progress-bar:hover .progress-thumb {
  opacity: 1;
}

// Time Display
.time-display {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #8c898e;
  font-weight: 500;
}

.current-time {
  color: #00ffff;
}

.total-time {
  color: #8c898e;
}

// Player Controls
.player-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.control-btn {
  background: transparent;
  color: #8c898e;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
}

.control-btn:hover {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: white;
  border-color: transparent;
  transform: scale(1.1);
}

.play-pause-btn {
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: white;
  border: none;
}

.play-pause-btn:hover {
  transform: scale(1.15);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
}

.control-btn.playing {
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  color: white;
  border-color: transparent;
}

.control-btn.liked {
  color: #ff6b9d;
  border-color: #ff6b9d;
}

.control-btn.muted {
  color: #ff6b9d;
  border-color: #ff6b9d;
}

// Volume Slider
.volume-container {
  margin-top: 0.5rem;
  padding: 0 0.5rem;
}

.volume-slider {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.volume-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: linear-gradient(90deg, #ff6b9d, #c471ed, #00ffff);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

// Responsive Design
@media (max-width: 768px) {
  .music-card {
    margin-bottom: 1rem;
  }

  .album-artwork {
    height: 200px;
  }

  .track-info {
    padding: 1rem;
  }

  .player-controls {
    gap: 0.3rem;
  }

  .control-btn {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }

  .play-pause-btn {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}

// Loading Animation
.music-card.loading {
  opacity: 0.7;
  pointer-events: none;
}

.music-card.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 3px solid rgba(0, 255, 255, 0.3);
  border-top: 3px solid #00ffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

// Dark mode adjustments
@media (prefers-color-scheme: dark) {
  .music-card {
    background: #0a0a0a;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .custom-audio-player {
    background: rgba(0, 0, 0, 0.5);
  }
}

// High contrast mode
@media (prefers-contrast: high) {
  .music-card {
    border-width: 2px;
  }

  .control-btn {
    border-width: 2px;
  }
}
</style>
