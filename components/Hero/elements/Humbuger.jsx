import React from "react";
// import Swap, { args } from "daisyui";
import { Button, Swap } from "react-daisyui";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Humbeger(props) {
  return (
    <>
      <button onClick={props.onClick}
        className="self-center xl:hidden"
        aria-label="humburger"
      >Menu</button>
    </>
    // <button className="self-center xl:hidden" aria-label="humburger" onClick={props.onClick}>
    //   <svg
    //     width={35}
    //     height={35}
    //     viewBox="0 0 32 32"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <rect
    //       className="text-coolGray-50"
    //       width={32}
    //       height={32}
    //       rx={6}
    //       fill="currentColor"
    //     />
    //     <path
    //       className="text-coolGray-500"
    //       d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
    //       fill="currentColor"
    //     />
    //   </svg>
    // </button>
  );
}
