import service from ".."

export function getPlayList(playlistID) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${playlistID}`
    })
}

export function getPlayListDetail(playlistID, limit, offset) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${playlistID}&limit=${limit}&offset=${offset}`
    })
}