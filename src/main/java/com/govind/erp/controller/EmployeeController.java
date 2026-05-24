package com.govind.erp.controller;

import com.govind.erp.dto.EmployeeDTO;
import com.govind.erp.entity.Employee;
import com.govind.erp.service.EmployeeService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @Operation(summary = "Create employee")
    @PostMapping
    public Employee createEmployee(
            @Valid @RequestBody EmployeeDTO dto){

        return employeeService.saveEmployee(dto);
    }

    @Operation(summary = "Get all employees")
    @GetMapping
    public List<Employee> getEmployees(){
        return employeeService.getAllEmployees();
    }

    @Operation(summary = "Get employee by id")
    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @Operation(summary = "Update employee")
    @PutMapping("/{id}")
    public Employee updateEmployee(
            @PathVariable Long id,
            @Valid @RequestBody Employee employee){

        return employeeService.updateEmployee(id, employee);
    }

    @Operation(summary = "Delete employee")
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }
}