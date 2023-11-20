'use client';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/shadcn/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/ui/form';
import { Input } from '@/components/shadcn/ui/input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
});

const AddPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  if (!isLoaded) {
    return <p>CLERK IS LOADING......</p>;
  }
  if (isSignedIn) {
    return (
      <div className="text-white p-0 sm:p-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4 lg:col-span-1">
              <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
                Add Quote
              </h1>
            </div>
            <div className="col-span-4 lg:col-span-3 mt-2">
              <p>
                Enim id molestie viverra potenti accumsan netus aliquet.
                Faucibus at cras senectus donec justo pellentesque quisque.Enim
                id molestie viverra potenti accumsan netus aliquet. Faucibus at
                cras senectus donec justo pellentesque quisque.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-start-1 col-end-5 lg:col-start-2 mt-4 relative grid p-5 rounded-lg border-4 border-[#aaaaaa]">
              <div className="header px-2 bg-[#222222] absolute -top-4 left-4">
                New Quote
              </div>
              <section className="grid grid-cols-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mx-auto w-full sm:w-4/5 md:3/5 col-start-1 col-end-5 max-w-md"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Not signed in</div>;
};

export default AddPage;
