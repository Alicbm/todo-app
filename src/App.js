import React from "react";
import { ContainerApp } from "./components/AppContext";
import { PageContainer } from "./components/PageContainer";

function App() {

  return (
      <ContainerApp>
        <PageContainer />        
      </ContainerApp>
  );
}

export default App;
