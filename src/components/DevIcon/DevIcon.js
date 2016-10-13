// /**
//  * devicon icon set component.
//  * Usage: <devicon name="icon-name" size={20} color="#4F8EF7" />
//  */

// import createIconSet from 'react-native-vector-icons/lib/create-icon-set'
// const glyphMap = {}

// let devicon = createIconSet(glyphMap, 'devicon', 'devicon.ttf')

// module.exports = devicon
// module.exports.glyphMap = glyphMap


// import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
// import icoMoonConfig from '../../node_modules/devicon/icomoon.json'
// const DevIcon = createIconSetFromIcoMoon(icoMoonConfig)

// module.exports = DevIcon

import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from './config.json'
const DevIcon = createIconSetFromFontello(fontelloConfig)

module.exports = DevIcon
