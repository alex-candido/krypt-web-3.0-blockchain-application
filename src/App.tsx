import React from "react";
import { Footer, Navbar, Services, Transactions, Welcome } from "./components";


const App: React.FC = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  )
}

export default App