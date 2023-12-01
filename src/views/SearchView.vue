<template>
    <div class="searchTop">
        <van-icon class="back" name="arrow-left" size=".5rem" @click="$router.go(-1)" />
        <input class="input" type="text" placeholder="邓紫棋" v-model="inputWord" @keydown.enter="enterKey">
    </div>
    <div class="history">
        <span class="historyTitle">历史</span>
        <div class="historyItemGroup">
            <span class="historyItem" v-for="item in keywords" :key="item">
                {{ item }}
            </span>
        </div>
        <van-icon class="deleteAll" name="delete-o" size=".5rem"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keywords: [],
            inputWord: ''
        }
    },
    mounted() {
        let localHisWords = JSON.parse(localStorage.getItem("his_words"))
        if (localHisWords) {
            this.keywords = localHisWords
        }
    },
    methods: {
        enterKey() {
            if (this.inputWord.length > 0) {
                this.keywords.push(this.inputWord)
                localStorage.setItem("his_words", JSON.stringify(this.keywords))
                this.inputWord = ''
            }
        }
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
            padding: .1rem .2rem;
            background-color: #999;
            border-radius: .3rem;
            margin: 0rem .05rem;
            white-space: nowrap;
            line-height: 2em;
        }
    }
    .deleteAll {
        padding-top: .05rem;
    }
}
</style>