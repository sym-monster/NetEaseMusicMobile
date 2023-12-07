import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/player.js'
import { login } from '@/request/api/home.js'

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
    profile: {
      "avatarImgIdStr": "109951166725079475",
      "followed": false,
      "backgroundUrl": null,
      "defaultAvatar": false,
      "avatarUrl": "https://p2.music.126.net/VIvpadDm3ydQapiMXyZBXQ==/109951166725079475.jpg",
      "backgroundImgIdStr": "0",
      "mutual": false,
      "remarkName": null,
      "userType": 0,
      "vipType": 0,
      "authStatus": 0,
      "djStatus": 0,
      "detailDescription": "",
      "experts": {},
      "expertTags": null,
      "accountStatus": 0,
      "nickname": "丶奇变偶不变丶",
      "birthday": 837705600000,
      "gender": 1,
      "province": 610000,
      "city": 610400,
      "avatarImgId": 109951166725079470,
      "backgroundImgId": 0,
      "description": "",
      "userId": 255917267,
      "signature": "",
      "authority": 0,
      "followeds": 9,
      "follows": 28,
      "eventCount": 0,
      "avatarDetail": null,
      "playlistCount": 12,
      "playlistBeSubscribedCount": 0
    },
    currentIndex: 0,
    currentMusicID: 1398283847,
    isPlaying: false,
    isShowMusicDetail: false,
    lyric: [],
    currentTime: 0,
    duration: 0,
    isLogin: false,
    isShowFooter: true,
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
    },
    updateLoginState(state, value) {
      state.isLogin = value
    },
    updateUserProfile(state, value) {
      state.profile = value
    }
  },
  actions: {
    async getLyric(context, value) {
      let response = await getMusicLyric(value)
      context.commit("updateLyric", response.data.lrc.lyric)
    },
    async toLogin(context, value) {
      let response = await login(value)
      return response
    }
  },
  modules: {
  }
})
