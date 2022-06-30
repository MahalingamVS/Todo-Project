import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Card, Form } from "react-bootstrap";
import "./ListPanel.css";

function ListPanel() {
  const dataList = useSelector((state) => state);
  const dispatch = useDispatch();
  const date = new Date().toGMTString();
  const [select, setSelect] = useState();
  const [filterList, setFilterList] = useState();

  useEffect(() => {
    if (select > 0) {
      const newFilteredList = dataList.data.filter(
        (item) => item.type === select
      );
      setFilterList(newFilteredList);
    } else {
      setFilterList(dataList.data);
    }
  }, [dataList.data]);

  const handleRemove = (value) => {
    const newList = dataList.data.filter((item) => item.id !== value);
    dispatch({
      type: "REMOVE_DATA",
      currentData: newList,
    });
  };

  const handleFilter = (event) => {
    setSelect(event.target.value);
    if (event.target.value > 0) {
      const newFilteredList = dataList.data.filter(
        (item) => item.type === event.target.value
      );
      setFilterList(newFilteredList);
    } else {
      setFilterList(dataList.data);
    }
  };

  return (
    <>
      <h4 className="md">{date}</h4>
      <Card style={{ height: "29.6rem" }}>
        <Card.Body className="border border-dark" style={{ height: "29.6rem"}}>
          <Card.Header>
            <div className="dp">
            <Form.Select
              class="form-control"
              value={select}
              placeholder="Sorting Option"
              id="sel2"
              onChange={handleFilter}
            >
              <option value="0" selected>Type:All</option>
              <option value="1">Success</option>
              <option value="2">Error</option>
              <option value="3">Warning</option>
              <option value="4">Critical</option>
            </Form.Select>
            </div>
          </Card.Header>
          <ListGroup as="ol" numbered className="list-group">
            {filterList &&
              Object.values(filterList).map((val, index) => (
                <ListGroup.Item
                  key={val.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start bg-light"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {val.title}
                      <p className="dateFont">{val.date}</p>
                    </div>
                    {val.message}
                  </div>
                  <Form.Check aria-label="option 1" className="check" />
                  <Button
                    variant="outline-danger"
                    className="btnn"
                    onClick={(event, index) => handleRemove(val.id)}
                  >
                    X
                  </Button>
                </ListGroup.Item>
              ))}
            <br />
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
export default ListPanel