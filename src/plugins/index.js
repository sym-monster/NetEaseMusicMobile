import { Swipe, SwipeItem, Button, Icon } from 'vant'

let plugins = [
    Swipe, SwipeItem, Button, Icon
]

export default function installVantComponents(app) {
    plugins.forEach(element => {
        return app.use(element)
    });
}