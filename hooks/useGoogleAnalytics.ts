interface CustomWindow extends Window {
  dataLayer: any[];
}

const useGoogleAnalytics = () => {
  if (typeof document !== "undefined") {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YPC94QJXCN";
    document.head.appendChild(script);

    script.onload = () => {
      const windowWithCustomProps = window as unknown as CustomWindow;
      windowWithCustomProps.dataLayer = windowWithCustomProps.dataLayer || [];

      function gtag(...args: any[]) {
        windowWithCustomProps.dataLayer.push(args);
      }

      gtag("js", { "new Date()": new Date() });
      gtag("config", "G-YPC94QJXCN");
    };
  }
};

export default useGoogleAnalytics;
