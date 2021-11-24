import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {  UserInterface } from "../../types/user.interface";
import { UsersService } from "../../services/users.service";

@Component( {
    selector: 'app-users-user',
    templateUrl: './user.component.html',
    styleUrls: [ './user.component.css' ]
} )
export class UserComponent implements OnInit {
    @Input( 'user' ) userProps: UserInterface | undefined

    constructor( private usersService: UsersService ) {}

    ngOnInit(): void {
    }

    removeUser(): void {
        this.usersService.removeUser( this.userProps!.id )
    }
}
