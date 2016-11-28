import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
        <TextField hint="Email" keyboardType="email"
            autocorrect="false" autocapitalizationType="none"></TextField>
        <TextField hint="Password" secure="true"></TextField>

        <Button text="Sign in" class="submit-button"></Button>
        <Button text="Sign up for Groceries" class="sign-up-button"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {}
