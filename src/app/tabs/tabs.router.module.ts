import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'database',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#DatabasePageModule'
          }
        ]
      },
      {
        path: 'insert',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#InsertPageModule'
          }
        ]
      },
      {
        path: 'database/:id',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#UpdatePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/database',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/database',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
