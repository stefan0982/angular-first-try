import { NgModule } from "@angular/core";
import { UsersComponent } from './components/usersList/users.component';
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from './components/form/form.component';
import { UsersService } from "./services/users.service";
import { MainComponent } from './components/main/main.component';
import { CommonModule } from "@angular/common";
import { UserComponent } from './components/user/user.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    }
]

@NgModule( {
    declarations: [
        UsersComponent,
        FormComponent,
        MainComponent,
        UserComponent,
        FiltersComponent,
    ],
    imports: [ CommonModule, RouterModule.forChild( routes ), ReactiveFormsModule ],
    providers: [UsersService]
} )
export class UsersModule {

}
