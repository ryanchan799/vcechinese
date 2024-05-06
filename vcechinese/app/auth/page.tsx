import React from "react";
import { UserAuthContextProvider } from "../forums/authentication/UserAuthContext";
import AuthTesting from "./AuthTesting";

export default function page() {
  return (
    <UserAuthContextProvider>
      <AuthTesting />
    </UserAuthContextProvider>
  );
}
