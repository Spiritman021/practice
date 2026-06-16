import fitz
import pytesseract
from PIL import Image
import io
import os

pytesseract.pytesseract.tesseract_cmd = '/opt/homebrew/bin/tesseract'

doc = fitz.open('/Users/vanand/Downloads/120 rules practice set 1-2.pdf')
orientations = {
    1: 0,
    2: 0,
    3: 180,
    4: 180,
    5: 180,
    6: 90,
    7: 180
}

for i in range(1, 8):
    page = doc[i-1]
    mat = fitz.Matrix(2, 2)  # 2x zoom for better OCR
    pix = page.get_pixmap(matrix=mat)
    img_data = pix.tobytes("png")
    img = Image.open(io.BytesIO(img_data))
    
    # Rotate if needed
    angle = orientations[i]
    if angle != 0:
        img = img.rotate(angle, expand=True)
        
    # Split RGB channels and use Red channel to strip highlights
    r, g, b = img.split()
    w, h = r.size
    
    # Left half
    left_img = r.crop((0, 0, int(w * 0.5), h))
    left_txt = pytesseract.image_to_string(left_img)
    with open(f'page{i}_left.txt', 'w') as f:
        f.write(left_txt)
        
    # Right half
    right_img = r.crop((int(w * 0.5), 0, w, h))
    right_txt = pytesseract.image_to_string(right_img)
    with open(f'page{i}_right.txt', 'w') as f:
        f.write(right_txt)
        
    print(f"Page {i} processed. Left: {len(left_txt)} chars, Right: {len(right_txt)} chars")
