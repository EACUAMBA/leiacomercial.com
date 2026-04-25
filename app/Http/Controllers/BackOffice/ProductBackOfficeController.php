<?php

namespace App\Http\Controllers\BackOffice;


use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Controller;
use Inertia\Inertia;
use Intervention\Image\Alignment;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Format;
use Intervention\Image\ImageManager;

class ProductBackOfficeController extends Controller
{
    public function index()
    {
        return Inertia::render('products/index');
    }

    public function create()
    {
        return Inertia::render('products/create');
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|nullable',
            'price' => 'required|numeric|min:0',
            'mediaFiles.*.file' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'mediaFiles.*.id' => 'nullable',
            'mediaFiles.*.uuid' => 'nullable',
            'mediaFiles.*.path' => 'nullable',
            'visible' => 'required',
            'cover' => 'required',
        ]);

        try {

            DB::beginTransaction();

            $product = new Product();
            $product->name = $validated['name'];
            $product->slug = Str::slug($validated['name']);
            $product->description = $validated['description'];
            $product->price = $validated['price'];
            $product->visible = $validated['visible'];
            $product->save();

            foreach ($validated['mediaFiles'] as $mediaFile) {
                /** @var UploadedFile $file */
                $file = $mediaFile['file'];

                $fileNameWithExtension = Str::uuid() . '.' . $file->getClientOriginalExtension();
                $filePath = 'products' . '/' . $product->id . '/' . $fileNameWithExtension;
                Storage::drive('public')->put($filePath, file_get_contents($file->getRealPath()));

                $this->compress(Storage::drive('public')->path($filePath), Storage::drive('public')->path($filePath));

                $file = new File();
                $file->name = $fileNameWithExtension;
                $file->path = $filePath;
                $file->cover = $mediaFile['uuid'] === $validated['cover'];
                $file->product()->associate($product);
                $file->save();
            }

            DB::commit();
            return Redirect::route('backoffice.products');
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception->getMessage(), [$exception]);
        }
    }

    public function show(string $id)
    {

    }

    public function edit(string $id)
    {

    }

    public function update(string $id)
    {

    }

    public function destroy(string $id)
    {

    }

    public function compress($path, $targetPath)
    {
        $manager = ImageManager::usingDriver(Driver::class);
        $image = $manager->decodePath($path);
        $watermark = $manager->decodePath(public_path('/images/logotipo-text-for-light.png'));
        $watermark->scale($image->width() * 0.25);
        $image->insert($watermark, x: 5, y: 5, alignment: Alignment::BOTTOM_LEFT, transparency: 0.7);
        $image->insert($watermark, x: 5, y: 5, alignment: Alignment::TOP_RIGHT, transparency: 0.7);
        $encoded = $image->encodeUsingFormat(Format::JPEG, quality: 65);
        $encoded->save($path);
    }
}
