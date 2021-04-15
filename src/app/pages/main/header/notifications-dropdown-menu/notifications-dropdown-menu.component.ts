import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { OrdenesService } from '../../../../services/ordenes.service';

@Component({
  selector: 'app-notifications-dropdown-menu',
  templateUrl: './notifications-dropdown-menu.component.html',
  styleUrls: ['./notifications-dropdown-menu.component.scss'],
})
export class NotificationsDropdownMenuComponent implements OnInit {
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdownMenu();
    }
  }

  datosMensajes: any = [];
  cantMensajes: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private oS: OrdenesService) {}

  ngOnInit() {
    this.cargarMensajes();
  }

  cargarMensajes() {
    return this.oS.getMensajes().subscribe((data: {}) => {
      this.datosMensajes = data;
      this.cantMensajes = this.datosMensajes.length;
    });
  }

  toggleDropdownMenu() {
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }
}
