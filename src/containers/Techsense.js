import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native'
import { Card, TYPO, COLOR, Icon } from 'react-native-material-design'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import AppStore from '../stores/AppStore'

export default class Techsense extends Component {

    constructor(props) {
        super(props)

        //Initial State for InitialPage
        this.state = {
            initialPage: 0
        }

        if (props.path == 'work.techsensesolution') {
            this.state.initialPage = 0
        } else {
            this.state.initialPage = 1
        }
    }

    render() {

        const { initialPage } = this.state

        return (
            <ScrollableTabView
            style={{marginTop: 10 }}
            initialPage={initialPage}
            renderTabBar={() => <ScrollableTabBar />}
            >
            <ScrollView tabLabel="Techsense Solutions">

                    <Card>
                        <Card.Body
                        >
                            <Text style={[TYPO.paperFontHeadline, COLOR.googleBlue500]}>Techsense Solutions</Text>
                            <Text numberOfLines={1} style={[TYPO.paperFontSubhead, COLOR.googleBlue300, {backgroundColor: 'white'}]}>Project Engineer</Text>
                            <Text style={[TYPO.paperFontCode2 , COLOR.paperGrey300, {fontStyle: 'italic'}]}>September 2008 - 2009</Text>
                        </Card.Body>
                    </Card>

                    <Card>
                    <Card.Body>
                        <View>
                        <View style={styles.listItem}>
                            <View style={styles.icons}>
                                <Icon name="check" color="blue" size={15} />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                                    Involved in Meteorological (weather) system for Techsense Solutons as the programmer/project engineer using PERL, PHP and PostgreSQL
                                </Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.icons}>
                                <Icon name="check" color="blue" size={15} />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                                    Project includes Automated Weather Observation System (AWOS), and Automatic Weather System (AWS)
                                </Text>
                            </View>
                        </View>

                        </View>
                    </Card.Body>
                    </Card>

            </ScrollView>

            <ScrollView tabLabel="Techsense Web">
                <Card>
                    <Card.Body
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.googleBlue500]}>Techsense Web</Text>
                        <Text numberOfLines={1} style={[TYPO.paperFontSubhead, COLOR.googleBlue300, {backgroundColor: 'white'}]}>Web Developer/Web Designer</Text>
                        <Text style={[TYPO.paperFontCode2 , COLOR.paperGrey300, {fontStyle: 'italic'}]}>2009 - July 2012</Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[TYPO.paperFontBody2 , COLOR.paperIndigo600]}>Barracuda College Management System</Text>
                    <Text style={[TYPO.paperFontBody2 , COLOR.paperIndigo300]} onPress={() => Linking.openURL('http://www.barracudacms.com')}>[www.barracudacms.com]</Text>
                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            BarracudaCMS is an application for Colleges to maintain the whole college management in a simple and straight-forward approaces
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Involved directly in development team and responsible of maintaining the whole layout and interface, as well as the application development
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Perform R&D whenever applicable for application enhancement and optimization
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Meet with clients to discuss feature enhancement, regular maintenance and application update
                            </Text>
                        </View>
                    </View>

                    </View>
                </Card.Body>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[TYPO.paperFontBody2 , COLOR.paperIndigo600]}>Malaysia Property Listing</Text>
                    <Text style={[TYPO.paperFontBody2 , COLOR.paperIndigo300]} onPress={() => Linking.openURL('http://www.hartanah.net')}>[www.hartanah.net]</Text>
                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Hartanah.net is an established property and real estate, offering an easy platform for users to post and search properties to sell, buy or rent
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Involved in site development using PHP and MySQL, and responsible for interface layout and design using HTML + CSS
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Perform R&D whenever applicable for application enhancement and optimization
                            </Text>
                        </View>
                    </View>

                    </View>
                </Card.Body>
                </Card>

                <Card>
                <Card.Body>
                    <View>
                    <Text style={[TYPO.paperFontBody2 , COLOR.paperIndigo600]}>Malaysia Indie Music Site</Text>
                    <Text style={[TYPO.paperFontBody2 , COLOR.paperIndigo300]} onPress={() => Linking.openURL('http://www.jomgig.com')}>[www.jomgig.com]</Text>
                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Jomgig.com is a platform for Indie lovers to show off their talents, keep up-to-date on the latest happenings
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Responsible of designing the interface and project development as well maintaining the project
                            </Text>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.icons}>
                            <Icon name="check" color="blue" size={15} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={TYPO.paperFontBody1, styles.breakHalf}>
                            Perform R&D whenever applicable for application enhancement and optimization
                            </Text>
                        </View>
                    </View>

                    </View>
                </Card.Body>
                </Card>



            </ScrollView>

            </ScrollableTabView>

        )
    }

}

const styles = StyleSheet.create({
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
})
