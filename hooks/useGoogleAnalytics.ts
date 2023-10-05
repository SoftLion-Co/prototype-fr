// "use client"

// import { useEffect } from "react";

// declare global {
//   interface Window {
//     dataLayer: any[];
//   }
// }

// const useGoogleAnalytics = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://www.googletagmanager.com/gtag/js?id=G-YPC94QJXCN";
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.dataLayer = window.dataLayer || [];
//       function gtag(...args: any[]) {
//         window.dataLayer.push(args);
//       }

//       gtag("js", { "new Date()": new Date() });
//       gtag("config", "G-YPC94QJXCN");
//     };
//   }, []);
// };

// export default useGoogleAnalytics;
