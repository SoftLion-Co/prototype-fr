import React, { useState, useEffect } from "react";
import classNames from "classnames";
import s from "./CookiesComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";
import axios from "axios";

const CookiesComponent = () => {
  const [showCookiesWindow, setShowCookiesWindow] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [userIP, setUserIP] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const handleAccept = async () => {
    console.log("Accept button clicked");
    console.log("User IP:", userIP);
    console.log("User Location:", userLocation);

    const userData = {
      ip: userIP,
      location: userLocation,
    };

    try {
      await axios.post("/api/saveUserData", userData);
      localStorage.setItem("cookiesConsent", "true");
      setCookiesAccepted(true);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    const userHasConsented = localStorage.getItem("cookiesConsent");
    if (userHasConsented === "true") {
      setShowCookiesWindow(false);
    } else {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          setUserIP(data.ip);
          fetch(`https://ipapi.co/${data.ip}/json/`)
            .then((response) => response.json())
            .then((locationData) => {
              const locationString = `${locationData.city}, ${locationData.region}, ${locationData.country_name}`;
              setUserLocation(locationString);
            })
            .catch((error) => {
              console.error("Error getting location data:", error);
            });
        })
        .catch((error) => {
          console.error("Error getting IP:", error);
        });
    }
  }, []);

  return (
    <div>
      {showCookiesWindow && !cookiesAccepted && (
        <div className={classNames(s.container, s.cookies, s.color)}>
          <p className={s.cookies_text}>
            We use cookies on this website to give you the best experience on
            our site and show you relevant ads. To find out more, read our
            privacy policy rules.
          </p>
          <MainButtonComponent
            loading={false}
            color="blue"
            onClick={handleAccept}
          >
            ACCEPT
          </MainButtonComponent>
        </div>
      )}
    </div>
  );
};

export default CookiesComponent;
