function Link() {
  return (
    <div className="content-stretch flex flex-col font-['Aileron:Regular',sans-serif] gap-[16px] items-start leading-[16px] not-italic relative shrink-0 text-[16px] text-white w-[144px] whitespace-nowrap" data-name="Link">
      <p className="relative shrink-0">Pricing</p>
      <p className="relative shrink-0">Investments</p>
      <p className="relative shrink-0">About Us</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Link />
    </div>
  );
}