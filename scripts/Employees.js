import { getEmployees } from "./database.js"
import { getOrders} from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                let sales = 0
                for (const order of getOrders()) {
                    if (order.employeeId === parseInt(employeeId)) {
                        sales += 1
                    }
                } 
                if (employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} has sold ${sales}`)
                }
            }
        }
    }
)

let employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

