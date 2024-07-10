import "@/styles/globals.css";
import { CartProvider } from "@/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}
