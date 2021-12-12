export default class Project{
    static project = {
        id : "",
        titre: "",
        priorite:"",
        description: "",
        date_db: "",
        date_fn: ""
    }
     constructor(id,titre,description,priorite,date_db,date_fn){
         Project.project.id = id
         Project.project.titre = titre;
         Project.project.priorite = priorite;
         Project.project.description = description;
         Project.project.date_db = date_db;
         Project.project.date_fn = date_fn ;
         window.localStorage.setItem('Project'+id, JSON.stringify(Project.project));
     }
 static get(key) {
    return  JSON.parse(window.localStorage.getItem('Project'+key));
  }

  static remove(key) {
    window.localStorage.removeItem('Project'+key);
  }
  
  
  }
  