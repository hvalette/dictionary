import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { DefinitionsResolver } from './definitions.resolver';
import { DefinitionsContainerComponent } from './containers/definitions-container/definitions-container.component';

const routes: Routes = [
    {
        path: '',
        component: HomeContainerComponent,
        resolve: { definitions: DefinitionsResolver },
    },
    {
        path: 'definitions',
        component: DefinitionsContainerComponent,
        resolve: { definitions: DefinitionsResolver },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}
