export default {

    welcome: {
        initialRoute: true,

        title: 'Welcome',
        component: require('./containers/Welcome').default
    },

    about: {
        title: 'About Me',
        component: require('./containers/About').default,

        children: {
            online: {
            title: 'Catch me online at',
            component: require('./containers/Online').default
            }
        }
    },

    skills: {
        title: 'Skills',
        component: require('./containers/Skills').default
    },

    education: {
        title: 'Education Background',
        component: require('./containers/Education').default
    },

    work: {
        title: 'Working Experience',
        component: require('./containers/Work').default
    }

}
