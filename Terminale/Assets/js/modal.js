$("#text").click((response)=>{
    console.log(response);
    create_modal();

    $("#close-modal").on("click",(response)=>{
        $(".modal").remove();
    });
});

var create_modal= (html_img,moves,url_info)=>{
    let modal = $("<div class='modal'></div>");
    let modal_box = $("<div class='modal-box'></div>");
    
    let icone_tags = $("<div class='icone-tags no-border-radius'></div>");
    let icone_tags_bottom = $("<div class='icone-tags-bottom no-border-radius' ></div>");
    
    let html_icone = $("<div class='icona red' id='close-modal'></div><div class='icona  disable'></div><div class='icona disable mr-15'></div>");
    
    let new_row = $("<div class='row'></div>");
    let img_box = $("<div class='img-box absolute '></div>");
    let img_summary = $("<div class='summary'></div>");
    let info_box = $("<div class='summary'></div>");
    img_box.html(html_img);

    modal_box.append(icone_tags.html(html_icone));
    modal_box.append(new_row.append(img_box));
    new_row.append(info_box);
    new_row.append(img_summary);
    new_row.append(icone_tags_bottom);


    let html_move="<h1>Mosse</h1><ul class='align-left'>";
    for(move of moves){
        html_move+="<li>"+ move.move.name + "</li>";
    }
    html_move+="</ul>";
    img_summary.html(html_move);
    //new_row.append(icone_tags_bottom);
    $.get(url_info,(response)=>{
        console.log(response.flavor_text_entries[1].flavor_text);
        info_box.html("<h1>Sinossi</h1>"+response.flavor_text_entries[1].flavor_text)
    });

    /*modal_box.append(icone_tags.html(html_icone));
    modal_box.append(new_row.append(img_box));
    new_row.append(img_summary);
    */
    $("#body").prepend(modal.append(modal_box));
}

