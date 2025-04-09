export const usePricing = ({ typeTarif }: { typeTarif: number }) => {
  const handleBuyTarifClick = () => {
    console.log('Попробовать', typeTarif);
  };

  return { handleBuyTarifClick };
};
