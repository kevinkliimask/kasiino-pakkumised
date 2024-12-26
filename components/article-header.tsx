import Image, { StaticImageData } from 'next/image';

type ArticleHeaderProps = {
  image: StaticImageData;
  title: string;
};

const ArticleHeader = async ({ image, title }: ArticleHeaderProps) => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 mb-16">
      <div className="h-full rounded-[20px] overflow-hidden">
        <Image src={image} alt="article header" className="rounded-lg object-cover" />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
    </section>
  );
};

export default ArticleHeader;
