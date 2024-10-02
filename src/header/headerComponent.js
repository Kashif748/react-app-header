import React, { useRef } from "react";

const HeaderComponent = ({ GitHubActivity, TotalEarnings, ProgressBar }) => {
  const headerRef = useRef(null);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div
          ref={headerRef}
          className="col-span-3 flex lg:flex-row h-[10rem] overflow-hidden rounded-2xl shadow-lg items-center justify-between space-x-8 px-4"
        >
          <div className="flex items-center space-x-2 lg:mb-0">
            <div className="relative">
              <img
                className="w-[4rem] h-[4rem] rounded-full object-cover"
                src="/avatar.png"
                alt="Avatar"
              />
              <div></div>
              <svg
                className="absolute top-0 right-0 w-4 h-4"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1857_10529)">
                  <path
                    d="M8.8995 1.12825C7.18289 1.49325 5.59124 2.29985 4.28181 3.46833C2.97238 4.63681 1.9905 6.12673 1.4332 7.79087C0.875892 9.45501 0.76245 11.2358 1.10408 12.9572C1.44571 14.6786 2.23059 16.2811 3.38116 17.6062C3.51842 17.7709 3.59969 17.975 3.61321 18.1889C3.62672 18.4028 3.57178 18.6155 3.45633 18.7961L2.9925 19.5432C2.89776 19.6958 2.84554 19.871 2.84123 20.0506C2.83692 20.2303 2.88068 20.4078 2.96798 20.5648C3.05528 20.7218 3.18295 20.8527 3.33779 20.9438C3.49262 21.0349 3.669 21.0831 3.84866 21.0832H10.7099C13.3164 21.1112 15.8361 20.1477 17.7589 18.3877C19.6816 16.6277 20.8636 14.2027 21.0655 11.6039C21.158 10.053 20.8912 8.50162 20.286 7.07067C19.6807 5.63971 18.7533 4.36779 17.576 3.35395C16.3986 2.34011 15.0032 1.61172 13.4982 1.22552C11.9933 0.839313 10.4195 0.806629 8.8995 1.12825ZM15.2749 10.2656L13.4727 11.7075C13.3988 11.7668 13.3443 11.8468 13.316 11.9372C13.2878 12.0277 13.2871 12.1245 13.3142 12.2153L14.1401 14.969C14.1686 15.0648 14.1663 15.1673 14.1333 15.2617C14.1003 15.3561 14.0385 15.4377 13.9564 15.495C13.8744 15.5522 13.7765 15.5822 13.6765 15.5805C13.5765 15.5789 13.4795 15.5459 13.3994 15.486L11.2856 13.9002C11.2032 13.8385 11.103 13.8052 11 13.8052C10.8971 13.8052 10.7969 13.8385 10.7145 13.9002L8.59975 15.486C8.51962 15.5459 8.42268 15.5789 8.32268 15.5805C8.22268 15.5822 8.12472 15.5522 8.04271 15.495C7.9607 15.4377 7.89882 15.3561 7.86586 15.2617C7.83289 15.1673 7.83052 15.0648 7.85908 14.969L8.68408 12.2153C8.71122 12.1246 8.71072 12.0278 8.68264 11.9374C8.65456 11.8469 8.60017 11.7669 8.52641 11.7075L6.72425 10.2656C6.64738 10.204 6.59153 10.12 6.5644 10.0253C6.53727 9.93065 6.54021 9.82987 6.57281 9.73691C6.6054 9.64395 6.66605 9.56341 6.74637 9.50639C6.8267 9.44937 6.92274 9.41869 7.02125 9.41858H9.08558C9.1787 9.41842 9.26974 9.39099 9.34744 9.33968C9.42515 9.28836 9.48612 9.21541 9.52283 9.12983L10.5623 6.70525C10.599 6.61969 10.66 6.54678 10.7377 6.49554C10.8154 6.4443 10.9065 6.41699 10.9996 6.41699C11.0927 6.41699 11.1837 6.4443 11.2614 6.49554C11.3392 6.54678 11.4001 6.61969 11.4368 6.70525L12.4763 9.12983C12.5129 9.21548 12.5739 9.2885 12.6516 9.33983C12.7293 9.39116 12.8204 9.41854 12.9136 9.41858H14.9779C15.0764 9.41869 15.1725 9.44937 15.2528 9.50639C15.3331 9.56341 15.3938 9.64395 15.4264 9.73691C15.459 9.82987 15.4619 9.93065 15.4348 10.0253C15.4076 10.12 15.3518 10.204 15.2749 10.2656Z"
                    fill="#D57402"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1857_10529">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h2 className="text-xs font-bold">John Doe</h2>
              <p className="text-[10px] text-green-500">Active</p>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-8">
            <div className="flex items-center">
              <div className="text-green-500 mr-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-500 mr-2"
                width="16"
                height="16"
                fill="green"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1 2h2v2H2V6zm3 0h2v2H5V6zm3 0h2v2H8V6zm3 0h2v2h-2V6zM2 9h2v2H2V9zm3 0h2v2H5V9zm3 0h2v2H8V9zm3 0h2v2h-2V9zM2 12h2v2H2v-2zm3 0h2v2H5v-2zm3 0h2v2H8v-2zm3 0h2v2h-2v-2z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs">Start Date</span>
                <span className="font-medium text-sm">5 July 2025</span>{" "}
                {/* Formatted Start Date */}
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-red-500 mr-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-500 mr-2"
                width="16"
                height="16"
                fill="red"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1 2h2v2H2V6zm3 0h2v2H5V6zm3 0h2v2H8V6zm3 0h2v2h-2V6zM2 9h2v2H2V9zm3 0h2v2H5V9zm3 0h2v2H8V9zm3 0h2v2h-2V9zM2 12h2v2H2v-2zm3 0h2v2H5v-2zm3 0h2v2H8v-2zm3 0h2v2h-2v-2z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs">End Date</span>
                <span className="font-medium text-sm">31 July 2025</span>{" "}
              </div>
            </div>
          </div>
          <div className="flex-2">
            <GitHubActivity />
          </div>
          <div className="flex-2">
            <TotalEarnings />
          </div>
        </div>

        <div className="ml-3 col-span-1 h-[10rem] flex  rounded-2xl shadow-lg justify-center  px-4">
          <ProgressBar progress={60} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
