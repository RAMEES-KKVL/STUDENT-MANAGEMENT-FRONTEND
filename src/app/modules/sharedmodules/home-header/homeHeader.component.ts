import { Component } from "@angular/core";

@Component({
    selector : "app-home-header",
    templateUrl : "./homeHeader.component.html"
})
export class HomeHeaderComponent {
    showMenuFlag: boolean = false



    showMenu () {
        this.showMenuFlag = !this.showMenuFlag
    }
}
