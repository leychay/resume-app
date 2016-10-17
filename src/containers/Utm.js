import React, { Component, PropTypes } from 'react'
import { View, Text, Image, Linking, ScrollView } from 'react-native'
import { Card, Button, Icon, TYPO, COLOR } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Utm extends Component {

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
                        image={<Image height={250} source={require('./../img/utm.jpg')} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperIndigo600]}>Bcs. Software Engineering</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.paperIndigo500]}>University of Technology, Malaysia</Text>
                    </Card.Media>
                </Card>
                <Card>
                    <Card.Body>
                        <View>
                        <Text style={[COLOR.googleBlue500]}>Bachelor of Computer Science</Text>
                        <Text style={[COLOR.googleBlue500]}>(Software Engineering)</Text>
                        <Text style={COLOR.googleBlue300}>Year: 2009 - 2015 [Part-timer]</Text>
                        <Text style={COLOR.googleBlue300}>Qualification: Graduated with CGPA of 3.26</Text>
                        </View>
                    </Card.Body>
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
