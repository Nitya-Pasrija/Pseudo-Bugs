import '../index.css';
import { v4 as uuidv4 } from 'uuid';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Bnavbar from '../components/Bnavbar';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Employees() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Technical Writer',
            role: 'Need a technical writer for ChatGPT routing techniques',
            img: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 2,
            name: 'VideoGrapher',
            role: 'VideoGrapher for Github ads',
            img: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    ]);

    function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
            if (id == employee.id) {
                return { ...employee, name: newName, role: newRole };
            }

            return employee;
        });
        setEmployees(updatedEmployees);
    }
    function newEmployee(name, role, img) {
        const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
        };
        setEmployees([...employees, newEmployee]);
    }
    const showEmployees = true;
    return (

        <div className="">
            <Bnavbar/>
            <div className="d-grid gap-2">
                <Button variant="secondary" className="bg-red" size="lg">
                    Your Gig Posts
                </Button>
            </div>
            <ProgressBar striped variant="success" now={100} />
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {employees.map((employee) => {
                            const editEmployee = (
                                <EditEmployee
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    updateEmployee={updateEmployee}
                                />
                            );
                            return (
                                <Employee
                                    key={employee.id}
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    editEmployee={editEmployee}
                                />
                            );
                        })}
                    </div>
                    <AddEmployee newEmployee={newEmployee} />
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}
export default Employees;