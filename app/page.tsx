import Image from "next/image";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import NavBar from "./components/NavBar";
import { imgarray } from "./array";

export default function Home() {
  
  return (
    <div className="mt-20">
      <NavBar />
      <div className="relative z-30  h-[75vh] w-[90%] mx-auto">
        <div className="bg-['url('/heroimg.png')'] h-full w-full rounded-xl    mx-auto bg-cover bg-center flex flex-col justify-center items-center text-center" style={{
          backgroundImage: "url('/heroimg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute h-full w-full rounded-xl bg-[#3D3D3D] opacity-70"></div>
        </div>
        <div className="bottom-40 left-10 absolute flex gap-7 flex-col text-white z-40 max-w-xl">
          <div className="md:text-6xl text-4xl font-bold">Clear vision for the ones you love</div>
          <div >Because every smile, every glance, and every moment matters.</div>
          <div>
            <Button title={"Book an Appointment "} />
          </div>
        </div>
      </div>
      <div className="mt-30 mb-36">
        <div className="text-[#3D3D3D] text-center my-16 font-bold text-3xl md:text-4xl">Everything you need before your appointment</div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] mx-auto mb-16">
        {imgarray.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block rounded-lg overflow-hidden   bg-[#DCF3FF4D] transition-shadow duration-300"
          >
            <div className="relative h-48 sm:h-56 md:h-72">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
                priority={true}
              />
              <div className="bg-black opacity-20 rounded-xl h-full w-full"></div>
            </div>
            <div className="p-4 flex justify-between">
              <h3 className="text-lg text-[#3D3D3D] font-semibold">{item.title}</h3>
              <div><FaArrowRight/></div>
            </div>
          </a>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}
