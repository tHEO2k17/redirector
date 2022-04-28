import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

function App() {
  useEffect(() => {

    if (isAndroid) {
      window.location.assign("https://play.google.com/store/apps/details?id=app.pamo");
      return;
    }

    if (isIOS) {
      window.location.assign("https://apps.apple.com/us/app/pamo/id1615449718");
      return;
    }

    window.location.assign("https://post.pamo.app");

  }, []);

  return (
    <div className="App">
      <h1>Please wait...</h1>
      <p>
        Kindly close tab and visit your store to update if this is taking longer
      </p>
    </div>
  );
}

export default App;
