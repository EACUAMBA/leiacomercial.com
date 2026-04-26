<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'old_price'];

    public function files(): HasMany
    {
        return $this->hasMany(File::class);
    }

    public function coverFile()
    {
        return $this->hasOne(File::class)->where('cover', true)
            ->withDefault(function ($file, $product) {
            /** @var Product $product */
            $fallback = $product->files()->oldest()->first();
            return $fallback ? $fallback->getAttributes() : ['path' => 'no-image.png'];
        });
    }

    public function getCoverPathAttribute()
    {
        $file = $this->coverFile;
        if ($file && Storage::disk('public')->exists($file->path)) {
            return $file->path;
        }

        return "no-image.png";
    }
}
