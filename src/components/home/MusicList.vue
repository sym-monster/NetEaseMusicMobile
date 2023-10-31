<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/request/api/home.js'

export default {
    data() {
        return {
            musicList: []
        }
    },

    methods: {
        async getGedan() {
            let resqonse = await getMusicList()
            console.log(resqonse)
        }
    },

    mounted() {
        this.getGedan()
    }
}
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 4rem;
  padding: 10px;
  background-color: rgb(250, 250, 250);
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
}
</style>