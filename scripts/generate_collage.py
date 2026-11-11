import math
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import numpy as np

def create_surreal_collage():
    width = 1800
    height = 1400
    collage = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    
    # Center origin where head meets collage at the bottom center:
    origin_x = width // 2
    origin_y = height - 120

    # Helper function to create drop shadow for any layer
    def add_drop_shadow(image, offset=(8, 14), blur_radius=16, shadow_color=(23, 21, 29, 130)):
        shadow = Image.new("RGBA", (image.width + blur_radius * 4, image.height + blur_radius * 4), (0, 0, 0, 0))
        # Create shadow mask from image alpha
        alpha = image.split()[-1]
        shadow_mask = Image.new("RGBA", image.size, shadow_color)
        shadow_mask.putalpha(alpha)
        
        pos_x = blur_radius * 2 + offset[0]
        pos_y = blur_radius * 2 + offset[1]
        shadow.paste(shadow_mask, (pos_x, pos_y), shadow_mask)
        shadow = shadow.filter(ImageFilter.GaussianBlur(blur_radius))
        
        # Paste original image on top of shadow
        shadow.paste(image, (blur_radius * 2, blur_radius * 2), image)
        return shadow, blur_radius * 2

    # -------------------------------------------------------------
    # 1. RETRO CRT COMPUTER MONITOR (Central Anchor, tilted slightly)
    # -------------------------------------------------------------
    def draw_retro_monitor():
        w, h = 380, 310
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Outer casing: 90s retro cyber beige / warm grey
        casing_color = (220, 215, 226, 255)
        casing_shadow = (175, 168, 184, 255)
        draw.rounded_rectangle([10, 10, w - 10, h - 30], radius=24, fill=casing_color, outline=(140, 130, 155, 255), width=4)
        # 3D bevel bottom
        draw.rounded_rectangle([15, h - 45, w - 15, h - 30], radius=8, fill=casing_shadow)
        
        # Bevel rim
        draw.rounded_rectangle([32, 28, w - 32, h - 60], radius=16, fill=(35, 30, 45, 255), outline=(100, 90, 115, 255), width=3)
        # Inner glowing CRT screen (deep purple/midnight with glowing cyan/lavender UI)
        draw.rounded_rectangle([42, 38, w - 42, h - 70], radius=12, fill=(18, 15, 26, 255))
        
        # CRT grid lines & waveform
        for y_line in range(50, h - 80, 14):
            draw.line([48, y_line, w - 48, y_line], fill=(45, 35, 65, 140), width=1)
        
        # Glowing timeline & audio waveform on CRT screen
        points = []
        for x_val in range(55, w - 55, 6):
            rel = (x_val - 55) / (w - 110)
            amp = math.sin(rel * 14) * 26 * math.sin(rel * 3.14)
            points.append((x_val, 135 + amp))
        if len(points) > 1:
            draw.line(points, fill=(168, 139, 234, 255), width=3)
            # Orange playhead
            draw.line([190, 48, 190, h - 78], fill=(255, 123, 57, 255), width=3)
            draw.polygon([(184, 46), (196, 46), (190, 56)], fill=(255, 123, 57, 255))
        
        # Small screen text
        draw.text((55, 52), "REC ● 01:24:08:14", fill=(220, 203, 250, 220))
        draw.text((55, h - 92), "NLE MASTER TIMELINE // 4K 24FPS", fill=(175, 160, 205, 180))
        
        # Monitor power buttons & logo
        draw.ellipse([w - 60, h - 48, w - 48, h - 36], fill=(168, 139, 234, 255)) # power LED
        draw.rectangle([70, h - 46, 120, h - 38], fill=(180, 170, 195, 255))
        
        return img.rotate(-6, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 2. VINTAGE CAMERA & MODERN CINEMA LENS (Left Side)
    # -------------------------------------------------------------
    def draw_vintage_camera():
        w, h = 340, 240
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Camera body: Textured silver metal top, textured black leatherette body
        # Black leatherette base
        draw.rounded_rectangle([20, 75, w - 20, h - 20], radius=16, fill=(28, 25, 33, 255), outline=(15, 12, 18, 255), width=2)
        # Silver top plate
        draw.rounded_rectangle([20, 35, w - 20, 85], radius=12, fill=(215, 218, 225, 255), outline=(160, 165, 175, 255), width=3)
        draw.rectangle([20, 60, w - 20, 85], fill=(215, 218, 225, 255))
        
        # Viewfinder & Prism housing in center
        draw.polygon([(w//2 - 45, 35), (w//2 + 45, 35), (w//2 + 35, 10), (w//2 - 35, 10)], fill=(195, 200, 210, 255), outline=(150, 155, 165, 255))
        # Viewfinder glass
        draw.rectangle([w//2 - 20, 18, w//2 + 20, 32], fill=(40, 45, 60, 255), outline=(120, 130, 150, 255))
        
        # Dials on top
        draw.rounded_rectangle([45, 18, 90, 36], radius=4, fill=(180, 185, 195, 255), outline=(130, 135, 145, 255), width=2)
        draw.rounded_rectangle([w - 95, 18, w - 50, 36], radius=4, fill=(180, 185, 195, 255), outline=(130, 135, 145, 255), width=2)
        # Shutter button with red/orange accent
        draw.ellipse([w - 85, 8, w - 65, 22], fill=(255, 95, 45, 255), outline=(180, 185, 195, 255), width=2)

        # Big Prime Lens (front center)
        cx, cy = w // 2, 135
        # Outer barrel
        draw.ellipse([cx - 85, cy - 85, cx + 85, cy + 85], fill=(35, 32, 42, 255), outline=(210, 215, 225, 255), width=6)
        draw.ellipse([cx - 72, cy - 72, cx + 72, cy + 72], fill=(18, 15, 24, 255), outline=(150, 155, 165, 255), width=3)
        # Aperture glass sheen (purple/amber anti-reflective coating)
        draw.ellipse([cx - 58, cy - 58, cx + 58, cy + 58], fill=(22, 18, 32, 255))
        # Lens flare reflection arcs
        draw.arc([cx - 48, cy - 48, cx + 48, cy + 48], start=210, end=330, fill=(168, 139, 234, 240), width=5)
        draw.arc([cx - 36, cy - 36, cx + 36, cy + 36], start=30, end=140, fill=(255, 165, 85, 220), width=4)
        draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], fill=(10, 8, 14, 255))

        # Brand badge: "MPC 35mm F/1.4"
        draw.text((35, h - 42), "PAVAN CINEMA", fill=(195, 200, 215, 220))
        draw.text((w - 110, h - 42), "35MM T1.5", fill=(255, 180, 75, 240))

        return img.rotate(14, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 3. 35MM CELLULOID FILM REEL (Right Side, Top)
    # -------------------------------------------------------------
    def draw_film_reel():
        r = 130
        w = r * 2 + 40
        img = Image.new("RGBA", (w, w), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        cx, cy = w // 2, w // 2
        
        # Outer metal flange (matte champagne-gold & deep charcoal)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(42, 38, 50, 255), outline=(225, 205, 160, 255), width=7)
        # Inner rim
        draw.ellipse([cx - r + 18, cy - r + 18, cx + r - 18, cy + r - 18], outline=(168, 139, 234, 200), width=3)
        
        # 5 Circular Cutouts in the metal reel flange
        cutout_radius = 32
        orbit_radius = 64
        for i in range(5):
            angle = (i * 2 * math.pi) / 5
            kx = cx + math.cos(angle) * orbit_radius
            ky = cy + math.sin(angle) * orbit_radius
            draw.ellipse([kx - cutout_radius, ky - cutout_radius, kx + cutout_radius, ky + cutout_radius], fill=(0, 0, 0, 0), outline=(215, 195, 150, 255), width=4)
            # Film holes inside cutout
            draw.arc([kx - cutout_radius + 4, ky - cutout_radius + 4, kx + cutout_radius - 4, ky + cutout_radius - 4], start=0, end=360, fill=(120, 110, 135, 180), width=2)

        # Center hub
        draw.ellipse([cx - 28, cy - 28, cx + 28, cy + 28], fill=(225, 205, 160, 255), outline=(160, 135, 90, 255), width=3)
        draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(25, 22, 30, 255))
        
        return img.rotate(-18, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 4. CURLED FILM STRIP RIBBON
    # -------------------------------------------------------------
    def draw_film_strip():
        w, h = 540, 180
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Generate wave ribbon
        points_top = []
        points_bot = []
        for x in range(0, w, 8):
            y_base = 80 + math.sin(x * 0.018) * 35 + math.cos(x * 0.035) * 15
            points_top.append((x, y_base - 36))
            points_bot.append((x, y_base + 36))

        # Fill strip polygon
        poly = points_top + points_bot[::-1]
        draw.polygon(poly, fill=(24, 20, 30, 250), outline=(80, 70, 95, 255))
        
        # Draw frame boxes and sprocket holes along ribbon
        step = 42
        for i in range(12, w - 50, step):
            x = i
            y_mid = 80 + math.sin(x * 0.018) * 35 + math.cos(x * 0.035) * 15
            # Sprocket holes top & bottom
            draw.rounded_rectangle([x + 4, y_mid - 32, x + 16, y_mid - 24], radius=2, fill=(245, 240, 250, 240))
            draw.rounded_rectangle([x + 4, y_mid + 24, x + 16, y_mid + 32], radius=2, fill=(245, 240, 250, 240))
            
            # Film frame cell with color preview
            frame_colors = [(168, 139, 234, 180), (255, 123, 57, 180), (225, 205, 160, 180), (137, 100, 222, 180)]
            fc = frame_colors[(i // step) % len(frame_colors)]
            draw.rounded_rectangle([x + 6, y_mid - 18, x + 34, y_mid + 18], radius=3, fill=(12, 10, 16, 255), outline=fc, width=2)
            # Mini crosshair inside frame
            draw.line([x + 16, y_mid, x + 24, y_mid], fill=fc, width=1)
            draw.line([x + 20, y_mid - 4, x + 20, y_mid + 4], fill=fc, width=1)

        return img.rotate(12, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 5. ADOBE PREMIERE PRO (Pr) & AFTER EFFECTS (Ae) 3D ICONS
    # -------------------------------------------------------------
    def draw_app_icon(badge_text="Pr", border_color=(153, 153, 255, 255), fill_color=(0, 0, 90, 255)):
        size = 130
        img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Rounded app squircle with 3D drop depth
        draw.rounded_rectangle([6, 6, size - 6, size - 6], radius=28, fill=(15, 12, 22, 255), outline=border_color, width=5)
        # Inner subtle gradient / glow
        draw.rounded_rectangle([14, 14, size - 14, size - 14], radius=20, fill=(25, 20, 36, 255))
        
        # Draw bold typography badge
        draw.text((size // 2 - 30, size // 2 - 38), badge_text, fill=border_color, font=None)
        # Draw bold letters with thick lines if default font is small
        if badge_text == "Pr":
            # P
            draw.line([38, 38, 38, 92], fill=border_color, width=9)
            draw.arc([24, 38, 70, 72], start=270, end=90, fill=border_color, width=9)
            draw.line([38, 38, 52, 38], fill=border_color, width=9)
            draw.line([38, 72, 52, 72], fill=border_color, width=9)
            # r
            draw.line([82, 55, 82, 92], fill=border_color, width=8)
            draw.arc([75, 52, 102, 75], start=220, end=360, fill=border_color, width=7)
        elif badge_text == "Ae":
            # A
            draw.line([34, 92, 54, 38], fill=border_color, width=8)
            draw.line([54, 38, 74, 92], fill=border_color, width=8)
            draw.line([42, 74, 66, 74], fill=border_color, width=7)
            # e
            draw.arc([78, 54, 110, 92], start=0, end=360, fill=border_color, width=7)
            draw.line([79, 73, 108, 73], fill=border_color, width=7)

        return img

    # -------------------------------------------------------------
    # 6. GOLD "CP" BRAND MONOGRAM EMBLEM
    # -------------------------------------------------------------
    def draw_gold_cp_monogram():
        size = 170
        img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        cx, cy = size // 2, size // 2
        r = 68
        
        # Metallic gold gradient circle
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(30, 24, 38, 255), outline=(225, 195, 130, 255), width=6)
        # Inner decorative beaded rim
        draw.ellipse([cx - r + 10, cy - r + 10, cx + r - 10, cy + r - 10], outline=(180, 150, 95, 255), width=2)
        
        # Engraved "CP" Monogram (Creative Pavan)
        # Gold color
        gc = (240, 215, 150, 255)
        # C
        draw.arc([cx - 50, cy - 36, cx + 2, cy + 36], start=45, end=315, fill=gc, width=9)
        # P overlapping C
        draw.line([cx - 2, cy - 36, cx - 2, cy + 38], fill=gc, width=9)
        draw.arc([cx - 14, cy - 36, cx + 46, cy + 8], start=270, end=90, fill=gc, width=9)
        draw.line([cx - 2, cy - 36, cx + 16, cy - 36], fill=gc, width=9)
        draw.line([cx - 2, cy + 8, cx + 16, cy + 8], fill=gc, width=9)

        # 4 Accent Sparks around coin rim
        for a in [0, 90, 180, 270]:
            rad = math.radians(a)
            sx = cx + math.cos(rad) * (r - 2)
            sy = cy + math.sin(rad) * (r - 2)
            draw.ellipse([sx - 4, sy - 4, sx + 4, sy + 4], fill=(255, 240, 190, 255))

        return img.rotate(8, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 7. VIDEO EDITING MULTI-TRACK TIMELINE FLOATING BLOCK
    # -------------------------------------------------------------
    def draw_timeline_interface():
        w, h = 420, 130
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Dark NLE glass panel
        draw.rounded_rectangle([0, 0, w, h], radius=14, fill=(20, 17, 28, 250), outline=(168, 139, 234, 180), width=3)
        
        # Time ruler bar
        draw.rectangle([10, 10, w - 10, 28], fill=(32, 27, 44, 255))
        for x in range(20, w - 20, 16):
            h_tick = 8 if (x % 32 == 0) else 4
            draw.line([x, 28 - h_tick, x, 28], fill=(160, 145, 185, 200), width=1)
        draw.text((25, 12), "00:00:14:02", fill=(220, 205, 245, 220))
        draw.text((w - 110, 12), "24.00 FPS", fill=(255, 140, 65, 240))
        
        # Video Track 1 (V1)
        draw.rounded_rectangle([15, 36, 120, 58], radius=4, fill=(168, 139, 234, 230), outline=(220, 200, 255, 255))
        draw.text((24, 40), "CLIP_A [4K]", fill=(20, 15, 30, 255))
        draw.rounded_rectangle([126, 36, 260, 58], radius=4, fill=(137, 100, 222, 230), outline=(200, 175, 255, 255))
        draw.text((135, 40), "AFTERMOVIE_REC", fill=(20, 15, 30, 255))
        draw.rounded_rectangle([266, 36, w - 15, 58], radius=4, fill=(255, 123, 57, 230), outline=(255, 180, 135, 255))
        draw.text((276, 40), "COLOR_GRADE", fill=(20, 15, 30, 255))
        
        # Audio Track 1 (A1 - with waveform bars)
        draw.rounded_rectangle([15, 66, 230, 88], radius=4, fill=(55, 42, 78, 240), outline=(120, 95, 160, 200))
        # Waveform inside
        for wx in range(25, 220, 5):
            wamp = math.sin(wx * 0.4) * 8
            draw.line([wx, 77 - abs(wamp), wx, 77 + abs(wamp)], fill=(225, 205, 160, 240), width=2)
            
        draw.rounded_rectangle([236, 66, w - 15, 88], radius=4, fill=(45, 35, 65, 240), outline=(100, 80, 140, 200))
        for wx in range(246, w - 25, 5):
            wamp = math.cos(wx * 0.3) * 7
            draw.line([wx, 77 - abs(wamp), wx, 77 + abs(wamp)], fill=(168, 139, 234, 240), width=2)

        # Orange Playhead scrubber spanning across tracks
        px = 185
        draw.line([px, 8, px, h - 8], fill=(255, 123, 57, 255), width=3)
        draw.polygon([(px - 6, 8), (px + 6, 8), (px, 18)], fill=(255, 123, 57, 255))
        
        return img.rotate(-10, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 8. MOTION GRAPHICS 3D WIREFRAME CUBE & FLOATING GEOMETRY
    # -------------------------------------------------------------
    def draw_wireframe_cube():
        size = 140
        img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Isometric wireframe cube
        p = [
            (70, 20), (120, 48), (70, 78), (20, 48), # top face
            (70, 120), (120, 92), (20, 92)           # bottom vertices
        ]
        col_purple = (168, 139, 234, 255)
        col_gold = (225, 205, 160, 255)
        
        # Top face
        draw.polygon([p[0], p[1], p[2], p[3]], fill=(168, 139, 234, 45), outline=col_purple, width=3)
        # Left face
        draw.polygon([p[3], p[2], p[4], p[6]], fill=(137, 100, 222, 60), outline=col_gold, width=3)
        # Right face
        draw.polygon([p[1], p[2], p[4], p[5]], fill=(255, 123, 57, 40), outline=col_purple, width=3)
        
        # Vertices dots
        for pt in p:
            draw.ellipse([pt[0] - 4, pt[1] - 4, pt[0] + 4, pt[1] + 4], fill=(255, 255, 255, 255))
            
        return img.rotate(22, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 9. CAMERA PRIME LENS (Separate Floating Cutout)
    # -------------------------------------------------------------
    def draw_prime_lens():
        w, h = 180, 220
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Lens barrel (cylindrical)
        draw.rounded_rectangle([25, 20, w - 25, h - 20], radius=14, fill=(28, 24, 34, 255), outline=(190, 195, 205, 255), width=4)
        # Focus ribbed grip rings
        for y in range(45, 95, 7):
            draw.line([30, y, w - 30, y], fill=(65, 60, 75, 255), width=4)
        # Aperture distance scale window
        draw.rounded_rectangle([45, 110, w - 45, 135], radius=4, fill=(12, 10, 16, 255), outline=(225, 205, 160, 255), width=2)
        draw.text((54, 114), "1.5m  2m  3m  ∞", fill=(255, 240, 200, 220))
        # Red ring (Cinema series red line!)
        draw.line([25, 150, w - 25, 150], fill=(255, 70, 50, 255), width=5)
        # Front element rim
        draw.rounded_rectangle([20, h - 35, w - 20, h - 15], radius=6, fill=(180, 185, 195, 255))

        return img.rotate(-24, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # 10. EDITORIAL TYPOGRAPHY & FLOATING SHARDS
    # -------------------------------------------------------------
    def draw_floating_badge(text="01/24", bg_color=(23, 21, 29, 240), text_color=(220, 203, 250, 255)):
        w, h = 110, 44
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        draw.rounded_rectangle([2, 2, w - 2, h - 2], radius=8, fill=bg_color, outline=text_color, width=2)
        draw.text((16, 12), text, fill=text_color)
        return img.rotate(15, expand=True, resample=Image.BICUBIC)

    # -------------------------------------------------------------
    # ASSEMBLE THE SURREAL COLLAGE WITH DEPTH & LAYER ORDER
    # -------------------------------------------------------------
    print("Generating surreal collage assets...", flush=True)

    # Layer 1: Background Ambient Purple/Gold Burst Flares
    flare = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    flare_draw = ImageDraw.Draw(flare)
    # Organic soft glows behind collage elements
    flare_draw.ellipse([origin_x - 420, origin_y - 620, origin_x + 420, origin_y + 120], fill=(168, 139, 234, 55))
    flare_draw.ellipse([origin_x - 260, origin_y - 480, origin_x + 280, origin_y + 40], fill=(225, 205, 160, 40))
    flare = flare.filter(ImageFilter.GaussianBlur(50))
    collage.paste(flare, (0, 0), flare)

    # Layer 2: Film Strip Ribbon (sweeping across background from right to left)
    film_strip = draw_film_strip()
    strip_with_shadow, pad = add_drop_shadow(film_strip, offset=(10, 16), blur_radius=18)
    collage.paste(strip_with_shadow, (origin_x - 380 - pad, origin_y - 560 - pad), strip_with_shadow)

    # Layer 3: Retro CRT Monitor (Center-Left Anchor)
    monitor = draw_retro_monitor()
    monitor_with_shadow, pad = add_drop_shadow(monitor, offset=(14, 22), blur_radius=22)
    collage.paste(monitor_with_shadow, (origin_x - 320 - pad, origin_y - 480 - pad), monitor_with_shadow)

    # Layer 4: 35mm Film Reel (Top-Right)
    reel = draw_film_reel()
    reel_with_shadow, pad = add_drop_shadow(reel, offset=(12, 18), blur_radius=20)
    collage.paste(reel_with_shadow, (origin_x + 110 - pad, origin_y - 620 - pad), reel_with_shadow)

    # Layer 5: Vintage SLR & Cinema Camera (Center-Right Anchor)
    camera = draw_vintage_camera()
    camera_with_shadow, pad = add_drop_shadow(camera, offset=(16, 24), blur_radius=22)
    collage.paste(camera_with_shadow, (origin_x + 40 - pad, origin_y - 420 - pad), camera_with_shadow)

    # Layer 6: Prime Camera Lens (Far Left)
    lens = draw_prime_lens()
    lens_with_shadow, pad = add_drop_shadow(lens, offset=(8, 14), blur_radius=16)
    collage.paste(lens_with_shadow, (origin_x - 560 - pad, origin_y - 460 - pad), lens_with_shadow)

    # Layer 7: Video Editing Multi-Track Timeline (Front Center Crossing)
    timeline = draw_timeline_interface()
    timeline_with_shadow, pad = add_drop_shadow(timeline, offset=(12, 20), blur_radius=20)
    collage.paste(timeline_with_shadow, (origin_x - 220 - pad, origin_y - 280 - pad), timeline_with_shadow)

    # Layer 8: Adobe Premiere Pro (Pr) Icon (Top Left Floating)
    pr_icon = draw_app_icon("Pr", border_color=(205, 175, 255, 255), fill_color=(25, 15, 45, 255)).rotate(-15, expand=True, resample=Image.BICUBIC)
    pr_shadow, pad = add_drop_shadow(pr_icon, offset=(8, 12), blur_radius=14)
    collage.paste(pr_shadow, (origin_x - 440 - pad, origin_y - 620 - pad), pr_shadow)

    # Layer 9: Adobe After Effects (Ae) Icon (Top Right Floating)
    ae_icon = draw_app_icon("Ae", border_color=(168, 139, 234, 255), fill_color=(20, 10, 40, 255)).rotate(18, expand=True, resample=Image.BICUBIC)
    ae_shadow, pad = add_drop_shadow(ae_icon, offset=(8, 12), blur_radius=14)
    collage.paste(ae_shadow, (origin_x + 360 - pad, origin_y - 520 - pad), ae_shadow)

    # Layer 10: Gold "CP" Brand Monogram Emblem (Upper Center-Right Floating Crown)
    cp_emblem = draw_gold_cp_monogram()
    cp_shadow, pad = add_drop_shadow(cp_emblem, offset=(10, 16), blur_radius=18)
    collage.paste(cp_shadow, (origin_x + 190 - pad, origin_y - 320 - pad), cp_shadow)

    # Layer 11: 3D Wireframe Cube (Motion Graphics Element - Far Right)
    cube = draw_wireframe_cube()
    cube_shadow, pad = add_drop_shadow(cube, offset=(6, 10), blur_radius=12)
    collage.paste(cube_shadow, (origin_x + 460 - pad, origin_y - 360 - pad), cube_shadow)

    # Layer 12: Floating Editorial Badges & Celestial Accents
    badge1 = draw_floating_badge("4K REC ●", bg_color=(255, 123, 57, 240), text_color=(255, 255, 255, 255))
    collage.paste(badge1, (origin_x - 510, origin_y - 290), badge1)

    badge2 = draw_floating_badge("24 FPS", bg_color=(23, 21, 29, 240), text_color=(225, 205, 160, 255))
    collage.paste(badge2, (origin_x + 390, origin_y - 190), badge2)

    # Layer 13: Floating Stars and Particles
    spark_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(spark_layer)
    stars = [
        (origin_x - 360, origin_y - 680, 18, (225, 205, 160, 255)),
        (origin_x + 80, origin_y - 710, 22, (168, 139, 234, 255)),
        (origin_x + 330, origin_y - 660, 16, (255, 255, 255, 255)),
        (origin_x - 210, origin_y - 540, 14, (255, 140, 65, 255)),
        (origin_x + 290, origin_y - 440, 14, (225, 205, 160, 255)),
        (origin_x - 480, origin_y - 390, 12, (168, 139, 234, 255)),
    ]
    for sx, sy, size, col in stars:
        sdraw.text((sx, sy), "✦", fill=col)
        # Glow around star
        sdraw.ellipse([sx - 2, sy - 2, sx + size, sy + size], fill=(col[0], col[1], col[2], 50))
    collage.paste(spark_layer, (0, 0), spark_layer)

    # Save high-resolution transparent collage
    output_path = os.path.abspath("public/images/head-burst-collage.png")
    print(f"Saving high-res collage to {output_path}...", flush=True)
    collage.save(output_path, "PNG", optimize=True)
    print(f"Collage saved successfully! File size: {os.path.getsize(output_path)} bytes", flush=True)

if __name__ == "__main__":
    create_surreal_collage()
