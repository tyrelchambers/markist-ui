import React from "react";
import { Link } from "react-location";
import H1 from "../components/headings/H1";
import Header from "../layouts/Header";

const Index = () => {
  return (
    <main>
      <section className="p-6 flex flex-col items-center">
        <H1>Markist</H1>
        <Link to="/login">Login</Link>
      </section>
    </main>
  );
};

export default Index;
