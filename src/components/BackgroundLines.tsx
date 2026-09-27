export const BackgroundLines = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] md:hidden lg:flex mx-auto px-4 sm:px-6 lg:px-20 absolute inset-0 flex justify-between pointer-events-none z-0">
        {Array.from({ length: 19 }).map((_, i) => (
          <div
            key={i}
            className="w-px h-[840px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.064)_23.96%,rgba(255,255,255,0.024)_71.87%,rgba(255,255,255,0)_100%)]"
          />
        ))}
      </div>
    </div>
  );
};
