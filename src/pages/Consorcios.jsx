export default function Consorcios() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold">Consórcio de Imóveis e Veículos</h1>
      <p className="mt-4 text-neutral-300">
        Sem juros, apenas taxa de administração. Você participa de um grupo e é contemplado por sorteio ou lance.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Vantagens</h2>
      <ul className="mt-2 list-disc pl-6 text-neutral-300">
        <li>Sem juros (diluição da taxa na parcela).</li>
        <li>Planejamento: você escolhe a carta que cabe no bolso.</li>
        <li>Lance livre ou embutido para antecipar a contemplação.</li>
      </ul>

      <a
        href="https://wa.me/5515991757462?text=Quero+simular+um+cons%C3%B3rcio"
        className="inline-block mt-8 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500"
        target="_blank" rel="noreferrer"
      >
        Simular no WhatsApp
      </a>
    </div>
  );
}
