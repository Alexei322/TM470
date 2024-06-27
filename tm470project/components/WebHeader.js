import React from "react";
import Button from "@mui/material/Button";
import SignInModal from "./SignInModal";
export default function WebHeader() {
  return (
    <header className="flex justify-between p-8 items-center">
      <SignInModal />

      <div className="flex items-center">
        <img src="https://placehold.co/75x75?text=Logo"></img>
      </div>
      <Button variant="text">Redeem Voucher</Button>
    </header>
  );
}
