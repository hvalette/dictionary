import { Component, OnInit, Input } from '@angular/core';
import { Definition } from '../../models/definition';

@Component({
    selector: 'app-definition-card',
    templateUrl: './definition-card.component.html',
    styleUrls: ['./definition-card.component.css'],
})
export class DefinitionCardComponent implements OnInit {
    @Input() definition: Definition;

    constructor() {}

    ngOnInit(): void {}
}
