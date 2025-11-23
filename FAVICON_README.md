Favicon instructions

The project now references the following root files in `index.html`:

- /apple-touch-icon.png
- /favicon-32x32.png
- /favicon-16x16.png
- /site.webmanifest

I created a `site.webmanifest` that references the existing `src/assets/myimage.png` as an icon. If you want proper PNG favicons at the root (recommended), place your PNG files with the exact names above in the project root. Example file names:

- apple-touch-icon.png (180x180)
- favicon-32x32.png (32x32)
- favicon-16x16.png (16x16)

After adding them, hard-refresh your browser (Ctrl+F5) to see the new icons.
