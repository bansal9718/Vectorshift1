import React from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <div style={styles.buttonContainer}>
        <SubmitButton />
      </div>
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "center", // Center button horizontally
    marginTop: "20px", // Add margin if needed
  },
};

export default App;
