import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-left"
            autoClose={4000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
