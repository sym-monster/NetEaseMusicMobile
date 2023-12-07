<template>
  <router-view />
  <FooterPlayer v-show="$store.state.isShowFooter"/>
</template>
<script>
import FooterPlayer from "@/components/FooterPlayer.vue"

export default {
  components: {
    FooterPlayer
  },
  mounted() {
    let userProfile = JSON.parse(localStorage.getItem('user_profile'))
    if (userProfile) {
      this.$store.state.profile = userProfile
      this.$store.state.isLogin = true
    } else {
      this.$store.state.profile = null
      this.$store.state.isLogin = false
    }
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
