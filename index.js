function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (title === "") {
      alert("Please fill in title");
      return;
    }else if(description === ""){
        alert("please fill in description")
    }

    const taskList = document.getElementById("taskList");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const timeNow = new Date().toLocaleString(); // showing current date & time

    taskDiv.innerHTML = `
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Time:</strong> ${timeNow}</p>
      <p class="status pending" onclick="toggleStatus(this)">Status: Pending (Click to Complete)</p>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskDiv);

    // inputs filed clear for adding task
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }

  function toggleStatus(element) {
    if (element.classList.contains("pending")) {
      element.classList.remove("pending");
      element.classList.add("success");
      element.textContent = "Status: Success";
    } 
  }

  function deleteTask(button) {
    const task = button.parentElement; // get the full task div 
    task.remove(); // Then remove the task  list
  }
