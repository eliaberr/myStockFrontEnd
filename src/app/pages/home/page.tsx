import Header from "@/app/components/Header/header";
import TableProduct from "@/app/components/TableProduct/tableProduct";

export default function home() {
  return (
    <section className="mt-10 text-center max-w-[62.5rem] mx-auto">
      <Header />
      <TableProduct />
    </section>
  );
}
