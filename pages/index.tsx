import { NextPage } from "next";
import { RootLayout } from "@components/layout/layout";
import { Main } from "@components/main/main";
import { Skills } from "@components/skills/skills";
import { Item } from "@components/items/item"

export interface HomeProps {
  id: string;
}

const Home: NextPage = () => {

  return (
    <RootLayout id="contact">
      <Item />
      {/* <Main id="home" /> */}
      {/* <Skills id="skills" /> */}
    </RootLayout>
  );
};

export default Home;
