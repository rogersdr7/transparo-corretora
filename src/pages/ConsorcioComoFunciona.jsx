export default function ConsorcioComoFunciona() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold">Como funciona o consórcio</h1>

      <ol className="mt-4 list-decimal pl-6 text-neutral-300 space-y-2">
        <li>Você entra em um grupo com pessoas que têm o mesmo objetivo (imóvel/veículo).</li>
        <li>Todo mês há assembleias com <strong>sorteio</strong> e oferta de <strong>lances</strong>.</li>
        <li>Ao ser contemplado, você recebe a <strong>carta de crédito</strong> para comprar o bem.</li>
        <li>Sem juros: paga apenas a <strong>taxa de administração</strong> e, quando houver, <strong>fundo de reserva</strong>.</li>
        <li>Após usar a carta, você continua pagando as parcelas até o fim do plano.</li>
      </ol>

      <h2 className="mt-8 text-2xl font-bold">Tipos de lance</h2>
      <ul className="mt-2 list-disc pl-6 text-neutral-300">
        <li><strong>Livre:</strong> você define o percentual.</li>
        <li><strong>Embutido:</strong> usa parte da própria carta.</li>
        <li><strong>FGTS (imóvel):</strong> pode ajudar a contemplar ou amortizar.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">Custos comuns</h2>
      <ul className="mt-2 list-disc pl-6 text-neutral-300">
        <li>Taxa de administração (dilui nas parcelas).</li>
        <li>Fundo de reserva (quando previsto).</li>
        <li>Seguro (conforme plano).</li>
      </ul>

      <a
        href="https://wa.me/5515991757462?text=Quero+entender+qual+plano+de+cons%C3%B3rcio+%C3%A9+melhor+pra+mim"
        className="inline-block mt-8 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500"
        target="_blank" rel="noreferrer"
      >
        Falar com a Transparo
      </a>
    </div>
  );
}
