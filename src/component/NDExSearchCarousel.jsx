import React from 'react'

import {Tabs, Tab} from 'material-ui/Tabs';

import {
  NDExNetworkSearch,
  NDExUserSearch,
  NDExGroupSearch
 } from 'ndex-search-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class NDExValetFinder extends React.Component {

  static defaultProps = {
    searchStyle: {
      width: '100%',
      height: '94',
      overflow: 'hidden'
    },
    networkDefaultQuery: "",
    networkFilters: [],
    networkVisualizations: [],
    userDefaultQuery: "",
    userFilters: [],
    userVisualizations: [],
    groupDefaultQuery: "",
    groupFilters: [],
    groupVisualizatons: [],
    theme: {},
    onLoad: () => {}
  }

  render() {
    const theme = getMuiTheme(this.props.theme)
    console.log(NDExUserSearch)
    console.log(NDExNetworkSearch)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Tabs>
          <Tab label="Search Networks" >
            <div>
            <NDExNetworkSearch
              style={this.props.searchStyle}
              theme={this.props.theme}
              defaultQuery={this.props.networkDefaultQuery}
              filters={this.props.networkFilters}
              visualizations={this.props.networkVisualizations}
            />
            </div>
           </Tab>
         <Tab label="Search Users" >
            <div>
              <NDExUserSearch
                style={this.props.searchStyle}
                theme={this.props.theme}
                defaultQuery={this.props.userDefaultQuery}
                filters={this.props.userFilters}
                visualizations={this.props.userVisualizations}
              />
            </div>
          </Tab>
          <Tab label="Search Groups">
            <div>
            <NDExGroupSearch
              style={this.props.searchStyle}
              theme={this.props.theme}
              defaultQuery={this.props.groupDefaultQuery}
              filters={this.props.groupFilters}
              visualizations={this.props.groupVisualizations}
            />
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    )
  }

}
