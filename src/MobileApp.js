import './output.css';
import Contact from './components/Contact';

function MobileApp() {
  return (
    <div className="bg-[#282c34] min-h-screen relative">
      <div className="text-white">
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="flex flex-col items-end justify-end w-2/3">
            <p className="text-3xl">Daniel Johansson</p>
            <p className="text-3xl">Developer</p>
          </div>
        </div>
      </div>
      <img
        src="images/profile-picture.png"
        alt="logo"
        className="w-[100vw] grayscale opacity-50 object-scale-down"
      />
      <div className="flex justify-center items-center text-white">
        <Contact
          title="Contact"
          linkedin={['https://www.linkedin.com/in/codebymini/']}
          github={['https://github.com/codebymini/']}
          email={['daniel@codebymini.se']}
        />
      </div>
    </div>
  );
}
//   return (
//     <div className='bg-[#282c34] w-full'>
//       <div className='relative'>
//         <div className='flex flex-col items-center top-2/3 left-1/3 justify-center absolute text-white'>
//         <p className='text-3xl'>
//             Daniel Johansson
//           </p>
//           <p className='text-3xl'>
//           Developer
//           </p>
//         </div>
//         <div>
//           <img src="images/profile-picture.png" alt="logo" className='grayscale h-lvh opacity-30 min-w-full max-h-[300px] object-scale-down'/>
//         </div>
//         </div>
//         <div background={"images/background.png"}>

//           <div className='flex flex-row p-8 h-[35vh]'>
//             <Card
//               title="OneTwo Analytics"
//               subtitle={["Fullstack Developer"]}
//               date="2022-now"
//               tooltip={<div className='flex flex-col items-center justify-center text-center'>
//                 {/* <img src="images/onetwo-analytics-logo.svg" alt="logo" className='h-20 w-40'/> */}
//                 <div>Currently employed as a Fullstack developer</div>
//                 <div className='flex flex-row items-center justify-around w-full'>
//                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"  alt="ts" className='h-[30px] w-[30px]'/>
//                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="python" className='h-[30px] w-[30px]'/>
//                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" alt="postgres" className='h-[30px] w-[30px]'/>
//                 </div>
//               </div>}
//             />
//             <Card
//               title="2Rent"
//               subtitle={["Technical Sales"]}
//               date="2016-2020"
//               tooltip={"Worked with sales and technical support for a light equipment rental company."}
//               />
//             <Card
//               title="LightsByMini"
//               subtitle={["Lighting Designer", "Lighting technician"]}
//               date="2006-2016"
//               tooltip={"Worked with lighting design and as a lighting technician for various shows and events."}
//               />
//           </div>
//         </div>
//         <div>
//           <div className='flex flex-row p-8 h-[35vh]'>
//           <Contact
//               title="Contact"
//               linkedin={["https://www.linkedin.com/in/codebymini/"]}
//               github={["https://github.com/codebymini/"]}
//               email={["daniel@codebymini.se"]}
//               />
//           </div>
//         </div>
//       </div>
//   );
// }

export default MobileApp;
