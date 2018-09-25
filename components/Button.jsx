export default ({text}) => {
  return (
    <div className="btn">
      <span>{ text }</span>
      <style jsx>{`
        .btn {
          align-items: center;
          background: black;
          color: white;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding: 8px 16px;
        }
      `}</style>
    </div>
  );
}
