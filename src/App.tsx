import React from "react";
import "./App.css";
import { Footer, NavBar } from "./Main";
import { About } from "./Main/Components/Sections";
import { Intro } from "./Main/Components/Sections/Intro";
import imageMain from "./Main/Images/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import { StoryComponent } from "./Main/Components/Sections/StoryComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Intro />
      <StoryComponent
        title={"One Dashboard for all processes"}
        description={"Budgeting, approvals, provisioning and billing"}
        image={imageMain}
      />
      <StoryComponent
        direction="right"
        title={"Budgeting"}
        description={
          "The Cloveda dashboard allows project managers to plan, estimate and budget for projects by giving access to all expenditure day-by-day"
        }
        image={imageMain}
      />
      <StoryComponent
        title={"Approvals"}
        description={
          "Cloveda ensures the becessary approvals occur before provisioning, protecting your cloud infrastructure and giving management peace of mind."
        }
        image={imageMain}
      />
      <StoryComponent
        direction="right"
        title={"Provisioning"}
        description={""}
        image={imageMain}
      />
      <StoryComponent
        title={"Billing"}
        description={
          "Cloveda gives you daily, month to date, billing of the infrastructure in your product level. So that you can envision how much cloud infrastructure is costing for your product."
        }
        image={imageMain}
      />
      <Footer />
    </div>
  );
}

export default App;
