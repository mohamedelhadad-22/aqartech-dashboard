import { SVGProps } from "react";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="49"
      height="32"
      viewBox="0 0 49 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8345 8.45312V20.419V24.3643V28.3854L31.2639 32.0003V24.3643V20.419V12.0654L16.8345 8.45312Z"
        fill="#FA9325"
      />
      <path
        d="M16.8344 22.943H0V7.84863L16.8344 12.1502V22.943Z"
        fill="#5757BC"
      />
      <path d="M0 0V4.16617L16.8344 8.45283V0H0Z" fill="#B68ED8" />
      <path
        d="M40.2821 22.9434H23.4478V0L40.2821 4.33574V22.9434Z"
        fill="#5757BC"
      />
      <path
        d="M48.6995 22.943H31.2639V7.84863L48.6995 12.1502V22.943Z"
        fill="#B68ED8"
      />
    </svg>
  );
}
