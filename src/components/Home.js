import React from "react";
import { useGetAllProductsQuery } from "../redux/features/productsApi";
import { addToCart } from "../redux/features/cartSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  // const navigate = useNavigate();
  // function print2largest(arr, arr_size) {
  //   let i;

  //   // There should be atleast two elements
  //   if (arr_size < 2) {
  //     document.write(" Invalid Input ");
  //     return;
  //   }

  //   // sort the array
  //   arr.sort();

  //   // start from second last element
  //   // as the largest element is at last
  //   for (i = arr_size - 2; i >= 0; i--) {
  //     // if the element is not
  //     // equal to largest element
  //     if (arr[i] != arr[arr_size - 1]) {
  //       console.log("The second largest element is " + arr[i]);
  //       return;
  //     }
  //   }

  //   console.log("There is no second largest element<br>");
  // }

  // Driver program to test above function

  // let arr = [12, 35, 1, 10, 34, 1];
  // let n = arr.length;
  // print2largest(arr, n);
  // const findPrimeNumber = (num) => {
  //   for (let i = 2; i < num; i++) {
  //     if (num % i == 0) {
  //       console.log(`${num} not a prime number`);
  //       break;
  //     } else {
  //       console.log(`${num} a prime number`);
  //     }
  //   }
  // };
  // findPrimeNumber(19);

  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const handleToCartItem = (product) => {
    dispatch(addToCart(product));
    // navigate("/cart");
  };
  return (
    <Container fluid style={{ marginTop: "70px" }}>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>error...</div>
      ) : (
        <Container className="d-flex justify-content-around ">
          {data.map((product, id) => (
            <Card
              style={{ width: "18rem", boxShadow: "2px 2px 2px lightgray" }}
              key={product.id}
            >
              <Card.Title className="p-3 ">{product.name}</Card.Title>
              <Card.Img variant="top" src={product.image} height={300} />
              <Card.Body>
                <Card.Text>{product.desc}</Card.Text>
                <Card.Footer style={{ background: "transparent" }}>
                  ${product.price}
                </Card.Footer>
                <Button
                  variant="primary"
                  onClick={() => handleToCartItem(product)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </Container>
  );
};
