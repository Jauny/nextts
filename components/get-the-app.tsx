import React from "react"

export default function GetTheApp() {
  return (
    <div className="get-the-app-content">
      <div className="tagline">
        Buy and sell authentic streetwear and sneakers on your phone.
      </div>
      <style jsx>{`
        .get-the-app-content {
          display: flex;
          font-size: 25px;
          line-height: 27px;
          height: calc(100vh - 200px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .tagline {
          text-align: center;
          width: 53%;
        }
      `}</style>
    </div>
  )
}
