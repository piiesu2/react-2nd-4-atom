import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./rounter/Router";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/--SDX4KWIbA",
  email: "12345@Excample.com",
  phone: "09011112222",
  company: {
    name: "東邦システムサイエンス"
  },
  website: "https://www.tss.co.jp"
};

export default function App() {
  return <Router />;
}
