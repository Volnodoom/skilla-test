import Navigation from "components/navigation/navigation";
import { AppWrapper } from "./app.style";
import HeaderLine from "components/header-line/header-line";
import Content from "components/content/content";

const App = () => {
  return(
    <AppWrapper>
      <Navigation />
      <HeaderLine />
      <Content />
    </AppWrapper>
  );
};

export default App;
