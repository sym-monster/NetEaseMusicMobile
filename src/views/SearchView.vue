<template>
    <div class="searchTop">
        <van-icon class="back" name="arrow-left" size=".5rem" @click="$router.go(-1)" />
        <input class="input" type="text" placeholder="邓紫棋" v-model="inputWord" @keydown.enter="enterKey">
    </div>
    <div class="history">
        <span class="historyTitle">历史</span>
        <div class="historyItemGroup">
            <span class="historyItem" v-for="item in keywords" :key="item" @click="searchHistoryItem(item)">
                {{ item }}
            </span>
        </div>
        <van-icon class="deleteAll" name="delete-o" size=".5rem" @click="cleanHistory" />
    </div>
    <div class="searchResultList">
        <div class="musicList">
            <ul>
                <li v-for="(item, index) in searchResult" :key="item.id" class="musicItemLayout" @click="onMusicClicked(item)">
                    <span class="index">{{ index + 1 }}</span>
                    <div class="musicInfo">
                        <span class="musicName">{{ item.name ? item.name : "未获取到歌曲名称" }}</span>
                        <div class="author">
                            <span v-for="(ar, index) in item.artists" :key="ar.id" class="authors">
                                {{ ar.name.replace(" ", "") }}&nbsp
                            </span>
                        </div>
                    </div>
                    <van-icon v-show="!(item.mvid === 0)" name="video-o" size=".4rem" class="icMV" />
                    <van-icon name="ellipsis" size=".4rem" class="icMore" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { searchMusic } from "@/request/api/home.js"
import { mapMutations } from 'vuex'


export default {
    data() {
        return {
            keywords: [],
            inputWord: '',
            searchResult: []
        }
    },
    mounted() {
        let localHisWords = JSON.parse(localStorage.getItem("his_words"))
        if (localHisWords) {
            this.keywords = localHisWords
        }
    },
    methods: {
        async enterKey() {
            if (this.inputWord.length > 0) {
                // 头部加一
                this.keywords.unshift(this.inputWord)
                // 去重
                this.keywords = [...new Set(this.keywords)]
                // 限制数组长度
                if (this.keywords.length > 15) {
                    this.keywords.splice(this.keywords.length - 1, 1)
                }
                localStorage.setItem("his_words", JSON.stringify(this.keywords))

                let response = await searchMusic(this.inputWord)
                this.searchResult = response.data.result.songs
                this.inputWord = ''
            }
        },
        async searchHistoryItem(value) {
            let response = await searchMusic(value)
            console.log(response)
            this.searchResult = response.data.result.songs
            console.log(this.searchResult)
        },
        onMusicClicked(item) {
            item.al = item.album
            item.al.picUrl = item.album.artist.img1v1Url
            this.pushCurrentPlayList(item)
            this.updateCurrentIndex(this.$store.state.currentPlayList.length - 1)
            this.updateCurrentMusicID(item.id)
        },
        cleanHistory() {
            localStorage.removeItem("his_words")
            this.keywords = []
        },
        ...mapMutations(['pushCurrentPlayList', 'updateCurrentIndex', 'updateCurrentMusicID'])
    }
}
</script>

<style lang="less" scoped>
.searchTop {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    padding-right: 0.3rem;
    text-align: center;

    .back {
        margin-right: .1rem;
    }

    .input {
        flex-grow: 1;
        padding: 0.1rem 0.2rem;
        border: none;
        border-bottom: 1px solid #999;
    }
}

.history {
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: flex-start;
    padding: 0rem 0.2rem;

    .historyTitle {
        font-size: 0.3rem;
        font-weight: 700;
        flex-shrink: 0;
        padding-top: .05rem;
    }

    .historyItemGroup {
        padding: 0rem .2rem;
        flex-grow: 1;

        .historyItem {
            font-size: .25rem;
            padding: .05rem .1rem;
            background-color: #999;
            border-radius: .5rem;
            margin: .05rem .05rem;
            white-space: nowrap;
            line-height: 1.5em;
            display: inline-block;
        }
    }

    .deleteAll {
        padding-top: .025rem;
    }
}

.searchResultList {
    margin-top: .2rem;
    border-top: solid .5px #999;
    padding-top: .2rem;
    padding-bottom: 2rem;
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
}
</style>