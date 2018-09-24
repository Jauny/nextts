import React from "react"

export default ({text}) => {
  return (
    <div className="btn">
      <span className="btn-text">{ text }</span>
      <style jsx>{`
        .btn {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background: black;
          color: white;
          padding: 0 8px;
        }
        .btn-text {
        }
      `}</style>
    </div>
  );
}
