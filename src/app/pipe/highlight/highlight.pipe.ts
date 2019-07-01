import { Pipe, PipeTransform } from '@angular/core';
/**
 * Inserta un span con clase search-highlight en la palabra resaltada
 * si desea cambiar este estilo utilizar "::ng-deep search-highlight"
 */
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  /**
   * Añade un span entre el texto para añadirle efectos
   * @param text Texto completo
   * @param search Texto a buscar
   */
  transform(text: string, search: string): string {
    if (search && text) {
      let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');

      return text.replace(regex, (match) => `<span class="search-highlight">${match}</span>`);
    } else {
      return text;
    }
  }
}
