import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Home from "./pages/Home";
import Other from "./pages/Other";
import Another from "./pages/Another";
import { DataStore as GlobalState } from "./gstate";
import {
  Button,
  Container,
  FlexContainer,
  Card,
  Modal,
  Carousel,
} from "./utility";

export const App = (props) => {
  // custom hook, returns api data and function to set the URL
  // to re-fetch

  const slides = [
    {
      img:
        "https://i.guim.co.uk/img/media/d9acfe25335f2e82acc88f45d5397e77ff38be7e/0_486_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8cbeb7462cfd7adc2b86acb5eea061cb",
      alt: "first",
      click: () => console.log("Hello World"),
    },
    {
      img:
        "https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png",
      alt: "second",
      click: () => console.log("Hello World"),
    },
    {
      img:
        "https://i.guim.co.uk/img/media/014bb12d1958d15765e172f92bcbfcc357f2f3a6/1053_1229_4191_2515/master/4191.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=013e33df2c23913fadf41e75fa9c854a",
      alt: "third",
      click: () => console.log("Hello World"),
    },
  ];

  return (
    <GlobalState>
      <Container>
        <Header />
        <Carousel className="caro" slides={slides} />
        <FlexContainer>
          <Card>
            <h3>Hello World 1</h3>
            <Button
              label="Hello"
              customStyles={{ backgroundColor: "red" }}
              onClick={() => alert("Hello World")}
            />
            <Modal open="open" close="close">
              <h1>Modal 1</h1>
            </Modal>
          </Card>
          <Card>
            <h3>Hello World 2</h3>
            <Button
              label="Hello"
              customStyles={{ backgroundColor: "red" }}
              onClick={() => alert("Hello World")}
            />
            <Modal open="open" close="close">
              <h1>Modal 2 </h1>
            </Modal>
          </Card>
          <Card>
            <h3>Hello World 3</h3>
            <Button
              label="Hello"
              customStyles={{ backgroundColor: "red" }}
              onClick={() => alert("Hello World")}
            />
            <Modal open="open" close="close">
              <h1>Modal 3</h1>
            </Modal>
          </Card>
        </FlexContainer>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/other" element={<Other/>} />
          <Route exact path="/another" element={<Another/>} />
        </Routes>
        <Footer />
      </Container>
    </GlobalState>
  );
};
