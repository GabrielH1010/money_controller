import { useNavigate } from "react-router-dom";
import React from "react";
import { Container, Area, Div, Item, Title } from "./styles";
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
            <Title>Welcome </Title>
          </Div>
          <Div>
            <Item>
              <h1>PROJECT EXPENSE</h1>
              <p>Create a project for your company's expenses</p>
              <img src={projectExpense} alt="" />
              <Button onClick={() => navigate("/home/project")}>
                Create
              </Button>
            </Item>
            <Item>
              <h1>MONTHLY EXPENSE</h1>
              <p>Create your project for your company expenses</p>
              <img src={monthlyExpense} alt="" />

              <Button>Create</Button>
            </Item>
            <Item>
              <h1>INDIVIDUAL EXPENSE</h1>
              <p>Create your project for your company expenses</p>
              <img src={individualExpense} alt="" />
              <Button>Create</Button>
            </Item>
          </Div>
        </Area>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
