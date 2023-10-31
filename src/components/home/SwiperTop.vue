<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="banner in state.banners" :key="banner">
        <img :src="banner.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios"
import { fetchBanners } from "@/request/api/home.js"
import { reactive, onMounted } from "vue"

export default {
  setup() {
    const state = reactive({
      banners: [],
    })

    // onMounted(() => {
    //   axios.get("http://localhost:3000/banner?type=2")
    //   .then((res) => {
    //     console.log(res)
    //     state.banners = res.data.banners
    //   })
    // })

    onMounted(async () => {
      let res = await fetchBanners()
      console.log(res)
      state.banners = res.data.banners
    })

    return { state }
  },
};
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    background-color: rgb(250, 250, 250);
    .van-swipe__track {
      .van-swipe-item {
        img {
          width: 100%;
          height: 180px;
          padding: 10px;
          border-radius: 20px;
        }
      }
    }
    .van-swipe__indicators {
      padding-bottom: 10px;
      .van-swipe__indicator--active {
        background-color: red;
      }
    }
  }
}
</style>