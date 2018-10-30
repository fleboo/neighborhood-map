import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import SideDrawer from '../../components/SideDrawer';
import Toolbar from '../../components/Toolbar';
import '../../App.css';

class Layout extends Component {
  
  render () {
    return (
      <Aux>
        <div className="App" >
          <Toolbar hamburgerClick={this.props.hamburgerClick} />
          <div className="main">
            <SideDrawer 
              {...this.props}
              venues={this.props.venues} 
              listItemClick={this.props.listItemClick}
              changed={this.props.searchFilter}
              sideDrawerVisible={this.props.sideDrawerOpen}
              closeIconClick={this.props.hamburgerClick} />
            <div className="MapWrap" role="application" aria-hidden="true">
              {this.props.children}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Layout;