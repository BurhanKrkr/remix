import { PhoneCard } from "./phone.card";

export default function PhoneList({ Phones }: PhoneListProps) {
  return (
    <main className="mx-auto max-w-5xl">
      <h1 className="my-6 border-b-2 text-center text-3xl"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Phones.products.map((phone: Product, index: number) => (
          <PhoneCard
            key={index}
            phone={phone}
            horizontalProducts={Phones.horizontalProducts}
          />
        ))}
      </div>
    </main>
  );
}
