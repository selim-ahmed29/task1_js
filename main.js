let InSkills = document.getElementById("InSkills");
let BTNSkill = document.getElementById("BTNSkill");
let skillSList = document.getElementById("skillSList");

let currentDate=new Date()
let formattedDate = currentDate.toString().slice(0,16);

BTNSkill.addEventListener("click",() =>{
    let task = InSkills.value.trim();
    if (task !== "") {
        let listItem = document.createElement('li');
        listItem.textContent = `${formattedDate}: ${task}`;
        skillSList.appendChild(listItem);
        // Create a delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.style.height = "30px";
        deleteButton.style.fontSize = "21px";
        deleteButton.style.fontWeight = "700";
        deleteButton.style.width = "85px";
        deleteButton.style.borderRadius = "25px";
        

        deleteButton.addEventListener("click", () => {
            skillSList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        skillSList.appendChild(listItem);
        InSkills.value = "";
  }
});
