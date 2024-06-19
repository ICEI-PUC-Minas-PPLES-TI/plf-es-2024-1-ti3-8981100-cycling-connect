import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [notices, setNotices] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getNotices = async () => {
    try {
      const response = await axios.get("https://node-postgres-reactnative.onrender.com/notice");
      // Ensure the response is sorted as needed, possibly by 'title' or another relevant field
      const sortedNotices = response.data.sort((a, b) => (a.title > b.title ? 1 : -1));
      setNotices(sortedNotices);
    } catch (error) {
      // Use toast to display error messages
      toast.error("Error loading notices: " + error.message);
    }
  };

  useEffect(() => {
    getNotices();
  }, []);

  return (
    <>
      <Container>
        <Title>Mural de Avisos</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getNotices={getNotices} />
        <Grid setOnEdit={setOnEdit} notices={notices} setNotices={setNotices} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
