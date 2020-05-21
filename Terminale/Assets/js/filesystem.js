
class Component{
    nome_file;
    parent_system;
    prev_dir;
    constructor(nome,parent_system,prev_dir){
        this.nome_file=nome;
        this.parent_system=parent_system;
        this.prev_dir=prev_dir;
    }
    getParent(){
        return this.parent_system;// PARENT SYSTEM
    }
    getPrevDir(){
        return this.prev_dir;// PARENT DIR
    }
}

class Directory extends Component{
    files_in_directory=[];
    constructor(name,parent_system,prev_dir){
        super(name,parent_system,prev_dir);
       
    }
    //si puo semplificare? penso di si
    addFile(nome_file){
        this.files_in_directory.push(nome_file);
    }
    addDir(nome_dir){
        this.files_in_directory.push(nome_dir);
    }
    showDirectory(string_spazio,response,index){
        let new_row=$("<div>"+string_spazio+" Dir "+this.nome_file+"</div>");
        response.append(new_row);
        for(let file of this.files_in_directory){
            if(file.showDirectory){
                file.showDirectory(string_spazio+string_spazio,new_row,index);
            }
            else {
                let file_txt=$("<div></div>");
                file_txt.text(string_spazio+string_spazio+" File "+file.nome_file+" \n");
                new_row.append(file_txt);
            }
        }
        $(".cli-"+index).has("#cmd-"+index).append(new_row);
    }
    getFiles(){
        return this.files_in_directory;
    }
}
class File extends Component{

    contenuto_file;
    //implementare
    getContenuto(){
        return this.contenuto_file;
    }
    showDirectory(string_spazio,response){
        let new_row=$("<div>"+string_spazio+" File "+this.nome_file+"</div>");
        response.append(new_row);
       
    }
}

class FileSystem{

    file_system=[];
    current_path;
    current_dir;
    current_system=[];
    file_system_html="";

    constructor(nome) {
        this.nome = nome;
        this.addDir(new Directory("root",this.current_system,null));
        let usr=new Directory("usr",this.current_system,null);
        usr.addFile(new File("1",usr.getFiles(),usr));
        usr.addFile(new File("2",usr.getFiles(),usr));
        usr.addFile(new File("3",usr.getFiles(),usr));
        usr.addDir(new Directory("local",usr.getFiles(),usr));
        this.addDir(usr);
        this.addDir(new Directory("tmp",this.current_system,null));
        this.file_system=this.current_system;
        this.current_path="/";
    }   
    //si può semplificare?
    addFile(nome_file){
        this.current_system.push(nome_file);
    }   
    addDir(nome_dir){
        this.current_system.push(nome_dir)
    }   
    cdDir(directory){
        for(let file of this.current_system) {
            console.log(file);
            if(file.nome_file===directory) {
                this.current_path=directory;
                this.current_system=file.getFiles();
                
                //console.log("path"+this.current_path);
                //console.log(this.current_system)
            } 
        } 
    }
    showFile(string_spazio,index) {
        /*for(let file of this.file_system){
            if(file.showDirectory)file.showDirectory(string_spazio+string_spazio);
            else  console.log(string_spazio+" File ",file.nome_file);
        } 
        */
        // SE CI FILE normiali?SONO NELLA ROOT file da prolemi --> modificare class File
        let response=$("<div></div>").addClass("response");
        response.addClass("white-text");
        for(let file of this.file_system)file.showDirectory(string_spazio,response);
        
        $(".cli-"+index).has("#cmd-"+index).append(response);
    } 

}
