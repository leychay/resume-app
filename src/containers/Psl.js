import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, TYPO, COLOR, Icon } from 'react-native-material-design'

import AppStore from '../stores/AppStore'

export default class Psl extends Component {

    render() {

        return (
            <ScrollView>
            <View>
                <Card>
                    <Card.Media
                        image={<Image style={{width:500, height:300}} source={{uri: 'http://www.pslgroup.com/sites/default/files/logos-20160202.png'}} />}
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.googleBlue500]}>P\S\L Group</Text>
                        <Text style={[TYPO.paperFontSubhead, COLOR.googleBlue300, {backgroundColor: 'white'}]}>Application Developer</Text>
                    </Card.Media>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[TYPO.paperFontCode2 , COLOR.paperGrey300, {fontStyle: 'italic'}]}>October 2012 - July 2016</Text>
                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Responsible for hands-on PHP coding of new solutions and maintenance of existing code, including web page layout/styling, CMS configuration, data manipulation and  presentation, unit tests, software enhancements and bug fixes
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Responsible for working on coordinated projects and shared code between KL and North American development teams
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Responsible for documenting code thoroughly for pick-up and use by North American team
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Responsible for communicating clearly why certain programming decisions are made and follow up on any requirements or business clarifications needed in a timely manner
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Responsible for attending weekly after-hours meetings for support issues and planning sessions
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
