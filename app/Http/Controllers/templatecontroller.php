<?php 

namespace App\Http\Controllers;

    use Iluminate\Http\request;

    class TemplateController extends Controllers
{
    /**
     * Create a new controller instance
     * 
     * @return void
     */
    public function __construct()
        {
            $this->middleware('auth');
         }
    /**
     * Show the application dashboard.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
        {
             return view('template');
         }
}