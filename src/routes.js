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
        component: require('./containers/Education').default,

        children: {
            utm: {
                title: 'University of Technology, Malaysia',
                component: require('./containers/Utm').default
            },
            mpcim: {
                title: 'Mara Professional College Indera Mahkota',
                component: require('./containers/Mpcim').default
            },
            sahc: {
                title: 'Sultan Abdul Hamid College',
                component: require('./containers/Sahc').default
            },
        }
    },

    work: {
        title: 'Working Experience',
        component: require('./containers/Work').default,

        children: {
            frogasia: {
                title: 'FrogAsia',
                component: require('./containers/Frogasia').default
            },
            psl: {
                title: 'P\S\L Group (PeerHealth Sdn Bhd)',
                component: require('./containers/Psl').default
            },
            techsenseweb: {
                title: 'Techsense Group',
                component: require('./containers/Techsense').default
            },
            techsensesolution: {
                title: 'Techsense Group',
                component: require('./containers/Techsense').default
            },
            callbiz: {
                title: 'CallBiz (Sapura Marketing)',
                component: require('./containers/Callbiz').default
            }
        }
    }

}
