const Shimmer = () => {
  return (
    <>
    <div className="shimmer-search"></div>
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-text title"></div>
            <div className="shimmer-text subtitle"></div>
            <div className="shimmer-text small"></div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Shimmer;