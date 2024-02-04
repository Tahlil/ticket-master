"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

import Popup from '../../components/ui/PopupProps';
import '../../components/styles/popup.css';

const formSchema = z.object({
  eventName: z.string().min(2, {
    message: "Event name must be at least 2 characters long",
  }).max(100, {
    message: "Event name must be less than 100 characters long",
  }),
  eventDate: z.date(),
  eventLocation: z.string().min(2, {
    message: "First name must be at least 2 characters long",
  }).max(100, {
    message: "First name must be less than 100 characters long",
  }),
})

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })


  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    router.push('/'); // Use router to navigate back to the home page
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  // Initialize useRouter hook
  const router = useRouter();

  // Use useEffect to ensure router is initialized before accessing it
  useEffect(() => {
    if (!router) return;
  }, [router]);


  return (
    <div>
                    <Navbar />

    <div className='h-screen flex items-center justify-center'>

      <div className="w-full md:w-1/2 lg:w-1/3  px-6 py-12 space-y-8 text-foreground">
        <p className='text-2xl uppercase'>Create a new event</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Event Name" id="eventName" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name="eventLocation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Event Location" id="eventLocation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name="eventDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel htmlFor="eventDate" className='text-muted-foreground'>Event Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-foreground hover:text-muted-foreground font-medium",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="outline" type="submit" className="w-full font-semibold uppercase hover:text-muted-foreground">Create Event</Button>
          </form>
        </Form>
        {showConfirmation && (
        <Popup
          message={`Are you sure you want to register the event?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      </div>
    </div>
    </div>
  )
}