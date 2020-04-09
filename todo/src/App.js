import React from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  padding: 5rem;
  background-color: #f1f1f1;
`;

export default App;
