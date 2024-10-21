import { Routes } from '@angular/router';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { TimeDelayGraphComponent } from './components/time-delay-graph/time-delay-graph.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';


export const routes: Routes = [
    { path: 'barGraph', component: BarGraphComponent },
    { path: 'lineGraph', component: LineGraphComponent },
    { path: 'timeDelay', component: TimeDelayGraphComponent },
];
