import React, {useEffect} from 'react';
import {
  isAndroid,
  isIOS
} from "react-device-detect";

function App() {

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=app.pamo";
    }else if(isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/pamo/id1615449718?uo=4";
    } else{
      window.location.href =
        "https://post.pamo.app";
    }
  }, []);

  return (
    <div className="App">
     <h1>Redirecting...</h1>
    </div>
  );
}

export default App;
