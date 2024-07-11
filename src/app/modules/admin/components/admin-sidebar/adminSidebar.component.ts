import { Component } from "@angular/core";

@Component({
    selector : "admin-sidebar-component",
    templateUrl : "./adminSidebar.component.html"
}) 
export class AdminSidebarComponent {
  
    sidebarList: sidebarItem[] = [
        {
            listName :  "Admins",
            icon : "fa-solid fa-user"
        },
        {
            listName :  "Batches",
            icon : "fa-solid fa-clipboard"
        },
        {
            listName :  "Courses",
            icon : "fa-solid fa-graduation-cap"
        },
        {
            listName :  "Students",
            icon : "fa-solid fa-person"
        },
        {
            listName :  "Requests",
            icon : "fa-solid fa-bell"
        },
    ]
    showMenu: boolean = false
}

interface sidebarItem {
    listName : string,
    icon : string
}