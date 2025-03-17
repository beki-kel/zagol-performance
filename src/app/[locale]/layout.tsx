import { Poppins } from "next/font/google";
import "../globals.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import Header from "./(client-components)/(Header)/Header";
import ChatSupport from "@/components/chatSupport";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SwitchDarkMode from "@/shared/SwitchDarkMode";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={""}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <SwitchDarkMode />
        <ChatSupport />
        <FooterNav />
        <Footer />
      </body>
    </html>
  );
}
