class Inventario {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    if (this.buscar(producto.codigo)) return false;
    this.productos.push(producto);
    return true;
  }

  buscar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        return this.productos[i];
      }
    }
    return null;
  }

  eliminar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        return this.productos.splice(i, 1)[0];
      }
    }
    return null;
  }

  listar() {
    if (this.productos.length === 0) return "<p>El inventario está vacío.</p>";
    let html = "";
    for (let i = 0; i < this.productos.length; i++) {
      html += this.productos[i].infoHtml();
    }
    return html;
  }

  listarInverso() {
    if (this.productos.length === 0) return "<p>El inventario está vacío.</p>";
    let html = "";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      html += this.productos[i].infoHtml();
    }
    return html;
  }
}