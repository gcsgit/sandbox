import React from 'react'
import Header from '../Header'
import 'material-components-web/dist/material-components-web.min.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="mdc-typography">
        <Header title='Main Menu' />
      </div>
    )
  }
}

