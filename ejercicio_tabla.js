const datos = [
        { id: 1, nombre: "Juan", apellido: "Pérez", email: "juan.perez@example.com", telefono: "555-123-4567", comentario: "Excelente servicio." },
        { id: 2, nombre: "Ana", apellido: "Gómez", email: "ana.gomez@example.com", telefono: "555-234-5678", comentario: "Muy satisfecha con la atención." },
        { id: 3, nombre: "Luis", apellido: "Martínez", email: "luis.martinez@example.com", telefono: "555-345-6789", comentario: "Respuesta rápida y eficiente." },
        { id: 4, nombre: "María", apellido: "Hernández", email: "maria.hernandez@example.com", telefono: "555-456-7890", comentario: "Muy amable y profesional." },
        { id: 5, nombre: "Carlos", apellido: "Rodríguez", email: "carlos.rodriguez@example.com", telefono: "555-567-8901", comentario: "Atención impecable." },
        { id: 6, nombre: "Sofía", apellido: "López", email: "sofia.lopez@example.com", telefono: "555-678-9012", comentario: "Resolvían todas mis dudas." },
        { id: 7, nombre: "Miguel", apellido: "García", email: "miguel.garcia@example.com", telefono: "555-789-0123", comentario: "Excelente calidad." },
        { id: 8, nombre: "Lucía", apellido: "Morales", email: "lucia.morales@example.com", telefono: "555-890-1234", comentario: "Volveré a utilizar sus servicios." },
        { id: 9, nombre: "Andrés", apellido: "Fernández", email: "andres.fernandez@example.com", telefono: "555-901-2345", comentario: "Muy recomendable." },
        { id: 10, nombre: "Isabel", apellido: "Jiménez", email: "isabel.jimenez@example.com", telefono: "555-012-3456", comentario: "Gran experiencia." }
];

tabla=document.querySelector("#tabla");

function crearTabla(){
    var cadena="<table>";
    cadena=cadena+"<thead>";
    cadena=cadena+"<tr>";
    cadena=cadena+"<th>ID</th>";
    cadena=cadena+"<th>Nombre</th>";
    cadena=cadena+"<th>Apellido</th>";
    cadena=cadena+"<th>Email</th>";
    cadena=cadena+"<th>Telefono</th>";
    cadena=cadena+"<th>Comentario</th>";
    cadena=cadena+"</tr>";
    cadena=cadena+"</thead>";
    cadena=cadena+"<tbody>";
    for(const dato of datos){
        cadena=cadena+"<tr>";
        cadena=cadena+"<td>"+ dato.id + "</td>";
        cadena=cadena+"<td>"+ dato.nombre + "</td>";
        cadena=cadena+"<td>"+ dato.apellido + "</td>";
        cadena=cadena+"<td>"+ dato.email + "</td>";
        cadena=cadena+"<td>"+ dato.telefono + "</td>";
        cadena=cadena+"<td>"+ dato.comentario + "</td>";
        cadena=cadena+"</tr>";
    }
    cadena=cadena+"</tbody>";
    cadena=cadena+"</table>";
    tabla.innerHTML=cadena;
}

crearTabla();

function agregarFila(){
    const id = document.getElementById("id").value;
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const telefono=document.getElementById("telefono").value;
    const comentario=document.getElementById("comentario").value;

    if(id && nombre && apellido && email && telefono && comentario){
        const body = tabla.getElementsByTagName("tbody")[0];
        const nuevaFila=body.insertRow();
        nuevaFila.innerHTML= `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>${comentario}</td>
        `;
        document.getElementById("formulario").reset();

    } else{
        alert("Datos incompletos");
    }
    
}

