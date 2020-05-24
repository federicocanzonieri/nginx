/*<div class="movie-summary">
                        <div class="movie-play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                <g id="Group_47" data-name="Group 47" transform="translate(-90 -807)">
                                <g id="Ellipse_276" data-name="Ellipse 276" transform="translate(90 807)" fill="none" stroke="#fff" stroke-width="3">
                                    <circle cx="21" cy="21" r="21" stroke="none"/>
                                    <circle cx="21" cy="21" r="19.5" fill="none"/>
                                </g>
                                <g id="surface1" transform="translate(106.615 821.22)">
                                    <path id="Path_294" data-name="Path 294" d="M7,5V18.771l11.8-6.886Z" transform="translate(-7 -5)" fill="#fff"/>
                                </g>
                                </g>
                            </svg>  
                        </div>      
                       <div class="title-summary white-txt ">John wick parabellum</div>
                       
                       <div class="title-data white-txt">2019    2h23min</div>                  
                       <div class="title-testo white-txt">John Wick è in fuga per due ragioni: una
                            taglia di 14 milioni di dollari e per aver
                            infranto una delle regole fondamentali,
                            uccidere qualcuno all'interno dell'Hotel...      
                        </div>  
                        <div class="title-tags">
                            <button class="title-tag white-txt ">
                                Action
                            </button>  
                            <button class="title-tag white-txt ">
                                Crime
                            </button>   
                            <button class="title-tag white-txt ">
                                Thriller
                            </button>   
                        </div>      
                    </div>
    
*/
function documentReady(){ 
   var $listaUltimi=document.getElementById("last-updated");
    $listaUltimi.innerHTML="";
    
    //console.log($listaUltimi);


    var $loadMovies= document.getElementById("caricaFilm");

    $loadMovies.addEventListener("click",()=>{
        console.log("Mi hanno cliccato");
        loadMovies(3);
    } )
} 

function loadMovies(delay){
    var $listaUltimiAggiornati=document.getElementById("last-updated");
    $listaUltimiAggiornati.innerHTML="";



    var serverResponse= [
     {
        title: "John Wick 4 - Finale",
        anno: 2019,
        durata: "2h 23min",
        trama: "John wick è un maniaco criminale che soltanto perche gli hanno ammazzato il cane devasta mezza citta",
        categories:["Azione" ,"CRime" ,"Thriller"  ],
        url: "wick.png"
     } ,
     {
        title: "Avengers BEGIN GAME",
        anno: 2025,
        durata: "4h 23min",
        trama: "Steve roger is dead just like the others cane devasta mezza citta",
        categories:["Thriller"  ],
        url: "avengers.png"
     } 


    ] ;
   var php_respo=[{}];
    $.get( "/function.php", { "tipo": "retrieveAll" } )
        .done(function( data ) {
          console.log( "Data Loaded: " + JSON.parse(data) );
          console.log( JSON.parse(data) );
          console.log( JSON.parse(data)[0] );
          serverResponse.push(JSON.parse(data)[0]);
          serverResponse.push(JSON.parse(data)[1]);
          php_respo=JSON.parse(data);
          console.log( php_respo );
         
    });


    setTimeout(()=>{
    var $container = document.createElement("div");

    $container.classList.add("container");

    var $row =document.createElement("div");

    $row.classList.add("row");

    var html='<div class="container">\
                 <div class="row-title col-lg-3 active" >Ultimi Aggiornamenti</div>\
             </div>';
    for( var movie of serverResponse){
        
        
        html += '<div class="card col-lg-3">\
                    <div class="movie-summary">\
                        <div class="movie-play">\
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">\
                                <g id="Group_47" data-name="Group 47" transform="translate(-90 -807)">\
                                <g id="Ellipse_276" data-name="Ellipse 276" transform="translate(90 807)" fill="none" stroke="#fff" stroke-width="3">\
                                    <circle cx="21" cy="21" r="21" stroke="none"/>\
                                    <circle cx="21" cy="21" r="19.5" fill="none"/>\
                                </g>\
                                <g id="surface1" transform="translate(106.615 821.22)">\
                                    <path id="Path_294" data-name="Path 294" d="M7,5V18.771l11.8-6.886Z" transform="translate(-7 -5)" fill="#fff"/>\
                                </g>\
                                </g>\
                            </svg>  \
                        </div>      \
                        <div class="title-summary white-txt "> '+movie.title+ '</div>\
                        <div class="title-data white-txt" > ' +movie.anno + '</div>\
                        <div class="title-testo white-txt">'+ movie.durata +' </div>  \
                    </div>\
                    <img src=images/'+ movie.url +'>\
                </div>';

}
//console.log(html)
$row.innerHTML = html;
$container.appendChild($row);
$listaUltimiAggiornati.innerHTML="";
$listaUltimiAggiornati.appendChild($container);

},delay*1000);


}
