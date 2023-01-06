<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{
    //get employee list from database
    public function getEmployeeList()
    {
        try {
            $employees = Employee::all();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //get employee details 
    public function getEmployeeDetails(Request $request)
    {
        try {
            $employee = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employee);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //deleting employee data
    public function deleteEmployeeData(Employee $employee)
    {
        try {
            $employee->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //storing employee data
    public function storeEmployeeData(Request $request)
    {
        try {
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');
            Employee::create([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //updating employee data
    public function updateEmployeeData(Request $request){
        try {
            $employeeId=$request->get('employeeId');
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');
            Employee::where("id",$employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
