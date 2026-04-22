const Shimmer = () => {
  return (
    <>
    <div data-testid="shimmer" className="w-100 h-10 my-5 mx-auto rounded-lg bg-linear-to-r from-[#eeeeee] via-[#dddddd] to-[#eeeeee] bg-size-[200%_100%] animate-shimmer"></div>
    <div className="flex flex-wrap justify-center">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-75 h-100 m-5 rounded-[10px]">
            <div className="w-full h-50 rounded-[10px] bg-linear-to-r from-[#eeeeee] via-[#dddddd] to-[#eeeeee] bg-size-[200%_100%] animate-shimmer"></div>
            <div className="h-50 rounded-[10px] bg-linear-to-r from-[#eeeeee] via-[#dddddd] to-[#eeeeee] bg-size-[200%_100%] animate-shimmer w-[80%]"></div>
            <div className="h-50 rounded-[10px] bg-linear-to-r from-[#eeeeee] via-[#dddddd] to-[#eeeeee] bg-size-[200%_100%] animate-shimmer w-[60%]"></div>
            <div className="h-50 rounded-[10px] bg-linear-to-r from-[#eeeeee] via-[#dddddd] to-[#eeeeee] bg-size-[200%_100%] animate-shimmer w-[40%]"></div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Shimmer;