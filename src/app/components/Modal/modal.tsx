"use client";

import Image from "next/image";
import FormTableProduct from "../TableProduct/formTableProduct";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";

export default function Modal() {
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

  const deleteFile = () => {
    setFileName("");
    setImageUrl(null);
  };

  return (
    <section className="mt-10 text-center w-[360px] py-5 px-3 rounded-3xl shadow-2xs mx-auto bg-gray-200">
      <h2 className="font-bold text-xl">Adicionar Produto</h2>
      <div>
        <div className="mt-4 w-[250px] h-[250px] mx-auto bg-stone-300 flex justify-center items-center">
          {imageUrl === null ? (
            <></>
          ) : (
            <Image
              src={imageUrl}
              alt="Uploaded Image"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="flex justify-center items-center w-[250px] mx-auto relative mt-1.5">
          <input
            type="file"
            className="bg-primary w-[128px] h-8 flex rounded p-1 text-white"
            onChange={fileChange}
          />
          {imageUrl != null ? (
            <button onClick={deleteFile} className="absolute right-5 ">
              <CiTrash className="text-3xl text-red-600" />
            </button>
          ) : (
            <></>
          )}
        </div>

        {fileName && <p>{fileName}</p>}
      </div>
      <FormTableProduct />
    </section>
  );
}
