import svgPaths from "./svg-vhr76u2f5z";
import imgHeroSection from "@/assets/images/hero-key-visual.webp";
import imgImage1 from "@/assets/images/marketing-showcase-1.webp";
import imgImage2 from "@/assets/images/marketing-showcase-2.webp";
import imgImage3 from "@/assets/images/marketing-showcase-3.webp";
import imgImage from "@/assets/images/marketing-hero-collage.webp";
import imgImage4 from "@/assets/images/marketing-showcase-4.webp";
import imgImage5 from "@/assets/images/marketing-showcase-5.webp";

function Logo() {
  return (
    <div className="col-1 h-[28px] ml-[110px] mt-0 relative row-1 w-[22.4px]" data-name="Logo">
      <div className="absolute inset-[-4.7%_-5%_-4%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.52 30.4351">
          <g id="Logo">
            <path d={svgPaths.p14ef9540} id="Vector 1" stroke="var(--stroke-0, white)" strokeWidth="2.24" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Aileron:Bold',sans-serif] leading-[26px] ml-0 mt-[2px] not-italic relative row-1 text-[18px] text-center text-white whitespace-nowrap">Larissa Homes</p>
      <Logo />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex font-['Aileron:Regular',sans-serif] gap-[24px] items-start leading-[16px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Link">
      <p className="relative shrink-0">Pricing</p>
      <p className="relative shrink-0">Investments</p>
      <p className="relative shrink-0">About Us</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center px-[18px] py-[8px] relative rounded-[25px] shrink-0">
      <p className="font-['Aileron:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#12161d] text-[16px] whitespace-nowrap">Get Estimation</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[464px]">
      <Link />
      <Frame1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between px-[40px] py-[20px] relative shrink-0 w-[1440px]" data-name="Navbar">
      <Group />
      <Frame2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center text-white w-[624px]" data-name="Content">
      <p className="font-['Aileron:Regular',sans-serif] leading-[80px] relative shrink-0 text-[72px] tracking-[-1.8px] w-[906px]">Comprehensive Airbnb management that maximizes your earnings with style and comfort.</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Make your living experience even more memorable.</p>
    </div>
  );
}

function Tittle() {
  return (
    <div className="content-stretch flex flex-col items-center py-[80px] relative shrink-0 w-full" data-name="Tittle">
      <Content />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col h-[947px] items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Hero Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
      <div className="absolute bg-gradient-to-b from-[#5383a9] h-[531px] left-0 right-0 to-[rgba(92,138,176,0)] top-0 via-[54.861%] via-[rgba(83,131,169,0.39)]" data-name="Overlay" />
      <Navbar />
      <Tittle />
      <div className="absolute bottom-0 h-[240px] left-0 right-[-0.07%]" data-name="Overlay" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.37) 19.942%, rgba(255, 255, 255, 0.78) 39.064%, rgba(255, 255, 255, 0.94) 65.278%, rgb(255, 255, 255) 88.544%)" }} />
    </div>
  );
}

function Feature() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Feature 1">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[48px] relative shrink-0 text-[#12161d] text-[36px] w-full">+100</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">Units Ready</p>
    </div>
  );
}

function Feature1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Feature 2">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[48px] relative shrink-0 text-[#12161d] text-[36px] w-full">+60K</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">Customers</p>
    </div>
  );
}

function Feature2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Feature 3">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[48px] relative shrink-0 text-[#12161d] text-[36px] w-full">+70K</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">Review</p>
    </div>
  );
}

function KeyFeature() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Key Feature">
      <Feature />
      <Feature1 />
      <Feature2 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start min-h-px min-w-px relative" data-name="Right">
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">Perumnas cluster housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.</p>
      <KeyFeature />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[80px] items-start not-italic relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[52px] relative shrink-0 text-[#12161d] text-[44px] w-[520px]">Enjoy Quality Life in Perumnas Housing</p>
      <Right />
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[80px] pt-[120px] px-[80px] relative shrink-0 w-[1440px]" data-name="Features Section">
      <Content1 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] items-start overflow-clip px-[80px] py-[40px] relative shrink-0 w-[1440px]" data-name="Gallery">
      <div className="h-[320px] relative rounded-[8px] shrink-0 w-[560px]" data-name="Image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <div className="h-[320px] relative rounded-[8px] shrink-0 w-[600px]" data-name="Image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      </div>
      <div className="h-[320px] relative rounded-[8px] shrink-0 w-[600px]" data-name="Image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Feature3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Feature 1">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[32px] relative shrink-0 text-[#12161d] text-[24px] w-full">Strategic Location</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">Cluster housing perumnas is located in an area that is easily accessible from various directions. You can reach the city center, airport, train station, bus terminal, and other important places easily and quickly.</p>
    </div>
  );
}

