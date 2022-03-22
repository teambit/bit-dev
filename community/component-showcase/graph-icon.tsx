import React from 'react';

type GraphIconProps = {} & React.SVGAttributes<SVGElement>;

export function GraphIcon({ ...rest }: GraphIconProps) {
  return (
    <svg {...rest} width="1em" height="1em" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2H7C6.44772 2 6 2.44772 6 3C6 3.55228 6.44771 4 7 4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2ZM7 0C5.34315 0 4 1.34315 4 3C4 4.65685 5.34315 6 7 6H15C16.6569 6 18 4.65685 18 3C18 1.34315 16.6569 0 15 0H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10H7C6.44772 10 6 10.4477 6 11C6 11.5523 6.44771 12 7 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10ZM7 8C5.34315 8 4 9.34315 4 11C4 12.6569 5.34315 14 7 14H15C16.6569 14 18 12.6569 18 11C18 9.34315 16.6569 8 15 8H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 18H7C6.44772 18 6 18.4477 6 19C6 19.5523 6.44771 20 7 20H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18ZM7 16C5.34315 16 4 17.3431 4 19C4 20.6569 5.34315 22 7 22H15C16.6569 22 18 20.6569 18 19C18 17.3431 16.6569 16 15 16H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 12H3.5C1.84315 12 0.5 10.6569 0.5 9V5C0.5 3.34315 1.84315 2 3.5 2H4.5V4H3.5C2.94772 4 2.5 4.44772 2.5 5V9C2.5 9.55228 2.94772 10 3.5 10H5V12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H18.5C20.1569 10 21.5 11.3431 21.5 13V17C21.5 18.6569 20.1569 20 18.5 20H17.5V18H18.5C19.0523 18 19.5 17.5523 19.5 17V13C19.5 12.4477 19.0523 12 18.5 12H17V10Z"
        fill="currentColor"
      />
    </svg>
  );
}
