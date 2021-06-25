import axios from "axios";

export const getOrders = (token, setOrders) => {
  let config = {
    method: "get",
    url: "http://localhost:5000/api/getorder/",
    headers: {
      "x-auth-token": `${token}`,
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then((res) => {
      setOrders(res.data.order);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createOrder = (token, items, price) => {
  let config = {
    method: "post",
    url: "http://localhost:5000/api/order",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
    },
    data: {
      items: items,
      price: price,
    },
  };

  axios(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
