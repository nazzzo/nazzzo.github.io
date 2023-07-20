import LoadingSlider from "./styled/LoadingSlide.styled";

export const LoadingSpinner2 = () => {
  return (
    <>
      <div className="relative flex justify-center items-center mt-48">
        <div className="absolute animate-spin rounded-full h-96 w-96 border-t-4 border-b-4 border-red-500"></div>
        <div className="rounded-full h-80 w-80">
          <LoadingSlider />
        </div>
      </div>
    </>
  );
};