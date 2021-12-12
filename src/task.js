export default class Tasks{
    static task = {
        id : "",
        idProject:"",
        titre: "",
        description: "",
        status:"",
        date_db: "",
        date_fn: ""
    }
     constructor(id,idProject,titre,description,status,date_db,date_fn){
         Tasks.task.id = id
         Tasks.task.titre = titre;
         Tasks.task.idProject = idProject;
         Tasks.task.status = status;
         Tasks.task.description = description;
         Tasks.task.date_db = date_db;
         Tasks.task.date_fn = date_fn ;
         window.localStorage.setItem('Tasks'+id, JSON.stringify(Tasks.task));
     }
     
 static get(key) {
    return  JSON.parse(window.localStorage.getItem('Tasks'+key));
  }

  static remove(key) {
    window.localStorage.removeItem('Tasks'+key);
  }

  }