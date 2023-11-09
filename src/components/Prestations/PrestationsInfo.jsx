import Button from "../Button/Button";
const PrestationsInfo = () => {
  return (
    <div>
      <h2 className="mb-3 text-3xl font-extrabold text-secondary">
        Les prestations de votre agence web de Lille.
      </h2>
      <p className="text-gray-dark mb-11">
        Nous sommes certains que vous allez trouver ce que vous recherchez tant
        que cela fait partie du domaine de IT 😉
      </p>
      <Button color="bg-primary" title="Découvrir les services" link="#" />
      <Button color="bg-emerald-400" title="Nous contacter" link="#" />
    </div>
  );
};

export default PrestationsInfo;
