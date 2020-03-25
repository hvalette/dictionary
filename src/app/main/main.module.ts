import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionCardComponent } from './components/definition-card/definition-card.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { DefinitionDetailContainerComponent } from './containers/definition-detail-container/definition-detail-container.component';
import { DefinitionsContainerComponent } from './containers/definitions-container/definitions-container.component';
import { MainRoutingModule } from './main-routing.module';
import { DefinitionService } from './services/definition.service';
import { DefinitionsResolver } from './definitions.resolver';

@NgModule({
    declarations: [
        DefinitionCardComponent,
        HomeContainerComponent,
        DefinitionDetailContainerComponent,
        DefinitionsContainerComponent,
    ],
    imports: [CommonModule, MainRoutingModule],
    providers: [DefinitionService, DefinitionsResolver],
})
export class MainModule {}
