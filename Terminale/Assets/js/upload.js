var ls_php =() => $.get("php_ls.php",(response)=>{
    console.log("ok php_ls",response);
    json_response=JSON.parse(response);
    let html_table="<tr class='file-manager-bar'><th >Nome</th><th>Dimensione</th><th>Timestamp</th><th>Elimina</th></tr>";
    for(val of json_response){
        if(val=="." || val=="..")continue;
        html_table+="<tr><td>"+ val+ "</td><td></td><td></td><td><div class='delete-item'>+</div></td></tr>";
    }
    $(".file-manager").html(html_table);
    $(".delete-item").click((event)=>{
        //richiesta php delete item
        console.log(event.target.parentElement.parentElement.firstChild.innerHTML);
        event.target.parentElement.parentElement.remove();
        //console.log(this);
        let datal=event.target.parentElement.parentElement.firstChild.innerHTML;
        console.log(datal);
        $.ajax({ 
            url:'php_delete_file.php',
            method: "POST",
            data: {"file": datal}, 
            
            success: function(data) {
                    console.log("SUCCESS",data);
                    ls_php();
                },
            error: function(data) {
                    console.log("ERROR",data);
                }
            });
        });
    
});




$(".application").draggable(); //app desktop draggable


function uploadFile(e){

    e.preventDefault();
    let new_form=new FormData(document.getElementById("myform"));
    new_form.append("nome_file",$('#file')[0].files[0]);
    console.log(new_form.get("nome_file"));
    $.ajax({ 
        url:'file-upload.php',
        method: "POST",
        data: new_form, 
        contentType: false,
        processData: false,
        xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt){
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        $("#bar-up").css("width",percentComplete*100+"%");
                        $(".text-bar").text(parseInt(percentComplete*100)+"%");
                        //console.log(percentComplete*100);
                    }
                }, false);
                return xhr;
        },
        success: function(data) {
                console.log("SUCCESS",data);
                ls_php();
            },
        error: function(data) {
                console.log("ERROR",data);
            }
        });

    }


$(".addUploadFile").on("dblclick",(response)=>{
    var upload_index=0
    console.log("ooooo");
    let html= "<div class='upload-file-form border' id='file-manager-"+upload_index +"'>\
        <div class='icone-tags icone-tags-up-"+upload_index +" min'>\
        <div class='icona red' id='close-up-"+ upload_index +"'></div><div class='icona  yellow' id='resize-up-"+upload_index +"'></div><div class='icona green ' id='open-up-"+upload_index+"'></div><div class='icona purple mr-15' id='arrow-down-up-"+upload_index+"'></div></div>\
            <div class='title center'><h1>Form to upload</h1></div>\
            <div class='contenitore-file-manager'>\
            <table class='file-manager'>\
                <tr>\
                    <th class='red' >Nome</th>\
                    <th>Dimensione</th>\
                    <th>Timestamp</th>\
                    <th>Elimina</th>\
                </tr>\
                <tr>\
                    <td>Nome</td>\
                    <td>Dimensione</td>\
                    <td>Timestamp</td>\
                    <td>Elimina</td>\
                </tr>\
            </table>\
            </div>\
            <form   method='POST'  id='myform' onsubmit='uploadFile(event)' enctype='multipart/form-data'>\
                <div class='input-group border' ><br>\
                    <span class='text-email'>Email proprietario:</span>\
                    <input type='textbox' placeholder='example.at.yahoo.com' name='email' class='input-upl email'><br><br><br>\
                    <span > Sceglie il file:</span>\
                    <input type='file' name='nome_file' id='file' class='ml-60'>\
                    <input type='submit'  class='submit-file'>\
                </div>\
            </form>\
            <div class='upload-bar border center'>\
                <div class='bar border' id='bar-up'></div>\
                <div class='text-bar'></div>\
            </div>\
        </div>";
    $("body").append(html);

    $(".upload-file-form").draggable(); //app desktop draggable
    ls_php();
    registerIconeUpload(upload_index);
    upload_index++;
    
});

var registerIconeUpload=(index)=>{

    $("#close-up-"+index).on("click",(response)=>{
        $("#file-manager-"+index).remove();
       
    });

    $("#arrow-down-up-"+index).on("click",(response)=>{
        $(".contenitore-file-manager").addClass("close");
    });


    $("#resize-up-"+index).on("click",(response)=>{
        //console.log("resize");
        if($("#file-manager-"+index).hasClass("full-screen")){
            $(".icone-tags-"+index , ".bash-"+index).addClass("min");
            $("#file-manager-"+index).removeClass("full-screen");
        }
        else {
            $(".icone-tags-"+index, ".bash-"+index).removeClass("min");
            $("#file-manager-"+index).addClass("full-screen");
        }
    });

    $("#open-up-"+index).on("click",(response)=>{
        if($(".contenitore-file-manager").hasClass("close"))$(".contenitore-file-manager").removeClass("close");
    });
}

