import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { DataService } from "./services/data.service";



@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private dataService: DataService) { }

    token: any;
    idUser: any;

    canActivate(): any {

        this.token = localStorage.getItem('token');
        if (this.token == 'true') {
            return true;
        } else {
            this.router.navigate(['']);
        }
        // this.idUser = this.dataService.login()

    }

    setIdUser(id: number) {
        this.idUser = id;
    }
    getIdUser() {
       return this.idUser;
    }
}