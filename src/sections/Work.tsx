import ProjectCard from "../components/ProjectCard"

export default function Work() {
    return (
        <section id="work" className="pt-25 flex flex-col justify-center items-center">
            <h2 className="text-6xl text-blue-500 poppins-bold">Work</h2>
            <div className="flex flex-wrap justify-center items-center max-w-250">
                <ProjectCard picture="figcheck.png" name="FIGCHECK" description="Classifies a Filipino sentence as erroneous or error-free through a model trained in Python using LSTM." link="https://github.com/sntsjeyen/figcheck"/>
                <ProjectCard picture="valunest.png" name="VALUNEST" description="Predicts house prices through linear regression that uses a Kaggle dataset of Filipino house prices." link="https://github.com/sntsjeyen/valunest"/>
                <ProjectCard picture="quicker.png" name="QUICKER" description="Provides quick emergency response from nearby areas; developed with Flutter." link="https://github.com/sntsjeyen/quicker"/>
            </div>
        </section>
    )
}