<template>
    <PlayListTop :playList="state.playList" />
    <PlayList :playListDetail="state.playListDetail" :subCount="state.playList.subscribedCount"/>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { getPlayList, getPlayListDetail } from '../request/api/playlist.js';
import { reactive } from 'vue';
import PlayListTop from "@/components/playlist/PlayListTop.vue"
import PlayList from "@/components/playlist/MusicList.vue"
export default {
    setup() {
        const state = reactive({
            playList: {},
            playListDetail: []
        })

        onMounted(async () => {
            let id = useRouter().currentRoute.value.query.id
            let playListRes = await getPlayList(id)
            state.playList = playListRes.data.playlist

            let playListDeatil = await getPlayListDetail(id, 20, 0)
            state.playListDetail = playListDeatil.data.songs

            sessionStorage.setItem('playListDetail', JSON.stringify(state))
        })
        return { state }
    },
    components: {
        PlayListTop,
        PlayList
    }
}
</script>

<style lang="scss" scoped></style>