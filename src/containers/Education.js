import React, { Component, PropTypes } from 'react'
import { View, Text, Image, IntentAndroid } from 'react-native'
import { Card, Button, COLOR, TYPO } from 'react-native-material-design'
import AppStore from '../stores/AppStore'

export default class Education extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    }

    render() {
        const { navigator } = this.context
        const theme = AppStore.getState().theme

        return (
            <View>
                <Card>
                    <Card.Media
                        image={<Image source={require('./../img/welcome.jpg')} />}
                        overlay
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>About Me</Text>
                        <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>My Resume App</Text>
                    </Card.Media>
                    <Card.Body>
                        <Text>To get started, vist the documentation over at Github! This page is an example of the Card component.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary={theme} text="GO TO MY SITE" onPress={() => IntentAndroid.openURL('http://www.mohamadikhwan.com')} />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Feel free to explore my little app. Nice meeting you (virtually)!</Text>
                    </Card.Body>
                </Card>
                <Button text="Go to child component" primary={theme} onPress={() => { navigator.forward() }} />
            </View>
        )
    }

}
