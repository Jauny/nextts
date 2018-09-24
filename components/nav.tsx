import React from "react"

export default () => {
  return (
    <div className="nav">
      <div className="nav-item nav-logo">
        <img
          className="bumpLogoWhite"
          src="/static/bump-logo-white.png"
          srcSet="/static/bump-logo-white@2x.png 2x, /static/bump-logo-white@3x.png 3x">
        </img>
      </div>
      <div className="nav-item nav-links">
        <div className="nav-links-container">
          <span className="nav-link nav-link-active">Download</span>
          <span className="nav-link">Shop</span>
        </div>
      </div>
      <style global jsx>{`
        body {
          margin: 0;
          font-family: 'PingFangSC';
        }
      `}</style>
      <style jsx>{`
        .nav {
          display: flex;
          height: 84px;
          flex-direction: row;
          justify-content: space-between;
          -webkit-box-shadow: 0px 5px 5px -3px rgba(208, 208, 208, 0.58);
          -moz-box-shadow: 0px 5px 5px -3px rgba(208, 208, 208, 0.58);
          box-shadow: 0px 5px 5px -3px rgba(208, 208, 208, 0.58);
        }
        .nav-item {
          display: flex;
          align-items: center;
        }
        .nav-logo {
          margin-left: 37px;
        }
        .nav-links {
          margin-right: 59px;
        }
        .nav-links-container {
          border-bottom: solid 1px #aaa;
          padding-bottom: 4px;
        }
        .nav-link {
          font-size: 16px;
          padding: 0 8px;
          position: relative;
        }
        .nav-link-active:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 3px;
          background-color: black;
          width: 100%;
        }
        .nav-link:not(:last-child) {
          margin-right: 12px;
        }
        .bumpLogoWhite {
          width: 105px;
          height: 22px;
          object-fit: contain;
        }
      `}</style>
    </div>
  )
}
