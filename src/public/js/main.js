const socket = io()

Notification.requestPermission().then(function(result) {
    console.log(result);
  });

function notifyMe(mensaje_nuevo) {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
        var options={
            body: mensaje_nuevo
        };
        var notification = new Notification("Nuevo mensaje!", options);
    }
  
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(mensaje_nuevo);
        }
      });
    }
  
  }

socket.on('nuevo mensaje', (data)=>{

    console.log('se ha recibido un mensaje');
    const lista_de_msg = document.getElementById('mensaje');

    const li = document.createElement('li')
    li.classList = "list-group-item table-warning ist-group-action";

    const body = document.createElement('p');
    body.appendChild(document.createTextNode(data.Body));
    
    const _id = document.createElement('span');
    _id.appendChild(document.createTextNode(data._id));

    const from = document.createElement('span');
    from.appendChild(document.createTextNode(data.From));

    const createdAt = document.createElement('span');
    createdAt.appendChild(document.createTextNode('     '+ timeago.format(data.createdAt)));

    li.appendChild(body);
    li.appendChild(_id);
    li.appendChild(from);
    li.appendChild(createdAt);
    lista_de_msg.prepend(li);
    notifyMe(data.body);
})