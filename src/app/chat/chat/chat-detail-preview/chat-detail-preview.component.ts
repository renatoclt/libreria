import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
/**
 * Componente en el cual podremos visualizar una imagen
 */
@Component({
  selector: 'ngx-utilitario-chat-detail-preview',
  templateUrl: './chat-detail-preview.component.html',
  styleUrls: ['./chat-detail-preview.component.scss']
})
export class ChatDetailPreviewComponent implements OnChanges {

  /**
   * Variable en la cual se guardara el titulo de la vista previa
   */
  @Input() title = 'Vista Previa';
  /**
   * Variable en la cual se guarda los archivos enviados desde otro componente
   */
  @Input() files: FileList;
  /**
   * Variable en la cual mostraremos los archivos recibidos y los cargados en esta pantalla
   */
  finalFiles: FileList;

  /**
   * Varibale en la cual guardaremos la imagen seleccionada
   */
  imgUrl: any;
  /**
   * @ignore
   */
  constructor() { }

  /**
   * 1.- si cambian los archivos mostrar el primer archivo
   * @param changes Si cambia files
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.files) {
      this.finalFiles = changes.files.currentValue;
      this.preview();
    }
  }
  /**
   * Metodo el cual mostrara la imagen seleccionada
   */
  preview() {
    if (this.finalFiles) {
      if (this.finalFiles.length === 0) {
        return;
      }
      const mimeType = this.finalFiles[0].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
      const reader = new FileReader();
      // this.imagePath = this.finalFiles;
      reader.readAsDataURL(this.finalFiles[0]);
      reader.onload = () => {
        console.log('ingrese');
        this.imgUrl = reader.result;
      }
    }
  }

}
