<template>
    <div class="root">
        <div class="userInfo">
            <img class="avatar" :src="profile.avatarUrl" alt="avatar">
            <span class="nickname">{{ profile.nickname }}</span>
            <span class="nickname">关注：{{ profile.follows }} 粉丝：{{ profile.followeds }} </span>
        </div>
        <van-button class="back" color="#DD001E" :round="true" @click="$router.go(-1)">返回</van-button>
        <van-button class="logout" color="#AFAFAF" :round="true" @click="logout">退出登陆</van-button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['profile'])
    },
    mounted() {

    },
    methods: {
        logout() {
            localStorage.removeItem('user_prodile')
            this.$store.state.profile = { avatarUrl: '', nickname: '' }
            this.$store.state.isLogin = false
            this.$router.push('/')
        }
    }
}
</script>

<style lang="less" scoped>
.root {
    display: flex;
    align-items: center;
    flex-direction: column;

    .userInfo {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20%;
        align-items: center;
        text-align: center;
        padding-bottom: 10%;
        background-color: #DD001E;
        color: white;

        .avatar {
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
        }

        .nickname {
            margin-top: 1em;
            font-weight: 700;
        }
    }

    .back {
        width: 40%;
        position: absolute;
        bottom: 4rem;
    }

    .logout {
        width: 40%;
        position: absolute;
        bottom: 3rem;
    }
}</style>