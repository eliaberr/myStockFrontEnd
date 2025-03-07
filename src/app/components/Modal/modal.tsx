"use client";

import Image from "next/image";
import FormTableProduct from "../TableProduct/formTableProduct";
import { useState } from "react";

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

  return (
    <section className="mt-10 text-center">
      <h2 className="font-bold text-xl">Adicionar Produto</h2>
      <div>
        <Image
          src="/images/cardClearMenImg.png"
          alt="imgClear"
          width={150}
          height={20}
          className="mx-auto"
        />
        {imageUrl && (
          <div className="mt-4">
            <Image src={imageUrl} alt="Uploaded Image" className="mx-auto" />
          </div>
        )}

        {/* Campo de upload de arquivo */}
        <input
          type="file"
          className="bg-primary w-[128px] h-8 flex rounded p-1 text-white mt-1.5 mx-auto"
          onChange={fileChange}
        />

        {/* Exibe o nome do arquivo carregado */}
        {fileName && <p>{fileName}</p>}
      </div>

      {/* Componente adicional */}
      <FormTableProduct />
    </section>
  );
}
