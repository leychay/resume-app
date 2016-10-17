import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, TYPO, COLOR } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Sahc extends Component {

    render() {

        return (
            <ScrollView>
            <View>
                <Card>
                    <Card.Media
                        image={<Image height={250} source={require('./../img/sahc.jpg')} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey300]}>PMR/SPM</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.paperGrey200]}>Sultan Abdul Hamid College</Text>
                    </Card.Media>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[COLOR.googleBlue500]}>Sijil Peperiksaan Malaysia [SPM]</Text>
                    <Text style={COLOR.googleBlue300}>Year: 2002 - 2003</Text>
                    <Text style={COLOR.googleBlue300}>Qualification: Pangkat Dua</Text>
                    <Text style={COLOR.googleBlue300}>Sports: Rugby, Sepak Takraw, Athletics</Text>
                    </View>
                </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <View>
                        <Text style={[COLOR.googleBlue500]}>Peperiksaan Menengah Rendah [PMR]</Text>
                        <Text style={COLOR.googleBlue300}>Year: 1999 - 2001</Text>
                        <Text style={COLOR.googleBlue300}>Qualification: 3A 3B 1C 1D</Text>
                        <Text style={COLOR.googleBlue300}>Sports: Sepak Takraw, Cricket, Athletics</Text>
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
