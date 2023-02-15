const membersList = document.querySelector(".members__list")
// const todoList = document.querySelectorAll(".todo__list")

const membersBoard = document.querySelector(".members__board")
const memberSelect = document.querySelector(".newtask__board select.member")

const newtaskBoard = document.querySelector(".newtask__board")
const addTaskBtn = document.querySelector(".addTask")

const saveNewTaskBtn = document.querySelector(".save")
const cancelNewTaskBtn = document.querySelector(".cancel")

const newmemberBoard = document.querySelector(".newmember__board")
const addMemberBtn = document.querySelector(".addMember")
const newNameInput = document.querySelector(".newmember__name")
const newColorSelect = document.querySelector(".select__color")
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

	let name = document.getElementById("name")
	name.value = ""

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

// const createNewTask = () => {
// 	const selectedDay = daySelect.value
// 	const task = taskInput.value
// 	const selectedMember = memberSelect.value

// 	if (selectedDay && task && selectedMember) {
// 		const dayId = `#day${selectedDay}`
// 		const dayEl = document.querySelector(dayId)
// 		const todoList = dayEl.querySelector(".todo__list")

// 		const memberColor = membersBoard.querySelector(
// 			`#${selectedMember} .member__color`
// 		).style.backgroundColor

// 		todoList.innerHTML += `<li class="todo__list__item" style="background-color: ${memberColor}">
// 		<img class="checkmark" src="/dist/img/icons/checkmark.png" alt=""> ${task}
// 	  </li>`

// 		const memberOption = document.createElement("option")
// 		memberOption.value = selectedMember
// 		memberOption.text = selectedMember
// 		memberOption.style.backgroundColor = memberColor
// 		memberSelect.appendChild(memberOption)
// 	}
// }
const createNewTask = () => {
	const selectedDay = daySelect.value
	const task = taskInput.value
	const selectedMember = memberSelect.value
	const memberColor = membersBoard.querySelector(
		`#${selectedMember} .member__color`
	).style.backgroundColor

	if (selectedDay && task && selectedMember) {
		const dayId = `#day${selectedDay}`
		const dayEl = document.querySelector(dayId)
		const todoList = dayEl.querySelector(".todo__list")

		const listItem = document.createElement("li")
		listItem.classList.add("todo__list__item")
		listItem.style.backgroundColor = memberColor
		listItem.innerHTML = `<img class="checkmark" src="/dist/img/icons/checkmark.png" alt=""> ${task}`

		todoList.appendChild(listItem)
	}

	const memberOption = document.createElement("option")
	memberOption.value = selectedMember
	memberOption.text = selectedMember
	memberOption.style.backgroundColor = memberColor
	memberSelect.appendChild(memberOption)
}

// const saveTask = () => {
// 	createNewTask()
// }
const addNewFamilyMember = (name, color) => {
	const select = document.querySelector(".member")
	const option = document.createElement("option")
	option.value = name
	option.textContent = name
	option.style.backgroundColor = color
	select.appendChild(option)
}

// const saveNewMember = () => {
// 	const newMemberName = document.getElementById("name").value
// 	const membersList = document.querySelector(".members__list")

// 	if (!newMemberName) {
// 		document.getElementById("name").placeholder =
// 			"Please enter a name before you save"
// 		return
// 	}

// 	const newMember = document.createElement("li")
// 	newMember.classList.add("member")

// 	const memberColor = document.createElement("div")
// 	memberColor.classList.add("member__color")
// 	memberColor.style.backgroundColor = newColorSelect.value

// 	const memberName = document.createElement("p")
// 	memberName.innerHTML = newMemberName

// 	const memberId =
// 		Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
// 	newMember.setAttribute("id", `member-${memberId}`)

// 	const newMemberOption = document.createElement("option")
// 	newMemberOption.value = newMemberName
// 	newMemberOption.textContent = newMemberName
// 	newMemberOption.style.backgroundColor = newColorSelect.value
// 	memberSelect.appendChild(newMemberOption)

// 	newMember.appendChild(memberColor)
// 	newMember.appendChild(memberName)
// 	membersList.appendChild(newMember)

// 	clearInputs()
// 	closeWindow()
// }
const saveTask = () => {
	createNewTask()
	// clearInputs() i closeWindow() są wywoływane asynchronicznie
	// wewnątrz createNewTask, więc nie trzeba ich wywoływać ponownie
}

const saveNewMember = () => {
	let newMemberName = newNameInput.value // zmienione z getElementById
	let membersList = membersList // zmienione z querySelector

	let newMember = document.createElement("li")
	newMember.classList.add("member")

	let memberColor = document.createElement("div")
	memberColor.classList.add("member__color")

	let memberName = document.createElement("p")
	memberName.innerHTML = newMemberName

	let memberId =
		Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
	newMember.setAttribute("id", `member-${memberId}`)

	if (newColorSelect.value === "858f99") {
		memberColor.style.backgroundColor = "#858f99"
		newColorSelect.options[1].setAttribute("disabled", true)
		newColorSelect.selectedIndex = 0 // zmienione z getElementById
	} else if (newColorSelect.value === "ccd5ae") {
		memberColor.style.backgroundColor = "#ccd5ae"
		newColorSelect.options[2].setAttribute("disabled", true)
		newColorSelect.selectedIndex = 0 // zmienione z getElementById
	} else if (newColorSelect.value === "f5ebe0") {
		memberColor.style.backgroundColor = "#f5ebe0"
		newColorSelect.options[3].setAttribute("disabled", true)
		newColorSelect.selectedIndex = 0 // zmienione z getElementById
	} else if (newColorSelect.value === "d09fa3") {
		memberColor.style.backgroundColor = "#d09fa3"
		newColorSelect.options[4].setAttribute("disabled", true)
		newColorSelect.selectedIndex = 0 // zmienione z getElementById
	} else {
		memberColor.style.backgroundColor = "#8D5D44"
		newColorSelect.options[5].setAttribute("disabled", true)
		newColorSelect.selectedIndex = 0 // zmienione z getElementById
	}

	const nameInput = newMemberName // zmienione z getElementById
	const colorSelect = newColorSelect.value // zmienione z getElementById

	if (!nameInput || !colorSelect) {
		newNameInput.placeholder =
			"Please enter a name and choose a color before you save" // zmienione z getElementById
		return
	}
	addNewFamilyMember(newMemberName, memberColor.style.backgroundColor)

	newMember.appendChild(memberColor)
	newMember.appendChild(memberName)
	membersList.appendChild(newMember)

	clearInputs()
	closeWindow()
}

addTaskBtn.addEventListener("click", showTaskCreator)
cancelNewTaskBtn.addEventListener("click", closeWindow)
saveNewTaskBtn.addEventListener("click", saveTask)

addMemberBtn.addEventListener("click", showMemberCreator)
cancelMember.addEventListener("click", closeWindow)
saveMember.addEventListener("click", saveNewMember)
