import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Definition } from './models/definition';
import { DefinitionService } from './services/definition.service';
import { Observable } from 'rxjs';

@Injectable()
export class DefinitionsResolver implements Resolve<Definition[]> {
    constructor(private definitionService: DefinitionService) {}

    resolve(): Observable<Definition[]> {
        return this.definitionService.fetchDefinitions();
    }
}
