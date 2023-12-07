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

export function searchMusic(keyword) {
    return service({
        method: "GET",
        url: `search?keywords=${keyword}`
    })
}

export function login(param) {
    return service({
        method: "GET",
        url: `login/cellphone?phone=${param.account}&password=${param.password}`
    })
}