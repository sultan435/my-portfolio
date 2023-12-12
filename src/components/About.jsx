import sultan from '../images/sultan.jfif'
import Container from './Ui/Container';

const About = () => {
    return (
       <section id='about' className='bg-[#212428] pt-20 text-[#c4cfde]'>
         <Container>
            <div className="">
                <h1 className="text-4xl text-center font-semibold text-white">About Me</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-16'>
                    <div className=''>
                        <img className='border-4 p-1 border-[#ff014f] rounded-xl w-full h-full' src={sultan} alt="" />
                    </div>
                    <div className='md:pt-10'>
                        <h1 className='text-xl font-semibold text-[#ff014f]'>Sultan Mahmud</h1>
                        <p className='font-medium'>Web Developer</p>
                        <div className='border-2 border-[#ff014f] mt-2 mb-4'></div>
                        <p>A front-end developer with over 6 months of experience in designing and developing user interfaces, testing and debugging. Learning Something new and improving my knowledge, skills and abilities are my main focus. To work as part of a dynamic, team where there is an opportunity to make significant contribution along with developing personal skills. I always look forward to new challenges and experiences. I have ability to learn anything very quickly.</p>
                    </div>
                </div>
            </div>
        </Container>
       </section>
    );
};

export default About;