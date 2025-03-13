import { User, Code, Zap } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="mb-16 pt-16">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
        <h2 className="text-4xl font-bold mb-6 flex items-center">
          <User className="mr-4" />
          About Me
        </h2>
        <p className="text-xl mb-6">
          Hello! I'm a passionate developer with experience in React, Next.js, and web development. I love creating
          user-friendly and efficient applications that make a difference.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-4" />
            Skills
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            {["React", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Node.js"].map((skill, index) => (
              <li key={index} className="flex items-center">
                <Zap className="mr-2 text-yellow-300" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

