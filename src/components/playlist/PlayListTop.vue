<template>
    <div class="topBlock">
        <img :src="playList.coverImgUrl" alt="converImage" class="topbarBg">
        <div class="playListTopBar">
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
        <div class="topInfo">
            <div class="cover">
                <img :src="playList.coverImgUrl" alt="converImage" class="converDetail">
                <div class="playCount">
                    <van-icon name="play-circle-o" />
                    <span>{{ playList.playCount }}</span>
                </div>
            </div>
            <div class="infoBlock">
                <span class="playListName">{{ playList.name }}</span>
                <div class="playListCreator">
                    <img :src="playList.creator.avatarUrl" alt="avatarUrl" class="playListCreatorAvatar">
                    <span class="creatorNickname">{{ playList.creator.nickname }}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
                <div class="playListDesc">
                    <span class="desc">{{ playList.description }}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="topMenu">
            <div class="comment">
                <van-icon name="comment-o" size=".4rem"/>
                <span>评论</span>
            </div>
            <div class="share">
                <van-icon name="share-o" size=".4rem"/>
                <span>分享</span>
            </div>
            <div class="download">
                <van-icon name="down" size=".4rem"/>
                <span>下载</span>
            </div>
            <div class="selector">
                <van-icon name="passed" size=".4rem"/>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(props) {
        console.log(props)
        if (props.playList.creator = "") {
            props.playList.creator = JSON.parse(sessionStorage.getItem("playListDetail")).playList.creator
        }
    },
    props: ['playList']
}
</script>

<style lang="less" scoped>
.topBlock {
    width: 100%;
    height: 5rem;

    .topbarBg {
        width: 100%;
        height: 10rem;
        position: absolute;
        z-index: -1;
        filter: blur(30px);
    }

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
    }

    .topInfo {
        margin-top: .2rem;
        margin-left: .2rem;
        margin-right: .2rem;
        display: flex;

        .cover {
            display: flex;

            .playCount {
                width: 2rem;
                height: 2rem;
                text-align: right;
                color: white;
                align-self: center;
                padding: .1rem;
            }

            .converDetail {
                width: 2rem;
                height: 2rem;
                position: absolute;
                border-radius: 10px;
                align-self: center;
                z-index: -1;
            }
        }

        .infoBlock {
            margin-left: .4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .playListName {
                color: white;
                font-size: .4rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                -webkit-line-clamp: 1;
            }

            .playListCreator {
                display: flex;
                align-items: center;
                margin-top: .2rem;

                .playListCreatorAvatar {
                    width: .6rem;
                    height: .6rem;
                    border-radius: .3rem;
                }

                .creatorNickname {
                    margin-left: .2rem;
                    margin-right: .1rem;
                    color: white;
                    font-size: .3rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    -webkit-line-clamp: 1;
                }

                .icon {
                    width: .3rem;
                    height: .3rem;
                    fill: white;
                }
            }

            .playListDesc {
                display: flex;
                align-items: center;
                margin-top: .2rem;

                .desc {
                    width: 90%;
                    font-size: .25rem;
                    color: white;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                }

                .icon {
                    width: .3rem;
                    height: .3rem;
                    fill: white;
                }
            }
        }
    }

    .topMenu {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: .4rem;

        span {
            font-size: .25rem;
        }

        .comment {
            height: .9rem;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
        }

        .share {
            height: .9rem;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
        }

        .download {
            height: .9rem;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
        }

        .selector {
            height: .9rem;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
        }
    }
}
</style>