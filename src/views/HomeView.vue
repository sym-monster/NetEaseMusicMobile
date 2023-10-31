<template>
  <div>
    <TopNav />
    <SwiperTop />
    <MenuList />
    <MusciList />
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import MenuList from "@/components/home/MenuList.vue";
import MusciList from "@/components/home/MusicList.vue";

export default {
  name: "HomeView",
  components: {
    TopNav,
    SwiperTop,
    MenuList,
    MusciList
  },
  methods: {
    // scQRCode: function (event) {
    //   var dsBridge = require("dsbridge")
    //   alert('hhhh')
    //   dsBridge.call('scanQR', null, function(ret) {
    //     alert(ret)
    //   })
    // }
  },
};
</script>
