import Container from "./Ui/Container";
import bannerImg from "../images/banner.png"
import myPDF from "../data/full-stack-developer_resume_of_sultan_mahmud.pdf"

const Banner = () => {
    return (
        <div className="bg-[#212428] text-[#c4cfde] pt-28">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex justify-center items-center order-5 lg:order-1">
                        <div>
                            {/* <h1 className="uppercase font-medium text-base mb-6">welcome to my world</h1> */}
                            <h1 className="text-white text-4xl mb-3 font-medium">Hi,I'm</h1>
                            <h6 className="text-4xl text-white font-semibold">
                                <span className="text-5xl lg:text-8xl font-serif text-[#ff014f]">S</span>ultan{" "}
                                <span className="text-5xl lg:text-8xl font-serif text-[#ff014f]">M</span>ahmud
                                
                            </h6>
                            <div className="text-white">
                                <h1 className="text-lg mb-5">A <span className="text-[#ff014f]">Creative Web Developer</span> From Bangladesh</h1>
                            </div>
                            <p>I'm a creative web developer based in Bangladesh,and I'm very passionate and dedicated to my work.</p>
                            <div className="pt-6">
                                <a
                                href={myPDF}
                                download="My_File.pdf"
                                className="bg-[#ff014f] text-white px-3 py-2 rounded-lg font-semibold"
                                >DOWNLOAD RESUME</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center order-2">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;