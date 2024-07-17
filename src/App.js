import React from "react";
import ChatApp from "./Components/Chat";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <div className="chat_container">
        <ChatApp />
      </div>
    </div>
  );
}

export default App;
