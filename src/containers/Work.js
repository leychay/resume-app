import React, { Component, PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { Button, Subheader, Divider } from 'react-native-material-design'
import { color, typography } from 'react-native-material-design-styles'
import isEqual from 'lodash/isEqual'

const colorStyle = StyleSheet.create(color)
const typoStyle = StyleSheet.create(typography)

import AppStore from '../stores/AppStore'

export default class Work extends Component {

    constructor(props){
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: isEqual })

        const work = [
        {
            "company": "FrogAsia (A YTL Company)",
            "position": "Senior Application Developer",
            "duration": "August 2016 - Present",
            "route": "frogasia",
            "logoLink": "https://lh3.googleusercontent.com/-u0TBSsc1Q1Y/AAAAAAAAAAI/AAAAAAAAAAY/Ub15bcqYz0g/s265-c-k-no/photo.jpg"
        }, {
            "company": "P\S\L Group (PeerHealth Malaysia Sdn Bhd)",
            "position": "Application Developer",
            "duration": "October 2012 - July 2016",
            "route": "psl",
            "logoLink": "https://media.glassdoor.com/sqll/453571/p-s-l-group-squarelogo-1426081563335.png"
        }, {
            "company": "Techsense Web Sdn Bhd",
            "position": "Web Developer cum Web Designer",
            "duration": "2009 - July 2012",
            "route": "techsenseweb",
            "logoLink": "http://www.definitivetech.com/images/products/product_image_not_available.gif"
        }, {
            "company": "Techsense Solutions Sdn Bhd",
            "position": "Project Engineer",
            "duration": "September 2008 - 2009",
            "route": "techsensesolution",
            "logoLink": "http://www.definitivetech.com/images/products/product_image_not_available.gif"
        }, {
            "company": "CallBiz (Sapura Marketing)",
            "position": "(Outbound) Customer Support",
            "duration": "April 2008 - August 2008",
            "route": "callbiz",
            "logoLink": "https://media.glassdoor.com/sqll/470183/sapuraacergy-squarelogo-1432214736273.png"
        }
        ]

        this.state = {
            dataSource: ds.cloneWithRows(work)
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
                    <Text style={[typoStyle.paperFontSubhead, colorStyle.paperPinkA400]}>{props.company}</Text>
                    <View>
                        <Text style={[typoStyle.paperFontBody1, colorStyle.paperPinkA200]}>{props.position}</Text>
                    </View>
                    <View>
                    <Text style={[typoStyle.paperFontCaption, colorStyle.paperPinkA100]}>{props.duration}</Text>
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
    }

}
