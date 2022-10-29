import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Input = (props) => (
  <input {...props} className="bg-grey p-2 outline-none rounded-full" />
);

const validationSchema = yup.object({
  email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
  password: yup.string().required("Digite sua senha"),
});

export const Login = () => {
  const formik = useFormik({
    onSubmit: async (velues) => {
      await axios({
        method: "get",
        auth: { username: velues.email, password: velues.password },
        baseURL: "http://localhost:5000",
        url: "/login",
      }).then(({ data }) => {
        localStorage.setItem("token", data.accessToken);
      });
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-full h-full flex flex-col md:flex-row ">
      <section className="flex flex-col flex-1 justify-center space-y-6 p-10 md:p-16">
        <h1 className="text-3xl">Login</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">E-mail</label>

            <Input
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />

            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password">Senha</label>

            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />

            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>

          <input
            type="submit"
            value={formik.isSubmitting ? "Enviando..." : "Entrar"}
            className="w-full bg-blue-500 text-grey cursor-pointer rounded-full p-4"
          />
        </form>
      </section>
      <section className="flex flex-col justify-center items-center flex-1 bg-blue-500 space-y-6 p-10">
        <h2 className="text-2xl text-grey md:text-3xl ">Bem-vindo ao JG</h2>
        <p className="text-base text-grey">Não tem uma conta?</p>

        <a
          href="/signup"
          className="text-grey px-4 py-2 rounded-full border border-grey"
        >
          Cadastre-se
        </a>
      </section>
    </div>
  );
};
