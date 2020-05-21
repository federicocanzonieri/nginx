
//tutti i terminali che registro
var cmd_input=[];

var cmd_index=0;
$(".addTerminal").on("dblclick",(response)=>{
    let new_cmd_index=cmd_index;
    console.log("okkk");
    let termi=$("<div id='terminal-"+ new_cmd_index+ "'></div>").addClass("terminal");
    let corpus=$("<div class='arrow white-txt'>🔜</div><div class='icone-tags icone-tags-"+new_cmd_index +" min'>\
        <div class='icona red' id='close-"+ new_cmd_index +"'></div><div class='icona  yellow' id='resize-"+new_cmd_index +"'></div><div class='icona green ' id='open-"+new_cmd_index+"'></div><div class='icona purple mr-15' id='arrow-down-"+new_cmd_index+"'></div></div>");
    let bash=$("<div class='bash bash-"+ new_cmd_index+" grey min'><div class='command-line-interface cli-"+new_cmd_index +"'>\
        <span class='hostname'>federico@federico-X540LJ</span><span class='path'>:/</span>\
        <input type='text' class='cmd' id='cmd-"+new_cmd_index +"' name='"+new_cmd_index +"' >\
        </div></div>");
    termi.append(corpus);
    termi.append(bash);

    $("body").append(termi);
    $(".terminal").draggable();
    $( "#terminal-"+new_cmd_index ).resizable();
    $( "#terminal-"+new_cmd_index ).on("click",(response)=>{
        $( ".terminal" ).removeClass("focused");
        $( "#terminal-"+new_cmd_index ).addClass("focused");
    
    });
    addTermi(new_cmd_index);
    cmd_index++;
});





//REGISTRO UN NUOVO TERMINALE
var addTermi=(index)=>{
    cmd_input.push(document.getElementById("cmd-"+index));
    cmd_input[index].addEventListener("keydown",(response)=>{
        let index=response.target.name;
        if(response.key==KEYBOARD_CODE.ENTER){
            Shell.dispatchCommand(response.target.value,index);
        }
        else if(response.key==KEYBOARD_CODE.ARROW_UP){
            let prova=history_action.history_command[history_action.history_command.length-index_cursor];
            index_cursor++;
            response.target.value=prova!==undefined? prova:'' ;
        }

    });
    
    registerIcone(index);

}

//INDICE HISTORY ARRAY
var index_cursor=1;


//parametrizzare terminal e bash alla fine
var registerIcone=(index)=>{

        $("#close-"+index).on("click",(response)=>{
            $("#terminal-"+index).remove();
            //$(".bash-"+index).addClass("close");
        });

        $("#arrow-down-"+index).on("click",(response)=>{
            //$("#terminal-"+index).remove();
            $(".bash-"+index).addClass("close");
        });


        $("#resize-"+index).on("click",(response)=>{
            //console.log("resize");
            if($("#terminal-"+index).hasClass("full-screen")){
                $(".icone-tags-"+index , ".bash-"+index).addClass("min");
                $("#terminal-"+index).removeClass("full-screen");
            }
            else {
                $(".icone-tags-"+index, ".bash-"+index).removeClass("min");
                $("#terminal-"+index).addClass("full-screen");
            }
        });

        $("#open-"+index).on("click",(response)=>{
            if($(".bash-"+index).hasClass("close"))$(".bash-"+index).removeClass("close");
        });
}
var echo_action=(input,index)=>{
    let response=$("<div></div>").addClass("response");
    response.html(input);
    $(".cli-"+index).has("#cmd-"+index).append(response);
}

var ls_action=(null_input,index)=>{
    let response=$("<div></div>").addClass("response");
    let html_fs="<ul>";
    for(let file of Shell.filesystem.current_system){
        html_fs+="<li>"+ file.nome_file+"</li>";
    }
    html_fs+="</ul>";
    response.html(html_fs);
    $(".cli-"+index).has("#cmd-"+index).append(response);

}

