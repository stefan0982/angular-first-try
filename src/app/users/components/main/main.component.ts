import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from "rxjs";
import { UserInterface } from "../../types/user.interface";
import { UsersService } from "../../services/users.service";
import { FilterEnum } from "../../types/filter.enum";

@Component( {
    selector: 'app-users-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.css' ]
} )
export class MainComponent implements OnInit {
    visibleUsers$: Observable<UserInterface[]>;
    noUserClass$: Observable<boolean>
    constructor( private usersService: UsersService ) {
        this.noUserClass$ = this.usersService.users$.pipe( map( users => users.length === 0 ) )
        this.visibleUsers$ = combineLatest(
            this.usersService.users$,
            this.usersService.filter$
        ).pipe( map( ( [ users, filter ]: [ UserInterface[], FilterEnum ] ) => {
            if ( filter === FilterEnum.adults ) {
                return users.filter( user => user.age >= 18 )
            } else if ( filter === FilterEnum.kids ) {
                return users.filter( user => user.age <= 17 )
            }
            return users;
        } ) )
    }

    ngOnInit(): void {
    }

}
