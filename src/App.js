import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "./Component/Dashboard/DashboardLayout";
import { Container } from "react-bootstrap";
function App() {

  return (
    <>
    <Container>
    <DashboardLayout /> 
    </Container>
    </>
  );
}

export default App;
