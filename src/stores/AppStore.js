import { AsyncStorage } from 'react-native'
import alt from '../alt'

const THEME = '@Storage:theme'

class AppStore {

    constructor() {
        this._loadTheme()

    }

    _loadTheme = () => {
        AsyncStorage.getItem(THEME).then((value) => {
            this.theme = value || 'paperBlue'
        })
    }

    handleUpdateTheme(name) {
        this.theme = name
        AsyncStorage.setItem(THEME, name)
    }

}

export default alt.createStore(AppStore, 'AppStore')
