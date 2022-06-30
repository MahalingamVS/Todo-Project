import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./InputLayout.css";

function InputLayout() {
  const [title, setTitle] = React.useState();
  const [message, setMessage] = React.useState();
  const [type, setType] = React.useState();
  const [dateVal, setDateVal] = React.useState();
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.data);

  const resetState = () => {
    setTitle("");
    setMessage("");
    setType("");
    setDateVal("");
  };

  const handleSubmit = () => {
    let data = {
      title: title,
      message: message,
      type: type,
      date: dateVal,
      id: dataList && dataList.length > 0 ? dataList.length : 0,
    };
    dispatch({
      type: "SET_DATA",
      currentData: data,
    });
    resetState();
  };

  const getDateFormat = (event) => {
    const toBeFormated = event.target.value.split("-");
    setDateVal(
      `${toBeFormated[2]}/${toBeFormated[1]}/${
        toBeFormated[0]
      } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
  };

  return (
    <>
      <h1>Personal Todo App</h1>
      <Card>
        <Card.Body className="border border-dark">
          <div class="form-group">
            <label for="usr">Title</label>
            <input
              type="text"
              value={title}
              class="form-control"
              id="usr"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <br />
          <div class="form-group">
            <label for="pwd">Message</label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              class="form-control"
              id="pwd"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <br />
          <div class="form-group">
            <label for="sel1">Type</label>
            <Form.Select
              class="form-control"
              value={type}
              id="sel1"
              onChange={(event) => setType(event.target.value)}
            >
              <option>Office</option>
              <option value="1">Success</option>
              <option value="2">Error</option>
              <option value="3">Warning</option>
              <option value="4">Critical</option>
            </Form.Select>
          </div>
          <br />
          <div class="form-group">
            <label for="pwd">Due At</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                class="form-control"
                value={dateVal}
                id="datePickText"
              />
              <input
                type="date"
                class="form-control"
                id="datePick"
                onChange={getDateFormat}
              />
            </div>
          </div>
          <br />
          <Button variant="dark" onClick={handleSubmit} className="float-right">
            Add
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default InputLayout