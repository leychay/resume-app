import React, { Component, PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableNativeFeedback } from 'react-native'
import { Card, Button, Divider, COLOR, TYPO } from 'react-native-material-design'
import AppStore from '../stores/AppStore'

import isEqual from 'lodash/isEqual'

export default class Education extends Component {

    constructor(props) {
        super(props)

    }

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    }

    render() {
        const { navigator } = this.context
        const theme = AppStore.getState().theme

        return (
            <View>
            <View style={styles.container, styles.row}>
            <TouchableNativeFeedback onPress={() => {
                navigator.forward('utm')
            }}>
            <View style={styles.listItem}>
                <Text numberOfLines={1}>University of Technology, Malaysia</Text>
            </View>
            </TouchableNativeFeedback>
            </View>

            <Divider />

            <View style={styles.container, styles.row}>
            <TouchableNativeFeedback onPress={() => {
                navigator.forward('mpcim')
            }}>
            <View style={styles.listItem}>
                <Text numberOfLines={1}>MARA Professional College Indera Mahkota</Text>
            </View>
            </TouchableNativeFeedback>
            </View>

            <Divider />

            <View style={styles.container, styles.row}>
            <TouchableNativeFeedback onPress={() => {
                navigator.forward('sahc')
            }}>
            <View style={styles.listItem}>
                <Text numberOfLines={1}>Sultan Abdul Hamid College</Text>
            </View>
            </TouchableNativeFeedback>
            </View>

            <Divider />
            </View>

        )
    }

}

const styles = {
    container: {
      flex: 2
    },
    row: {
      flexDirection: 'row'
    },
    listItem: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 12
      },
    content: {
        padding: 16
    },
    textWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -0.5
    },
    separator: {
        flex: 1,
        height: 0.2,
        backgroundColor: '#8E8E8E',
    },
    level: {
        fontSize: 11,
        backgroundColor: 'transparent'
    },
    icons: {
        paddingRight: 10
    }
}
