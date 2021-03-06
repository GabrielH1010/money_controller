import { useNavigate } from "react-router-dom";
import React from "react";
import { Container, Area, Div, Item } from "./styles";
import { Header, Footer, Button } from "components";
import projectExpense from "../../assets/despesaProjeto.png";
import monthlyExpense from "../../assets/despesaMensal.png";
import individualExpense from "../../assets/DespesaIndividual.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Area>
          <Div>
            <Item>
              <h1>PROJECT EXPENSE</h1>
              <p>Create a project for your company's expenses</p>
              <img src={projectExpense} alt="" />
              <Button onClick={() => navigate("/home/plans")}>Create</Button>
            </Item>
            <Item>
              <h1>MONTHLY EXPENSE</h1>
              <p>Create a project for monthly investment expenses</p>
              <img src={monthlyExpense} alt="" />

              <Button onClick={() => navigate("/home/plans")}>Create</Button>
            </Item>
            <Item>
              <h1>INDIVIDUAL EXPENSE</h1>
              <p>Create a project to manage your salary and expenses</p>
              <img src={individualExpense} alt="" />
              <Button onClick={() => navigate("/home/plans")}>Create</Button>
            </Item>
          </Div>
        </Area>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
