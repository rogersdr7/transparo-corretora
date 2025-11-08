import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

import Consorcios from "./pages/Consorcios";
import ConsorcioComoFunciona from "./pages/ConsorcioComoFunciona";

/* =========================
   DADOS DA EMPRESA
   ========================= */
const WA = "5515991757462";
const EMAIL = "dione@transparocorretora.com";
const COMPANY = {
  name: "Transparo Corretora de Seguros",
  slogan: "Seguro, Consórcio e tranquilidade — tudo no mesmo lugar.",
  cnpj: "18.259.130/0001-09",
  instagram: "https://www.instagram.com/transparoseguros/",
  city: "Sorocaba – SP",
  phoneHuman: ["(15) 99175-7462"],
  address: "Sorocaba – SP",
};

const openWhatsApp = (msg = "Olá! Vim pelo site e quero um orçamento.") => {
  const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};

/* =========================
   APP
   ========================= */
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-800/60 bg-neutral-950/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-neutral-900 border border-neutral-800 grid place-items-center shadow-sm">
              <span className="font-black text-lg tracking-tight">T</span>
            </div>
            <div>
              <p className="font-semibold leading-tight">{COMPANY.name}</p>
              <p className="text-xs text-neutral-400 -mt-0.5">{COMPANY.slogan}</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              to="/consorcios"
              className="px-4 py-2 rounded-lg hover:bg-neutral-900"
            >
              Consórcios
            </Link>
            <Link
              to="/consorcio/como-funciona"
              className="px-4 py-2 rounded-lg hover:bg-neutral-900"
            >
              Como Funciona
            </Link>
          </nav>

          {/* CTAs rápidos (scroll na home) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-900"
              onClick={() =>
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Serviços
            </button>
            <button
              className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-900"
              onClick={() =>
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Dúvidas
            </button>
            <button
              className="text-sm px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500"
              onClick={() => openWhatsApp()}
            >
              WhatsApp
            </button>
          </div>
        </div>
      </header>

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/consorcios" element={<Consorcios />} />
        <Route
          path="/consorcio/como-funciona"
          element={<ConsorcioComoFunciona />}
        />
      </Routes>
    </div>
  );
}

/* =========================
   HOME (página inicial)
   ========================= */
function HomeSection() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Proteção e planejamento para sua família e patrimônio.
            </h1>
            <p className="mt-4 text-neutral-300 text-lg">
              Especialistas em seguros e consórcios (imóveis, carros, motos e
              equipamentos). Atendimento consultivo, rápido e 100% on-line.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500"
                onClick={() =>
                  openWhatsApp("Quero um orçamento de seguro/consórcio 🙌")
                }
              >
                Quero um orçamento
              </button>
              <button
                className="px-4 py-3 rounded-xl border border-neutral-800 hover:bg-neutral-900"
                onClick={() =>
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver serviços
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
              <span className="flex items-center gap-1">
                <Icons.ShieldCheck className="w-4 h-4" /> CNPJ: {COMPANY.cnpj}
              </span>
              <span className="flex items-center gap-1">
                <Icons.MapPin className="w-4 h-4" /> {COMPANY.city}
              </span>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <div className="aspect-video rounded-2xl border border-neutral-800 bg-neutral-900 grid place-items-center">
              <Icons.Building2 className="w-16 h-16 text-neutral-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Serviços</h2>
          <p className="text-neutral-400 mt-1">
            Coberturas completas para o que importa. Peça uma cotação em minutos.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Card icon={<Icons.Car />} title="Auto">
              Seguro auto com assistência 24h e cobertura completa.
            </Card>
            <Card icon={<Icons.Home />} title="Residencial">
              Proteção contra incêndio, roubo e danos elétricos.
            </Card>
            <Card icon={<Icons.Heart />} title="Vida">
              Tranquilidade financeira para quem você ama.
            </Card>
            <Card icon={<Icons.Building />} title="Empresarial">
              Seguro empresarial sob medida para o seu negócio.
            </Card>
            <Card icon={<Icons.PiggyBank />} title="Consórcios">
              Imóveis, veículos e equipamentos — sem juros.
            </Card>
            <Card icon={<Icons.Stethoscope />} title="Saúde">
              Planos e consultoria para pessoa física e empresas.
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Dúvidas</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Faq q="Consórcio tem juros?">
              Não. No consórcio você paga apenas a <b>taxa de administração</b> e,
              quando previsto, <b>fundo de reserva</b>. A contemplação ocorre por
              sorteio ou lance.
            </Faq>
            <Faq q="Atendem totalmente on-line?">
              Sim. Proposta, documentos e acompanhamento 100% digitais.
            </Faq>
            <Faq q="Fazem simulação sem compromisso?">
              Sim — envie uma mensagem e retornamos com a melhor opção.
            </Faq>
            <Faq q="Quais seguradoras/parceiros?">
              Trabalhamos apenas com companhias líderes do mercado.
            </Faq>
          </div>

          <button
            className="mt-8 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500"
            onClick={() => openWhatsApp("Quero tirar uma dúvida sobre seguros/consórcios")}
          >
            Fale agora no WhatsApp
          </button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold">{COMPANY.name}</p>
            <p className="text-neutral-400">{COMPANY.city}</p>
            <p className="text-neutral-400 mt-1">CNPJ: {COMPANY.cnpj}</p>
          </div>
          <div>
            <p className="font-semibold">Contato</p>
            <p className="text-neutral-400">
              WhatsApp: {COMPANY.phoneHuman[0]}
            </p>
            <p className="text-neutral-400">E-mail: {EMAIL}</p>
            <a
              className="text-emerald-400 hover:text-emerald-300"
              href={COMPANY.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram @transparoseguros
            </a>
          </div>
          <div>
            <p className="font-semibold">Atendimento</p>
            <p className="text-neutral-400">
              Consultivo, transparente e sob medida. Online ou presencial.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   COMPONENTES AUXILIARES
   ========================= */
function Card({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 grid place-items-center rounded-xl bg-neutral-800">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-neutral-400 mt-2 text-sm">{children}</p>
    </div>
  );
}

function Faq({ q, children }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
      <p className="font-semibold">{q}</p>
      <p className="text-neutral-400 mt-1 text-sm">{children}</p>
    </div>
  );
}
