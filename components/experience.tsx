import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: "React.js Frontend Web Developer Intern",
    company: "JungleTech Online Pvt. Ltd.",
    period: "Dec 2023 – June 2024",
    description: [
      "Developed engaging content for social media and research articles using Figma, enhancing company visibility.",
      "Managed application maps, ensuring seamless user experiences and accurate data visualization.",
      "Contributed to Python script development and API maintenance, improving backend processes.",
      "Enhanced frontend interfaces of company applications, significantly improving user interactions.",
      "Collaborated with cross-functional teams to implement new features."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "MSTC India",
    period: "Sept 2023 – Dec 2023",
    description: [
      "Designed frontend architecture for Provident Trust Management's demo solution, improving user experience.",
      "Developed a Recruitment Portal frontend for Officer recruitment at MSTC, applying responsive design principles."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="container max-w-4xl mx-auto py-24">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="grid gap-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

