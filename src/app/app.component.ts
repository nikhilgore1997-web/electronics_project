import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,  // ✅ acts as placeholder for routed components
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {}
