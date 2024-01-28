import SocialIcons from "./social-icons"

const About = () => {
    return (
        <div id='#contact' className="w-full h-[50vh] bg-muted flex items-center justify-between">
            <div className="flex flex-col w-full px-5" >
                <h1 className="text-4xl font-bold">Any Type Of Query & Discussion</h1>
                <p className="text-muted-foreground mt-5 text-2xl">
                    Open to Freelance/Internship Opportunities
                </p>
                <p className="text-primary mt-3 text-lg">
                    Let&apos;s talk about everything!
                </p>
                <SocialIcons />
            </div>
        </div>
    )
}

export default About