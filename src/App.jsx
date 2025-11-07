
import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

const WA = '5515991757462'
const EMAIL = 'dione@transparocorretora.com'
const COMPANY = {
  name: 'Transparo Corretora de Seguros',
  slogan: 'Seguro, Consórcio e tranquilidade — tudo no mesmo lugar.',
  cnpj: '18.259.130/0001-09',
  instagram: 'https://www.instagram.com/transparoseguros',
  city: 'Sorocaba – SP',
  phonesHuman: ['(15) 99175-7462'],
  address: 'Sorocaba – SP'
}

const openWhatsApp = (msg = 'Olá! Vim pelo site e quero um orçamento.') => {
  const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`
  window.open(url, '_blank')
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-800/60 bg-neutral-950/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-neutral-900 border border-neutral-800 grid place-items-center shadow-sm">
              <span className="font-black text-lg tracking-tighter">T</span>
            </div>
            <div>
              <p className="font-semibold leading-tight">{COMPANY.name}</p>
              <p className="text-xs text-neutral-400 -mt-0.5">{COMPANY.slogan}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-900" onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior:'smooth'})}>Serviços</button>
            <button className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-900" onClick={() => document.getElementById('consorcio')?.scrollIntoView({behavior:'smooth'})}>Consórcios</button>
            <button className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-900" onClick={() => document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})}>Dúvidas</button>
            <button className="text-sm px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500" onClick={() => openWhatsApp()}>WhatsApp</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Proteção e planejamento para sua família e patrimônio.
            </h1>
            <p className="mt-4 text-neutral-300 text-lg">
              Especialistas em seguros e consórcios (imóveis, carros, motos e equipamentos). Atendimento consultivo, rápido e 100% on-line.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500" onClick={() => openWhatsApp('Quero um orçamento de seguro/consórcio')}>
                Quero um orçamento
              </button>
              <button className="px-4 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900" onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior:'smooth'})}>
                Ver serviços
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-neutral-400 text-sm">
              <Icons.BadgeCheck className="w-4 h-4"/> Corretora registrada — {COMPANY.city}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}}>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Seguros', 'Auto, Residencial, Vida, Empresarial, Saúde.'],
                ['Consórcios', 'Imóveis, veículos e equipamentos.'],
                ['Consultivo', 'Atendimento comparativo e sob medida.'],
                ['Parceiros', 'Companhias líderes de mercado.'],
              ].map((it, i) => (
                <div key={i} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4">
                  <p className="font-semibold mb-1 text-neutral-100">{it[0]}</p>
                  <p className="text-sm text-neutral-300">{it[1]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">Serviços</h2>
        <p className="mt-2 text-neutral-300">Coberturas completas para o que importa. Peça uma cotação em minutos.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            ['Seguro Auto','Roubo/furto, colisão, terceiros, assistência 24h e carro reserva.','Quero cotar Seguro Auto'],
            ['Seguro Residencial','Incêndio, roubo, danos elétricos e serviços emergenciais.','Quero cotar Seguro Residencial'],
            ['Vida & Saúde','Proteção financeira e assistência médico-hospitalar.','Quero informações sobre Vida e Saúde'],
          ].map((card, i) => (
            <div key={i} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
              <p className="font-semibold">{card[0]}</p>
              <p className="text-sm text-neutral-300 mt-2">{card[1]}</p>
              <button className="mt-4 w-full px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500" onClick={() => openWhatsApp(card[2])}>Cotar agora</button>
            </div>
          ))}
        </div>
      </section>

      {/* Consórcio */}
      <section id="consorcio" className="bg-neutral-900/40 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Consórcio sem juros</h2>
            <p className="text-neutral-300">Planeje a conquista do seu imóvel ou veículo sem pagar juros — apenas taxa de administração. Simule agora e veja o valor da parcela que cabe no seu bolso.</p>
            <div className="mt-5 flex gap-3">
              <button className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500" onClick={() => openWhatsApp('Quero simular um consórcio')}>Simular no WhatsApp</button>
              <a className="px-4 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900" href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
            <p className="font-semibold mb-2">Simulação rápida</p>
            <form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const txt=`Enviei uma simulação pelo site: ${f.get('tipo')} | Carta: R$ ${f.get('carta')}`; openWhatsApp(txt);}} className="grid gap-3">
              <label className="text-sm">Tipo</label>
              <select name="tipo" className="bg-neutral-950 border border-neutral-800 rounded-xl p-3">
                <option>Imóvel</option>
                <option>Carro</option>
                <option>Moto</option>
                <option>Equipamentos</option>
              </select>
              <label className="text-sm">Carta de crédito (R$)</label>
              <input name="carta" type="number" placeholder="200000" className="bg-neutral-950 border border-neutral-800 rounded-xl p-3" />
              <button type="submit" className="mt-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500">Enviar simulação</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Dúvidas frequentes</h2>
            <div className="mt-4 space-y-4 text-neutral-300">
              <details className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Como funciona o consórcio?</summary>
                <p className="mt-2 text-sm">Você participa de um grupo e paga parcelas mensais. A cada mês ocorrem contemplações por sorteio e/ou lance. Não há juros, apenas taxa de administração e fundo de reserva conforme o plano.</p>
              </details>
              <details className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Vocês atendem fora de SP?</summary>
                <p className="mt-2 text-sm">Sim! Atendimento 100% digital para todo o Brasil.</p>
              </details>
              <details className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Quais parceiros trabalham?</summary>
                <p className="mt-2 text-sm">Companhias e administradoras reconhecidas nacionalmente. Indicamos a melhor para o seu perfil após análise.</p>
              </details>
            </div>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
            <p className="font-semibold mb-2">Peça sua cotação</p>
            <form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const txt=`Quero cotar: ${f.get('tipo')} | Nome: ${f.get('nome')} | E-mail: ${f.get('email')} | Mensagem: ${f.get('mensagem')}`; openWhatsApp(txt);}} className="grid gap-3">
              <label className="text-sm">Tipo de serviço</label>
              <select name="tipo" className="bg-neutral-950 border border-neutral-800 rounded-xl p-3">
                <option>Seguro</option>
                <option>Consórcio</option>
                <option>Outros</option>
              </select>
              <label className="text-sm">Nome</label>
              <input name="nome" placeholder="Seu nome" className="bg-neutral-950 border border-neutral-800 rounded-xl p-3"/>
              <label className="text-sm">E-mail</label>
              <input name="email" type="email" placeholder="voce@email.com" className="bg-neutral-950 border border-neutral-800 rounded-xl p-3"/>
              <label className="text-sm">Mensagem</label>
              <textarea name="mensagem" rows="4" className="bg-neutral-950 border border-neutral-800 rounded-xl p-3" placeholder="Conte rapidamente o que precisa"></textarea>
              <button type="submit" className="mt-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500">Enviar pelo WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 text-sm text-neutral-300">
          <div>
            <p className="font-semibold">{COMPANY.name}</p>
            <p className="mt-1 text-neutral-400">{COMPANY.slogan}</p>
            <p className="mt-3">{COMPANY.city}</p>
            <p>{COMPANY.phonesHuman.join(' / ')}</p>
            <p className="mt-1"><a href={`mailto:${EMAIL}`} className="underline underline-offset-4">{EMAIL}</a></p>
            <div className="mt-3 flex gap-3">
              <a href={COMPANY.instagram} target="_blank" rel="noreferrer" className="hover:opacity-80">Instagram</a>
            </div>
          </div>
          <div>
            <p className="font-semibold">Políticas</p>
            <p className="mt-2 text-neutral-400">Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com nossa Política de Privacidade.</p>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 py-6 border-t border-neutral-800">
          © {new Date().getFullYear()} Transparo Corretora de Seguros. Todos os direitos reservados. — CNPJ: {COMPANY.cnpj} — {COMPANY.city}
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a className="hidden md:flex fixed bottom-6 right-6 items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 transition shadow-lg" href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
        <Icons.Phone className="w-4 h-4"/> <span className="text-sm font-medium">Fale agora</span>
      </a>
    </div>
  )
}
