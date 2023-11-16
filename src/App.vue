<template>
  <router-view />
  <FooterPlayer />
</template>
<script>
import FooterPlayer from "@/components/FooterPlayer.vue"
export default {
  components: {
    FooterPlayer
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: .4rem;
  height: .4rem;
}

a {
  color: black;
}
</style>
