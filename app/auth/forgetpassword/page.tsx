import { forgetPassword, LoginAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form/form-message";
import { SubmitButton } from "@/components/form/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Forget Password</CardTitle>
          <CardDescription>Enter email to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col mx-auto">
            <div className="flex flex-col gap-2 [&>input]:mb-3">
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="you@example.com" required />
              <SubmitButton
                formAction={forgetPassword}
                pendingText="Submitting..."
              >
                Submit
              </SubmitButton>
              <FormMessage message={searchParams} />
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
