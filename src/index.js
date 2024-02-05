import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
