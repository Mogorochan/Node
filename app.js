/* Multer agrega un bodyobjeto y un objeto fileo filesal requestobjeto. El bodyobjeto 
contiene los valores de los campos de texto del formulario, 
el objeto fileo filescontiene los archivos cargados a través del formulario.
 */
const express = require('express')
const  multer   =  require ( 'multer' ) 

const  upload  =  multer ( {  dest : 'uploads/'  } )
const app = express()

app.use(express.json()) // función que parsea la request para poder mostrar los otro datos dintintos a boolean


app.get('/', function (req, res) {
  res.send('somebody SAAAAAVE me!')
})

/*solo quiero que Multer afecte a Post, tomo la ruta donde guarda (uploads) y mando un parametro
que puede ser Single el cual sube un archivo o Array que sube una matriz de archivos*/


app.post('/imagen', upload.single('imagen'), function (req, res) {

    const body = req.body  // esta constante me permite recibir la información del postman
    const imagen = req.file

    console.log(imagen)

    res.send('somebody SAAAAAVE me 2!')
  })

  const Port = process.env.Port || 3000 // elige cuál de los dos puerto no me tira undefined

app.listen(Port)

