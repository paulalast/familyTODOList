const membersList = document.querySelector(".members__list")
const todoList = document.querySelectorAll(".todo__list")
//all todo lists

const membersBoard = document.querySelector(".members__board")
const nameOnBoard = document.querySelector(".member__name")

const newtaskBoard = document.querySelector(".newtask__board")
const addTaskBtn = document.querySelector(".addTask")

const saveNewTaskBtn = document.querySelector(".save")
const cancelNewTaskBtn = document.querySelector(".cancel")

const newmemberBoard = document.querySelector(".newmember__board")
const addMemberBtn = document.querySelector(".addMember")
const newNameInput = document.querySelector(".newmember__name")
const newColorSelect = document.querySelector(".select__color")
const memberColor = document.querySelector(".member__color")
const saveMember = document.querySelector(".saveMember")
const cancelMember = document.querySelector(".cancelMember")

const daySelect = document.querySelector(".day")
const taskInput = document.querySelector(".task")
const dayBoxes = document.querySelectorAll(".daybox")

const showTaskCreator = () => {
	newtaskBoard.classList.add("show")
}
const showMemberCreator = () => {
	newmemberBoard.classList.add("show")
}


const clearInputs = () => {
	let task = document.querySelector(".task")
	task.value = ""

	let day = document.querySelector(".day")
	day.value = ""
	const inputs = document.getElementsByTagName("input")
	for (let input of inputs) {
		input.value = ""
	}
}
const closeWindow = () => {
	newtaskBoard.classList.add("close")
	newtaskBoard.classList.remove("show")
	newmemberBoard.classList.add("close")
	newmemberBoard.classList.remove("show")
}

const createNewTask = () => {
	const selectedDay = daySelect.value
	const task = taskInput.value

	if (selectedDay && task) {
		const dayId = `#day${selectedDay}`
		const dayEl = document.querySelector(dayId)
		const todoList = dayEl.querySelector(".todo__list")

		todoList.innerHTML += `<li class="todo__list__item">
		<img class="checkmark" src="/dist/img/icons/checkmark.png" alt=""> ${task}
		</li>`
	}
}

const saveTask = () => {
	createNewTask()
	clearInputs()
	closeWindow()
}

const saveNewMember = () => {
	let newMemberName = document.getElementById("name").value
	let membersList = document.querySelector(".members__list")

	let newMember = document.createElement("li")
	newMember.classList.add("member")

	let memberColor = document.createElement("div")
	memberColor.classList.add("member__color")

	let memberName = document.createElement("p")
	// memberName.id = "member"
	memberName.innerHTML = newMemberName
	let memberId = Math.floor(Math.random() * 100000 + Date.now())
	newMember.setAttribute("id", `member-${memberId}`)

	if (newColorSelect.value === "858f99") {
		memberColor.style.backgroundColor = "#858f99"
		newColorSelect.options[1].setAttribute("disabled", true)
		document.getElementById("select").selectedIndex = 0
	} else if (newColorSelect.value === "ccd5ae") {
		memberColor.style.backgroundColor = "#ccd5ae"
		newColorSelect.options[2].setAttribute("disabled", true)
		document.getElementById("select").selectedIndex = 0
	} else if (newColorSelect.value === "f5ebe0") {
		memberColor.style.backgroundColor = "#f5ebe0"
		newColorSelect.options[3].setAttribute("disabled", true)
		document.getElementById("select").selectedIndex = 0
	} else if (newColorSelect.value === "d09fa3") {
		memberColor.style.backgroundColor = "#d09fa3"
		newColorSelect.options[4].setAttribute("disabled", true)
		document.getElementById("select").selectedIndex = 0
	} else {
		memberColor.style.backgroundColor = "#8D5D44"
		newColorSelect.options[5].setAttribute("disabled", true)
		document.getElementById("select").selectedIndex = 0
	}
	const nameInput = document.getElementById("name").value
	const colorSelect = document.getElementById("select").value

	if (!nameInput || !colorSelect) {
		document.getElementById("name").placeholder =
			"Please enter a name and choose a color before you save"
		return
	}

	newMember.appendChild(memberColor)
	newMember.appendChild(memberName)
	membersList.appendChild(newMember)

	clearInputs()
	closeWindow()

}
const memberBoard = document.querySelector('.members__board');
const members = memberBoard.querySelectorAll('.member');
const select = document.querySelector('.newtask__board .member');

members.forEach(member => {
  const name = member.textContent;
  const color = member.style.backgroundColor;
  
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name;
  option.style.backgroundColor = color;
  
  select.appendChild(option);
});


let inputValue = document.getElementById("name").value

console.log(inputValue)

addTaskBtn.addEventListener("click", showTaskCreator)
cancelNewTaskBtn.addEventListener("click", closeWindow)
saveNewTaskBtn.addEventListener("click", saveTask)

addMemberBtn.addEventListener("click", showMemberCreator)
cancelMember.addEventListener("click", closeWindow)
saveMember.addEventListener("click", saveNewMember)
