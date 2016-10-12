import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../img/nav.jpg')} />}
                >
                    <View style={styles.header}>
                        <Avatar size={70} image={<Image source={require('./../img/ikhwan.jpg')}/>} />
                        <Text style={[styles.text, COLOR.googleBlue700, TYPO.paperFontSubhead]}>Ikhwan Abdullah</Text>
                        <Text style={[styles.textBottom, COLOR.googleBlue500]}>Application Developer</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    title="My Info"
                    items={[{
                        icon: 'home',
                        value: 'Welcome',
                        active: !route || route === 'welcome',
                        onPress: () => this.changeScene('welcome'),
                        onLongPress: () => this.changeScene('welcome')
                    }, {
                        icon: 'face',
                        value: 'About Me',
                        active: route === 'about',
                        onPress: () => this.changeScene('about'),
                        onLongPress: () => this.changeScene('about')
                    }, {
                        icon: 'list',
                        value: 'Skills',
                        active: route === 'skills',
                        onPress: () => this.changeScene('skills'),
                        onLongPress: () => this.changeScene('skills')
                    }, {
                        icon: 'school',
                        value: 'Education Background',
                        active: route === 'education',
                        onPress: () => this.changeScene('education'),
                        onLongPress: () => this.changeScene('education')
                    }, {
                        icon: 'work',
                        value: 'Working Experience',
                        // label: '10',
                        active: route === 'work',
                        onPress: () => this.changeScene('work'),
                        onLongPress: () => this.changeScene('work')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 5
    },
    textBottom: {
        fontSize: 12,
        marginTop: 2
    }
};
