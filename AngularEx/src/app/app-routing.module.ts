import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { PostComponent } from './post/post.component';
import { CounterComponent } from './counter/counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "log-in", component: LogInComponent},
  {path: "post", component: PostComponent},
  {path: "counter", component: CounterComponent},
  {path: "**", component: PageNotFoundComponent},
  {path: "", redirectTo: "log-in", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
