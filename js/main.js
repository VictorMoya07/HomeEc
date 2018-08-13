window.onload=function(){

/*-------------------- SLIDER Utilizo plugin de Jquery BxSlider----------------------*/
	$(".galeria").bxSlider({
    	mode: 'fade',
    	captions: true,
    	slideWidth: 1200,
    	responsive:true,
      controls:false,
      auto:true
  	});


/*--------------------------MENU-------------------*/


  /*------------------Link Hombre------------------*/

    var hombre=document.getElementById("hombre");

    hombre.addEventListener("click",function(){
      var infmenu =document.getElementById("infmenu");

      if(infmenu.style.display === "block"){
        
        infmenu.style.display="none";
        hombre.style.color="#FCAF17";
      }else{
        infmenu.style.display="block";
        hombre.style.color="white";
        
      }
    });

/*---------------------------Link botines-------------------*/
   var botines = document.getElementById("botines");

    botines.addEventListener("click",function(){
        var infsubmenu =document.getElementById("infsubmenu");
          
          if(infsubmenu.style.display === "block"){
            
            infsubmenu.style.display="none";
            
          }
          else {
            infsubmenu.style.display="block";
            
          }
    });


    /*----------ASIDE FILTRO--------*/
    
    var desplegable = document.getElementById("desple-sexo");
      
      desplegable.addEventListener("click",function(){

     var contedesp = document.getElementById("cont-desple");
    if (contedesp.style.display === "none"){
      contedesp.style.display="block";
      desplegable.style.background="#FCAF17";
      desplegable.style.color="black";
     
    } else {
      contedesp.style.display="none";
      desplegable.style.background="black";
      desplegable.style.color="white";
    }
    
  });

    /*Cargando productos dinamicamente desde la variable products*/

    var products = [
  { id:"0",title: 'Botas', price: 800.44, category: 'Botines', image: 'images/botasnike.jpg', brand: 'nike' },
  { id:"1",title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'images/ojotasadidas.jpg', brand: 'adidas' },
  { id:"2",title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'images/zapatillaspuma3.jpg', brand: 'puma' },
  { id:"3",title: 'Short', price: 320.44, category: 'Vestimenta', image: 'images/shortnike.jpg', brand: 'nike' },
  { id:"4",title: 'Pantalon', price: 360.44, category: 'Natacion', image: 'images/pantalonnike.jpg', brand: 'nike' },
  { id:"5",title: 'Camiseta de futbol adidas river plate away', price: 849.00, category: 'Camisetas futbol', image: 'images/Cariver.jpg', brand: 'adidas'},
  { id:"6",title: 'Short nike squad strike lrg', price: 399.44, category: 'short', image: 'images/shortnike.jpg', brand: 'nike' },
  { id:"7",title: 'Camiseta de futbol nike boca home authentic', price: 399.00, category: 'Camisetas futbol', image: 'images/camiboca.jpg', brand: 'nike' }
   
];



products.forEach((item, index)=>{
  var produc=`
        <div class="producto" id="producto${item.id}">
      
          <img src=${item.image} alt=""class="imagen" onmouseover=hover(producto${item.id})
          onmouseout= hoverout(producto${item.id})>
          <p  class="p" id="p"></p>
          <p class="nombrepro">${item.title}
          </p>
          <p class="precio">$${item.price} </p>
          <img class="${item.brand}"src="images/sprite.png" alt="">
          <p class="categoria">${item.category}</p>
        </div>
      `;
      $(".productos").append(produc);
});

/*--------------Realizando efecto Hover-------------------*/

 function hover(id){
  
  var productoid =id;
    var precioid = productoid.getElementsByClassName("precio")[0];
    precioid.style.color="green";
    precioid.style.fontSize="17px";
 } 

function hoverout(id){
  var productoid =id;
    var precioid = productoid.getElementsByClassName("precio")[0];
    precioid.style.color="#D44700";
    precioid.style.fontSize="15px";
}

/*-------------Agregando class oferta a el elemento p ------*/

var poferta=document.getElementsByClassName("p");
var productos =document.getElementsByClassName("producto");


for(var i =0;i<productos.length;i++){

  if(i%2==1){
    var node = document.createTextNode("OFERTA");
    poferta[i].appendChild(node);
    poferta[i].classList.add("oferta");
  }
}


/*-----------------Peticion ajax----------------*/

var marcas=document.getElementById("marcas");
marcas.addEventListener("click", function(){
    var usuario;
    fetch("http://remote.fizzmod.com/ajax.php")
    .then(data=>data.text())
    .then(data=>{
     usuarios=data;

     var imagenmarca=document.getElementById("marcasimg");
     imagenmarca.style.display="none";

     var parra =document.createElement("p");
     var starwars=document.createTextNode(usuarios);
      parra.appendChild(starwars);

      marcas.appendChild(parra);

      parra.classList.add("star");
    });

});

};

/*--------------Realizando efecto Hover-------------------*/

function hover(id){
  
  var productoid =id;
    var precioid = productoid.getElementsByClassName("precio")[0];
    precioid.style.color="green";
    precioid.style.fontSize="17px";
 } 

function hoverout(id){
  var productoid =id;
    var precioid = productoid.getElementsByClassName("precio")[0];
    precioid.style.color="#D44700";
    precioid.style.fontSize="15px";
}

  







