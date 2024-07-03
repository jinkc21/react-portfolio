import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <div className='flex justify-center items-center mb-40'>
     <p> </p>
      <button className='bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md'>
        <a href={resume} download='resume'>Download Resume</a> 
        </button>
    </div>
  );
};

export default Resume;