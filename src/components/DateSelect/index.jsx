import axios from "axios";
import { format, subDays, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Icon } from "~/components";

export const DateSelect = ({ setPoint }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const token = useState(localStorage.getItem("token"))[0];

  const prevDay = () => {
    const newDate = subDays(currentDate, 1);
    setCurrentDate(newDate);
    const getDate = format(newDate, "MMMM 'de' yyyy", { locale: ptBR }).replace(
      /[- ]+/g,
      "+"
    );
    search(getDate);
  };

  const nextDay = () => {
    const newDate = addDays(currentDate, 1);
    setCurrentDate(newDate);
    const getDate = format(newDate, "MMMM 'de' yyyy", { locale: ptBR }).replace(
      /[- ]+/g,
      "+"
    );
    search(getDate);
  };

  const search = (date) => {
    axios({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: `/search/?month=${date}`,
      headers: { authorization: `Bearer ${token}` },
    }).then(({ data }) => {
      setPoint(data);
    });
  };

  return (
    <div className="p-4 flex space-x-4 justify-center items-center">
      <Icon
        name="arrowLeft"
        className="w-6 text-blue-300 cursor-pointer"
        onClick={prevDay}
      />
      <span className="font-bold">
        {format(currentDate, "d 'de' MMMM 'de'	yyyy", { locale: ptBR })}
      </span>
      <Icon
        name="arrowRight"
        className="w-6 text-blue-300 cursor-pointer"
        onClick={nextDay}
      />
    </div>
  );
};
