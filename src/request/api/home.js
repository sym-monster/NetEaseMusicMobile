import service from ".."

export function fetchBanners() {
    return service({
        method: "GET",
        url: "banner?type?=2"
    })
}

export function getMusicList() {
    return service({
        method: "GET",
        url: "personalized?limit=10"
    })
}