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
const props = defineProps({
  musicData : Object
})



</script>
