'use client';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserButton, useUser } from '@clerk/nextjs';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/ui/form';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/shadcn/ui/dialog';
import { Separator } from '@/components/shadcn/ui/separator';

/**
 * todo Make this page a server component by making form a client side component.
 * todo Style Dialog, when pressing button "Preview"
 */

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  quote: z.string().min(5, {
    message: 'Quote must be at least 5 characters.',
  }),
  creater: z.enum(['you', 'other'], {
    required_error: 'You need to select created by.',
  }),
  other: z.string(),
});

const AddPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      quote: '',
      creater: undefined,
      other: '',
    },
  });

  const useWatchCreater = useWatch({
    control: form.control,
    name: 'creater',
  });
  const useWatchAll = useWatch({
    control: form.control,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('SUBMITTED');
    console.log('form values ', values);
  };
  if (!isLoaded) {
    return <p>CLERK IS LOADING......</p>;
  }
  if (isSignedIn) {
    return (
      <div className="text-white p-0 sm:p-8">
        <UserButton afterSignOutUrl="/projects/epigram" />{' '}
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
                            <Input {...field} className="text-black" />
                          </FormControl>
                          <FormDescription>
                            This is the title of the quote.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quote"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quote</FormLabel>
                          <FormControl>
                            <Textarea
                              className="resize-none text-black"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>This is the quote.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="creater"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Created by</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="you" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  You
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="other" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Other
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormDescription>
                            Did you come up with this quote, or have you copied
                            from internet?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {useWatchCreater === 'other' && (
                      <FormField
                        control={form.control}
                        name="other"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Name of other Creater</FormLabel>
                              <FormControl>
                                <Input {...field} className="text-black" />
                              </FormControl>
                              <FormDescription>
                                Write name of other creater for quote
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    )}
                    <Separator />
                    <div className="flex gap-4 flex-wrap">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button type="button" variant="secondary">
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Preview</DialogTitle>
                            <DialogDescription>
                              Preview of Quote that will be added when pressisng
                              button &quot;Submit Quote&quot;
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-1 items-center gap-4">
                              <p>Title: {useWatchAll.title}</p>
                              <p>Quote: {useWatchAll.quote}</p>
                              <p>Created by: {useWatchAll.creater}</p>
                              <p>Name of other Creater: {useWatchAll.other}</p>
                            </div>
                            {/* <div className="grid grid-cols-4 items-center gap-4"></div> */}
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant={'destructive'}>Close</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Button type="submit" size="lg">
                        Submit Quote
                      </Button>
                    </div>
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
