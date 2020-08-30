<?php

use App\Http\Resources\AboutResource;
use App\Http\Resources\BusinessResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\NewsResource;
use App\Models\About;
use App\Models\Business;
use App\Models\Category;
use App\Models\Event;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/apie-mus', function () {
    return AboutResource::collection(About::orderBy('position','DESC')->get());
});

Route::get('/categories', function () {
    return Category::all()->pluck('title')->toArray();
});

Route::get('/news', function (Request $request) {
    if ($request->query('category')){
        return NewsResource::collection(Category::where('title',$request->query('category'))
            ->first()
            ->news()
            ->orderBy('created_at','DESC')
            ->paginate(8)
        );
    }
    return NewsResource::collection(News::orderBy('created_at','DESC')->paginate(8));
});

Route::get('/article/{slug}', function ($slug = null) {
    return new NewsResource(News::where('slug',$slug)->first());
});

Route::get('/businesses', function () {
    return BusinessResource::collection(Business::all());
});

Route::get('/events', function (Request $request) {
    if ($request->query('date')){
        $date = \Carbon\Carbon::parse($request->query('date'));
        return EventResource::collection(Event::whereDate('date',$date)->orderBy('date','DESC')->paginate(8));
    }
    return EventResource::collection(Event::where('date','>=',now())->orderBy('date','DESC')->paginate(8));
});

Route::get('/event/{slug}', function ($slug = null) {
    return new EventResource(Event::where('slug',$slug)->first());
});

Route::get('/landing', function () {
    return [
        'news' => NewsResource::collection(News::latest()->take(3)->get()),
        'events' => EventResource::collection(Event::latest()->take(3)->get())
    ];
});
