   document.getElementById('toggleNightModeBtn').addEventListener('click', function() {
     var body = document.body;
     body.classList.toggle('nightMode');
   });

document.getElementById('addProjectBtn').addEventListener('click', function() {
  var newProject = prompt('Enter the name of the new project:');
  if (newProject) {
    var projectsList = document.getElementById('projectsList');
    var newProjectItem = document.createElement('li');
    newProjectItem.appendChild(document.createTextNode(newProject));
    projectsList.appendChild(newProjectItem);
  }
});