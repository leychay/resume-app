import React, { Component, PropTypes } from 'react'
import { View, Text, Image, Linking, ScrollView } from 'react-native'
import { Card, Button, Icon, TYPO, COLOR } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Welcome extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    }

    render() {
        const { navigator } = this.context
        const theme = AppStore.getState().theme

        return (
            <ScrollView>
            <View>
                <Card>
                    <Card.Media
                        image={<Image height={250} source={require('./../img/me-horizontal.jpg')} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.googleBlue500]}>I'm Ikhwan!</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.googleBlue300]}>How are you today?</Text>
                    </Card.Media>
                    <Card.Body>
                        <Text style={styles.breakHalf}>Hi! I'm an Application Developer focusing on PHP, MySQL and...... a lil' bit of Front-End language, ATM. </Text>
                        <Text style={styles.breakHalf}>Oh. if you're wondering, I use React Native for this app. It's a great Framework. Go check it out if you haven't already! ;)</Text>
                        <Text>I'm passionate about delivering a robust and efficient tools that helps my user meet their goals. </Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <View style={[styles.alignCenter]}>
                        <Text style={[COLOR.paperPurple300, styles.alignCenter]}>Anyway, nice meeting you (virtually)!</Text>
                        <Text style={COLOR.paperPurple300}>Feel free to explore my little app.</Text>
                        </View>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Actions position="right">
                        <Button primary={theme} text="Wanna see my website?" onPress={() => Linking.openURL('http://www.mohamadikhwan.com')} />
                    </Card.Actions>
                </Card>
            </View>
        </ScrollView>
        )
    }

}

const styles = {
    'breakHalf': {
        marginBottom: 5
    },
    break: {
        marginBottom: 10
    },
    alignCenter: {
        alignItems: 'center'
    }
}
