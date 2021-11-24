import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { map, Observable } from "rxjs";
import { FilterEnum } from "../../types/filter.enum";

@Component( {
    selector: 'app-users-filters',
    templateUrl: './filters.component.html',
    styleUrls: [ './filters.component.css' ]
} )
export class FiltersComponent implements OnInit {
    noUsersClass$: Observable<boolean>
    filter$: Observable<FilterEnum>
    filterEnum = FilterEnum

    constructor( private usersService: UsersService ) {
        this.noUsersClass$ = this.usersService.users$.pipe( map( users => users.length === 0 ) )
        this.filter$ = this.usersService.filter$
    }

    changeFilter(event: Event, filter: FilterEnum) {
        event.preventDefault()
        this.usersService.changeFilter(filter)
    }

    ngOnInit(): void {
    }

}
