import imgImage1 from "@/assets/images/service-advisory.png";
import imgImage3 from "@/assets/images/team-collaboration.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Aileron:Regular',sans-serif] items-start left-[121px] not-italic top-[554px] w-[518px]">
      <p className="h-[66px] leading-[48px] relative shrink-0 text-[#12161d] text-[40px] w-full">Guest Relations</p>
      <p className="leading-[1.5] relative shrink-0 text-[#61656e] text-[18px] w-full">{`24/7 guest communication, seamless check-in/check-out, and immediate support to ensure 5-star reviews every time. We handle all inquiries and vetting so you don't have to.`}</p>
    </div>
  );
}

export default function Features2Section() {
  return (
    <div className="bg-white relative size-full" data-name="Features 2 Section">
      <div className="absolute h-[347px] left-[121px] rounded-[10px] top-[90px] w-[520px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[347px] left-[121px] rounded-[10px] top-[922px] w-[520px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[347px] left-[calc(50%+21px)] rounded-[10px] top-[506px] w-[520px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['Aileron:Regular',sans-serif] h-[66px] leading-[48px] left-[calc(50%+23px)] not-italic text-[#12161d] text-[40px] top-[138px] w-[518px]">Listing Management</p>
      <p className="absolute font-['Aileron:Regular',sans-serif] h-[66px] leading-[48px] left-[calc(50%+23px)] not-italic text-[#12161d] text-[40px] top-[970px] w-[518px]">Property Maintenance</p>
      <p className="absolute font-['Aileron:Regular',sans-serif] leading-[1.5] left-[calc(50%+23px)] not-italic text-[#61656e] text-[18px] top-[204px] w-[491px]">Professional photography, compelling descriptions, and continuous optimization across Airbnb, Booking.com, and VRBO. We ensure your listing ranks high and attracts quality guests consistently.</p>
      <p className="absolute font-['Aileron:Regular',sans-serif] leading-[1.5] left-[calc(50%+23px)] not-italic text-[#61656e] text-[18px] top-[1036px] w-[491px]">Hotel-quality cleaning, regular inspections, and prompt maintenance handling to keep your investment pristine. Your property is always ready for the next stay.</p>
      <Frame />
    </div>
  );
}