import React from "react";
import { CountryType } from "../types";

interface Props {
  data?: CountryType;
}

function Country({ data }: Props) {
  return (
    <div className="w-full p-6 shadow-lg h-auto bg-white rounded-lg flex items-center justify-start">
      <div className="flex items-center justify-start">
        <img
          src={data?.flags.svg}
          alt={data?.name.official}
          className="object-cover"
          width={50}
          height={30}
          loading="lazy"
        />
        <div className="flex items-start justify-center flex-col">
          <div className="text-lg font-semibold ml-4">{data?.name.common}</div>
          <div className="text-sm font-light ml-4">{data?.name.official}</div>
        </div>
      </div>
    </div>
  );
}

export default Country;
