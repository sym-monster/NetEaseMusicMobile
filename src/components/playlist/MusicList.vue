<template>
    <div>
        <div class="musicListTopBar">
            <div class="left">
                <van-icon name="play-circle-o" size=".6rem" />
                <div class="playAllText">
                    <span class="playAll">播放全部</span>
                    <span class="musicCount">共({{ playListDetail.length }})首</span>
                </div>
            </div>
            <div class="right">
                <van-icon name="add-o" size=".6rem" />
                <span class="collectCount">收藏({{ subCount }})</span>
            </div>
        </div>
        <div class="musicList">
            <ul>
                <li v-for="(item, index) in playListDetail" :key="item.al.id" class="musicItemLayout" @click="playMusic(index, item.id)">
                    <span class="index">{{ index + 1 }}</span>
                    <div class="musicInfo">
                        <span class="musicName">{{ item.al.name ? item.al.name : "未获取到歌曲名称" }}</span>
                        <div class="author">
                            <span v-for="(ar, index) in item.ar" :key="item.ar.id" class="authors">
                                {{ ar.name.replace(" ", "") }}&nbsp
                            </span>
                        </div>
                    </div>
                    <van-icon v-show="!(item.mv === 0)" name="video-o" size=".4rem" class="icMV" />
                    <van-icon name="ellipsis" size=".4rem" class="icMore" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    setup(props) {
        console.log(props)
    },
    props: ['playListDetail', 'subCount'],
    computed: {
        ...mapState(['currentPlayList', 'currentIndex', 'currentMusicID', 'isPlaying'])
    },
    methods: {
        playMusic(clickIndex, musicID) {
            this.updateCurrentPlayList(this.playListDetail)
            this.updateCurrentIndex(clickIndex)
            this.updateCurrentMusicID(musicID)
        },
        ...mapMutations(['updateCurrentPlayList', 'updateCurrentIndex', 'updateCurrentMusicID'])
    }
}
</script>

<style lang="less" scoped>
.musicListTopBar {
    background-color: white;
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    justify-content: space-between;
    padding-left: .2rem;
    padding-right: .2rem;

    .left {
        display: flex;
        align-items: center;

        .playAllText {
            .playAll {
                margin-left: .2rem;
                vertical-align: baseline;
            }

            .musicCount {
                font-size: .25rem;
                color: gray;
                vertical-align: baseline;
            }
        }
    }

    .right {
        display: flex;
        align-items: center;
        background-color: #FF1700;
        padding: .06rem .2rem .06rem .2rem;
        border-radius: .5rem;
        color: white;

        .collectCount {
            margin-left: .2rem;
        }
    }
}

.musicItemLayout {
    width: 100vw;
    height: 1.2rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding-left: .2rem;
    padding-right: .2rem;

    .index {
        font-size: .3rem;
        font-weight: 300;
        color: darkgray;

    }

    .musicInfo {
        flex-grow: 1;
        margin-left: .4rem;

        .musicName {
            font-size: .3rem;
            font-weight: 600;
            color: black;
        }

        .author {
            font-size: .25rem;
            font-weight: 300;
            color: darkgray;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 1;
        }
    }

    .icMV {
        margin-left: .4rem;
    }

    .icMore {
        margin-left: .4rem;
    }
}
</style>