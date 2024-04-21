import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

import {jwtDecode} from "jwt-decode";

const GoogleLoginComponent: React.FC = (props) => {

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        var credentialResponseDecoded = jwtDecode(credentialResponse.credential as string)
        console.log(credentialResponseDecoded);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginComponent;
