import './App.css';
import './output.css';
import Section from './components/Section';
import Card from './components/Card';
import Contact from './components/Contact';


function App() {
  return (
    <div className='flex flex-col text-white bg-[#282c34] border-orange-600 border-2 ' >
      <Section>
        <div className='flex flex-col items-end justify-center'>
        <p className='text-6xl'>
            Daniel Johansson
          </p>
          <p className='text-4xl'>
          Developer
          </p>
        </div>
        <div>
          <img src="images/profile-picture.png" alt="logo" className='grayscale h-lvh opacity-30 min-w-full'/>
        </div>
        </Section>
        <Section>
          <div className='flex flex-row p-8'>
          <Card
              title="OneTwo Analytics"
              subtitle={["Fullstack Developer"]}
              date="2022-now"
              />
              <Card
              title="2Rent"
              subtitle={["Technical Sales"]}
              date="2016-2020"
              />
              <Card
              title="LightsByMini"
              subtitle={["Lighting Designer", "Lighting technician"]}
              date="2006-2016"
              />
          </div>
        </Section>
        <Section>
          <div className='flex flex-row p-8'>
          <Contact
              email="daniel@codebymini.se"
              />
          </div>
        </Section>
    </div>
  );
}

export default App;
