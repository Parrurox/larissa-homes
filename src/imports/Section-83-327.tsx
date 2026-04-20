function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[151.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[72px] left-0 not-italic text-[#12161d] text-[48px] top-[0.5px] tracking-[-0.8484px] whitespace-nowrap">90%</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[151.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#61656e] text-[15px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Average Occupancy</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[102.5px] relative shrink-0 w-[151.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[133.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[72px] left-0 not-italic text-[#12161d] text-[48px] top-[0.5px] tracking-[-0.8484px] whitespace-nowrap">250+</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[133.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#61656e] text-[15px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Nights Booked</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[102.5px] relative shrink-0 w-[133.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[106.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[72px] left-0 not-italic text-[#12161d] text-[48px] top-[0.5px] tracking-[-0.8484px] whitespace-nowrap">4.8/5</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[106.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#61656e] text-[15px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Average Rating</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[102.5px] relative shrink-0 w-[106.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[138.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[72px] left-0 not-italic text-[#12161d] text-[48px] top-[0.5px] tracking-[-0.8484px] whitespace-nowrap">200+</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[138.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#61656e] text-[15px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Customers Managed</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[102.5px] relative shrink-0 w-[138.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[102.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pl-[80px] pr-[80.016px] relative size-full">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f7f6f5] content-stretch flex flex-col items-start pt-[64px] px-[28.5px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}