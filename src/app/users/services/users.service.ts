import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { FilterEnum } from "../types/filter.enum";

@Injectable()
export class UsersService {
    users$ = new BehaviorSubject<UserInterface[]>([])
    filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

    addUser(name: string, age: number, email: string): void {
        const newUser: UserInterface = {
            id: Math.random().toString(12),
            name,
            age,
            email
        }
        const updatedUsers = [...this.users$.getValue(), newUser]
        this.users$.next(updatedUsers)
    }

    changeFilter(filterName: FilterEnum): void {
        this.filter$.next(filterName)
    }

    removeUser(id: string):void {
        const updateUsers = this.users$.getValue().filter(user => user.id !== id)
        this.users$.next(updateUsers)
    }
}
