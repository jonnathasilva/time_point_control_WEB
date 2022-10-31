import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { DateSelect, Table } from "~/components";

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

  async function getPoint() {
    await axios({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: "/point",
      headers: { authorization: `Bearer ${token}` },
    }).then(({ data }) => {
      setPoint(data);
    });
  }

  useEffect(() => {
    getPoint();
  }, []);

  return (
    <div className="space-y-4 max-w-screen-2xl mx-auto">
      <div className="flex justify-between">
        <button
          className="bg-blue-300 px-4 py-2 rounded-lg text-grey font-bold m-2"
          onClick={addNewPoint}
        >
          Cria novo ponto
        </button>

        <DateSelect setPoint={setPoint} />
      </div>

      <Table point={point} onSuccess={getPoint} />
    </div>
  );
};
