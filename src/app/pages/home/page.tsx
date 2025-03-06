import Header from "@/app/components/Header/header";
import Modal from "@/app/components/Modal/modal";
import TableProduct from "@/app/components/TableProduct/tableProduct";

export default function home(){
    return (
        <section className="mt-10 text-center">
            <Header/>
            <TableProduct/>
            <Modal/>
        </section>
    )
}