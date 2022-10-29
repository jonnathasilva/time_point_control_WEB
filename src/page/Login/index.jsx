const Input = ({ name, type, text, placeholder }) => (
  <>
    <label htmlFor={name}>{text}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="bg-grey p-2 outline-none rounded-full"
    />
  </>
);

export const Login = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row ">
      <section className="flex flex-col flex-1 justify-center space-y-6 p-10 md:p-16">
        <h1 className="text-3xl">Login</h1>

        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <Input
              type="text"
              name="email"
              text="E-mail"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Input
              type="password"
              name="password"
              text="Senha"
              placeholder="Digite sua senha"
            />
          </div>

          <input
            type="submit"
            value="Entrar"
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
