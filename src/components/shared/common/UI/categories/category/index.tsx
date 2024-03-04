import Image from "next/image";

export default function Category({
  category
}: {
  category: string
}) {
  return (
    <div className="rounded-[30px] border-4 p-5 flex flex-col justify-between align-center border-black w-[200px]">
      <Image
        src={`/images/categories/${category}.jfif`}
        width={150}
        height={50}
        alt="category"
        />
      <p className="text-center font-bold uppercase text-xs mt-3">{category}</p>
    </div>
  );
}