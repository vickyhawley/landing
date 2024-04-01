import React from "react";
import "./App.css";
import { Footer, NavBar } from "./Main";
import { About, Feature } from "./Main/Components/Sections";
import { Intro } from "./Main/Components/Sections/Intro";
import imageMain from "./Main/Images/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import dash from "./Main/Images/dashPink.png";
import numbers from "./Main/Images/dashNumbers.png";
import graphic from "./Main/Images/graphic.png";
import { StoryComponent } from "./Main/Components/Sections/StoryComponent";
import { CustomStory } from "./Main/Components/Sections/BusinessIntelligence";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <About />
        <Intro />
        <StoryComponent
          title={"One Dashboard for all processes"}
          description={"Budgeting, approvals, provisioning and billing"}
          image={dash}
        />
        <StoryComponent
          direction="right"
          title={"Budgeting"}
          description={
            "The Cloveda dashboard allows project managers to plan, estimate and budget for projects by giving access to all expenditure day-by-day"
          }
          image={numbers}
        />
        <StoryComponent
          title={"Approvals"}
          description={
            "Cloveda ensures the necessary approvals occur before provisioning, protecting your cloud infrastructure and giving management peace of mind."
          }
          image={dash}
        />
        <StoryComponent
          direction="right"
          title={"Provisioning"}
          description={""}
          image={graphic}
        />
        <StoryComponent
          title={"Billing"}
          description={
            "Cloveda gives you daily, month to date, billing of the infrastructure in your product level. So that you can envision how much cloud infrastructure is costing for your product."
          }
          image={numbers}
        />
        <Feature />
        <CustomStory />
      </div>
      <Footer />
    </>
  );
}

export default App;
