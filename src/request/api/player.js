import service from ".."

export function getMusicLyric(musicID) {
    return service({
        method: "GET",
        url: `/lyric?id=${musicID}`
    })
}