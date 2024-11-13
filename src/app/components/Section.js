const Section = ({ id, title, children }) => (
  <section id={id}>
    <h2 className="text-2xl font-bold text-white text-center mb-4">{title}</h2>
    <div className="max-w-5xl text-white mx-auto">{children}</div>
  </section>
);

export default Section;
