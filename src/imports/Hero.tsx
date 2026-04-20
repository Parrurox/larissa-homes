import svgPaths from "./svg-ij0xgr05cw";
import imgImageLuxuryInterior from "@/assets/images/luxury-interior-hero.png";

function ImageLuxuryInterior() {
  return (
    <div className="absolute h-[889px] left-[790px] top-0 w-[774px]" data-name="Image (Luxury Interior)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-48.73%] max-w-none top-0 w-[172.2%]" src={imgImageLuxuryInterior} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
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
      <p className="font-['Aileron:Bold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#2e5d82] text-[56px] tracking-[-1.677px] w-[min-content]">Complete Airbnb management that maximizes your earnings with style and comfort.</p>
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

function Link() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[134.07px]" data-name="Link">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#2e5d82] text-[20px] top-[-1px] tracking-[0.0508px] whitespace-nowrap">Larissa Homes</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.24%_8.06%_5.44%_1.61%]" data-name="Vector">
        <div className="absolute inset-[-4.7%_-5%_-4%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2439 27.4898">
            <path d={svgPaths.p30fd23c0} id="Vector" stroke="var(--stroke-0, #2E5D82)" strokeWidth="2.02323" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-start left-[146.07px] top-0 w-[22.398px]" data-name="Logo">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[168.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
        <Logo />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.016px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Pricing</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Investments</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.383px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">About Us</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[48px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16777200px] shrink-0 w-[133.844px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[67.5px] not-italic text-[#12161d] text-[16px] text-center top-[7.5px] tracking-[-0.3125px] whitespace-nowrap">Get started</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-[529px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[62px] px-[40px] top-0 w-[1440px]" data-name="Navigation">
      <Container1 />
      <Frame3 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#f4f7f9] relative size-full" data-name="Hero">
      <Container />
      <Navigation />
    </div>
  );
}