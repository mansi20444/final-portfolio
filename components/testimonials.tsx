import { Card, CardContent, CardHeader } from '@/components/ui/card'

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Upwork Client",
    content: "Mansi is a phenomenal UI developer with an eye for creating visually appealing and user-friendly designs."
  },
  {
    name: "Bharti Arya",
    role: "Manager at MSTC Ltd.",
    content: "Collaborating with Mansi was a seamless experience. Her full-stack development skills and proactive problem-solving ensured that our project was delivered on time with exceptional quality."
  },
  {
    name: "Bhaskar G.",
    role: "Tundra AI",
    content: "Mansi's knowledge of payment integration is remarkable. She implemented seamless and secure payment workflows that significantly enhanced the user experience for our platform."
  }
];


export default function Testimonials() {
  return (
    <section className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm italic">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

