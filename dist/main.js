(()=>{"use strict";class e{static project={id:"",titre:"",priorite:"",description:"",date_db:"",date_fn:""};constructor(t,n,a,d,i,l){e.project.id=t,e.project.titre=n,e.project.priorite=d,e.project.description=a,e.project.date_db=i,e.project.date_fn=l,window.localStorage.setItem("Project"+t,JSON.stringify(e.project))}static get(e){return JSON.parse(window.localStorage.getItem("Project"+e))}static remove(e){window.localStorage.removeItem("Project"+e)}}class t{static task={id:"",idProject:"",titre:"",description:"",status:"",date_db:"",date_fn:""};constructor(e,n,a,d,i,l,o){t.task.id=e,t.task.titre=a,t.task.idProject=n,t.task.status=i,t.task.description=d,t.task.date_db=l,t.task.date_fn=o,window.localStorage.setItem("Tasks"+e,JSON.stringify(t.task))}static get(e){return JSON.parse(window.localStorage.getItem("Tasks"+e))}static remove(e){window.localStorage.removeItem("Tasks"+e)}}let n,a=[],d=[],i=window.localStorage.getItem("ProjectIdShow");document.querySelector("#ClearAll").addEventListener("click",(()=>{window.localStorage.clear(),location.reload()})),document.addEventListener("click",(e=>{e.target.classList.contains("setProjectId")&&(n=e.target.value)}));for(let t=0;t<1e3;t++)e.get(t)&&a.push(e.get(t));for(let e=0;e<1e3;e++)t.get(e)&&d.push(t.get(e));let l=Number(a[a.length-1]?.id)+1||1;document.addEventListener("submit",(t=>{if(t.target.classList.contains("addProject")){let n=t.target;t.preventDefault(),new e(l,n.elements.titre.value,n.elements.description.value,n.elements.priorite.value,n.elements.date_db.value,n.elements.date_fn.value),window.localStorage.setItem("ProjectIdShow",l),location.reload()}}),!1),document.addEventListener("click",(n=>{n.target.classList.contains("delete")&&(e.remove(n.target.name),d.forEach((e=>{e.idProject==n.target.name&&t.remove(e.id)})),location.reload())}),!1),document.addEventListener("submit",(t=>{if(t.target.classList.contains("updateProject")){let n=t.target;t.preventDefault(),new e(i,n.elements.titre.value,n.elements.description.value,n.elements.priorite.value,n.elements.date_db.value,n.elements.date_fn.value),location.reload()}}),!1),document.addEventListener("click",(e=>{e.target.classList.contains("AllProjectsList")&&(window.localStorage.setItem("ProjectIdShow",e.target.value),location.reload())}),!1),a.forEach((e=>{let t;t="high"==e.priorite?"text-danger":"medium"==e.priorite?"text-warning":"text-info";const n=document.createElement("li");if(n.innerHTML=`<button value='${e.id}' class="btn ${t} w-full AllProjectsList" >${e.titre}</button>`,document.getElementById("AllProjectsList").appendChild(n),e.id==i){const t=document.createElement("div");t.innerHTML=`<div class='m-1 p-3 card bg-light'>\n            <h2 class='card-title' >${e.titre}\n                <button name='${e.id}' class='m-2 btn btn-danger delete float-right'>Delete</button>\n                <button name='${e.id}' data-toggle="modal"\n                data-target="#updateProjectModal" class='m-2 btn btn-success float-right'>Update</button>\n            </h2>\n            <h4>${e.description}</h4>\n            <div class="row">\n                <div class="m-2 col-lg card">\n                    <label class="card-title m-2" >TO DO :</label>\n                    <hr/>\n                    <div class="TO_DO${e.id} height"></div>\n                </div>\n                <div class="m-2 col-lg card">\n                    <label class="card-title m-2" >IN PROGRESS :</label>\n                    <hr/>\n                    <div class="IN_PROGRESS${e.id} height "></div>\n                </div>\n                <div class="m-2 col-lg card">\n                    <label class="card-title m-2" >DONE :</label>\n                    <hr/>\n                    <div class="DONE${e.id} height"></div>\n                </div>\n            </div>\n            <div>\n                <button\n                class="btn btn-info setProjectId"\n                data-toggle="modal"\n                data-target="#newTaskModal"\n                value='${e.id}'\n                >\n                Add Task\n                </button> \n                <small class='float-right'>Start date : ${e.date_db}  ///    End date :${e.date_fn}</small>\n            </div>\n        </div>\n\n        \n        <div class="modal fade" id="updateProjectModal">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" id="model-Title">Update Project</h5>\n              <button\n                type="button"\n                class="close"\n                data-dismiss="modal"\n                aria-label="Close"\n                 >\n                <span aria-hidden="true" >&times;</span>\n              </button>\n            </div>\n            <div class="modal-body" id="modale-body">\n              <form method="post" class="updateProject" id="newProjectForm" >\n                <div class="form-group">\n                  <label for="taskTitle">Title: </label>\n                  <input\n                    type="text"\n                    class="form-control "\n                    name="titre"\n                    id="projectName"\n                    maxlength="20"\n                    value="${e.titre}"\n                    required\n                  />\n                </div>\n                <div class="form-group">\n                    <label for="taskTitle">Description: </label>\n                    <input\n                      type="text"\n                      class="form-control "\n                      name="description"\n                      id="projectName"\n                      value="${e.description}"\n                      required\n                    />\n                  </div>\n                  <div class="form-group">\n                    <label for="oldtaskPriority">Priority: </label>\n                    <select\n                      class="custom-select"\n                      id="oldtaskPriority"\n                      name="priorite"\n                      value="${e.priorite}"\n                      required\n                    >\n                     <option value="${e.priorite}" selected hidden>${e.priorite}</option>\n                      <option value="low">Low</option>\n                      <option value="medium">Medium</option>\n                      <option value="high">High</option>\n                    </select>\n                    <div class="invalid-feedback">Priority required</div>\n                  </div>\n                  <div class="form-group">\n                    <label for="taskTitle">Start date: </label>\n                    <input\n                      type="date"\n                      class="form-control "\n                      name="date_db"\n                      id="projectName"\n                      maxlength="20"\n                      value="${e.date_db}"\n                      required\n                    />\n                  </div>\n                  <div class="form-group">\n                    <label for="taskTitle">End date: </label>\n                    <input\n                      type="date"\n                      class="form-control "\n                      name="date_fn"\n                      id="projectName"\n                      maxlength="20"\n                      value="${e.date_fn}"\n                      required\n                    />\n                  </div>\n                <div class="form-group mb-0 d-flex justify-content-end">\n                  <button\n                    type="button"\n                    class="btn btn-outline-secondary mr-1"\n                    data-dismiss="modal"\n                  >\n                    Close\n                  </button>\n                  <button type="submit" class="btn btn-success" id="modale_addProject_btn" aria-hidden="true" >\n                    Update Project\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>`,document.getElementById("editorContent").appendChild(t),d.forEach((t=>{if(e.id==t.idProject){let n="."+t.status+e.id;const a=document.createElement("div");a.innerHTML=`\n        <div class="card m-2">\n        <div class="card-header">\n        ${t.titre}\n            </div>\n            <div class="card-body">\n                <p class="card-text">${t.description}</p>\n                <small>Start date : ${t.date_db}  </small></br><small>End date :${t.date_fn}</small>\n            </br>\n                <select class="mt-2 btn btn-secondary updateTask" name='${t.id}'  required>\n                <option disabled selected hidden>Change Status</option>\n                <option value="TO_DO" >TO DO</option>\n                <option value="IN_PROGRESS">IN PROGRESS</option>\n                <option value="DONE">DONE</option>\n              </select>\n                <button name='${t.id}' class='btn btn-danger mt-2 deleteTask float-right'>Delete Task</button>\n                \n            </div>\n        </div>\n        `,window.addEventListener("load",(e=>{e.target.querySelector(n)&&document.querySelector(n).appendChild(a)}))}}))}}));let o=Number(d[d.length-1]?.id+1)||1;document.addEventListener("submit",(e=>{if(e.target.classList.contains("addTask")){e.preventDefault();let a=e.target;new t(o,n,a.elements.titre.value,a.elements.description.value,a.elements.status.value,a.elements.date_db.value,a.elements.date_fn.value),location.reload()}})),document.addEventListener("click",(e=>{e.target.classList.contains("deleteTask")&&(t.remove(e.target.name),location.reload())}),!1),document.addEventListener("change",(e=>{e.preventDefault(),e.target.classList.contains("updateTask")&&d.forEach((n=>{n.id==e.target.name&&(new t(n.id,n.idProject,n.titre,n.description,e.target.value,n.date_db,n.date_fn),location.reload())}))}),!1)})();