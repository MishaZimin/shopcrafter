import NewsGrid from '../../../features/new/ui/NewsGrid';

export default function NewsSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <h2 className="text-2xl font-bold">Новости</h2>
      <NewsGrid />
    </div>
  );
}
