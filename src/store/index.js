import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/player.js'

export default createStore({
  state: {
    currentPlayList: [
      {
        al: {
          "id": 75310423,
          "name": "MIDDLE CHILD",
          "picUrl": "https://p2.music.126.net/AAhmie9sRcxIPyEQDByDBQ==/109951163878582735.jpg",
          "tns": [],
          "pic_str": "109951163878582735",
          "pic": 109951163878582740
        },
        ar: [
          {
            "id": 36910,
            "name": "J. Cole",
            "tns": [],
            "alias": []
          }
        ],
        id: 1341722986
      },
    ],
    currentIndex: 0,
    currentMusicID: 1398283847,
    isPlaying: false,
    isShowMusicDetail: false,
    lyric: [],
    currentTime: 0,
    duration: 0,
  },
  getters: {
  },
  mutations: {
    setIsPlaying(state, value) {
      state.isPlaying = value
    },
    updateCurrentPlayList(state, value) {
      state.currentPlayList = value
    },
    pushCurrentPlayList(state, value) {
      state.currentPlayList.push(value)
    },
    updateCurrentIndex(state, value) {
      state.currentIndex = value
    },
    updateCurrentMusicID(state, value) {
      state.currentMusicID = value
    },
    updateIsShowMusicDetail(state, value) {
      state.isShowMusicDetail = value
    },
    updateLyric(state, value) {
      state.lyric = value
    },
    updateCurrentTime(state, value) {
      state.currentTime = value
    },
    updateDuration(state, value) {
      state.duration = value
    }
  },
  actions: {
    async getLyric(context, value) {
      let response = await getMusicLyric(value)
      context.commit("updateLyric", response.data.lrc.lyric)
    }
  },
  modules: {
  }
})
