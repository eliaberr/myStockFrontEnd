export default function TableProduct() {
  return (
    <table className="grid ">
        <thead className="grid grid-cols-7 border-b-2">
            <th className="text-center ">Cod</th>
            <th>Nome</th>
            <th className=" col-span-2">Descrição</th>
            <th>Preço</th>
            <th className=" col-span-2">Estoque</th>
        </thead>
        <tbody className="">
            <tr className="grid grid-cols-7 py-5 border-b-2">
                <td className="text-center ">01</td>
                <td>Clear Man</td>
                <td className=" col-span-2">shampoo Clear Men cabelo masculino</td>
                <td>16,50</td>
                <th className=" col-span-2">3</th>
            </tr>
            <tr className="grid grid-cols-7 py-5 border-b-2">
                <td className="text-center ">03</td>
                <td className="overflow-hidden">Palmolive Shampoo</td>
                <td className=" col-span-2">shampoo Clear Palmolive Feminino</td>
                <td>20,50</td>
                <th className=" col-span-2">1</th>
            </tr>
        </tbody>
    </table>
  );
}
