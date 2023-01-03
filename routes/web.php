<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/get/employee/list', [EmployeeController::class, 'getEmployeeList'])->name('employee.list');
Route::post('/get/employee/details', [EmployeeController::class, 'getEmployeeDetails'])->name('employee.details');
