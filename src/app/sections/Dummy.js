import Section from '../components/Section';
import Image from 'next/image';

const Dummy = ({ imagePosition = 'right' }) => (
  <Section id="dummy" title="">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-10 bg-white bg-opacity-80 rounded-lg p-8">
      <div className={`w-full md:w-6/12 text-gray-700 ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
        <h2 className="text-xl font-semibold mb-4">DUMMY HEADER</h2>
        <ul className="list-disc list-inside space-y-3">
          {[
            { label: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { label: 'Curabitur Elit', text: 'Vivamus pharetra nisi at tortor facilisis, at aliquam justo convallis.' },
            { label: 'Etiam Consectetur', text: 'Nulla facilisi. Sed id tortor non urna convallis dapibus.' }
          ].map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.label}:</span> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={`w-full md:w-6/12 flex justify-center ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
        <Image
          src="/chemotion-app-page.png"
          alt="Section illustration"
          className="rounded-md shadow-md object-cover border-gray-400"
          style={{ borderWidth: '1px' }}
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  </Section>
);

export default Dummy;
