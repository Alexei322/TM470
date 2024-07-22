import "@/styles/globals.css";
import { AuthProvider } from "@/AuthContext";
import { CartProvider } from "@/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
