const LeadDetailProfile = () => {
  return (
    <div className="bg-white dark:bg-gray-700 ">
      <div className="p-5 flex flex-col items-center justify-center md:flex-row md:justify-normal pb-5">
        <img
          src="https://doodleipsum.com/700/avatar-3?i=74943b7fc5a9da2affe8c2d8b8558812"
          className=" h-36 w-36 rounded-full bg-gray-600 p-1 border-orange-200 border-2"
        />
        <div className="md:items-left flex flex-col items-center justify-center p-5 dark:text-white">
          <p className="font-bold">Militza Pekarka</p>
          <p className="font-thin">Added at: December 12. 2902.</p>
          <p className="font-thin">
            Added by: <a href="#">Nikola Cirkovic</a>
          </p>
          <div className="flex flex-row pt-2">
            <button className="rounded bg-cyan-500 px-4 py-1 text-white">
              Email
            </button>
            <button className="ml-2 rounded bg-blue-500 px-4 py-1 text-white">
              Linkedin
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center"></div>
      </div>
    </div>
  );
};
export default LeadDetailProfile;
