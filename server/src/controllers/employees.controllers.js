const { request, response } = require("express");

const employeeController = {}
const Employee = require('../models/Employee');

    employeeController.getEmployees = async (request, response) => {
       const employees = await Employee.find()
       response.json(employees)
    }
    employeeController.createEmployee = async (request, response) => {
        try{
        const newEmployee = new Employee(request.body)
        await newEmployee.save()
        response.send({message: 'Employee created'})
        }
        catch(error){
        response.send({ message: 'Fallo al crear'})
        }
    };
    employeeController.getEmployee = async (request, response) => {
        const employee = await Employee.findById(request.params.id)
        response.send(employee);
    };

    employeeController.editEmployee = async (request, response) => {
        await Employee.findByIdAndUpdate(request.params.id, request.body)
        response.json({status: 'Employee updated'})
    };
    employeeController.deleteEmployee =  async (request, response) => {
        try{
        await Employee.findByIdAndDelete(request.params.id)
        response.json({status: 'Employee deleted'})
        }
        catch(error){
            response.send({ message: 'Fallo al eliminar'})
        }
    };





module.exports = employeeController;