<template>
    <PlayListTop :playList="state.playList"/>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { getPlayList } from '../request/api/item.js';
import { reactive } from 'vue';
import PlayListTop from "@/components/playlist/PlayListTop.vue"
export default {
    setup() {
        const state = reactive({
            playList: {}
        })

        onMounted(async () => {
            let id = useRouter().currentRoute.value.query.id
            let response = await getPlayList(id)
            state.playList = response.data.playlist

            sessionStorage.setItem('playListDetail', JSON.stringify(state))
        })
        return { state }
    },
    components: {
        PlayListTop
    }
}
</script>

<style lang="scss" scoped></style>