import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  increment,
  decrement,
  incrementByFive,
  reset,
} from "../redux/features/counter.feature";

const Counter = () => {
  const dispatch = useDispatch();
  // const counterState = useSelector((state) => {
  //   return state["counter"];
  // });
  const counterState = useSelector((store) => {
    return store["counter"];
  });
  // console.log(counterState);
  const { count } = counterState;
  // console.log(count);
  const onIncrement = () => {
    dispatch(increment(count));
  };

  const onDecrement = () => {
    if (count === 0) {
      return count;
    } else {
      dispatch(decrement(count));
    }
  };
  const incrementfive = () => {
    dispatch(incrementByFive(5));
  };
  const resetCount = () => {
    dispatch(reset(count));
  };
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: "30rem" }} className="mt-5">
            <Card.Body>
              <Card.Title>Counter {count}</Card.Title>
              <div className="d-flex justify-content-evenly">
                <Button variant="primary" onClick={onIncrement}>
                  Increment
                </Button>
                <Button variant="secondary" onClick={onDecrement}>
                  Decrement
                </Button>
                <Button variant="warning" onClick={incrementfive}>
                  Increment by 5
                </Button>
                <Button variant="warning" onClick={resetCount}>
                  Reset
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
