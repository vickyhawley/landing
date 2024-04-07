import React from "react";
import "./App.css";
import { Footer, NavBar } from "./Main";
import { About, Feature, StoryCarousel } from "./Main/Components/Sections";
import { Intro } from "./Main/Components/Sections/Intro";
import dashboard from "./Main/Images/dash.svg";
import billing from "./Main/Images/budgeting.png";
import budget from "./Main/Images/budget.png";
import approval from "./Main/Images/approvals.png";
import graphic from "./Main/Images/graphic.png";
import { StoryComponent } from "./Main/Components/Sections/StoryComponent";
import { CustomStory } from "./Main/Components/Sections/BusinessIntelligence";
import { SignUp } from "./Main/Components/Sections/SignUp";
import { FullTransparency } from "./Main/Components/Sections/Transparency";
import { FirstStory } from "./Main/Components/Sections/FirstStory";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <About />
        <Intro />
        {/* <StoryComponent
          title={"One Dashboard for all processes"}
          description={
            "Budgeting, approvals, provisioning and billing all under one roof"
          }
          image={dashboard}
        /> */}
        <FirstStory />
        <StoryComponent
          direction="right"
          title={"Budgeting"}
          description={
            "The Cloveda dashboard allows project managers to plan, estimate and budget for projects by giving access to all expenditure day-by-day"
          }
          image={budget}
        />
        <StoryComponent
          title={"Approvals"}
          description={
            "Cloveda puts apprpvals at the top, giving visibility of apporvals at every stage of the process, wheter that involves creating, responding to or updating an approval."
          }
          image={approval}
        />
        <StoryComponent
          direction="right"
          title={"Provisioning"}
          description={
            "Infrastructure can be provisioned right after approval. Cloveda ensures the necessary approvals occur before provisioning, protecting your cloud infrastructure and giving management peace of mind."
          }
          image={graphic}
        />
        <StoryComponent
          title={"Billing"}
          description={
            "Cloveda gives you daily, month to date, billing of the infrastructure in your product level. So that you can envision how much cloud infrastructure is costing for your product."
          }
          image={billing}
        />
        <StoryCarousel />
        <Feature />
        <CustomStory />
        <FullTransparency />
        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export default App;
