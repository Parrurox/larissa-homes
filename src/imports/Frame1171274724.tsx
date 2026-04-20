import svgPaths from "./svg-xzgsbtk48p";
import imgRectangle3 from "@/assets/images/ui-rectangle-accent.webp";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-white col-1 h-[88px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-14.667px_0px] mask-size-[122.222px_88px] ml-[14.67px] mt-0 row-1 w-[92.889px]" style={{ maskImage: `url('${imgRectangle3}')` }} />
      <div className="col-1 h-[15.889px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-72.111px_-33px] mask-size-[122.222px_88px] ml-[72.11px] mt-[33px] relative row-1 w-[10.389px]" style={{ maskImage: `url('${imgRectangle3}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3889 15.8889">
          <path d={svgPaths.p2e585b00} fill="var(--fill-0, #DA281C)" id="Vector 2" />
        </svg>
      </div>
      <div className="col-1 h-[15.278px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-45.222px_-56.833px] mask-size-[122.222px_88px] ml-[45.22px] mt-[56.83px] relative row-1 w-[15.889px]" style={{ maskImage: `url('${imgRectangle3}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8889 15.2778">
          <path d={svgPaths.p3a40ca00} fill="var(--fill-0, #FEED01)" id="Vector 3" />
        </svg>
      </div>
      <div className="col-1 h-[6.111px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-55.611px_-64.778px] mask-size-[122.222px_88px] ml-[55.61px] mt-[64.78px] relative row-1 w-[15.278px]" style={{ maskImage: `url('${imgRectangle3}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2778 6.11111">
          <path d={svgPaths.p29e14000} fill="var(--fill-0, #1100FF)" id="Vector 4" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative size-full">
      <MaskGroup />
      <div className="flex flex-col font-['Galdeano:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Holiday Homes</p>
      </div>
    </div>
  );
}