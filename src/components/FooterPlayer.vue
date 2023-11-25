<template>
    <div class="root">
        <div class="left">
            <img :src="currentPlayList[currentIndex].al.picUrl" alt="" class="musicCover">
        </div>
        <div class="middle" @click="showMusicDetail">
            <span class="musicName">{{ currentPlayList[currentIndex].al.name }}</span>
            <span class="hint">横滑切换上下首哦</span>
        </div>
        <div class="right">
            <van-icon name="play-circle-o" size=".5rem" class="icoPlay" @click="playMusic" v-if="!isPlaying" />
            <van-icon name="pause-circle-o" size=".5rem" class="icoPlay" @click="playMusic" v-else />
            <van-icon name="list-switch" size=".5rem" />
        </div>
        <audio ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${currentPlayList[currentIndex].id}.mp3`"></audio>
        <van-popup v-model:show="isShowMusicDetail" position="right" :style="{ width: '100%', height: '100%' }">
            <MusicDetail :musicInfo="currentPlayList[currentIndex]" :playMusic="playMusic" :addDuration="addDuration" />
        </van-popup>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import MusicDetail from '@/components/MusicDetail.vue'

export default {
    data() {
        return {
            timeLooper: 0
        }
    },
    computed: {
        ...mapState(['currentPlayList', 'currentIndex', 'currentMusicID', 'isPlaying', 'isShowMusicDetail', 'currentTime'])
    },
    mounted() {
        this.$store.dispatch("getLyric", this.currentPlayList[this.currentIndex].id)
    },
    updated() {
        this.$store.dispatch("getLyric", this.currentPlayList[this.currentIndex].id)
        this.addDuration()
    },
    methods: {
        playMusic() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play()
                this.setIsPlaying(true)
                this.updateTime()
            } else {
                this.$refs.audio.pause()
                this.setIsPlaying(false)
                clearInterval(this.timeLooper)
            }
        },
        showMusicDetail() {
            this.updateIsShowMusicDetail(true)
        },
        addDuration() {
            this.updateDuration(this.$refs.audio.duration)
        },
        updateTime() {
            this.timeLooper = setInterval(() => {
                this.updateCurrentTime(this.$refs.audio.currentTime)
            }, 200);
            this.updateDuration(this.$refs.audio.duration)
        },
        ...mapMutations(['setIsPlaying', 'updateIsShowMusicDetail', 'updateCurrentTime', 'updateDuration'])
    },
    watch: {
        currentMusicID: function () {
            console.log(this.currentMusicID)
            this.$refs.audio.autoplay = true
            this.setIsPlaying(true)
            this.updateTime()
        }
    },
    components: {
        MusicDetail
    }
}
</script>

<style lang="less" scoped>
.root {
    width: 100%;
    height: 1.4rem;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: .5px solid #999;
    display: flex;
    align-items: center;

    .left {
        align-self: left;
        padding-left: .2rem;
        padding-right: .2rem;

        .musicCover {
            width: 1rem;
            height: 1rem;
            border-radius: .5rem;
        }
    }

    .middle {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        padding-left: .2rem;

        .musicName {
            font-size: .3rem;
            font-weight: 600;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 1
        }

        .hint {
            font-size: .25rem;
            font-weight: 400;
            color: #999;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 1;
        }
    }

    .right {
        padding-right: .2rem;
        display: flex;
        flex-direction: row;

        .icoPlay {
            padding-left: .2rem;
            padding-right: .3rem;
        }
    }
}
</style>