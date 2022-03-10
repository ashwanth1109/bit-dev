import React from "react";

type CodeIconProps = {} & React.SVGAttributes<SVGElement>;

export function CodeIcon({ ...rest }: CodeIconProps) {
  return (
    <svg
      {...rest}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00033 3.00004C4.00033 2.64642 4.1408 2.30728 4.39085 2.05723C4.6409 1.80718 4.98004 1.66671 5.33366 1.66671C5.51047 1.66671 5.68004 1.59647 5.80506 1.47145C5.93009 1.34642 6.00033 1.17685 6.00033 1.00004C6.00033 0.82323 5.93009 0.65366 5.80506 0.528636C5.68004 0.403612 5.51047 0.333374 5.33366 0.333374C4.62641 0.333374 3.94814 0.614326 3.44804 1.11442C2.94794 1.61452 2.66699 2.2928 2.66699 3.00004V5.00004C2.66699 5.35366 2.52652 5.6928 2.27647 5.94285C2.02642 6.1929 1.68728 6.33337 1.33366 6.33337C1.15685 6.33337 0.987279 6.40361 0.862254 6.52864C0.73723 6.65366 0.666992 6.82323 0.666992 7.00004C0.666992 7.17685 0.73723 7.34642 0.862254 7.47145C0.987279 7.59647 1.15685 7.66671 1.33366 7.66671C1.68728 7.66671 2.02642 7.80718 2.27647 8.05723C2.52652 8.30728 2.66699 8.64642 2.66699 9.00004V11C2.66699 11.7073 2.94794 12.3856 3.44804 12.8857C3.94814 13.3858 4.62641 13.6667 5.33366 13.6667C5.51047 13.6667 5.68004 13.5965 5.80506 13.4714C5.93009 13.3464 6.00033 13.1769 6.00033 13C6.00033 12.8232 5.93009 12.6537 5.80506 12.5286C5.68004 12.4036 5.51047 12.3334 5.33366 12.3334C4.98004 12.3334 4.6409 12.1929 4.39085 11.9429C4.1408 11.6928 4.00033 11.3537 4.00033 11V9.00004C3.99818 8.6204 3.915 8.24558 3.75634 7.90067C3.59768 7.55576 3.36721 7.24871 3.08033 7.00004C3.36721 6.75138 3.59768 6.44432 3.75634 6.09941C3.915 5.7545 3.99818 5.37969 4.00033 5.00004V3.00004ZM14.667 6.33337C14.3134 6.33337 13.9742 6.1929 13.7242 5.94285C13.4741 5.6928 13.3337 5.35366 13.3337 5.00004V3.00004C13.3337 2.2928 13.0527 1.61452 12.5526 1.11442C12.0525 0.614326 11.3742 0.333374 10.667 0.333374C10.4902 0.333374 10.3206 0.403612 10.1956 0.528636C10.0706 0.65366 10.0003 0.82323 10.0003 1.00004C10.0003 1.17685 10.0706 1.34642 10.1956 1.47145C10.3206 1.59647 10.4902 1.66671 10.667 1.66671C11.0206 1.66671 11.3598 1.80718 11.6098 2.05723C11.8598 2.30728 12.0003 2.64642 12.0003 3.00004V5.00004C12.0025 5.37969 12.0856 5.7545 12.2443 6.09941C12.403 6.44432 12.6334 6.75138 12.9203 7.00004C12.6334 7.24871 12.403 7.55576 12.2443 7.90067C12.0856 8.24558 12.0025 8.6204 12.0003 9.00004V11C12.0003 11.3537 11.8598 11.6928 11.6098 11.9429C11.3598 12.1929 11.0206 12.3334 10.667 12.3334C10.4902 12.3334 10.3206 12.4036 10.1956 12.5286C10.0706 12.6537 10.0003 12.8232 10.0003 13C10.0003 13.1769 10.0706 13.3464 10.1956 13.4714C10.3206 13.5965 10.4902 13.6667 10.667 13.6667C11.3742 13.6667 12.0525 13.3858 12.5526 12.8857C13.0527 12.3856 13.3337 11.7073 13.3337 11V9.00004C13.3337 8.64642 13.4741 8.30728 13.7242 8.05723C13.9742 7.80718 14.3134 7.66671 14.667 7.66671C14.8438 7.66671 15.0134 7.59647 15.1384 7.47145C15.2634 7.34642 15.3337 7.17685 15.3337 7.00004C15.3337 6.82323 15.2634 6.65366 15.1384 6.52864C15.0134 6.40361 14.8438 6.33337 14.667 6.33337Z"
        fill="#707279"
      />
    </svg>
  );
}
