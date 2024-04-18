import * as React from "react";
import Header from "../components/Header";
import PictureGrid from "@/layout/PictureGrid";
import SearchWindow from "@/components/SearchWindow";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CustomerForm from "@/components/CustomerForm";
import Cart from "@/components/Cart";
import PaymentOptions from "@/layout/PaymentOptions";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center">
        <PictureGrid/>
        <SearchWindow />
        <CustomerForm />
        <Cart />
        <PaymentOptions/>
      </div>
    </main>
  );
}
