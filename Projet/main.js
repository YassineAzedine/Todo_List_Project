
// const list = document.querySelector('#projects');
// const lists = document.querySelector('#tasks');



// function createUUID() {
//     var dt = new Date().getTime();
//     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = (dt + Math.random() * 16) % 16 | 0;
//         dt = Math.floor(dt / 16);
//         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
//     return uuid;
// }


// class Project{
    
  
//     constructor(ref,title){
//         this.ref =  ref;
//         this.title =  title;
//         this.tasks = []
//         this.id=createUUID();
       
//        }
    

       
//       addProjects(project){
//         // const projects = Project.getProjects();
//         //    projects.push(project);
      

      
//            localStorage.setItem( this.id,JSON.stringify(project));
//            window.location.reload();
      
//        }
       
     
//    static getProjects(){
//     let projects;
//     if(localStorage.getItem('projects') === null){
//         projects = [];

//     }else{
//         projects = JSON.parse(localStorage.getItem('projects'));


//     }
//     return projects;
// }
// static displayProjects(){
//     const projects = Project.getProjects();

//     projects.forEach(function(project){

//         const tr = document.createElement('tr');
//         tr.innerHTML = ` <td><a  class=" text-dark font-weight-bold "style="cursor:pointer; text-decoration:none;" id="projects" ref="${project.title}"> 
//         <span class="text-dark " > ${project.title} </span>
//         </a>
//         <td> <a class="deleteProject text-primary font-weight-bold "style="cursor:pointer" id="projects" ref="${project.ref}"> 
//         <i class="fas fa-edit"></i>
//         </a>
//      </td>
//      <td>  <a class="deleteProject text-danger font-weight-bold "style="cursor:pointer" id="projects" ref="${project.ref}"> 
//      <i class="fas fa-trash-alt"></i>
     
//      </a>

     
//   </td>
//          `
//         ;
//         list.appendChild(tr);
//     });
    
//     list.appendChild(tr);
// }

// static deleteProject(ref){
//     const projects = Project.getProjects();
//     projects.forEach(function(project,index){
//         if(project.ref === ref){
//             projects.splice(index,1);
//         }
//     });
//     localStorage.setItem('projects',JSON.stringify(projects));
// }
// }
// document.addEventListener('DOMContentLoaded',Project.displayProjects)

// list.addEventListener('click',function(e){
//     // Project.deleteProject(e.target.getAttrbute('ref'));
//     // alert(e.target.getAttribute('ref'));
//     // console.log(e.target.getAttribute('ref'));
//     Project.deleteProject(e.target.parentElement.getAttribute('ref'));
// if(event.target.parentElement.classList.contains('deleteProject')){
//     event.target.parentElement.parentElement.parentElement.remove();
// }
// });



// const forms = document.querySelector('#formproject');
// forms.addEventListener('submit',function(event){
//     event.preventDefault();
//     let ref =   document.querySelector('#ref').value; 
//     let title =   document.querySelector('#title').value;
  

 


//     const project = new Project(ref,title);
//     console.log(project);
//     project.addProjects(project);
    



// })










// class Task {
//     constructor(auther,refernce,description){
     
//      this.auther =  auther;
//      this.refernce =  refernce;
//      this.description =  description;
     


//     }


  
   
//     addTask(obj){
//         console.log("inside addTask");
//        //project = this.tasks.push(object);
//        //localStorage.setItem(this.ref,JSON.stringify(project));


//         const project = JSON.parse(localStorage.getItem(this.id));
//         console.log(project);
//         const task = project.tasks;
//         console.log(task);
//         task.push(obj);
//         console.log("push task");
//         localStorage.setItem(this.id,JSON.stringify(project));
//         console.log("setiing task");

   
//    }
// //   addTasks(task){
// //         const tasks = Task.getTasks();
// //         tasks.push(task);
// //         localStorage.setItem('tasks',JSON.stringify(tasks));
// //         window.location.reload();

// //     }
  
//    static getTasks(){
//         let tasks;
//         if(localStorage.getItem('tasks') === null){
//             tasks = [];

//         }else{
//     tasks = JSON.parse(localStorage.getItem('tasks'));


//         }
//         return tasks;
//     }
//     clearFields(){
//         let auther = document.querySelector('#auther').value = "";
//         let refernce = document.querySelector('#refernce').value ="";
//         let description = document.querySelector('#description').value="";
//     }
//   static  validationErrors(){
//        const div = document.createElement('div');
//         div.classList.add('alert');
//         div.classList.add('alert-danger');

        
//         div.appendChild(document.createTextNode('Vueillez remplir tous les champs'));

//         const message = document.querySelector('#message');
//         message.append(div);
//         setTimeout(function(){
//             document.querySelector('.alert').remove();

//         },3000)
//     }
    

//    static displayTasks(){
//         const tasks = Task.getTasks();

//         tasks.forEach(function(task){
           
//             const tr = document.createElement('tr');
//             tr.innerHTML = `
//             <td> ${task.auther}</td>
//             <td> ${task.refernce}</td>
//             <td>${task.description} </td>
//             <td>${task.ref} </td>

           

//             <td>  <a class="deleteTask text-primary font-weight-bold "style="cursor:pointer" id="tasks" ref="${task.refernce}"> 
//             <i class="fas fa-edit"></i>
        
//         </a>
 
        
//      </td>
//         <td>  <a class="deleteTask text-danger font-weight-bold "style="cursor:pointer" id="tasks" ref="${task.refernce}"> 
//         <i class="fas fa-trash-alt"></i>
        
//         </a>
 
        
//      </td>
//              `
//             ;
//             lists.appendChild(tr);
//         });
//         lists.appendChild(tr);
//     }
    
//     static deleteTask(refernce){
//         const tasks = Task.getTasks();
//         tasks.forEach(function(task,index){
//             if(task.refernce === refernce){
//                 tasks.splice(index,1);
//             }
//         });
//         localStorage.setItem('tasks',JSON.stringify(tasks));
//     }
// }
// document.addEventListener('DOMContentLoaded',Task.displayTasks)

// lists.addEventListener('click',function(e){
//     // Task.deleteTask(e.target.getAttribute('ref'));
//     // alert(e.target.getAttribute('ref'));
//     // console.log(e.target.getAttribute('ref'));
//     Task.deleteTask(e.target.parentElement.getAttribute('ref'));
// if(event.target.parentElement.classList.contains('deleteTask')){
//     event.target.parentElement.parentElement.parentElement.remove();
// }
// });
// lists.addEventListener('click',function(e){
//     event.target.classList.add('task--completed')
//     Task.isCompleted = true;
//     this.addTasks();
// })


// const form = document.querySelector('#form');


// form.addEventListener('submit',function(event){
//     event.preventDefault();

//     let ref = document.querySelector('#ref').value;

//     let auther = document.querySelector('#auther').value;
//     let refernce = document.querySelector('#refernce').value;
//     let description = document.querySelector('#description').value;
//     if(auther === '' || refernce === '' || description ==='' ){
//        Task.validationErrors(); 

//     }else{
//     const task = new Task(auther,refernce,description);
//     console.log(task)
//     task.addTask(task);
//     task.clearFields()
//     }

// })


 

