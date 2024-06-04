let section2_DOM = document.querySelector(".section2")

section2_DOM.innerHTML = `
<h2>Texto</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>&lt;html&gt;&lt;/html&gt;</td>
                    <td>Lenguaje de marcado de hipertexto.</td>
                </tr>
                <tr>
                    <td>&lt;head&gt;&lt;/head&gt;</td>
                    <td>Sección de encabezado del documento.</td>
                </tr>
                <tr>
                    <td>&lt;body&gt;&lt;/body&gt;</td>
                    <td>Contenido principal del documento.</td>
                </tr>
                <tr>
                    <td>&lt;p&gt;&lt;/p&gt;</td>
                    <td>Párrafo.</td>
                </tr>
                <tr>
                    <td>&lt;a href=""&gt;&lt;/a&gt;</td>
                    <td>Enlace.</td>
                </tr>
            </tbody>
        </table>
`;