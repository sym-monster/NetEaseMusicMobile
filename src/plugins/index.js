import { Swipe, SwipeItem, Button, Icon, Popup, Field, CellGroup } from 'vant'

let plugins = [
    Swipe, SwipeItem, Button, Icon, Popup, Field, CellGroup
]

export default function installVantComponents(app) {
    plugins.forEach(element => {
        return app.use(element)
    });
}