import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Link from 'next/link'

import {setNavigation} from '../actions/allActions'
import {NAVIGATION_ITEMS} from '../constants'

class Nav extends Component {
  handleSetNavigation = (index) => {
    this.props.dispatch(setNavigation(index))
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-item nav-logo">
          <img
            className="bumpLogoWhite"
            src="/static/bump-logo-white.png"
            srcSet="/static/bump-logo-white@2x.png 2x, /static/bump-logo-white@3x.png 3x" />
        </div>
        <div className="nav-item nav-links">
          <div className="nav-links-container">
            {
              NAVIGATION_ITEMS.map((item, index) => {
                return (
                  <span
                    className={classNames('nav-link', {'nav-link-active': this.props.navItemIndex === index})}
                    onClick={() => this.handleSetNavigation(index)}>
                    <Link href={item.url}>
                      {item.label}
                    </Link>
                  </span>
                )
              })
            }
          </div>
        </div>
        <style jsx>{`
          .nav {
            -webkit-box-shadow: 0px 5px 5px -3px rgba(208, 208, 208, 0.58);
            -moz-box-shadow: 0px 5px 5px -3px rgba(208, 208, 208, 0.58);
            box-shadow: 0px 5px 5px -3px rgba(208, 208, 208, 0.58);
            display: flex;
            height: 84px;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-item {
            align-items: center;
            display: flex;
          }
          .nav-logo {
            margin-left: 37px;
          }
          .nav-links {
            margin-right: 59px;
          }
          .nav-links-container {
            border-bottom: solid 1px #aaa;
            padding-bottom: 6px;
          }
          .nav-link {
            cursor: pointer;
            font-size: 14px;
            padding: 0 12px;
            position: relative;
          }
          .nav-link-active:after {
            background-color: black;
            bottom: -9px;
            content: '';
            left: 0;
            height: 3px;
            position: absolute;
            width: 100%;
          }
          .nav-link:not(:last-child) {
            margin-right: 8px;
          }
          .bumpLogoWhite {
            height: 22px;
            object-fit: contain;
            width: 105px;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {navItemIndex} = state
  return {navItemIndex}
}

export default connect(mapStateToProps)(Nav)
