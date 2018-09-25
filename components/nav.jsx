export default () => {
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
          <span className="nav-link nav-link-active">Download</span>
          <span className="nav-link">Shop</span>
        </div>
      </div>
      <style global jsx>{`
        body {
          margin: 0;
          font-family: 'Varela';
        }
      `}</style>
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
  )
}
