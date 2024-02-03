"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  fname: z.string().min(2, {
    message: "First name must be at least 2 characters long",
  }).max(100, {
    message: "First name must be less than 100 characters long",
  }),
  lname: z.string().min(2, {
    message: "Last name must be at least 2 characters long",
  }).max(100, {
    message: "Last name must be less than 100 characters long",
  }),
})

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3  px-6 py-12 space-y-8 text-foreground">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" id="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="password" id="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="first name" id="fname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="last name" id="lname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <Button variant="outline" type="submit" className="w-full font-bold uppercase hover:text-muted-foreground">Register</Button>
        </form>
      </Form>
    </div>
  )
}