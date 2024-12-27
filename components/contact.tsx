"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    console.log(values)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      form.reset()
    }, 2000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white dark:from-amber-950 dark:via-orange-950 dark:to-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">Contact Me</h2>
        <motion.div 
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto glassmorphism"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="bg-transparent border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} className="bg-transparent border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" {...field} className="bg-transparent border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

