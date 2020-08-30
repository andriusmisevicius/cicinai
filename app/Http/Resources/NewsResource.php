<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
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
            'slug' => $this->slug,
            'content' => $this->content,
            'imagePath' => $this->image_path,
            'categoryId' => $this->category_id,
            'createdAt' => Carbon::parse($this->created_at)->addHours(3)->format('Y-m-d H:i:s')
        ];
    }
}
