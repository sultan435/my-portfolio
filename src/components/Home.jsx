import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import MySkills from "./MySkills";
import Projects from "./Projects";

const Home = () => {
    return (
        <main id="home">
            <Header/>
            <About/>
            <Projects/>
            <MySkills/>
            <Contact/>
        </main>
    );
};

export default Home;