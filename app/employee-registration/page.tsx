"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle2, ChevronLeft, Home, UserPlus, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  fatherSpouseName: z.string().min(2, {
    message: "Father/Spouse's Name must be at least 2 characters.",
  }),
  cnic: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, {
    message: "CNIC must be in formats 12345-1234567-1.",
  }),
  dob: z.string().min(1, {
    message: "Date of Birth is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobileNo: z.string().min(10, {
    message: "Mobile number must be at least 10 digits.",
  }),
});

export default function EmployeeRegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      fatherSpouseName: "",
      cnic: "",
      dob: "",
      email: "",
      mobileNo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  function handleReset() {
    form.reset();
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <Image
            src="/images/profix-logo.png"
            alt="PROFIX MARKETING"
            width={180}
            height={52}
            priority
            className="h-12 w-auto dark:invert dark:brightness-0"
          />
        </div>
        <Card className="w-full max-w-md border-teal-500/20 shadow-xl animate-in fade-in zoom-in duration-300">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Registration Successful!</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400 text-lg">
              Thank you for registration
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col gap-3 pt-6">
            <Button
              onClick={handleReset}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center gap-2 h-12 text-base"
            >
              <UserPlus className="w-5 h-5" />
              Register Another
            </Button>
            <Button
              variant="outline"
              asChild
              className="w-full border-teal-600/20 hover:bg-teal-50 dark:hover:bg-teal-900/20 h-12 text-base"
            >
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Go to Profix Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center py-12 px-4 sm:px-6">
      <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
        <Link href="/">
          <Image
            src="/images/profix-logo.png"
            alt="PROFIX MARKETING"
            width={200}
            height={58}
            priority
            className="h-14 w-auto dark:invert dark:brightness-0"
          />
        </Link>
      </div>

      <Card className="w-full max-w-2xl border-teal-500/20 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-600" />
        <CardHeader className="space-y-1 bg-white/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800 pointer-events-none">
              HR Management
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Employee Registration
          </CardTitle>
          <CardDescription className="text-slate-500 dark:text-slate-400 text-base">
            Please fill in the details below to register a new employee into the system.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherSpouseName"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Father/Spouse's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Richard Doe" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cnic"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">CNIC No.</FormLabel>
                      <FormControl>
                        <Input placeholder="12345-1234567-1" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date Of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNo"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile No.</FormLabel>
                      <FormControl>
                        <Input placeholder="+92 300 1234567" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-lg shadow-lg hover:shadow-teal-500/20 transition-all duration-300 mt-4"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Registering...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Register Employee
                  </div>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="py-6 bg-slate-50 dark:bg-slate-900/50 border-t flex items-center justify-between">
          <Link href="/" className="text-sm text-slate-500 hover:text-teal-600 flex items-center gap-1 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} PROFIX MARKETING. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

function Badge({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
