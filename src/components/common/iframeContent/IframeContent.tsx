import React from "react";

const IframeContent = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="w-full h-full border border-[#8E8E8E] rounded-2xl shadow-lg scroll-display-none">
      <iframe src={url} className="w-full h-full" title={title} />
    </div>
  );
};

export default IframeContent;
