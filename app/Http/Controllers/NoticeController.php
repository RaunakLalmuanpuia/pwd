<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notice;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class NoticeController extends Controller
{
    public function __construct(protected Notice $notification){}

    public function index()
    {
        $notices = Notice::all();
        return Inertia::render('Notice/Index',[
            'notices' => $notices
        ]);
    }
    public function create()
    {
        return Inertia::render('Notice/Create');
    }

    public function detail(Request $request,Notice $model)
    {
        return [
            'data' =>$model->load(relations: 'attachment')
        ];
    }
    public function published(Request $request,Notice $model)
    {
        return [
            'list' => Notice::query()->where('published', true)->latest()->take(7)->get()
        ];
    }
    public function store(Request $request)
    {
        // dd($request);
        $data = Notice::query()->create($request->only($this->notification->getFillable()));
        if ($request->hasFile('attachment')) {
            $file = $request->file('attachment');
            $path=Storage::disk('public')->put('notification', $file);
            $data->attachment = $path;
//            $data->attachment()->create([
//                'original_name' => $file->getClientOriginalName(),
//                'mime' => $file->getMimeType(),
//                'path' => $path,
//            ]);

        }
        return redirect()->toRoute('notice.index')->with('success','Notice created successfully');
//        return [
//            'data' => $data,
//            'message'=>'Notice created successfully'
//        ];
    }

    public function edit(Notice $model)
    {
        return inertia('Notice/Edit', [
            'data'=>$model
        ]);
    }
    public function publish(Request $request, Notice $notice)
    {
        $notice->published = true;
        $notice->save();

        return response()->json([
            'data' => $notice,
            'list' => Notice::paginate(), // Adjust pagination as necessary
            'message' => 'Notice published successfully',
        ]);
    }

    public function unpublish(Request $request, Notice $notice)
    {
        $notice->published = false;
        $notice->save();

        return response()->json([
            'data' => $notice,
            'list' => Notice::paginate(),
            'message' => 'Notice unpublished successfully',
        ]);
    }


    public function update(Request $request, Notice $model)
    {



        $request->validate([
            'title' => 'required',
            'content' => 'required|string|max:255',
            'published_at' => 'required',
            'published' => 'required',

        ]);

        try {
            $model->update([
                'title' => $request->title,
                'content' => $request->content,
                'published_at' => $request->published_at,
                'published' => $request->published,
            ]);
            return response()->json([
                'message' => 'Notice updated successfully',
                'redirect' => route('notice.index')
            ]);
        }
        catch(\Throwable $th){
            return response()->json([
                'error' => 'Failed to update the Notice'
            ], 500);
        }


    }
    public function destroy(Request $request,Notice $model)
    {

        $model->delete();

        return [
            'list' => Notice::query()->paginate(),
            'message'=>'Notice deleted successfully'
        ];
    }
}
