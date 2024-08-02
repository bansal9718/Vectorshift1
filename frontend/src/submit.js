// src/submit.js

import { React, useState } from "react";
import Modal from "react-modal";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

Modal.setAppElement("#root");
const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Failed to submit pipeline. Please check the console for errors.");
    }
  };

  return (
    <>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
          ...(isActive ? styles.buttonActive : {}),
        }}
        onClick={handleSubmit}
      >
        Submit Pipeline
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Pipeline Analysis Result"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "300px",
            padding: "20px",
          },
        }}
      >
        <h2>Pipeline Analysis Result</h2>
        {result && (
          <div>
            <p>
              <strong>Number of Nodes:</strong> {result.num_nodes}
            </p>
            <p>
              <strong>Number of Edges:</strong> {result.num_edges}
            </p>
            <p>
              <strong>Directed Acyclic Graph (DAG):</strong>{" "}
              {result.is_dag ? "Yes" : "No"}
            </p>
          </div>
        )}
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
};
const styles = {
  button: {
    marginTop:'20px' ,
    padding: "12px 24px", // Increase padding for better click area
    backgroundColor: "#faf884", // Green background
    color: "black", // White text color
    borderRadius: "6px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
    fontSize: "16px", // Font size
    fontWeight: "600", // Slightly heavier font weight
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
    transition:
      "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease", // Smooth transitions
    outline: "none", // Remove outline
    border: "1px solid transparent", // Border for click feedback
  },
  buttonHover: {
    backgroundColor: "yellow", // Darker green on hover
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
    color: "black",
  },
  buttonActive: {
    transform: "scale(0.98)", // Slightly scale down on click
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)", // Reduced shadow on click
  },
};
