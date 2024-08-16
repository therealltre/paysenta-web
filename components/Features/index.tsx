import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Features = () => {
  return (
    <>
       <section
        id="features"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[50px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4" >
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-2xl font-bold leading-tight text-[#08ADAD] dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"> Features </h1>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Effortlessly Transfer Money
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-[#3A3A3A] dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Send, receive, withdraw, and pay bills using Paysenta.<br/> A centralized location for all your financial needs</p>
                         
              </div> 
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">               
                <Image
                  src="/images/apptransfermockup.svg"
                  alt="mockup"
                  width= {100}
                  height= {100}
                  className="w-full"
                />               
                </div>           
            </div>
          </div>
        </div>     
      
      </section>
    </>
  );
};

export default Features;
