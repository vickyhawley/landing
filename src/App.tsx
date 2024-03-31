import React from "react";
import "./App.css";
import { Footer, NavBar } from "./Main";
import { About } from "./Main/Components/Sections";
import { Intro } from "./Main/Components/Sections/Intro";
import { StoryComponent } from "./Main/Components/Sections/StoryComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Intro />
      <StoryComponent title={""} description={""} image={""} />
      <StoryComponent title={""} description={""} image={""} />
      <StoryComponent title={""} description={""} image={""} />
      <StoryComponent title={""} description={""} image={""} />
      <Footer />
    </div>
  );
}

export default App;
