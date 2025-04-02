export default function Lending() {
  return (
    <div>
      <section id="hero" className=" pt-0 pb-16">
        <h1 className="pb-2">Для кого</h1>
        <div className="w-full flex flex-row gap-4  rounded-xl">
          <div className=" bg-gray-100 rounded-xl flex-1 h-[300px]" />
          <div className=" bg-gray-100 rounded-xl h-[300px] flex-1" />
          <div className=" bg-gray-100 rounded-xl h-[300px] flex-1" />
        </div>
      </section>

      <section id="features" className="pb-16">
        <h1 className="pb-2">Для чего</h1>
        <div className="w-full flex flex-row gap-4  rounded-xl">
          <div className=" bg-gray-100 rounded-xl flex-1 h-[500px]" />
          <div className=" bg-gray-100 rounded-xl h-[500px] flex-1" />
          {/* <div className=" bg-gray-100 rounded-xl h-[300px] flex-1" /> */}
        </div>
      </section>

      <section id="questions" className="pb-16">
        <h1 className="pb-2">Частые вопросы</h1>
        <div className="w-full flex flex-row gap-4  rounded-xl">
          <div className=" bg-gray-100 rounded-xl flex-1 h-[300px]" />
        </div>
      </section>

      <section id="price" className="pb-16">
        <h1 className="pb-2">Цены</h1>
        <div className="w-full flex flex-row gap-4  rounded-xl">
          <div className=" bg-gray-100 rounded-xl flex-1 h-[300px]" />
          <div className=" bg-gray-100 rounded-xl h-[300px] flex-1" />
          <div className=" bg-gray-100 rounded-xl h-[300px] flex-1" />
        </div>
      </section>
    </div>
  );
}
