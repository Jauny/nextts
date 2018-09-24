import React from "react"

export default () => {
  return (
    <footer>
      <div className="footer-row">
        <span className="footer-link">Download</span>
        <span className="footer-link">Shop</span>
        <span className="footer-link">Careers</span>
        <span className="footer-link">Support</span>
        <span className="footer-link">Legal</span>
        <span className="footer-link">Contact</span>
        <span className="footer-link">Help</span>
      </div>
      <div className="copyright">©2018 S94 Inc. All Rights Reserved</div>
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
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
          font-size: 14px;
          color: #b3b3b3;
        }
      `}</style>
    </footer>
  );
}