var clear_action = (null_input,index)=>{
    $(".bash-"+index).html(" ");
}

var help_action =(null_input,index)=>{
    let response=$("<div></div>").addClass("response");
    var html_res="<ul>";
    for(command of Shell.commands){
        html_res+="<li>"+ command.name+" \
                  </li>";
     } 
     html_res+="</ul>";
     response.html(html_res);
     $(".cli-"+index).has("#cmd-"+index).append(response);

}

var pokedex_action = (null_input,index)=>{

    let response=$("<div class='response'></div>");
    let url="https://pokeapi.co/api/v2/pokemon/";

    
    for(let i=1;i<9;i++){
        if(i % 3==1)var new_row= $("<div class='row'></div>");

        let new_box =$("<div class='box'></div>");
        let new_nome=$("<div class='name'></div>");
        response.append(new_row.append(new_box));

        $.get(url+i,(response)=>{
            var front_shiny_url=response.sprites.front_shiny;
            var html_img="<img  class='img-pkmn' src="+front_shiny_url+ ">\
                          <div class='name'>"+ response.species.name+ "</div> ";

            var loader=$("<div class='loader'></div>");
            new_box.append(loader);
            
            console.log(response);
            let moves=response.moves;
            let url_info=response.species.url;

            new_box.on("click",(response)=>{
                console.log(response);
                create_modal(html_img,moves,url_info);
                $("#close-modal").on("click",(response)=>{
                        $(".modal").remove();
                });                        
            });
            
            new_box.ready((response)=>{
                setTimeout((response)=>{
                    new_box.removeClass("loader");
                    new_box.html(html_img);
                },1000);
                
            });

        });
        $(".cli-"+index).has("#cmd-"+index).append(response);
       
    }

};
var history_action = {
    history_command:[],
    history_action : (null_input,index) =>{
        let response=$("<div></div>").addClass("response");
        var html_res="<ul>";
        for(command of history_action.history_command){
            html_res+="<li>"+ command+"</li>";
        } 
        html_res+="<li>history</li></ul>";
        response.html(html_res);
        $(".cli-"+index).has("#cmd-"+index).append(response);
        
    }
};


var no_handler_action=(input,index)=>{
     let response=$("<div></div>").addClass("response");
     response.html("Mmmm il tuo comando non esiste, controlla help Grazie e buon lavoro  "+input);
     $(".cli-"+index).has("#cmd-"+index).append(response);
          
}

var php_action=(input,index)=>{
    console.log(input);
    var primo=input[0];
    var secondo=input[1];
    let responses=$("<div></div>").addClass("response");
    $(".cli-"+index).has("#cmd-"+index).append(responses);
    $.get("primo.php",{ primo: primo, secondo: secondo },(response)=>{
        responses.html("Il tuo input è stato mandato al server con questo risultato  "+response);
    
    });


}

var mkdir_action=(input,index)=>{

    for(let file of Shell.filesystem.current_system){
        console.log(file.nome_file);
        if(file.nome_file==input){
            let responses=$("<div>Errore gia esiste</div>").addClass("response");
            $(".cli-"+index).has("#cmd-"+index).append(response);
            return;
            //ERRORE NON PUOI CREARE UN ALTRA CARTELLA UGUALE return
        } 
    } 
    
    Shell.filesystem.addDir(new Directory(input[0],Shell.filesystem.current_system,Shell.filesystem.current_dir));
    let responses=$("<div>OK Creata con successo</div>").addClass("response");
    $(".cli-"+index).has("#cmd-"+index).append(responses);
            



}


