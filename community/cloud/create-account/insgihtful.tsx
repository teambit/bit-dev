import React from "react";

type InsightfulProps = {} & React.SVGAttributes<SVGElement>;

export function Insightful({ ...rest }: InsightfulProps) {
  return (
    <svg
      {...rest}
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9396 7.54083C19.8666 6.62401 18.61 5.96762 17.2616 5.61954C15.9132 5.27146 14.507 5.24046 13.1456 5.52882C11.3329 5.90919 9.66978 6.84035 8.3673 8.20416C7.06483 9.56797 6.18169 11.303 5.82994 13.189C5.57307 14.6031 5.61975 16.0587 5.96664 17.4519C6.31354 18.8452 6.9521 20.1417 7.83679 21.2491C8.65783 22.2116 9.12845 23.4423 9.16691 24.7277V28.3639C9.16691 29.3282 9.53569 30.2531 10.1921 30.935C10.8486 31.6169 11.7389 32 12.6672 32H17.3343C18.2627 32 19.153 31.6169 19.8094 30.935C20.4659 30.2531 20.8346 29.3282 20.8346 28.3639V24.958C20.8738 23.5389 21.3757 22.1756 22.2581 21.0915C23.8042 19.1047 24.533 16.5643 24.2862 14.0224C24.0393 11.4805 22.8367 9.14254 20.9396 7.51659V7.54083ZM18.5011 28.3639C18.5011 28.6853 18.3782 28.9936 18.1594 29.2209C17.9405 29.4482 17.6438 29.5759 17.3343 29.5759H12.6672C12.3578 29.5759 12.061 29.4482 11.8422 29.2209C11.6234 28.9936 11.5005 28.6853 11.5005 28.3639V27.1518H18.5011V28.3639ZM20.4496 19.5886C19.2764 21.0341 18.5919 22.8394 18.5011 24.7277H16.1675V21.0915C16.1675 20.7701 16.0446 20.4618 15.8258 20.2345C15.607 20.0072 15.3102 19.8795 15.0008 19.8795C14.6913 19.8795 14.3946 20.0072 14.1757 20.2345C13.9569 20.4618 13.834 20.7701 13.834 21.0915V24.7277H11.5005C11.4697 22.871 10.8085 21.0852 9.63362 19.6856C8.85846 18.7208 8.33721 17.5638 8.12068 16.3274C7.90415 15.091 7.99973 13.8174 8.39811 12.6309C8.79649 11.4443 9.48407 10.3852 10.3938 9.55686C11.3035 8.72853 12.4044 8.15922 13.589 7.90444C14.6071 7.68669 15.659 7.70717 16.6685 7.9644C17.678 8.22163 18.6197 8.70915 19.4252 9.39157C20.2307 10.074 20.8799 10.9342 21.3255 11.9097C21.7711 12.8852 22.002 13.9515 22.0014 15.0313C22.01 16.6916 21.4613 18.3032 20.4496 19.5886Z"
        fill="#216B41"
      />
      <path
        d="M4.33333 14.6667C4.33333 14.313 4.19285 13.9739 3.9428 13.7239C3.69276 13.4738 3.35362 13.3333 2.99999 13.3333H1.66666C1.31304 13.3333 0.973901 13.4738 0.723852 13.7239C0.473804 13.9739 0.333328 14.313 0.333328 14.6667C0.333328 15.0203 0.473804 15.3594 0.723852 15.6095C0.973901 15.8595 1.31304 16 1.66666 16H2.99999C3.35362 16 3.69276 15.8595 3.9428 15.6095C4.19285 15.3594 4.33333 15.0203 4.33333 14.6667ZM3.85333 22.6667L2.90666 23.6133C2.65833 23.8631 2.51894 24.2011 2.51894 24.5533C2.51894 24.9056 2.65833 25.2435 2.90666 25.4933C3.15648 25.7417 3.49441 25.8811 3.84666 25.8811C4.19891 25.8811 4.53684 25.7417 4.78666 25.4933L5.73333 24.5467C5.95176 24.2916 6.0659 23.9635 6.05294 23.6279C6.03998 23.2924 5.90087 22.974 5.66341 22.7366C5.42595 22.4991 5.10763 22.36 4.77207 22.3471C4.4365 22.3341 4.1084 22.4482 3.85333 22.6667ZM16.3333 4C16.6869 4 17.0261 3.85952 17.2761 3.60948C17.5262 3.35943 17.6667 3.02029 17.6667 2.66667V1.33333C17.6667 0.979711 17.5262 0.640573 17.2761 0.390524C17.0261 0.140476 16.6869 0 16.3333 0C15.9797 0 15.6406 0.140476 15.3905 0.390524C15.1405 0.640573 15 0.979711 15 1.33333V2.66667C15 3.02029 15.1405 3.35943 15.3905 3.60948C15.6406 3.85952 15.9797 4 16.3333 4ZM23.88 8.45333C24.2298 8.45186 24.565 8.31299 24.8133 8.06667L25.76 7.12C25.8996 7.00047 26.0129 6.85338 26.093 6.68796C26.173 6.52254 26.218 6.34236 26.2251 6.15874C26.2322 5.97511 26.2012 5.792 26.1342 5.6209C26.0671 5.4498 25.9655 5.29441 25.8355 5.16447C25.7056 5.03453 25.5502 4.93285 25.3791 4.86582C25.208 4.79878 25.0249 4.76784 24.8413 4.77494C24.6576 4.78203 24.4775 4.827 24.312 4.90703C24.1466 4.98706 23.9995 5.10042 23.88 5.24L23 6.18667C22.7517 6.43648 22.6123 6.77442 22.6123 7.12667C22.6123 7.47891 22.7517 7.81685 23 8.06667C23.2351 8.30048 23.5488 8.43834 23.88 8.45333ZM6.54666 6.73333C6.79501 6.97966 7.13021 7.11853 7.47999 7.12C7.65547 7.12101 7.82942 7.08738 7.99187 7.02103C8.15432 6.95468 8.30207 6.85691 8.42666 6.73333C8.675 6.48352 8.81438 6.14558 8.81438 5.79333C8.81438 5.44109 8.675 5.10315 8.42666 4.85333L7.47999 3.90667C7.35655 3.78147 7.20966 3.68182 7.0477 3.6134C6.88575 3.54497 6.7119 3.50912 6.53609 3.50788C6.36028 3.50664 6.18594 3.54004 6.02304 3.60618C5.86014 3.67232 5.71185 3.76989 5.58666 3.89333C5.46147 4.01678 5.36181 4.16367 5.29339 4.32562C5.22497 4.48758 5.18911 4.66143 5.18787 4.83724C5.18537 5.19231 5.32402 5.53383 5.57333 5.78667L6.54666 6.73333ZM28.3333 13.3333H27C26.6464 13.3333 26.3072 13.4738 26.0572 13.7239C25.8071 13.9739 25.6667 14.313 25.6667 14.6667C25.6667 15.0203 25.8071 15.3594 26.0572 15.6095C26.3072 15.8595 26.6464 16 27 16H28.3333C28.6869 16 29.0261 15.8595 29.2761 15.6095C29.5262 15.3594 29.6667 15.0203 29.6667 14.6667C29.6667 14.313 29.5262 13.9739 29.2761 13.7239C29.0261 13.4738 28.6869 13.3333 28.3333 13.3333ZM26.1467 22.6667C25.8933 22.5258 25.601 22.4713 25.3139 22.5114C25.0269 22.5515 24.7607 22.6841 24.5557 22.8891C24.3508 23.094 24.2182 23.3602 24.178 23.6473C24.1379 23.9344 24.1924 24.2267 24.3333 24.48L25.28 25.4267C25.5298 25.675 25.8677 25.8144 26.22 25.8144C26.5722 25.8144 26.9102 25.675 27.16 25.4267C27.4083 25.1769 27.5477 24.8389 27.5477 24.4867C27.5477 24.1344 27.4083 23.7965 27.16 23.5467L26.1467 22.6667Z"
        fill="#216B41"
      />
    </svg>
  );
}
