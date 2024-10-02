import React from "react";
import HeaderComponent from "./header/headerComponent";
import GitHubActivity from "./header/githubActivity/gitHubActivityComponent";
import TotalEarnings from "./header/totalEarning/totalEarningComponent";
import ProgressBar from "./header/progressBar/progressBar";

function App() {
  return (
    <div className="container mx-auto p-8">
      <HeaderComponent
        GitHubActivity={GitHubActivity}
        TotalEarnings={TotalEarnings}
        ProgressBar={ProgressBar}
      />
    </div>
  );
}

export default App;
