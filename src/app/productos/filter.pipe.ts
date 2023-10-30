import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filtroSeccion: string, filtroBusqueda: string): any[] {
    if (!items) {
      return [];
    }

    return items.filter(item => {
      // Filtrar por sección
      if (filtroSeccion && filtroSeccion !== 'todos' && item.seccion !== filtroSeccion) {
        return false;
      }
      
      // Filtrar por búsqueda en nombre o descripción
      if (filtroBusqueda && !item.nombre.toLowerCase().includes(filtroBusqueda) && !item.descripcion.toLowerCase().includes(filtroBusqueda)) {
        return false;
      }
      
      return true;
    });
  }
}
