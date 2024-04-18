import React from "react";
import Button from "@mui/material/Button";
export default function WebHeader() {
  return (
    <header className="flex justify-between p-8 items-center">
      <Button variant="text">Sign in/register </Button>
      <div className="flex items-center">
        <img src="https://placehold.co/75x75?text=Logo"></img>
      </div>
      <Button variant="text">Redeem Voucher</Button>
    </header>
  );
}