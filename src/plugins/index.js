import { Swipe, SwipeItem, Button, Icon, Popup } from 'vant'

let plugins = [
    Swipe, SwipeItem, Button, Icon, Popup
]

export default function installVantComponents(app) {
    plugins.forEach(element => {
        return app.use(element)
    });
}