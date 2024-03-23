import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"; // Added import statement
import { zodResolver } from "@hookform/resolvers/zod";
import {Form,FormControl,FormDescription,FormField, FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation } from "@/lib/validation";
import Loader from "../../components/shared/Loader"
import { z } from "zod";
import { Link } from "react-router-dom";




const SignUp = () => {
  const isLoading = false
  const form = useForm<z.infer<typeof  SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name:"",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof SignUpValidation>) {
    //  const newUser =await creatUserAccount(Values);
  }

  return (
    <Form {...form}>
      <div className=" sm:w-420 flex-center flex-col">
        <img src="../../../public/assets/images/Artboard 1@2x.png" className="object-contain "  />
        <h2 className="h3-bold md:h2-bold pt-5  sm:py-2">create new account</h2>
        <p className=" text-light-3 small-medium md:base-regular">Enter your account details</p>
      
          <form onSubmit={form.handleSubmit(onSubmit)}  className="flex-col flex mt-4 w-full gap-2">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input  type="text" className="shad-input" {...field} />
                  </FormControl> 
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input  type="text" className="shad-input" {...field} />
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
                  <FormLabel> Email</FormLabel>
                  <FormControl>
                    <Input  type="email" className="shad-input" {...field} />
                  </FormControl> 
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input  type="Password" className="shad-input" {...field} />
                  </FormControl> 
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="shad-button_primary"> 
            {isLoading?(
              <div className="flex-center gap-2"><Loader/> Signing up...</div>
            ): "Sign UP"}
            </Button>

            <p className="text-small-regular text-light-2 text-center mt-2 ">
              Already have an account?
              <Link to="/Sign-in" className="text-primary-500 text-small-semibold ml-l"> Sign In</Link>
            </p>
          </form>

      </div>
    </Form>
  );
};

export default SignUp;
