import imgImageLuxuryInterior from "@/assets/images/luxury-interior-hero.png";

function ImageLuxuryInterior() {
  return (
    <div className="-translate-y-1/2 absolute h-[746px] left-[828px] rounded-[20px] top-[calc(50%+16.5px)] w-[699px]" data-name="Image (Luxury Interior)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-full left-[-44.07%] max-w-none top-0 w-[160.01%]" src={imgImageLuxuryInterior} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[20px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#2e5d82] content-stretch flex h-[48px] items-center justify-center px-[18px] py-[8px] relative rounded-[25px] shrink-0 w-[184px]">
      <p className="font-['Aileron:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Estimate Now</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[102px] top-[274px] w-[623px]">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[52px] min-w-full not-italic relative shrink-0 text-[#12161d] text-[44px] w-[min-content]">Complete Airbnb management that maximizes your earnings with style and comfort.</p>
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[889px] left-0 top-0 w-[1564px]" data-name="Container">
      <ImageLuxuryInterior />
      <Frame2 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f4f7f9] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}