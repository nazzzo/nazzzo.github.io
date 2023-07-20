import { NextPage } from "next";
import { RootLayout } from "@components/layout/layout";
import { Main } from "@components/main/main";
import { Skills } from "@components/skills/skills";
import { Portfolio } from "@components/portfolio/portfolio";

export interface HomeProps {
  id: string;
}

const Home: NextPage = () => {

  return (
    <RootLayout id="contact">
      <Main id="home" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
    </RootLayout>
  );
};

export default Home;
