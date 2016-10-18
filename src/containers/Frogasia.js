import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, TYPO, COLOR, Icon } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Frogasia extends Component {

    render() {

        return (
            <ScrollView>
            <View>
                <Card>
                    <Card.Media
                        image={<Image style={{width:400, height: 200}} source={{uri: 'http://www.teachformalaysia.org/blog/home/teachfor/public_html/blog/wp-content/uploads/2014/09/frogasia-1024x381.png'}} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperLightBlueA400]}>FrogAsia (A YTL Company)</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.paperLightBlueA200, {backgroundColor: 'white'}]}>Senior Application Developer</Text>
                    </Card.Media>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[TYPO.paperFontCode2 , COLOR.paperGrey300, {fontStyle: 'italic'}]}>August 2016 - Present</Text>
                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Work with the operational support teams to investigate issues raised by end users</Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Work with developers and testers to replicate and resolve the issues raised</Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Work with the marketing team to capture requirements and support the rollout of campaigns, newsletters and blogs</Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Proactively identify issues and recommend solutions to preventing these issues</Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Research and contribute towards an improved platform by working closely with the architects to ensure a solid foundation is created for future projects</Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Mentor and train new employees and encourage good development practices</Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>Contribute to the system and project documentation</Text>
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
