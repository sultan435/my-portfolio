import Container from "./Ui/Container";

const Contact = () => {
    return (
        <section id="contact" className="bg-[#212428]  pt-20 pb-16 text-[#c4cfde]">
            <Container>
                <div >
                    <h1 className="text-4xl text-center font-semibold text-white pb-16">Contact</h1>
                    <div className="lg:grid grid-cols-2">
                        <div className="">
                            <form className="flex flex-col p-10 shadow-2xl">
                            <h1 className="text-3xl mb-4 text-white font-medium">Send Me a Message</h1>
                                <label htmlFor="">
                                    <input type="text" className="border-b w-full py-3 bg-[#212428] pl-3" name="name" placeholder="Name" id="" />
                                </label>
                                <label htmlFor="">
                                    <input type="email" className="border-b w-full py-3 bg-[#212428] pl-3" name="email" placeholder="Email" id="" />
                                </label>
                                <label htmlFor="">
                                    <input type="text" className="border-b w-full py-3 bg-[#212428] pl-3" name="subject" placeholder="Subject" id="" />
                                </label>
                                <textarea name="" id="" className="border-b w-full py-3 bg-[#212428] pl-3" placeholder="Message" cols="30" rows="3"></textarea>
                                <div>
                                    <input type="submit" className="bg-[#ff014f] text-white px-3 py-2 rounded-lg font-semibold mt-5" value="Send" />
                                </div>
                            </form>
                        </div>
                        <div className="text-white flex flex-col justify-center px-5 mt-10 lg:mt-0">
                            <h1 className="font-medium text-3xl text-white">
                                Contact Me
                            </h1>
                            <div className="border w-44 border-[#ff014f] mt-2 mb-4"></div>
                            <p className="text-white mb-9 font-semibold font-sans">
                                I always open for any suggestion or just to have a chat
                            </p>
                            <div className="text-[#c4cfde]">
                                <div className="flex items-center mb-12">
                                    {/* <LocationMarkerIcon className="h-6 w-6 mr-5" /> */}
                                    <p className="text-sm">
                                        <span className="font-bold font-sans">Address: </span>Muktagacha Mymensing
                                        Road,Jamalpur 2000
                                    </p>
                                </div>
                                <div className="flex items-center mb-12">
                                    {/* <PhoneIcon className="h-6 w-6 mr-5" /> */}
                                    <p className="text-sm">
                                        <span className="font-bold font-sans">Phone: </span>+8801833225351
                                    </p>
                                </div>
                                <div className="flex items-center mb-12">
                                    {/* <MailIcon className="h-6 w-6 mr-5" /> */}
                                    <p className="text-sm">
                                        <span className="font-bold font-sans">Email: </span>
                                        sultanmahmud5998@gmail.com
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    {/* <GlobeAltIcon className="h-6 w-6 mr-5" /> */}
                                    <p className="text-sm">
                                        <span className="font-bold font-sans">Website: </span>https://my-portfolio-sultan435.vercel.app/
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;