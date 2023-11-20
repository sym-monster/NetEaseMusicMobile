<template>
    <div>
        <img :src="musicInfo.al.picUrl" alt="" class="bg">
        <div class="topbar">
            <van-icon name="arrow-left" class="iconBack" size=".5rem" />
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
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.musicInfo)
    },
    props: ['musicInfo']
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
    height:50vh;
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
        top: 10%;
        right: 25%;
    }
    .mucicCover {
        width: 2.6rem;
        height: 2.6rem;
        position: absolute;
        border-radius: 50%;
        z-index: -1;
    }
}
</style>