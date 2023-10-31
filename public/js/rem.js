function remSize() {
    //获取设备的宽度
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    } 
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }

    //设置html元素的fontSize
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    //设置body元素的fontSize
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()

window.onresize = function() {
    remSize()
}