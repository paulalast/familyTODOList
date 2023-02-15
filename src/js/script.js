const membersList = document.querySelector(".members__list")
const todoLists = document.querySelectorAll(".todo__list")

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
	taskInput.value = ""
	daySelect.value = ""
	newNameInput.value = ""
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

// 		const selectedMemberOption = memberSelect.querySelector(
// 			`option[value="${selectedMember}"]`
// 		)
// 		const memberColor = selectedMemberOption.dataset.color || "#fff"

// 		const listItem = document.createElement("li")
// 		listItem.classList.add("todo__list__item")
// 		listItem.innerHTML = `<img class="checkmark" src="/dist/img/icons/checkmark.png" alt=""> ${task}`
// 		listItem.style.backgroundColor = memberColor // set the task color to the selected member's color

// 		todoList.appendChild(listItem) // add the new task item to the day's todo list

// 		const memberOption = document.createElement("option")
// 		memberOption.value = selectedMember
// 		memberOption.text = selectedMember
// 		memberOption.style.backgroundColor = memberColor // set the member select dropdown option color to the selected member's color
// 		memberSelect.appendChild(memberOption)
// 	}
// }
const createNewTask = () => {
	const selectedDay = daySelect.value
	const task = taskInput.value
	const selectedMember = memberSelect.value
	const selectedColor =
		memberSelect.options[memberSelect.selectedIndex].getAttribute("data-color")

	if (selectedDay && task && selectedMember) {
		const dayId = `#day${selectedDay}`
		const dayEl = document.querySelector(dayId)
		const todoList = dayEl.querySelector(".todo__list")

		const listItem = document.createElement("li")
		listItem.classList.add("todo__list__item")
		listItem.innerHTML = `<img class="checkmark" src="/dist/img/icons/checkmark.png" alt=""> ${task}`
		listItem.style.background = `#${selectedColor}`

		todoList.appendChild(listItem)
		console.log(selectedColor)
		const memberOption = document.createElement("option")
		memberOption.value = selectedMember
		memberOption.text = selectedMember
		memberOption.style.backgroundColor = selectedColor
		memberSelect.appendChild(memberOption)
	}
}

const addNewFamilyMember = (name, color) => {
	const select = document.querySelector(".member")
	const option = document.createElement("option")
	option.value = name
	option.textContent = name
	option.style.backgroundColor = color
	select.appendChild(option)
}

// const saveNewMember = () => {
// 	const newMemberName = newNameInput.value
// 	const membersList = document.querySelector(".members__list")
// 	const newColorSelect = document.querySelector(".select__color")

// 	if (!newMemberName) {
// 		newNameInput.placeholder = "Please enter a name before you save"
// 		return
// 	}

// 	const newMember = document.createElement("li")
// 	newMember.classList.add("member")

// 	const memberColor = document.createElement("div")
// 	memberColor.classList.add("member__color")
// 	const selectedColor = newColorSelect.value
// 	memberColor.style.backgroundColor = "#" + selectedColor

// 	const memberName = document.createElement("p")
// 	memberName.innerHTML = newMemberName

// 	const memberId =
// 		Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
// 	newMember.setAttribute("id", `member-${memberId}`)

// 	const newMemberOption = document.createElement("option")
// 	newMemberOption.value = newMemberName
// 	newMemberOption.textContent = newMemberName
// 	newMemberOption.dataset.color = selectedColor
// 	memberSelect.appendChild(newMemberOption)

// 	newMember.appendChild(memberColor)
// 	newMember.appendChild(memberName)
// 	membersList.appendChild(newMember)
// 	newMemberOption.dataset.color = selectedColor

// 	clearInputs()
// 	closeWindow()
// }
// const saveNewMember = () => {
// 	const newMemberName = newNameInput.value
// 	const membersList = document.querySelector(".members__list")
// 	const newColorSelect = document.querySelector(".select__color")

// 	if (!newMemberName) {
// 		newNameInput.placeholder = "Please enter a name before you save"
// 		return
// 	}

// 	// check if the member already exists in the select dropdown
// 	if (
// 		[...memberSelect.options].some(option => option.value === newMemberName)
// 	) {
// 		alert("This member already exists!")
// 		return
// 	}

// 	const newMember = document.createElement("li")
// 	newMember.classList.add("member")

// 	const memberColor = document.createElement("div")
// 	memberColor.classList.add("member__color")
// 	const selectedColor = newColorSelect.value
// 	memberColor.style.backgroundColor = "#" + selectedColor

// 	const memberName = document.createElement("p")
// 	memberName.innerHTML = newMemberName

// 	const memberId =
// 		Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
// 	newMember.setAttribute("id", `member-${memberId}`)

// 	const newMemberOption = document.createElement("option")
// 	newMemberOption.value = newMemberName
// 	newMemberOption.textContent = newMemberName
// 	newMemberOption.dataset.color = selectedColor
// 	memberSelect.appendChild(newMemberOption)

// 	newMember.appendChild(memberColor)
// 	newMember.appendChild(memberName)
// 	membersList.appendChild(newMember)
// 	newMemberOption.dataset.color = selectedColor

// 	clearInputs()
// 	closeWindow()
// }
const saveNewMember = () => {
	const newMemberName = newNameInput.value.trim()
	const membersList = document.querySelector(".members__list")
	const newColorSelect = document.querySelector(".select__color")
	const memberSelectOptions = memberSelect.querySelectorAll("option")

	if (!newMemberName) {
		newNameInput.placeholder = "Please enter a name before you save"
		return
	}

	// sprawdź, czy istnieje już opcja z danym imieniem
	const existingOption = Array.from(memberSelectOptions).find(
		option => option.value.toLowerCase() === newMemberName.toLowerCase()
	)

	if (existingOption) {
		alert(`Member ${newMemberName} already exists.`)
		return
	}

	const newMember = document.createElement("li")
	newMember.classList.add("member")

	const memberColor = document.createElement("div")
	memberColor.classList.add("member__color")
	const selectedColor = newColorSelect.value
	memberColor.style.backgroundColor = "#" + selectedColor

	const memberName = document.createElement("p")
	memberName.innerHTML = newMemberName

	const memberId =
		Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
	newMember.setAttribute("id", `member-${memberId}`)

	const newMemberOption = document.createElement("option")
	newMemberOption.value = newMemberName
	newMemberOption.textContent = newMemberName
	newMemberOption.dataset.color = selectedColor
	memberSelect.appendChild(newMemberOption)

	newMember.appendChild(memberColor)
	newMember.appendChild(memberName)
	membersList.appendChild(newMember)
	newMemberOption.dataset.color = selectedColor

	clearInputs()
	closeWindow()
}

// const saveTask = () => {
// 	createNewTask()
// 	closeWindow()
// }
const saveTask = () => {
	createNewTask()
	// 

	closeWindow()
}

addTaskBtn.addEventListener("click", showTaskCreator)
cancelNewTaskBtn.addEventListener("click", closeWindow)
saveNewTaskBtn.addEventListener("click", saveTask)

addMemberBtn.addEventListener("click", showMemberCreator)
cancelMember.addEventListener("click", closeWindow)
saveMember.addEventListener("click", saveNewMember)
