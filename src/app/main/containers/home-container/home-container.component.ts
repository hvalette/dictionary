import { Component, OnInit } from '@angular/core';
import { DefinitionService } from '../../services/definition.service';
import { Definition } from '../../models/definition';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
    randomDefinition: Definition;

    constructor(private definitionService: DefinitionService, private router: Router) {}

    ngOnInit() {
        this.randomDefinition = this.definitionService.getRandomDefinition();
    }

    explore() {
        this.router.navigate(['definitions']);
    }
}
