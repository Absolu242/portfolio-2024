import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeView } from "@src/components/views/home-view";
import MainLayout from "@src/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahan Bakala Bouess</title>
        <meta
          name="description"
          content="I help brands expand their reach and boost their
          presence by crafting effective social media strategies,
          softwares, and websites."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/public/favicon-16x16.png" />
      </Head>
      <MainLayout>
        <HomeView />
      </MainLayout>
    </>
  );
}
