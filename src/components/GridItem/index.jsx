import React, { useState } from "react";
import { Container, Header } from "./styles";
import { Input } from "components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { toast } from "react-toastify";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaPen,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleDelete = () => {
    onDelete(item.id);
    setOpen(false);
    toast.success("Item excluido com sucesso", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <>
      <Container>
        <Header>
          <h3
            style={{
              width: "40%",
            }}
          >
            {item.desc}
          </h3>
          <h3 style={{ width: "37%" }}>{`R$ ${item?.amount}`}</h3>
          <h3 style={{ width: "10%" }}>
            {item.expense ? (
              <FaRegArrowAltCircleDown color="#e74c3c" />
            ) : (
              <FaRegArrowAltCircleUp color="green" />
            )}
          </h3>

          <h3 style={{ width: "6%", marginRight: "-20px" }}>
            <FaPen
              style={{ cursor: "pointer" }}
              onMouseOver={({ target }) => (target.style.color = "green")}
              onMouseOut={({ target }) => (target.style.color = "#121212")}
              onClick={() => setEditModal(true)}
            />
            <Dialog open={editModal} onClose={() => setEditModal(false)}>
              <DialogTitle>Edit</DialogTitle>
              <DialogContent>
                <Input
                  label="Description"
                  value={item?.desc}
                  onChange={(e) => setEditModal({ ...item?.desc })}
                />
                <Input
                  label="Value"
                  value={item?.amount}
                  onChange={(e) => setEditModal({ ...item?.amount })}
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={() => setEditModal(false)}>Cancel</Button>
                <Button onClick={() => setEditModal(false)} color="error">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </h3>

          <h3 style={{ width: "5%" }}>
            <FaTrash
              style={{ cursor: "pointer" }}
              onMouseOver={({ target }) => (target.style.color = "#e74c3c")}
              onMouseOut={({ target }) => (target.style.color = "#121212")}
              onClick={() => setOpen(true)}
            />
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Caso você excluir esse item não será possível ser desfeito a
                  exclusão do mesmo.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleDelete} color="error">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </h3>
        </Header>
      </Container>
    </>
  );
};

export default GridItem;