var cd_action=(input,index)=>{

    if (input[0]==".."){
        console.log(input);
        
        console.log(Shell.filesystem.current_dir);
        
        if(Shell.filesystem.current_dir!=null){

            //str.lastIndexOf("planet");
            let index_of=Shell.filesystem.current_path.lastIndexOf("/");
            Shell.filesystem.current_path=Shell.filesystem.current_path.slice(0,index_of);
            
            Shell.filesystem.current_system=Shell.filesystem.current_dir.getParent();        
            //Shell.filesystem.current_path+="/previous"+Shell.filesystem.current_dir.nome_file;
            Shell.filesystem.current_dir=Shell.filesystem.current_dir.getPrevDir();
            
            let responses=$("<div>Attraversato Successo</div>").addClass("response");
            $(".cli-"+index).has("#cmd-"+index).append(responses);
            return;
        }
    }
    for(let file of Shell.filesystem.current_system){
        if(file.nome_file==input){
            if(file.getFiles){
                Shell.filesystem.current_path+="/"+file.nome_file;
                Shell.filesystem.current_system=file.getFiles();
                Shell.filesystem.current_dir=file;
                let responses=$("<div>Attraversato Successo</div>").addClass("response");
                $(".cli-"+index).has("#cmd-"+index).append(responses);
        
                return ;
            } 
            else {
                let responses=$("<div>Non è una directory animale</div>").addClass("response");
                $(".cli-"+index).has("#cmd-"+index).append(responses);
                return;
            }
        }
    } 
    let responses=$("<div>Errore non esiste </div>").addClass("response");
    $(".cli-"+index).has("#cmd-"+index).append(responses);
            

}

var tree_action=(input,index)=>{
    //#delimiter
    Shell.filesystem.showFile("####",index);

}

var touch_action=(input,index)=>{
    //NEL FILE NON CI POSSO ENTRARE A PRESCIDENDERE posso toglierlo
    Shell.filesystem.addFile(new File(input[0],Shell.filesystem.current_system));
    let response=$("<div></div>").addClass("response");
    response.html("Success");
    $(".cli-"+index).has("#cmd-"+index).append(response);
}
var Shell={
            
    //LISTA COMANDI POSSIBILI
    commands:[{ "name":"echo", "action" : echo_action},
              { "name":"ls", "action" : ls_action},
              { "name":"clear", "action" : clear_action},
              { "name":"help", "action" : help_action},
              { "name":"history", "action" : history_action.history_action},
              { "name":"pokedex", "action" : pokedex_action},
              { "name":"php", "action" : php_action},
              { "name":"mkdir", "action" : mkdir_action},
              { "name":"cd", "action" : cd_action},
              { "name":"tree", "action" : tree_action},
              { "name":"touch", "action" : touch_action},
            
     
        ],
    
    dispatchCommand : (command_input,index)=>{
        
        for(command of Shell.commands){
            

            //PARAMETRI E TESTO ALTRO?
            let command_only = command_input.split(" ")[0];
            let arr=command_input.split(" ");
            arr.shift();
            let text_only = arr;
            
            if(command.name === command_only ){
                
                command.action(text_only,index);  // do the command
                
                //create a new line
                create_new_row(cmd_input,command_only,index);
                return;
            }
            
        }
        no_handler_action(command_input,index); // handler no action
        create_new_row(cmd_input,command_input,index);
                
        
    },
    filesystem:new FileSystem("MioFS"),
    

};



var create_new_row = (cmd_input,command_push,index)=>{
    var bash=$(".bash-"+index);
    bash.append($("<div></div>").addClass("command-line-interface").addClass("cli-"+index)
        .append($(" <span class='hostname'>federico@federico-X540LJ</span><span class='path'>"+ Shell.filesystem.current_path +"</span> "))
        .append(cmd_input[index]));
    
    history_action.history_command.push(command_push); // add to history array
    cmd_input[index].scrollIntoView(); //scroll view to the last 
    index_cursor=1;
   
}


//CODICI KEYBOARD NOTI
var KEYBOARD_CODE = {
    ENTER : "Enter",
    ARROW_UP : "ArrowUp"
};

