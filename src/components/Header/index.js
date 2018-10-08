import React from 'react'
import { MDCTopAppBar } from '@material/top-app-bar'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.topAppBar = new MDCTopAppBar(this.ref.current)
  }

  render() {
    return (
      <div ref={ this.ref } className="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" className="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" style={{ '--mdc-ripple-fg-size': '28px', '--mdc-ripple-fg-scale': 1.71429, '--mdc-ripple-left': '10px', '--mdc-ripple-top': '10px'}}>menu</a>
            <span className="mdc-top-app-bar__title">{ this.props.title }</span>
          </section>
          <section id="iconSection" className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" />
        </div>
      </div>
    )
  }
}

