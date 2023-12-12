import Container from "./Ui/Container";

const MySkills = () => {
    return (
        <section className="pt-20 bg-[#212428] text-[#c4cfde]" id="mySkills">
           <Container>
           <div className="pb-16">
                <h1 className="text-4xl text-center font-semibold text-white">My skills</h1>
            </div>
            <div className="lg:grid grid-cols-2 gap-6">
                <div className="lg:w-[80%] mx-auto lg:mx-0">
                    <p className="font-semibold mb-2">React</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-slate-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                            {" "}
                            95%
                        </div>
                    </div>
                    <p className="font-semibold mb-2">Express</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                            {" "}
                            80%
                        </div>
                    </div>
                    <p className="font-semibold mb-2">NodeJs</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-orange text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]">
                            {" "}
                            60%
                        </div>
                    </div>
                    <p className="font-semibold mb-2">MongoDB</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-emerald-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]">
                            {" "}
                            80%
                        </div>
                    </div>
                </div>
                <div className="lg:w-[80%] mx-auto">
                <p className="font-semibold mb-2">JavaScript</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[85%]">
                            {" "}
                            85%
                        </div>
                    </div>
                    <p className="font-semibold mb-2">Firebase</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-[#9c3457dd] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]">
                            {" "}
                            85%
                        </div>
                    </div>
                    <p className="font-semibold mb-2">HTML5</p>
                    <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-cyan-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                            {" "}
                            95%
                        </div>
                    </div>
                    <p className="font-semibold mb-2">CSS3</p>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 ">
                        <div className="bg-[#2c2cacdd] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]">
                            {" "}
                            100%
                        </div>
                    </div>
                </div>
            </div>
           </Container>
        </section>
    );
};

export default MySkills;