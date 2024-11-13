import Section from '../components/Section';

const Intro = () => (
  <Section id="intro" title="Electronic Laboratory Notebook (ELN)">
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-[200px]">
      <div className="w-full max-w-lg text-left">
        <p className="text-base mb-4">
          The Chemotion ELN was designed for chemists and adapted to the special requirements of chemical laboratory
          work and documentation. It therefore serves as a digitalization instrument for work in chemistry, developed to
          overcome the current limitations of the existing systems. To reach this goal, the development, improvement,
          and extension of the ELN is a community effort. It is completely open-source.
        </p>
      </div>
      <div className="w-full md:w-6/12 flex flex-col items-center">
        <iframe
          width="400"
          height="225"
          src="https://www.youtube.com/embed/tZHaP6DW-Dw?si=EMcfABUZvgPgQdij&amp;controls=0"
          title="Chemotion ELN and Repository"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md shadow-lg mb-4"></iframe>
      </div>
    </div>
  </Section>
);

export default Intro;
