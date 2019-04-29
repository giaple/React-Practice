import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <div className={[classes['nav-tabs'], classes.flex].join(' ')}>
        <div className={[classes.nav, classes.arrow, classes.back].join(' ')}></div>
        <div className={[classes.nav, classes.arrow, classes.forward, classes.disabled].join(' ')}></div>
        <NavigationItem link="./sound" styles={[classes.NavItem, classes.nav].join(' ')}>
            sound
        </NavigationItem>
        <NavigationItem link="./mixer" styles={[classes.NavItem, classes.nav].join(' ')}>
            mixer
        </NavigationItem>
        <NavigationItem link="./enhancement" styles={[classes.NavItem, classes.nav].join(' ')}>
            enhancement
        </NavigationItem>
        <NavigationItem link="./eq" styles={[classes.NavItem, classes.nav].join(' ')}>
            eq
        </NavigationItem>
        <NavigationItem link="./mic" styles={[classes.NavItem, classes.nav,classes.active].join(' ')}>
            mic
        </NavigationItem>
        <NavigationItem link="./lighting" styles={[classes.NavItem, classes.nav].join(' ')}>
            lighting
        </NavigationItem>
        <NavigationItem link="./power" styles={[classes.NavItem, classes.nav].join(' ')}>
            power
        </NavigationItem>
        <div className={classes.user}>
            <div className={classes.avatar}></div>
        </div>
    </div>
);

export default navigationItems;