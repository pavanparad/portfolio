import sys
import os
from PIL import Image

print("Importing rembg...", flush=True)
from rembg import new_session, remove

input_path = os.path.abspath("public/images/pavan-hero.jpg")
output_path = os.path.abspath("public/images/pavan-hero-cutout.png")

print(f"Input: {input_path}", flush=True)
print(f"Output: {output_path}", flush=True)

img = Image.open(input_path)
print(f"Image size: {img.size}", flush=True)

print("Initializing rembg session (u2net)...", flush=True)
session = new_session("u2net")
print("Session initialized! Removing background...", flush=True)

out = remove(img, session=session)
print("Saving PNG cutout...", flush=True)
out.save(output_path, "PNG")

print(f"SUCCESS! Output saved: {output_path} ({os.path.getsize(output_path)} bytes)", flush=True)
