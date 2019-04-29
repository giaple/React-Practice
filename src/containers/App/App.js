import React, { Component } from 'react';
import classes from './App.module.css';

import Navigation from '../../components/Navigation/NavigationItems/NavigationItems';
import Footer from '../../components/UI/Footer/footer';
import Bar from '../../components/UI/Bar/Bar';
import LeftContent from '../../components/UI/Contents/LeftContent';
import RightContent from '../../components/UI/Contents/RightContent';
import '../../assets/css/nav.css';
import '../../assets/css/main.css';
import '../../assets/css/equalizer.css';
import '../../assets/css/tooltip.css';
import '../../assets/css/tabs.css';
import '../../assets/css/switch.css';
import '../../assets/css/calibrator.css';
import '../../assets/css/customize.css';
import '../../assets/css/chroma-effects.css';
import '../../assets/css/dashboard.css';
import '../../assets/css/body-widgets.css';
import '../../assets/css/slider.css';
import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';
import '../../assets/css/checkbox.css';


class App extends Component {

  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className={[classes['body-wrapper'], 'scrollable'].join(' ')}>
          <Bar />
          <div className="body-widgets flex">
            <LeftContent />
            <RightContent/>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
