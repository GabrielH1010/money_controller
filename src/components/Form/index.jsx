import React, { useState } from "react";
import { Grid, Input, Button } from "components";
import { Container, RadioGroup, Label, InputRadio } from "./styles";

function Form({ handleAdd, transactionsList, setTransactionsList }) {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [radio, setRadio] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    const transaction = {
      id: generateID(),
      desc: description,
      amount: number,
      expense: radio,
    };

    handleAdd(transaction);
    setDescription("");
    setNumber("");
  };

  return (
    <>
      <Container>
        <Input
          label="Descrição"
          placeholder="..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Valor"
          placeholder="R$0,00"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <RadioGroup>
          <InputRadio
            type="radio"
            id="input"
            defaultChecked
            name="group1"
            onChange={() => setRadio(!radio)}
          />
          <Label htmlFor="input">Input</Label>
          <InputRadio
            type="radio"
            id="output"
            name="group1"
            onChange={() => setRadio(!radio)}
          />
          <Label htmlFor="output">Output</Label>
        </RadioGroup>
        <Button
          onClick={handleSave}
          disabled={!description || !number || number < 0}
        >
          ADD
        </Button>
      </Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
}

export default Form;
