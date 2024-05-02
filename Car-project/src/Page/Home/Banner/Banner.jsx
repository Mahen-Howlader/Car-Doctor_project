import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
function Banner() {
  return (
    <div>
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-lg  object-cover" />
          <div className="absolute  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] flex flex-col h-full    justify-center gap-x-5 w-1/2">
        <div className="space-y-5 text-white ml-20">
        <h1 className="text-5xl font-semibold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-x-4">
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-primary">Primary</button>
            </div>
        </div>


          </div>
          <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-lg  object-cover " />
          <div className="absolute  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] flex flex-col h-full    justify-center gap-x-5 w-1/2">
        <div className="space-y-5 text-white ml-20">
        <h1 className="text-5xl font-semibold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-x-4">
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-primary">Primary</button>
            </div>
        </div>


          </div>
          <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-lg  object-cover" />
          <div className="absolute  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] flex flex-col h-full    justify-center gap-x-5 w-1/2">
        <div className="space-y-5 text-white ml-20">
        <h1 className="text-5xl font-semibold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-x-4">
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-primary">Primary</button>
            </div>
        </div>


          </div>
          <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-lg  object-cover" />
          <div className="absolute  w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] flex flex-col h-full    justify-center gap-x-5 w-1/2">
        <div className="space-y-5 text-white ml-20">
        <h1 className="text-5xl font-semibold">Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-x-4">
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-primary">Primary</button>
            </div>
        </div>


          </div>
          <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
