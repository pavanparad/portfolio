import os
import sys
from PIL import Image
from rembg import new_session, remove

input_path = os.path.abspath("public/images/pavancamera.jpg")
output_path = os.path.abspath("public/images/pavan-about-cutout.png")

print(f"Loading: {input_path}", flush=True)
img = Image.open(input_path)
print(f"Original size: {img.size}", flush=True)

# If image is very large (4160x2340), resizing slightly (e.g. max dimension 2400) maintains ultra-high quality
# while making rembg run smoothly and accurately
max_dim = 2400
if max(img.size) > max_dim:
    ratio = max_dim / max(img.size)
    new_size = (int(img.width * ratio), int(img.height * ratio))
    print(f"Resizing to high-res: {new_size} for optimal segmentation...", flush=True)
    img_resized = img.resize(new_size, Image.LANCZOS)
else:
    img_resized = img

print("Initializing rembg session...", flush=True)
session = new_session("u2net")

print("Removing background from camera photo...", flush=True)
out = remove(img_resized, session=session)

# Crop transparent borders cleanly
bbox = out.getbbox()
if bbox:
    print(f"Cropping transparent padding to bbox: {bbox}...", flush=True)
    out = out.crop(bbox)

print(f"Final cutout dimensions: {out.size}", flush=True)
out.save(output_path, "PNG", optimize=True)
print(f"Saved successfully to: {output_path} ({os.path.getsize(output_path)} bytes)", flush=True)
