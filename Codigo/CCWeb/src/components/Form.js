import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getNotices, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const notice = ref.current;

      notice.title.value = onEdit.title;
      notice.description.value = onEdit.description;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notice = ref.current;

    if (
      !notice.title.value ||
      !notice.description.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("https://node-postgres-reactnative.onrender.com/notice/" + onEdit.id, {
          title: notice.title.value,
          description: notice.description.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("https://node-postgres-reactnative.onrender.com/notice", {
          title: notice.title.value,
          description: notice.description.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    notice.title.value = "";
    notice.description.value = "";

    setOnEdit(null);
    getNotices();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Título</Label>
        <Input name="title" />
      </InputArea>
      <InputArea>
        <Label>Descrição</Label>
        <Input name="description" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
