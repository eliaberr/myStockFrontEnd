"use client";

import Image from "next/image";
import FormTableProduct from "./formModalProduct";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  closeModal: () => void;
  idProduct: string | undefined;
}

export default function Modal({ idProduct, closeModal }: ModalProps) {
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    }
  };

  console.log("aqui esta o ids modal", idProduct);

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="text-center w-[22.5rem] max-h-[43.75rem] py-3 px-3 rounded-3xl shadow-2xs mx-auto bg-gray-200 mt-10 overflow-y-auto relative">
        <button
          className="absolute right-10 top-4 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center"
          onClick={closeModal}
        >
          <IoMdClose />
        </button>
        <h2 className="font-bold text-xl">Adicionar Produto</h2>
        <div>
          <div className="mt-4 w-[12.5rem] h-[12.5rem] mx-auto bg-stone-300 flex justify-center items-center">
            {imageUrl === null ? (
              <></>
            ) : (
              <Image
                src={imageUrl}
                alt="Uploaded Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="flex justify-center items-center w-[15.625rem] mx-auto relative mt-1.5">
            <input
              type="file"
              className="bg-primary w-[8rem] h-8 flex rounded p-1 text-white"
              onChange={fileChange}
            />
            {imageUrl != null ? (
              <button
                onClick={() => {
                  setFileName("");
                  setImageUrl(null);
                }}
                className="absolute right-5 "
              >
                <CiTrash className="text-3xl text-red-600" />
              </button>
            ) : (
              <></>
            )}
          </div>

          {fileName && <p>{fileName}</p>}
        </div>
        <FormTableProduct idProduct={idProduct} />
      </div>
    </section>
  );
}
