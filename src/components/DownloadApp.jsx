import React from "react";

const DownloadApp = () => {
  return (
    <div className="appDownload flex gap-[1.8rem] sm:gap-[2rem] lg:gap-[4rem] mt-10  w-[13rem] lg:w-[20rem]">
      <img src="src\assets\play_store.png" alt="" className="cursor-pointer" />
      <img src="src\assets\app_store.png" alt="" className="cursor-pointer" />
    </div>
  );
};

export default DownloadApp;
