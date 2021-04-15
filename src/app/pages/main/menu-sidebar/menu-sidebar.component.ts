import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {

  dashboard: boolean = false;
  clientes: boolean = false;
  laboratoristas: boolean = false;


  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService: AppService) {}

  ngOnInit() {}

  ocultarDashboard(){
    if (this.dashboard == false)
    this.dashboard = true;
    else
    this.dashboard = false
  }

  ocultarClientes(){
    if (this.clientes == false)
    this.clientes = true;
    else
    this.clientes = false
  }

  ocultarLaboratoristas(){
    if (this.laboratoristas == false)
    this.laboratoristas = true;
    else
    this.laboratoristas = false
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }
}
