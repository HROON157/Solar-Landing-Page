import { satoshiFont } from "@/app/fonts/fonts";
import Image from "next/image";


export const HomePage = () => {
  return (
    <div className="w-full bg-background pt-16 md:pt-24 lg:pt-[108px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex md:flex-row flex-col md:items-start">
          <div className="max-w-[959px] lg:px-0 sm:px-4  flex flex-col gap-2">
            <p
              className={`text-white ${satoshiFont.className} text-sm sm:text-base font-bold leading-[120%] tracking-[0.5em]`}
            >
              HIGH CLASS
            </p>
            <h1
              className={`text-white ${satoshiFont.className} font-[900] lg:text-[88px] md:text-[60px] sm:text-[74px] text-[45px] leading-[120%] tracking-[-0.05em] uppercase`}
            >
              Energy <span className="text-primary">developer</span> and asset
              management.
            </h1>
          </div>

          <div className="w-full md:max-w-[330px] flex flex-col pt-10 md:pt-[85px] lg:gap-8 gap-3">
            <div className="max-w-[189px] flex items-center gap-[10px]">
              <Image src="/Borders.png" alt="" width={100} height={100} />
              <p
                className={`text-[12px] font-[400] ${satoshiFont.className} text-primary tracking-[-0.02em] leading-[120%] `}
              >
                Renewable Energy
              </p>
            </div>

            <div className="flex items-center gap-3">
              <p
                className={`text-white ${satoshiFont.className} text-[18px] leading-[160%] tracking-[-0.02em]`}
              >
                Var Sit pellentesque nisl, morbi eleifend at dolor nisl
                adipiscing aliquet. Sit facilisi amet ultricies pulvinar egestas
                quis vulputate.
              </p>
            </div>

            <div>
              <button
                type="button"
                className={`${satoshiFont.className} flex items-center gap-2 bg-primary text-background text-[18px] leading-[120%] tracking-[-0.01em] font-bold lg:py-4 py-2 lg:px-8 px-4 rounded-[8px] cursor-pointer`}
              >
                Explore
                <Image src="/rightArrow.png" alt="" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 relative">
  <Image
    src="/WindEnergy.png"
    alt="Wind Energy"
    width={1290}
    height={460}
    priority
    className="rounded-[12px] w-full h-auto"
  />
  {/* <StatsPill className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6" /> */}
</div>
      </div>
    </div>
  );
};
