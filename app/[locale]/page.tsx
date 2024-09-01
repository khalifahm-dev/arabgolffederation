import Link from "next/link";
import { draftMode } from "next/headers";


import { getAllPosts } from "@/lib/api";
//import { getAllCategories } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";
import HomeWelcome from "../components/welcome";
import HomeAbout from "../components/HomeAbout";
import HomeHowAFGHelp from "../components/HomeHowAFGHelp";
import HomeGetInTouch from "../components/HomeGetInTouch";



export default async function Page({ locale }: { locale: string }) {




  const { isEnabled } = draftMode();
  //const allPosts = await getAllPosts(isEnabled);
  //const allCategories = await getAllCategories();
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <div className="relative h-2500">
      <HomeWelcome    locale={locale} />
      <HomeAbout      locale={locale} />
      <HomeHowAFGHelp locale={locale} />
      <HomeGetInTouch locale={locale} />
    </div>
  );
}
