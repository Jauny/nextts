import {FOOTER_LINKS} from '../constants'

export default () => {
  return (
    <footer>
      <div className="footer-row">
        {
          FOOTER_LINKS.map(link => {
            return (
              <span className="footer-link">{ link.label }</span>
            );
          })
        }
      </div>
      <div className="copyright">©2018 S94 Inc. All Rights Reserved</div>
      <style jsx>{`
        footer {
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        .footer-row {
          display: flex;
          flex-direction: row;
          margin-bottom: 8px;
        }
        .footer-link:not(:last-child) {
          margin-right: 20px;
        }
        .copyright {
          color: #b3b3b3;
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
}
