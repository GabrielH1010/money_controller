import React from "react";
import { GridItem } from "components";
import { Table, Header, Scroll } from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <Table>
      <Header>
        <h3
          style={{
            width: "40%",
          }}
        >
          Description
        </h3>
        <h3
          style={{
            width: "40%",
          }}
        >
          Value
        </h3>
        <h3
          style={{
            width: "10%",
          }}
        >
          Type
        </h3>
        <h3
          style={{
            width: "12%",
          }}
        ></h3>
      </Header>
      <Scroll>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Scroll>
    </Table>
  );
};

export default Grid;
