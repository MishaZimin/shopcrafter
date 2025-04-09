import Image from 'next/image';

type AudienceCardProps = {
  image: string;
  title: string;
  description: string;
};

export const AudienceCard = ({
  image,
  title,
  description,
}: AudienceCardProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full bg-base rounded-[16px]">
        <div className="rounded-[16px] p-0 bg-base mx-auto w-[256px] h-[256px]">
          <Image src={image} alt={'Handmade'} />
        </div>
      </div>

      <div className="max-w-[200px] flex flex-col gap-2">
        <h4 className="text-h4">{title}</h4>
        <p className="text-m ">{description}</p>
      </div>
    </div>
  );
};
