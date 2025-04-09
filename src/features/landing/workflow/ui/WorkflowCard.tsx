import Image from 'next/image';

type WorkflowCardProps = {
  image: string;
  title: string;
  description: string;
};

export const WorkflowCard = ({
  image,
  title,
  description,
}: WorkflowCardProps) => {
  return (
    <div className="w-full bg-base rounded-[16px] flex flex-col p-4 pb-0 gap-4">
      <h4 className="text-h4">{title}</h4>
      <div className="flex flex-row flex-1 items-end">
        <p className="text-m flex-1 mb-4">{description}</p>
        <div className=" rounded-[16px] p-0 bg-base mx-auto w-[196px] flex-1">
          <Image src={image} alt={'Handmade'} />
        </div>
      </div>
    </div>
  );
};
