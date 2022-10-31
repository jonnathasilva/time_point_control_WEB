import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { piontoutputRange, piontreturnInterval, piontexit } from "~/api";
import { DateSelect } from "~/components";

export const Home = () => {
  const token = useState(localStorage.getItem("token"))[0];
  const [point, setPoint] = useState([]);

  const addNewPoint = () => {
    axios({
      method: "post",
      baseURL: import.meta.env.VITE_URL,
      url: "/createpoint",
      headers: { authorization: `Bearer ${token}` },
    })
      .then(() => getPoint())
      .catch(({ response }) => {
        toast.error(response?.data?.message);
      });
  };

  const getPoint = () => {
    axios({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: "/point",
      headers: { authorization: `Bearer ${token}` },
    }).then(({ data }) => {
      setPoint(data);
    });
  };

  useEffect(() => {
    getPoint();
  }, []);

  return (
    <div className="space-y-4 ">
      <div className="flex">
        <button
          className="bg-blue-300 px-4 py-2 rounded-lg text-grey font-bold m-2"
          onClick={addNewPoint}
        >
          Cria novo ponto
        </button>

        <DateSelect setPoint={setPoint} />
      </div>
      <table className="w-full overflow-auto">
        <thead>
          <tr className="bg-blue-500 ">
            <th className="border border-blue-300 text-grey text-sm p-2">
              Data
            </th>
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
            <tr key={item._id}>
              <td className="border border-blue-300 text-center p-1">
                {item.dateEntry}
              </td>
              <td className="border border-blue-300 text-center p-1">
                {item.prohibited}
              </td>
              <td
                onClick={async () => {
                  await piontoutputRange(token);
                  getPoint();
                }}
                className="border border-blue-300 text-center p-1 cursor-pointer"
              >
                {item?.outputRange}
              </td>
              <td
                onClick={async () => {
                  await piontreturnInterval(token);
                  getPoint();
                }}
                className="border border-blue-300 text-center p-1 cursor-pointer"
              >
                {item?.returnInterval}
              </td>
              <td
                onClick={async () => {
                  await piontexit(token);
                  getPoint();
                }}
                className="border border-blue-300 text-center p-1 cursor-pointer"
              >
                {item?.exit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
