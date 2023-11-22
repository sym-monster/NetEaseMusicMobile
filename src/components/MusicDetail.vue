<template>
    <div>
        <img :src="musicInfo.al.picUrl" alt="" class="bg">
        <div class="content">
            <div class="topbar">
                <van-icon name="arrow-left" class="iconBack" size=".5rem" @click="back" />
                <div class="info">
                    <span class="name">{{ musicInfo.al.name }}</span>
                    <div class="authorBlock">
                        <div class="authorList">
                            <span v-for="item in musicInfo.ar" :key="item.id">
                                {{ item.name.replace(" ", "") }}&nbsp
                            </span>
                        </div>
                        <van-icon name="arrow" class="iconAuthor" size=".25rem" />
                    </div>
                </div>
                <van-icon name="share-o" class="iconShare" size=".5rem" />
            </div>
            <div class="disc">
                <img src="@/assets/disc-plus.png" alt="disc-plus" class="discPlus">
                <img src="@/assets/needle-ab.png" alt="needle-ab" class="needleAB">
                <img :src="musicInfo.al.picUrl" alt="music-cover" class="mucicCover">
                <div class="lyric">
                    <p v-for="item in finalLyric" :key="item"
                        :class="{ active: (currentTime * 1000 >= item.time && currentTime * 1000 < item.next) }">
                        {{ item.lrc }}
                    </p>
                </div>
            </div>
            <div class="musicMenu">
                <van-icon name="like-o" size=".5rem" />
                <van-icon name="down" size=".5rem" />
                <van-icon name="music-o" size=".5rem" />
                <van-icon name="comment-o" size=".5rem" />
                <van-icon name="exchange" size=".5rem" />
            </div>
            <div class="progress"></div>
            <div class="playerDashboard">
                <van-icon name="replay" size=".5rem" />
                <van-icon name="arrow-left" size=".5rem" />
                <van-icon name="pause-circle-o" size=".8rem" v-if="isPlaying" @click="exchangePlayerState" />
                <van-icon name="play-circle-o" size=".8rem" v-else @click="exchangePlayerState" />
                <van-icon name="arrow" size=".5rem" />
                <van-icon name="list-switch" size=".5rem" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState(['isPlaying', 'isShowMusicDetail', 'lyric', 'currentTime']),
        finalLyric: function () {
            let resultArr
            if (this.lyric) {
                resultArr = this.lyric.split(/[(\r\n)\r\n]+/).map((item, index) => {
                    let min = item.slice(1, 3)
                    let sec = item.slice(4, 6)
                    let mesc = item.slice(7, 10)
                    let lrc = item.slice(11, item.length)
                    let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mesc)
                    if (isNaN(Number(mesc))) {
                        mesc = item.slice(7, 9)
                        lrc = item.slice(10, item.length)
                        time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mesc)
                    }
                    return { min, sec, mesc, time, lrc }
                })
                resultArr.forEach((item, index) => {
                    if (index === resultArr.length - 1) {
                        item.next = 0
                    } else {
                        item.next = resultArr[index + 1].time
                    }
                });
            }
            return resultArr
        }
    },
    mounted() {
        console.log(this.musicInfo)
    },
    methods: {
        back() {
            this.updateIsShowMusicDetail(false)
        },
        exchangePlayerState() {
            this.playMusic()
        },
        ...mapMutations(['setIsPlaying', 'updateIsShowMusicDetail'])
    },
    props: ['musicInfo', 'playMusic']
}
</script>

<style lang="less" scoped>
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -3;
    filter: blur(30px);
}

.content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .topbar {
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        flex-direction: row;

        .iconBack {
            color: white;
            padding-left: .2rem;
        }

        .info {
            margin-left: .2rem;
            flex-grow: 1;

            .name {
                width: 100%;
                font-size: .3rem;
                color: white;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }

            .authorBlock {
                height: .4rem;
                display: flex;
                align-items: center;
                font-size: .25rem;
                color: white;

                .authorList {
                    max-height: .4rem;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }
            }

        }

        .iconShare {
            color: white;
            padding-right: .2rem;
            padding-left: .2rem;
        }
    }

    .disc {
        width: 100%;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .discPlus {
            width: 4rem;
            height: 4rem;
            z-index: -2;
        }

        .needleAB {
            height: 3.2rem;
            position: absolute;
            top: 20%;
            right: 25%;
        }

        .mucicCover {
            width: 2.6rem;
            height: 2.6rem;
            position: absolute;
            border-radius: 50%;
            z-index: -1;
        }

        .lyric {
            width: 100%;
            max-height: 60vh;
            position: absolute;
            overflow: scroll;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            line-height: 2em;
            font-size: .3rem;
            color: #DDD;

            .active {
                line-height: 2em;
                font-size: .4rem;
                color: white;
            }
        }
    }

    .musicMenu {
        color: white;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .progress {
        background-color: white;
        width: 96%;
        height: 2px;
        border-radius: 1px;
        align-self: center;
        margin-top: .2rem;
        margin-bottom: .2rem;
    }

    .playerDashboard {
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        color: white;
        justify-content: space-around;
    }
}
</style>