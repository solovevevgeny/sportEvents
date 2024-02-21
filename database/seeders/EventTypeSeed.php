<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\EventType;

class EventTypeSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $eventType = new EventType();
        $eventType->title = "Бег";
        $eventType->save();

        $eventType = new EventType();
        $eventType->title = "SUP";
        $eventType->save();

        $eventType = new EventType();
        $eventType->title = "Трейл";
        $eventType->save();

        $eventType = new EventType();
        $eventType->title = "Ски альпинизм";
        $eventType->save();

        $eventType = new EventType();
        $eventType->title = "Велосипед";
        $eventType->save();

        $eventType = new EventType();
        $eventType->title = "Гонки с препятствиями";
        $eventType->save();

        $eventType = new EventType();
        $eventType->title = "Лыжные гонки";
        $eventType->save();

    }
}
