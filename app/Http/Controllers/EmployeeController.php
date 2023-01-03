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
}
