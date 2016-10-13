import React, { Component, PropTypes } from 'react'
import { View, Text, ListView, ProgressBarAndroid } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Button, Subheader, COLOR } from 'react-native-material-design'

import DevIcon from '../components/DevIcon/DevIcon'

import isEqual from 'lodash/isEqual'

import AppStore from '../stores/AppStore'

export default class Skills extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: isEqual })

        /*
         * Level:
         * 0 - Boo
         * 1 - Poor
         * 2 - Okay
         * 3 - Intermediate
         * 4 - Good
         * 5 - Excellent
         * 6 - Master
         * 7 - Ninja
         */

         const front = [
         {
             "tech": "jQuery",
             "icon": "jquery-plain",
             "level": 5
         }, {
             "tech": "React Native",
             "icon": "react-original",
             "level": 2
         }, {
             "tech": "HTML",
             "icon": "html5-plain",
             "level": 9
         }, {
             "tech": "CSS",
             "icon": "css3-plain",
             "level": 9
         }, {
             "tech": "Bower",
             "icon": "bower-plain",
             "level": 4
         }]

         const back = [
         {
             "tech": "PHP",
             "icon": "php-plain",
             "level": 8
         }, {
             "tech": "MySQL",
             "icon": "mysql-plain",
             "level": 7
         }, {
             "tech": "Perl",
             "icon": "php-plain",
             "level": 3
         }, {
             "tech": "Python",
             "icon": "python-plain",
             "level": 3
         }]

         const framework = [
         {
             'tech': 'CodeIgniter',
             "icon": "codeigniter-plain",
             'level': 7,
         }, {
             'tech': 'Drupal',
             "icon": "drupal-plain",
             'level': 4,
         }, {
             'tech': 'React',
             "icon": "react-original",
             'level': 3,
         }, {
             'tech': 'Android',
             "icon": "android-plain",
             'level': 3.5,
         }]

         const misc = [
         {
             'tech': 'Linux',
             "icon": "linux-plain",
             'level': 4,
         }, {
             'tech': 'Ubuntu',
             "icon": "ubuntu-plain",
             'level': 4,
         }, {
             'tech': 'Node Package Manager',
             "icon": "nodejs-plain",
             'level': 6,
         }, {
             'tech': 'Git',
             "icon": "git-plain",
             'level': 6,
         }, {
             'tech': 'Apache',
             "icon": "apache-plain",
             'level': 8,
         }, {
             'tech': 'Vim',
             "icon": "vim-plain",
             'level': 7,
         }]

        this.state = {
            frontEnd: ds.cloneWithRows(front),
            backEnd: ds.cloneWithRows(back),
            framework: ds.cloneWithRows(framework),
            misc: ds.cloneWithRows(misc)
        }

        // this.state = {
        //     dataSource: ds.cloneWithRows(data)
        // }

   }

   renderProgressBar(level) {

       let flexOffset = Math.max(0.05, level / 10)
       flexOffset = flexOffset >= 0.95 ? 1 : flexOffset
       return (
         <View>
           <ProgressBarAndroid
             color={COLOR.paperPurple}
             styleAttr="Horizontal"
             progress={level / 10}
             indeterminate={false}
           />
           <View style={[styles.container, styles.row, styles.textWrapper]}>
             <View style={{ flex: flexOffset }} />
             <View style={{ flex: 1 - (flexOffset) }}>
                <Text style={styles.level}>{level}</Text>
             </View>
           </View>
         </View>
       )
     }

    render() {
        const theme = AppStore.getState().theme

        const Row = (props) => (
            <View>
            <View style={styles.listItem}>
                <View style={styles.icons}>
                    <DevIcon name={props.icon} color={COLOR.googleRed400} size={25} />
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.text} numberOfLines={1}>{props.tech}</Text>

                    {this.renderProgressBar(props.level)}
                </View>
            </View>
            </View>
            )

        return (
            <ScrollableTabView
            style={{marginTop: 10 }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
            >
            <View tabLabel="Front End">
                <ListView
                    dataSource={this.state.frontEnd}
                    renderRow={(rowData) => <Row {...rowData} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
            </View>
            <View tabLabel="Back End">
            <ListView
                dataSource={this.state.backEnd}
                renderRow={(rowData) => <Row {...rowData} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            </View>
            <View tabLabel="Framework">
            <ListView
                dataSource={this.state.framework}
                renderRow={(rowData) => <Row {...rowData} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            </View>
            <View tabLabel="Misc">
            <ListView
                dataSource={this.state.misc}
                renderRow={(rowData) => <Row {...rowData} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            </View>
            </ScrollableTabView>
            );
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
        color: 'grey',
        fontSize: 11,
        backgroundColor: 'transparent'
    },
    icons: {
        paddingRight: 10
    }
}
