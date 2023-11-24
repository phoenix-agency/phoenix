import Button from "../Button/Button";
const PrestationsInfo = () => {
  return (
    <div className="my-16 ml-16">
      <h2 className="mb-3 text-3xl font-extrabold text-secondary text-center sm:text-left">
        Les prestations de votre agence web de Lille.
      </h2>
      <p className="text-gray-dark text-center mb-11 sm:text-left">
        Nous sommes certains que vous allez trouver ce que vous recherchez tant
        que cela fait partie du domaine de IT 😉
      </p>
      <div className=" gap-8 flex flex-col justify-center items-center sm:flex-row sm:justify-start">
        <Button color="bg-primary" title="Découvrir les services" link="#" />
        <Button color="bg-emerald-400" title="Nous contacter" link="#" />
      </div>
    </div>
  );
};

export default PrestationsInfo;
