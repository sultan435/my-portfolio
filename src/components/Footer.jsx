import { BsFacebook, BsLinkedin } from "react-icons/bs";
import Container from "./Ui/Container";
const Footer = () => {
    return (
        <div className="bg-[#212428] shadow-xl border-t text-[#c4cfde]">
            <Container>
                <footer className=" flex justify-between items-center text-neutral-content py-8">
                    <div className="">
                        <p className="text-white">
                            Copyright © 2022 - All right reserved
                        </p>
                    </div>
                    <div className=" flex justify-center items-center gap-2 md:gap-6">
                        <a href="" target="_blank">
                            <img
                                className="w-[24px] h-[24px]"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
                                alt=""
                            />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100090719697625" target="_blank">
                            <BsFacebook className="w-[24px] text-blue-500 bg-white rounded-full  h-[24px]" />
                        </a>
                        <a href="https://www.linkedin.com/in/sultan-mahmud-b885b32a3/" target="_blank">
                            <BsLinkedin className="w-[24px] text-[#0077B5]  h-[24px] bg-white" />
                        </a>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;