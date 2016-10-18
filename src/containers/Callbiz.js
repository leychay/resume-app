import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, TYPO, COLOR, Icon } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Callbiz extends Component {

    render() {

        return (
            <ScrollView>
            <View>
                <Card>
                    <Card.Media
                        image={<Image style={{width:500, height:300}} source={{uri: 'http://docplayer.net/docs-images/26/7394027/images/14-0.png'}} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.googleBlue500]}>CallBiz (Sapura Marketing)</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.googleBlue300, {backgroundColor: 'white'}]}>Outbound Call - Customer Support</Text>
                    </Card.Media>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[TYPO.paperFontCode2 , COLOR.paperGrey300, {fontStyle: 'italic'}]}>April 2008 - August 2008</Text>
                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Perform outbound call for Exxonmobil loyalty program: Smiles Card under Sapura subsidiary company, CallBiz
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Handles Singapore customers
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Job includes contacting Singapore's client to obtain their complete information, point redemption, Credit Card blocking, merge cards, and data entry using MATRIKS system
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Awarded as the best employees of May 2008
                            </Text>
                        </View>
                    </View>

                    </View>
                </Card.Body>
                </Card>

            </View>
        </ScrollView>
        )
    }

}

const styles = {
    container: {
      flex: 1
    },
    row: {
      flexDirection: 'row'
    },
    listItem: {
        alignItems: 'center',
        borderColor: '#ccc',
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 12
      },
    content: {
        padding: 16
    },
    separator: {
        flex: 1,
        height: 0.2,
        backgroundColor: '#8E8E8E',
    },
    icons: {
        paddingRight: 10
    },
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
