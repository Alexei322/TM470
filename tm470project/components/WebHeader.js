import React from "react";
import Button from "@mui/material/Button";
import SignInModal from "./SignInModal";
import { useAuth } from "@/AuthContext";
import { Typography } from "@mui/material";
export default function WebHeader() {
  const { isAuthenticated, userInfo, signOut } = useAuth();
  return (
    <header className="flex justify-between p-8 items-center">
      <SignInModal />
      <div className="flex items-center">
        <img src="https://placehold.co/75x75?text=Logo"></img>
      </div>
      <Button variant="text">Redeem Voucher</Button>
      {isAuthenticated && (
        <>
          <Typography variant="h6">{userInfo.username} Signed in</Typography>
          <Button variant="text" onClick={signOut}>Sign Out</Button>
        </>
      )}
    </header>
  );
}
