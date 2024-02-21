<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\EventType;
use App\Models\Location;

class Event extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];

    public function EventType(){
        return $this->hasOne(EventType::class,'id','eventtype_id');
    }

    public function location(){
        return $this->hasOne(Location::class, 'id', 'location_id');
    }

}
