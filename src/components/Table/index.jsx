import { useState } from "react";

import { piontoutputRange, piontreturnInterval, piontexit } from "~/api";

export const Table = ({ onSuccess, point }) => {
  const token = useState(localStorage.getItem("token"))[0];

  return (
    <table className="w-full overflow-auto table-auto">
      <thead>
        <tr className="bg-blue-500 ">
          <th className="border border-blue-300 text-grey text-sm p-2">Data</th>

          <th className="border border-blue-300 text-grey text-sm p-2">
            Entrada
          </th>

          <th className="border border-blue-300 text-grey text-sm p-2">
            Intervalo
          </th>

          <th className="border border-blue-300 text-grey text-sm p-2">
            Retorno do intervalo
          </th>

          <th className="border border-blue-300 text-grey text-sm p-2">
            Saída
          </th>
        </tr>
      </thead>

      <tbody>
        {point.map((item) => (
          <tr key={item._id} className="border-y">
            <td className=" text-center p-1">{item.dateEntry}</td>

            <td className=" text-center p-1">{item.prohibited}</td>

            <td
              onClick={async () => {
                await piontoutputRange(token);
                onSuccess();
              }}
              className=" text-center p-1 cursor-pointer"
            >
              {item?.outputRange}
            </td>

            <td
              onClick={async () => {
                await piontreturnInterval(token);
                onSuccess();
              }}
              className=" text-center p-1 cursor-pointer"
            >
              {item?.returnInterval}
            </td>

            <td
              onClick={async () => {
                await piontexit(token);
                onSuccess();
              }}
              className=" text-center p-1 cursor-pointer"
            >
              {item?.exit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
