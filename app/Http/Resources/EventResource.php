<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'url' => $this->url,
            'slug' => $this->slug,
            'content' => $this->content,
            'imagePath' => $this->image_path,
            'date' => Carbon::parse($this->date)->format('Y-m-d H:i:s')
        ];
    }
}
