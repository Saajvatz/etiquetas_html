let section3_DOM = document.querySelector(".section3");

section3_DOM.innerHTML = `
<div class="title-Mynor">
        <h3 class="t-form">Formulario sobre Etiquetas HTML</h3>
    </div>

    <div class="form">
        <form action="#" method="post">
            <div class="form-group">
                <label for="nombre-etiqueta">Nombre de la Etiqueta:</label>
                <input type="text" id="nombre-etiqueta" name="nombre-etiqueta" required>
            </div>

            <div class="form-group">
                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" name="descripcion" rows="4" required></textarea>
            </div>

            <div class="form-group">
                <label for="ejemplo">Ejemplo de Uso:</label>
                <textarea id="ejemplo" name="ejemplo" rows="4" required></textarea>
            </div>

            <div class="form-group">
                <label for="atributos">Atributos Comunes:</label>
                <textarea id="atributos" name="atributos" rows="4"></textarea>
            </div>

            <div class="form-group">
                <label for="categoria">Categoría:</label>
                <select id="categoria" name="categoria">
                    <option value="estructurales">Estructurales</option>
                    <option value="formatos">Formatos</option>
                    <option value="formularios">Formularios</option>
                    <option value="multimedia">Multimedia</option>
                    <option value="enlaces">Enlaces</option>
                </select>
            </div>

            <div class="form-group">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
`;