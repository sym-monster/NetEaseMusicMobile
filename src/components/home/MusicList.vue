<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" class="musicListSwipe" :show-indicators="false">
        <van-swipe-item v-for="item in musicList" :key="item">
          <router-link :to="{ path: '/itemMusci', query: { id: item.id } }">
            <img :src="item.picUrl" alt="img" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ foramtPlayCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home.js";

export default {
  data() {
    return {
      musicList: [],
    };
  },

  methods: {
    async getGedan() {
      let resqonse = await getMusicList();
      console.log(resqonse);
      resqonse.data.result.forEach((element) => {
        this.musicList.push(element);
      });
      console.log(this.musicList);
    },

    foramtPlayCount: function (playCount) {
      if (playCount > 100000000) {
        return (playCount / 100000000).toFixed(1) + '亿'
      } else if (playCount > 10000) {
        return (playCount / 10000).toFixed(1) + '万'
      } else {
        return playCount
      }
    }
  },

  mounted() {
    this.getGedan();
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 4rem;
  background-color: rgb(250, 250, 250);

  .musicTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;

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

  .musicContent {
    width: 100%;
    height: 4rem;

    .musicListSwipe {
      height: 100%;
      display: flex;
      justify-content: space-between;

      .van-swipe-item {
        position: relative;
        flex: 1;
        margin-left: .2rem;

        img {
          width: 100%;
          height: 3rem;
          border-radius: 4%;
        }

        .playCount {
          position: absolute;
          top: 0px;
          right: 0px;
          padding: 0.2rem;
          display: flex;
          align-items: center;
          color: white;

          .icon {
            width: .3rem;
            height: .3rem;
          }
        }

        .name {
          font-size: 0.3rem;
        }
      }

      .van-swipe-item:last-child {
        position: relative;
        flex: 1;
        margin-left: .2rem;
        margin-right: .2rem;
      }
    }
  }
}
</style>