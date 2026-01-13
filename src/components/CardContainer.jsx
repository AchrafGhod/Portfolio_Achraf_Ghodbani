const CardContainer = ({ children }) => (
  <article className="w-full max-w-7xl rounded-2xl border border-white-50/15 bg-linear-to-br from-black-200/60 via-black-200/40 to-black-200/50 backdrop-blur-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-white-50/25 hover:shadow-3xl">
    {children}
  </article>
);

export default CardContainer;
