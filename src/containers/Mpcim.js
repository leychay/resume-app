import React, { Component, PropTypes } from 'react'
import { View, Text, Image, Linking, ScrollView } from 'react-native'
import { Card, Button, Icon, TYPO, COLOR } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Mpcim extends Component {

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
                        image={<Image height={250} source={require('./../img/mpcim.jpg')} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey300]}>Higher National Diploma</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.paperGrey200]}>Mara Professional College Indera Mahkota</Text>
                    </Card.Media>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[COLOR.googleBlue500]}>Higher National Diploma</Text>
                    <Text style={[COLOR.googleBlue500]}>Business Information Technology</Text>
                    <Text style={COLOR.googleBlue300}>Year: 2005 - 2008</Text>
                    <Text style={COLOR.googleBlue300}>Qualification: Graduated with CGPA of 3.63</Text>
                    <Text style={COLOR.googleBlue300}>Award: Edexcel's Best Student</Text>
                    <Text style={COLOR.googleBlue300}>Sports: Rugby</Text>
                    </View>
                </Card.Body>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[COLOR.googleBlue500]}>Higher National Diploma (Foundation)</Text>
                    <Text style={[COLOR.googleBlue500]}>Business Information Technology</Text>
                    <Text style={COLOR.googleBlue300}>Year: 2004 - 2005</Text>
                    <Text style={COLOR.googleBlue300}>Qualification: Distinction</Text>
                    <Text style={COLOR.googleBlue300}>Sports: Rugby</Text>
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
