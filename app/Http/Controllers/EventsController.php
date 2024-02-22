<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;


class EventsController extends Controller
{
    public function index(){
        $events = Event::with('location','EventType')->orderBy('start_date')->get();
        return response($events, 200);

    }

    public function show($id) {
        $event = Event::findOrFail($id);
        return response($event, 200);
    }

}

