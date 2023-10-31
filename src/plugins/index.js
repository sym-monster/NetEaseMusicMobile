import { Swipe, SwipeItem, Button } from 'vant'

let plugins = [
    Swipe, SwipeItem, Button
]

export default function installVantComponents(app) {
    plugins.forEach(element => {
        return app.use(element)
    });
}