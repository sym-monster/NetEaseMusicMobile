<template>
    <div class="root">
        <div class="form">
            <form action="">
                <van-cell-group inset>
                    <!-- 输入任意文本 -->
                    <van-field v-model="account" label="用户名" label-align="top" placeholder="请输入用户名" autocomplete="username"/>
                    <!-- 输入密码 -->
                    <van-field v-model="password" type="password" label="密码" label-align="top" placeholder="请输入密码"
                        autocomplete="current-password" />
                </van-cell-group>
            </form>
        </div>
        <van-button class="btn" color="#DD001E" :round="true" @click="toLogin">登陆</van-button>
        <van-button class="btn" color="#AFAFAF" :round="true" @click="$router.go(-1)">返回</van-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account: "",
            password: ""
        }
    },
    methods: {
        toLogin() {
            this.$store.dispatch('toLogin', { account: this.account, password: this.password })
        },
    },
}
</script>

<style lang="less" scoped>
.root {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: #F5F5F5;
    width: 100%;
    height: 100vh;

    .form {
        width: 90%;
        margin-top: 20%;
        margin-bottom: 10%;
    }

    .btn {
        width: 40%;
        font-size: .25rem;
        height: .8rem;
        margin-bottom: .2rem;
    }
}
</style>