import service from ".."

export function getPlayList(playlistID) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${playlistID}`
    })
}