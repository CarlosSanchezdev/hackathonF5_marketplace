# hackathlonF5_marketplace
<h1>startUpComunity</h1>

![1e2645b96bc33f257d77cea4d99a6d2d](https://user-images.githubusercontent.com/114645883/221011831-0dff3969-b7db-4d7b-af22-2ec5194f05ed.png)

<p> Estais en frente del proyecto final de la Hackathon 2023, Estamos muy contentos de llegar hasta este punto de desarollo formativo gracias a nuestros respectivos guías. Lo sabemos, tenemos la capacidad de poder aforntar este pequeño y pero intenso reto: comunicacion constante con nuestro equipo, la organización de tareas usando srum agile, fortalecer nuestrtas nociones para refactorizar y documentar herramientas nuevas. Un reto académico que agradecemos a nuestro sponsor CaixaBank. Nuestro equipo de desarrollo esta formado por nuestra Product Owner Ainoha, Scrum Judit y, aunque en realidad todos ejercemos de desarrolladores,  nuestros developers Georgette, Carlos, Ana, Bryan, Caren y Natalia. Nuestro objetivo es crear un nuevo producto según los requerimientos de nuestro cliente. <p>
  
<h2>1. Requerimientos base del cliente para MVP:</h2>
<ul>
 <li> Crear un Marketplace </li>
<li> Crear Anuncios y publicarlos.</li>
<li> Usuario como visitante</li>
<li> Cliente que paga por anunciarse</li>
<li> Contacto entre usuario y cliente </li>
</ul>

Nosotras ofrecemos como proyecto escalable:
1. Un marquetplace en el que el objetivo sera crear una comunidad de desarolladores que quieran emprender una startup y necesiten colaboradores. 
2. La tematica de los proyectos startup seran exclusivos de tematicas especificas que creemos que podrían mejorar nuestro futuro. La ansiedad climática, el fantasma del razismo, el clasisimo y el machismo y la gran mentira de un crecimiento economico sin límite nos esta llevando a una desazón profunda, y creemos que mediante vias tecnologicas podemos ayudar a que nuestro entorno deje de ser un poco menos hostil.
3. En esta plataforma esta enfocada a perfiles tecnologicos o de desarrollo junior que quieran aportar algo valioso juntándose en esta comunidad "startupera". Podra acceder al perfil de compañeras, ver sus inquietudes y habilidades en el sector tec y, si quereis desarrollar una tematica en común dale al favoritos, ¡Es un mach!, apartir de aqui ya deberan ponerse en contacto.

![73322dd86f7b8e28e2b70142a3c954e9](https://user-images.githubusercontent.com/114645883/221011982-27967cc4-1387-4987-aad3-806f5d47c519.png)

<h2>2. User stories:</h2>
<ul>
<li>Yo como user quiero acceder a todas las vistas para poder enterarme de todo el contenido de la plataforma. </li>
<li>Yo como user quiero un diseño intuitivo y simple para poder enrutarme entre las diferentes pantallas.</li>
<li>Yo como user quiero acceder a la informacion de los anunciantes para revisar si hay algun proyecto que me gusta.</li>
<li>Yo como user quiero una lista de mis favoritos para poder ponerme en contacto si finalmente quiero participar en uno de ellos.</li>
<li>Yo como user quiero acceder a los puestos de los enunciantes para participar en la busqueda de proyectos comunes.</li>
<li>Yo como user quiero poder ser identificado igualmente como usuario-cliente para beneficiarme de la horizontalidad de la app y buscar compañeros.</li>
</ul>


## 3. Team Members

| Name | Role | 
| :--- | :---: | 
| Judit Calvet |  Scrum Master |
| Aihnoa Cala | Product Owner | 
| Carlos Sanchez  | Developer | 
| Ana Delgado | Developer |
| Georgette Palomo | Developer| 


<h2>4. Atomic Design</h2> 
<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:250px; height:400px; margin:12px" src="public/css/img/imageAtomicD.png" alt="Atomic Design"/>
</div>

<h2>5. Final Design</h2> 
<div style="heigth:auto; display:flex; flex-wrap:wrap; justify-content:center; padding:1rem">

![Mockup (1)](https://user-images.githubusercontent.com/114645883/221018815-95c1c4e6-3d78-4cf4-87dd-b1c1ed8a4a92.png)

</div>


<h2>6. Stacks</h2>
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>PHP 8.1.10</li>
<li>Laravel</li>
<li>Boostrap 5</li>
<li>DrawSQL</li>
<li>MySQL</li>
</ul>

<h2>7. Required:</h2>
<li>Composer & Laravel Installed</li>
<li>XAMPP/LAMPP Installed</li>
<li>NPM Installed</li>
<li>MySQL</li>
<li>PHP</li>
<li>PHP Artisan Serve</li>

<h2>8. How to install this project:</h2>

You will need a text editor and perform the following steps:

1. Clone the project
```bash
  git clone https://github.com/Holapueblodev/hackathlonF5_marketplace
```

2. Go to the project directory
```bash
  cd (nombre carpeta aquí)
```

3. Create a MySQL database named "marketplace"

4. Locate .env.example in the project and once there change the database name that comes by default for our database name (laravel for springfieldelementaryschool). After that, remove .example from the file name so its new name will be .env

5. Install dependencies
```bash
  npm install
```
```bash
  composer install
```

6. Activate the server and keep this terminal open
```bash
  npm run dev
```

7. Run the PHP server and keep this terminal open
```bash
  php artisan serve
```

8. Import database
```bash
  php artisan migrate:fresh --seed
```

***

 <h2>9. Tests</h2>

To run the php tests, execute the following command:
```bash
  php artisan test
```
<img width="259" alt="Screenshot test" src="public/css/img/phpTest.png">


To run the vendor tests, execute the following command:
```bash
  vendor/bin/phpunit
```
<img width="259" alt="Screenshot test" src="public/css/img/vendorTest.png">


<h2>10. Methodology:</h2>
<ul>
<li>Mob programming.</li>
<li>Pair programming.</li>
<li>Agile with SCRUM</li>
<li>TDD</li> 
