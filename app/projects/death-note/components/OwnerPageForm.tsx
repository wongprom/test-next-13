'use client';

import { forwardRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/shadcn/ui/input-otp';
import { Input } from '@/components/shadcn/ui/input';
import { toast } from '@/components/shadcn/ui/use-toast';

const FormSchema = z.object({
  yourName: z.string().min(6, {
    message: 'Username must be at least 2 characters.',
  }),
  pin: z.string().min(4, {
    message: 'Your year of birth must be 4 characters: ex, 1999',
  }),
});

const OwnerPageForm = forwardRef((props: any, ref: any) => {
  // console.log('🚀 ~ OwnerPageForm ~ props:', props);

  // console.log('🚀 ~ OwnerPageForm ~ ref:', ref);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      yourName: '',
      pin: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Submitesd with this data: ', data);
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-red-600">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div className="relative text-red-500 font-deathNote bg-death-note-blank-old-paper h-80 w-96 bg-cover bg-center p-10 ">
      <div className="bg-death-note-blank-skrynklig bg-cover bg-center p-10 absolute top-0 left-0 right-0 bottom-0 z-10"></div>
      {props.children}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 absolute z-10"
        >
          <FormField
            control={form.control}
            name="yourName"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input
                    className="text-green-400"
                    placeholder=""
                    {...field}
                    autoFocus
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Birth</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={4}
                    render={({ slots }) => (
                      <InputOTPGroup>
                        {slots.map((slot, index) => (
                          <InputOTPSlot key={index} {...slot} />
                        ))}{' '}
                      </InputOTPGroup>
                    )}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please enter your year of birth to get more info.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Make me the new Owner</Button>
        </form>
      </Form>
    </div>
  );
});
OwnerPageForm.displayName = 'OwnerPageForm';

export default OwnerPageForm;
