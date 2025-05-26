import { siteConfig } from "@/src/config/site";
import AuthProvider from "@/src/provider/auth.provider";
import DirectionProvider from "@/src/provider/direction.provider";
import Providers from "@/src/provider/providers";
import TanstackProvider from "@/src/provider/providers.client";
import "flatpickr/dist/themes/light.css";
import moment from "moment";
import "moment/locale/pt-br";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "simplebar-react/dist/simplebar.min.css";
import { FormContextProvider } from "../context/Contex";
import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";
const poppins = Poppins({
  weight: ["400", "600", "700"], // Add other weights here
  subsets: ["latin"],
});

moment.locale("pt-br");
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html className={poppins.className} lang={lang}>
      <Head>
        {/* Permite usar env(safe-area-inset-*) */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <AuthProvider>
        <TanstackProvider>
          <Providers>
            <DirectionProvider lang={lang}>
              <div
                style={{
                  paddingTop: "env(safe-area-inset-top)",
                  paddingRight: "env(safe-area-inset-right)",
                  paddingBottom: "env(safe-area-inset-bottom)",
                  paddingLeft: "env(safe-area-inset-left)",
                  minHeight: "100svh", // ou 100dvh se preferir desconsiderar barras de UI
                  boxSizing: "border-box",
                }}
              >
                <FormContextProvider>{children}</FormContextProvider>
              </div>
            </DirectionProvider>
          </Providers>
        </TanstackProvider>
      </AuthProvider>
    </html>
  );
}
