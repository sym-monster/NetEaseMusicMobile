<template>
    <div class="playListTopBar">
        <img :src="playList.coverImgUrl" alt="converImage" class="topbarBg">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    setup(props) {
        console.log(props)
    },
    props: ['playList']
}
</script>

<style lang="less" scoped>
.playListTopBar {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    .topLeft {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: .2rem;

        span {
            font-size: .4rem;
            color: white;
        }
    }

    .topRight {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: .2rem;
    }

    .icon {
        fill: white;
    }

    .topbarBg {
        width: 100%;
        height: 10rem;
        position: fixed;
        z-index: -1;
        filter: blur(30px);
    }
}
</style>