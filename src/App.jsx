import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Home</h1>
      <p>Se você está vendo isto, o React está renderizando normalmente.</p>
      <nav style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <Link to="/consorcios">Ir para /consorcios</Link>
        <Link to="/consorcio/como-funciona">Ir para /consorcio/como-funciona</Link>
      </nav>
    </div>
  );
}

function Consorcios() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Página: Consórcios</h1>
      <p>Rota de teste funcionando.</p>
    </div>
  );
}

function ComoFunciona() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Página: Como funciona</h1>
      <p>Rota de teste funcionando.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consorcios" element={<Consorcios />} />
      <Route path="/consorcio/como-funciona" element={<ComoFunciona />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
