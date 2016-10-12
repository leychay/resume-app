import React, { Component, PropTypes } from 'react'
import { View, Text, Linking } from 'react-native'
import { Button, Subheader, Divider, COLOR } from 'react-native-material-design'
import Icon from 'react-native-vector-icons/FontAwesome'

import AppStore from '../stores/AppStore'

export default class Online extends Component {

    render() {
        const theme = AppStore.getState().theme

        return (
            <View style={styles.wrapper}>

                <View style={styles.content}>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => Linking.openURL('http://facebook.com/leychay')}>
                www.fb.com/leychay
                </Icon.Button>

                <Divider style={styles.break} />
                <Icon.Button name="twitter" backgroundColor="#4099FF" onPress={() => Linking.openURL('http://www.twitter.com/leychay')}>
                @leychay
                </Icon.Button>
                <Divider style={styles.break} />

                <Icon.Button name="instagram" backgroundColor="#4C68D7" onPress={() => Linking.openURL('http://instagram.com/leychay')}>
                @leychay
                </Icon.Button>
                <Divider style={styles.break} />
                </View>

                <Divider />

                <View style={styles.content}>
                <Icon.Button name="linkedin" backgroundColor="#4875B4" onPress={() => Linking.openURL('http://www.linkedin.com/in/ikhwanabdullah')}>
                LinkedIn Profile
                </Icon.Button>
                <Divider style={styles.break} />

                <Icon.Button name="globe" backgroundColor={COLOR.googleBlue} onPress={() => Linking.openURL('http://www.mohamadikhwan.com')}>
                My Website
                </Icon.Button>
                <Divider style={styles.break} />

                <Icon.Button name="wordpress" backgroundColor="#21759B" onPress={() => Linking.openURL('http://blog.mohamadikhwan.com')}>
                My Rambling
                </Icon.Button>
                <Divider style={styles.break} />

                </View>

            </View>
        )
    }
}

const styles = {
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    content: {
        padding: 16
    },
    break: {
        marginBottom: 15
    }
}

