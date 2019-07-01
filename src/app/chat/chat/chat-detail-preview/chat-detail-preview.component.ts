import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
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
   * Evento indicando que cierre la ventana
   */
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  /**
   * Variable en la cual mostraremos los archivos recibidos y los cargados en esta pantalla
   */
  finalFiles: FileList;

  /**
   * Varibale en la cual guardaremos la imagen seleccionada
   */
  imgUrl: any;
  /**
   * arreglo en el cual guardaremos las imagenes seleccionadas
   */
  imgUrls: any[] = [];
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
      this.previewFiles();
      this.previewFile();
    }
  }
  /**
   * Metodo el cual mostrara la imagen seleccionada o la primera por defecto
   * @param index imagen a mostrar
   */
  previewFile(imgUrl?: any) {
    if (imgUrl !== undefined) {
      this.imgUrl = imgUrl;
      return;
    }
    if (this.finalFiles) {
      if (this.finalFiles.length <= 0) {
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
        this.imgUrl = reader.result;
      };
    }
  }
  /**
   * Metodo que permitira visualizar todas las imagenes
   */
  previewFiles() {
    if (this.finalFiles) {
      if ( this.finalFiles.length === 0) {
        return;
      }
      const mimeType = this.finalFiles[0].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
      this.imgUrls = [];
      Array.from(this.finalFiles).forEach(file => {
        const readerGallery = new FileReader();
        readerGallery.onload = (e: any) => {
          this.imgUrls.push(e.target.result);
        };
        readerGallery.readAsDataURL(file);
      });
    }
  }

  /**
   * Devulve la longitud de archivos en finalFiles o cero en caso sea undefined
   */
  filesCount() {
    if (this.finalFiles === undefined) {
      return 0;
    }
    return this.finalFiles.length;
  }
  /**
   * Emite un evento para cerrar vista
   */
  closePreview() {
    this.close.emit(true);
  }

  /**
   * Agregaremos mas imagenes a las imagenes mostradas actualmente
   */
  addImage(images) {

  }
}
