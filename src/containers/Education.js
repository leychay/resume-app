import React, { Component, PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableNativeFeedback } from 'react-native'
import { Card, Button, Divider, COLOR, TYPO } from 'react-native-material-design'
import AppStore from '../stores/AppStore'

import isEqual from 'lodash/isEqual'

export default class Education extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: isEqual })

        const education = [
        {
            "institute": "University of Technology, Malaysia",
            "qualification": "BCS. Software Engineering",
            "duration": "2009 - 2015",
            "route": "utm",
            "logoLink": "http://ihce.utm.my/files/2015/12/utm-logo.gif"
        }, {
            "institute": "Mara Professional College Indera Mahkota",
            "qualification": "HND - Business Information Technology",
            "duration": "2004 - 2008",
            "route": "mpcim",
            "logoLink": "http://1.bp.blogspot.com/_4p1ERqFM4wY/SS5_qLksICI/AAAAAAAAACA/Q3XvC37-09g/S264/LOGO+KPMIM.jpg"
        }, {
            "institute": "Sultan Abdul Hamid College",
            "qualification": "Secondary School",
            "duration": "1999 - 2003",
            "route": "sahc",
            "logoLink": "https://upload.wikimedia.org/wikipedia/en/1/18/Ksah.png"
        }
        ]

        this.state = {
            dataSource: ds.cloneWithRows(education)
        }
    }

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    }

    render() {
        const { navigator } = this.context
        const theme = AppStore.getState().theme

        const { dataSource } = this.state

        const Row = (props) => (
            <View>
                <TouchableNativeFeedback
                onPress={() => {navigator.forward(props.route)}}>
                <View style={styles.listItem}>
                <View style={styles.icons}>
                    <Image source={{uri: props.logoLink}}
                    style={{width: 50, height: 50}} />
                </View>
                <View style={{flex:1}}>
                    <Text style={[TYPO.paperFontSubhead, COLOR.paperPinkA400]}>{props.institute}</Text>
                    <View>
                        <Text style={[TYPO.paperFontBody1, COLOR.paperPinkA200]}>{props.qualification}</Text>
                    </View>
                    <View>
                    <Text style={[TYPO.paperFontCaption, COLOR.paperPinkA100]}>{props.duration}</Text>
                    </View>
                </View>
                </View>
                </TouchableNativeFeedback>
            </View>
        )
        return (
            <View>
            <ListView
                dataSource={dataSource}
                renderRow={(rowData) => <Row {...rowData} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            >
            </ListView>
            </View>

        )
    }

}

const styles = {
    container: {
      flex: 2
    },
    row: {
      flexDirection: 'row'
    },
    listItem: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 12
      },
    content: {
        padding: 16
    },
    textWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -0.5
    },
    separator: {
        flex: 1,
        height: 0.2,
        backgroundColor: '#8E8E8E',
    },
    level: {
        fontSize: 11,
        backgroundColor: 'transparent'
    },
    icons: {
        paddingRight: 20
    }
}
