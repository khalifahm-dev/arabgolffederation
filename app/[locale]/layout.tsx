import "../globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
//import { getAllCategories } from "@/lib/api";
import Link from 'next/link';
import { i18n, type Locale } from "../../i18n-config";

import { NextIntlClientProvider } from "next-intl";
import { RootStyleRegistry } from "../components/root-style-registry";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


type LayoutProps = {
  params: { locale: Locale };
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  params, children }: LayoutProps) {

  const { locale } = params;


  const dir = locale == 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <body>

        <svg height="0" width="0" style={{ position: 'fixed', bottom: 0, right: 0 }}>
          <defs>
            <clipPath id="curve-bottom" clipPathUnits="objectBoundingBox">
              <path d="M 0.683594 0.0234375 C 0.550781 0.0625 0.492188 0.125 0.351562 0.175781 C 0.269531 0.207031 0.152344 0.238281 0 0.238281 L 0 1 L 1.003906 1 L 1.003906 0.015625 C 0.964844 0.0078125 0.917969 0 0.863281 0 C 0.808594 0 0.746094 0.0078125 0.683594 0.0234375 Z M 0.683594 0.0234375" fill="#DEEFEF"></path>
            </clipPath>
          </defs>
        </svg>
        <svg height="0" width="0" style={{ position: 'fixed', bottom: 0, right: 0 }}>
          <defs>
            <clipPath id="curve-footer" clipPathUnits="objectBoundingBox">
              <path d="M 0.652344 0.175781 C 0.507812 0.121094 0.453125 0.0625 0.316406 0.0234375 C 0.253906 0.0078125 0.195312 0 0.140625 0 L 0.136719 0 C 0.0820312 0 0.0351562 0.0078125 0 0.015625 L 0 0.996094 L 1.003906 0.996094 L 1.003906 0.234375 C 0.847656 0.238281 0.730469 0.207031 0.652344 0.175781 Z M 0.652344 0.175781 "></path>
            </clipPath>
          </defs>
        </svg>
        <section className="bg">
            <div>
              <RootStyleRegistry>
                <Header locale={locale} />
                <main>{children}</main>
                <Footer locale={locale} />
              </RootStyleRegistry>
            </div>
        </section>

      </body>
    </html>
  );
}
