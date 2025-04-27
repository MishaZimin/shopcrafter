import TariffsGrid from '../../../features/tariff/pay/ui/TariffsGrid';

export default function TariffsSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <h2 className="text-2xl font-bold">Тарифы</h2>
      <TariffsGrid />
    </div>
  );
}
