import React, { Component, PropTypes } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, Button, Divider, COLOR, TYPO } from 'react-native-material-design'
import AppStore from '../stores/AppStore'

export default class About extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    }

    render() {
        const { navigator } = this.context
        const theme = AppStore.getState().theme

        let date = new Date()
        let thisYear = date.getFullYear()

        let myAge = thisYear - 1986

        return (
            <ScrollView>
            <View>
                <Card>
                    <Card.Media
                        image={<Image source={require('./../img/me-horizontal.jpg')} />}
                    >
                    <Text style={[TYPO.paperFontHeadline, COLOR.googleBlue500]}>More stuff about me</Text>
                    <Text style={[TYPO.paperFontSubhead, COLOR.googleBlue300]}>You think you know me?</Text>
                    </Card.Media>
                    <Card.Body>
                        <Text style={[styles.break, TYPO.paperFontBody1]}>I'm a family man, living on the outskirts of Kuala Lumpur with a loving wife and a cheerful daughter</Text>
                        <Text style={TYPO.paperFontBody1}>Currently having fun involving in various projects at FrogAsia, where the fun ranges from Front-End projects to Back-End development</Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Text style={TYPO.paperFontBody1}>I'm 5'6 tall </Text>
                        <Divider style={styles.break} />
                        <Text style={TYPO.paperFontBody1}>{ myAge } years old this year</Text>
                        <Divider style={styles.break} />
                        <Text style={TYPO.paperFontBody2}>Loves:</Text>
                        <Text style={TYPO.paperFontCaption}> * Reading Manga</Text>
                        <Divider />
                        <Text style={TYPO.paperFontCaption}> * Watching Anime</Text>
                        <Divider />
                        <Text style={TYPO.paperFontCaption}> * Googling things</Text>
                        <Divider />
                        <Text style={[styles.break, TYPO.paperFontCaption]}> * Spending time with my family</Text>

                        <Text style={TYPO.paperFontBody2}>Personality:</Text>
                        <Text style={TYPO.paperFontCaption}>Cheerful</Text>
                        <Divider />
                        <Text style={TYPO.paperFontCaption}>Charismatic</Text>
                        <Divider />
                        <Text style={TYPO.paperFontCaption}>Hardworking (...maybe?)</Text>
                    </Card.Body>
                </Card>
                <Button text="Catch me online" primary={theme} onPress={() => { navigator.forward() }} />
            </View>
            </ScrollView>
        )
    }

}

const styles = {
    break: {
        marginBottom: 10
    }
};
