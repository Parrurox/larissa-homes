import imgImage44 from "@/assets/images/main-logo.webp";

function Link() {
  return (
    <div className="content-stretch flex flex-col font-['Aileron:Regular',sans-serif] gap-[16px] items-start leading-[16px] not-italic relative shrink-0 text-[16px] text-white w-[144px] whitespace-nowrap" data-name="Link">
      <p className="relative shrink-0">Pricing</p>
      <p className="relative shrink-0">Investments</p>
      <p className="relative shrink-0">About Us</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Link />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center px-[18px] py-[8px] relative rounded-[25px] shrink-0">
      <p className="font-['Aileron:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#12161d] text-[16px] whitespace-nowrap">Book Your Stay</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start relative shrink-0">
      <Frame />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[12px] pt-[20px] px-[20px] relative size-full" data-name="Navbar">
      <Frame2 />
      <Frame1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[100px] top-[calc(50%-6px)]" data-name="image 44">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage44} />
      </div>
    </div>
  );
}