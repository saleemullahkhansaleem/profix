"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, ChevronLeft, Home, UserPlus, Sparkles, Upload, User, MapPin, Calendar, Mail, Phone, Hash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  city: z.string().min(1, {
    message: "City is required.",
  }),
  profileImage: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function RegisteredEmployeeCard({ data, onReset }: { data: FormValues; onReset: () => void }) {
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
      <Card className="w-full max-w-lg border-teal-500/20 shadow-xl animate-in fade-in zoom-in duration-300 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-600" />
        <CardHeader className="text-center pb-6 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex justify-center mb-4">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Registration Successful!</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Employee has been successfully registered in the system.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src={data.profileImage} alt={data.name} className="object-cover" />
              <AvatarFallback className="bg-teal-100 text-teal-700 text-2xl font-bold">
                {data.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{data.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{data.city}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                <User className="w-3 h-3" /> Father/Spouse
              </p>
              <p className="font-medium">{data.fatherSpouseName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                <Hash className="w-3 h-3" /> CNIC
              </p>
              <p className="font-medium font-mono">{data.cnic}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Date of Birth
              </p>
              <p className="font-medium">{data.dob}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                <Phone className="w-3 h-3" /> Mobile
              </p>
              <p className="font-medium">{data.mobileNo}</p>
            </div>
            <div className="col-span-2 space-y-1 border-t pt-2 mt-2 border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                <Mail className="w-3 h-3" /> Email
              </p>
              <p className="font-medium break-all">{data.email}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 pt-2 bg-slate-50/50 dark:bg-slate-900/50">
          <Button
            onClick={onReset}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center gap-2 h-11"
          >
            <UserPlus className="w-4 h-4" />
            Register Another
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full border-teal-600/20 hover:bg-teal-50 dark:hover:bg-teal-900/20 h-11"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              Go to Profix Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function EmployeeRegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      fatherSpouseName: "",
      cnic: "",
      dob: "",
      email: "",
      mobileNo: "",
      city: "",
      profileImage: "",
    },
  });

  const formatCNIC = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, "");

    // Format as 12345-1234567-1
    if (digits.length <= 5) return digits;
    if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
  };

  const handleCNICChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNIC(e.target.value);
    form.setValue("cnic", formatted, { shouldValidate: true });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue("profileImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  function onSubmit(values: FormValues) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setFormData(values);
      setIsSubmitted(true);
    }, 1000);
  }

  function handleReset() {
    form.reset();
    setIsSubmitted(false);
    setFormData(null);
  }

  if (isSubmitted && formData) {
    return <RegisteredEmployeeCard data={formData} onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center py-12 px-4 sm:px-6 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

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

      <Card className="w-full max-w-3xl border-teal-500/20 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* 1. Name */}
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

                {/* 2. Father/Spouse Name */}
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

                {/* 3. CNIC */}
                <FormField
                  control={form.control}
                  name="cnic"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">CNIC No.</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="12345-1234567-1"
                          className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500 font-mono"
                          {...field}
                          onChange={(e) => {
                            handleCNICChange(e);
                            field.onChange(e);
                          }}
                          value={field.value}
                          maxLength={15}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* 4. DOB */}
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

                {/* 5. Email */}
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

                {/* 6. Mobile No */}
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

                {/* 7. City */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">City</FormLabel>
                      <FormControl>
                        <Input placeholder="Karachi" className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* 8. Profile Image */}
                <FormField
                  control={form.control}
                  name="profileImage"
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Profile Image</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16 border bg-slate-100">
                            <AvatarImage src={value} className="object-cover" />
                            <AvatarFallback>
                              <User className="w-8 h-8 text-slate-400" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Input
                              {...field}
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              className="h-11 bg-slate-50/50 dark:bg-slate-800/50 focus-visible:ring-teal-500 pt-2 file:text-teal-600 file:font-medium file:bg-teal-50 file:px-2 file:py-1 file:rounded-md file:border-0 hover:file:bg-teal-100 cursor-pointer"
                              onChange={(e) => {
                                handleImageUpload(e);
                                onChange(e);
                              }}
                              value={undefined} // Controlled component needing undefined for file input
                            />
                            <p className="text-[10px] text-muted-foreground mt-1">
                              Max 5MB. Supported: JPG, PNG, WEBP
                            </p>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

              </div>

              <Separator className="my-6 bg-slate-200 dark:bg-slate-800" />

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-lg shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
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

function Separator({ className }: { className?: string }) {
  return <div className={`h-px w-full ${className}`} />;
}
