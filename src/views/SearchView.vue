<template>
    <div class="searchTop">
        <van-icon class="back" name="arrow-left" size=".5rem" @click="$router.go(-1)"/>
        <input class="input" type="text" placeholder="邓紫棋">
    </div>
</template>

<script setup>

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
</style>