function Feature4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Feature 2">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[32px] relative shrink-0 text-[#12161d] text-[24px] w-full">Modern Design</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">{`Cluster housing perumnas has a modern and elegant house design. You can choose the type of house that suits your taste and needs, ranging from type 36 to type 120. `}</p>
    </div>
  );
}

function Feature5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Feature 2">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[32px] relative shrink-0 text-[#12161d] text-[24px] w-full">Guaranteed Security</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-full">
        Cluster housing perumnas has an integrated security system. Each cluster is equipped with a fence, gate, and guard post that are monitored by professional security officers. In addition, each house is
        <br aria-hidden="true" />
        also equipped with a fire alarm and CCTV.
      </p>
    </div>
  );
}

function Features2Section() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start not-italic overflow-clip pb-[120px] pl-[680px] pr-[80px] pt-[80px] relative shrink-0 w-[1440px]" data-name="Features 2 Section">
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </div>
  );
}

function Image() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image">
      <div className="col-1 h-[734px] ml-[600px] mt-0 relative rounded-[8px] row-1 w-[680px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
      <div className="col-1 h-[640px] ml-0 mt-[298px] relative rounded-[8px] row-1 w-[550px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage4} />
      </div>
      <div className="col-1 h-[309px] ml-[600px] mt-[802px] relative rounded-[8px] row-1 w-[461px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Tittle1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 not-italic top-0" data-name="Tittle">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[52px] relative shrink-0 text-[#12161d] text-[44px] w-[520px]">
        Find Your Dream
        <br aria-hidden="true" />
        Home Here
      </p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-[550px]">You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
      <Image />
      <Tittle1 />
    </div>
  );
}

function Features3Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="Features 3 Section">
      <Content2 />
    </div>
  );
}

function Tittle2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0" data-name="Tittle">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[52px] min-w-full relative shrink-0 text-[#12161d] text-[44px] w-[min-content]">Frequently Asked Questions</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#61656e] text-[18px] w-[550px]">
        If there are question you want to ask.
        <br aria-hidden="true" />
        We will answer all your question.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#12161d] text-[24px] whitespace-nowrap">What is cluster housing perumnas?</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/minus">
        <div className="absolute inset-[46.88%_17.71%]" data-name="Vector 615 (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 1.5">
            <path clipRule="evenodd" d={svgPaths.p3408a00} fill="var(--fill-0, #12161D)" fillRule="evenodd" id="Vector 615 (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#e5e5e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Container />
        <p className="font-['Inter_Display:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#61656e] text-[18px] w-full">Cluster housing perumnas is a housing concept that consists of several houses in a gated cluster. Cluster housing perumnas offers comfortable, secure, and affordable housing with various complete and modern facilities.</p>
      </div>
    </div>
  );
}

function Faq1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#e5e5e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter_Display:Medium',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#12161d] text-[24px]">Where is the location of cluster housing perumnas?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/plus">
            <div className="absolute inset-[15.63%_15.63%_15.62%_15.63%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                <path clipRule="evenodd" d={svgPaths.p2f0c7f00} fill="var(--fill-0, #12161D)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faq2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#e5e5e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter_Display:Medium',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#12161d] text-[24px]">How much are the prices and types of houses in cluster housing perumnas?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/plus">
            <div className="absolute inset-[15.63%_15.63%_15.62%_15.63%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                <path clipRule="evenodd" d={svgPaths.p2f0c7f00} fill="var(--fill-0, #12161D)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faq3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#e5e5e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter_Display:Medium',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#12161d] text-[24px]">What are the facilities provided in cluster housing perumnas?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/plus">
            <div className="absolute inset-[15.63%_15.63%_15.62%_15.63%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                <path clipRule="evenodd" d={svgPaths.p2f0c7f00} fill="var(--fill-0, #12161D)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start justify-center min-h-px min-w-px relative" data-name="Vertical container">
      <Faq />
      <Faq1 />
      <Faq2 />
      <Faq3 />
    </div>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <div className="bg-white content-stretch flex gap-[64px] items-start justify-center px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="Frequently Asked Questions">
      <Tittle2 />
      <VerticalContainer />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[136.926px]" data-name="Logo">
      <div className="absolute inset-[-4.7%_-0.93%_-4%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138.206 34.7829">
          <g id="Logo">
            <g id="Perumnas">
              <path d={svgPaths.p21104d00} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p3675a400} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p2b56b500} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p17998080} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p208cb100} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p1e164d00} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p235f500} fill="var(--fill-0, #12161D)" />
              <path d={svgPaths.p21bbc380} fill="var(--fill-0, #12161D)" />
            </g>
            <path d={svgPaths.pe4a7f0c} id="Vector 1" stroke="var(--stroke-0, #12161D)" strokeWidth="2.56" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HorizontalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pr-[32px] relative shrink-0" data-name="Horizontal container">
      <Logo1 />
      <div className="font-['Inter_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#61656e] text-[18px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">More Comfortable.</p>
        <p className="leading-[26px]">More Classy.</p>
      </div>
    </div>
  );
}

function ParagraphContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[16px] relative shrink-0 text-[#61656e] text-[16px]" data-name="Paragraph container">
      <p className="relative shrink-0">Features</p>
      <p className="relative shrink-0">Integrations</p>
      <p className="relative shrink-0">Pricing</p>
    </div>
  );
}

function VerticalContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[124px]" data-name="Vertical container">
      <p className="leading-[26px] relative shrink-0 text-[#12161d] text-[18px]">Product</p>
      <ParagraphContainer />
    </div>
  );
}

function ParagraphContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[16px] relative shrink-0 text-[#61656e] text-[16px]" data-name="Paragraph container">
      <p className="relative shrink-0">About us</p>
      <p className="relative shrink-0">Blog</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Customers</p>
      <p className="relative shrink-0">Brand</p>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[124px]" data-name="Card">
      <p className="leading-[26px] relative shrink-0 text-[#12161d] text-[18px]">Company</p>
      <ParagraphContainer1 />
    </div>
  );
}

function ParagraphContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[16px] relative shrink-0 text-[#61656e] text-[16px]" data-name="Paragraph container">
      <p className="relative shrink-0">Community</p>
      <p className="relative shrink-0">Contact</p>
      <p className="relative shrink-0">DPA</p>
      <p className="relative shrink-0">Terms of service</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[124px]" data-name="Card">
      <p className="leading-[26px] relative shrink-0 text-[#12161d] text-[18px]">Resources</p>
      <ParagraphContainer2 />
    </div>
  );
}

function VerticalContainer1() {
  return (
    <div className="content-stretch flex font-['Inter_Display:Medium',sans-serif] h-[220px] items-start justify-between not-italic relative shrink-0 w-[515px] whitespace-nowrap" data-name="Vertical container">
      <VerticalContainer2 />
      <Card />
      <Card1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <HorizontalContainer />
      <VerticalContainer1 />
    </div>
  );
}

function ParagraphContainer3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 whitespace-nowrap" data-name="Paragraph container">
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Policy service</p>
      <p className="relative shrink-0">Cookie Policy</p>
      <p className="relative shrink-0">Partners</p>
    </div>
  );
}

function HorizontalContainer2() {
  return (
    <div className="content-stretch flex font-['Inter_Display:Regular',sans-serif] items-center justify-between leading-[14px] not-italic relative shrink-0 text-[#61656e] text-[14px] w-full" data-name="Horizontal container">
      <p className="relative shrink-0 w-[745px]">© 2022 Perumnas. All rights reserved</p>
      <ParagraphContainer3 />
    </div>
  );
}

function HorizontalContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Horizontal container">
      <div className="bg-[#e5e5e6] h-px relative shrink-0 w-full" data-name="Text input">
        <div aria-hidden="true" className="absolute border border-[#e5e5e6] border-solid inset-0 pointer-events-none" />
      </div>
      <HorizontalContainer2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fafafb] content-stretch flex flex-col gap-[80px] items-start pb-[40px] pt-[80px] px-[80px] relative shrink-0 w-[1440px]" data-name="Footer">
      <Content3 />
      <HorizontalContainer1 />
    </div>
  );
}

export default function Website() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Website">
      <HeroSection />
      <FeaturesSection />
      <Gallery />
      <Features2Section />
      <Features3Section />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}