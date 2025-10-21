import Image from "next/image";
import carwash from "../../assets/images/banner/car wash.jpg"; 

export const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        
        {/* Left Side - Car Wash Image */}
        <div className="relative lg:w-1/2">
          <Image
            src={carwash}
            alt="Car washing service"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
            priority
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 0 20 0 20 104 0.824555778 104" />
          </svg>
        </div>

        {/* Right Side - Text Section */}
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-100">
              Premium Car Care
            </p>
          </div>

          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-gray-900">
            Bring Back the Shine to Your Ride 🚘
          </h5>

          <p className="mb-5 text-gray-700">
            At <span className="font-semibold text-teal-700">AutoSpark Wash</span>, 
            we use eco-friendly products and advanced cleaning techniques to 
            give your car a spotless, showroom-ready look. From exterior 
            polishing to interior deep cleaning — we’ve got you covered!
          </p>

          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
            >
              Book a Wash
            </button>
            <a
              href="/services"
              className="inline-flex items-center font-semibold text-teal-700 transition-colors duration-200 hover:text-teal-900"
            >
              View Services
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
