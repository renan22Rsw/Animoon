import SubTitles from "../Titles/SubTitles";

const Trailer = ({ trailerId }: { trailerId: string }) => {
  return (
    <>
      <SubTitles>Trailer</SubTitles>

      <iframe
        className=" w-full h-[300px] p-6  md:w-[500px] md:h-[300px] md:p-4 "
        src={`https://www.youtube.com/embed/${trailerId}?enablejsapi=1&wmode=opaque&autoplay=0`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        data-testid="iframe"
      ></iframe>
    </>
  );
};

export default Trailer;
