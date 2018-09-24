import React from "react"

export default () => {
  return (
    <footer>
      <div className="footer-container">
        {'Footer'}
      </div>
      <style jsx>{`
        .footer-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </footer>
  );
}
