import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
    className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="290" rx="15" ry="15" width="280" height="74" />
      <rect x="152" y="375" rx="15" ry="15" width="130" height="65" />
      <rect x="0" y="375" rx="15" ry="15" width="130" height="65" />
    </ContentLoader>
  );
}

export default LoadingBlock;
