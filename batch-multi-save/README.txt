Batch Multi Save

Script for Adobe Photoshop

The script scans a folder for images, performs selected transformations, and saves copies in up to four common formats. While this functionality is similar to existing scripts (for example, Image Processor, included with Photoshop), Batch Multi Save adds capability missing from other file saving scripts.

- Process all or selected extensions
- Process raster images, PDF, AI, and vector EPS
- PDF first page, all pages, or all images
- Save PSD, TIF, JPG, and PNG 8 or 24
- Convert to any color profile
- Layers as-is, merged, or flatten
- Adjust PPI, set or resample
- Limit pixels in either dimension
- Keep paths, discard all, or keep special cases
- JPG and PNG rename for web use
- Save and restore all settings

The original idea was to automate saving final files after color correction/retouching. My working files are PSD with layers and masks, but the client doesn’t need all that. Most want something for print and web — a single layer or flattened CMYK TIF, and RGB JPG/PNG at lower resolution. Other tools accomplish most of this, but not every step in one tool, or with sufficient control. I wanted more. Also useful for web development, the script can downsample images or extract from PDFs, transform, and save in one operation.

Some example uses beyond the obvious

Suppose a project is meant for digital output, or print CMYK, but it uses duotones. The script can convert all to CMYK. Or production specs are black only. Set convert to profile to Dot Gain 20% and process a folder of images. The result is copies all grayscale, ready to relink in the layout. For magazine work, most have websites nowadays, and each new issue needs the images to post online. Export a PDF of the magazine layout in full resolution and in spreads (so crossovers are a single image). Feed that PDF to the script, set to PDF option to images, and save to JPG. At the same time limit pixel dimensions and rename for web. The result is web-ready images cropped precisely the same as the print layout. These are only a few examples.

How to use the script

The interface has four sections: Input, A group of four output formats, Output, and Settings. Enable desired options and click the OK button to begin. A progress bar is displayed while processing. To cancel processing, press the ESC key. Otherwise, when complete, the number of images processed is reported. If any concerns are encountered, a log file is written to the input folder and the user is notified.

Section 1: Input

Folder — select a folder to scan for images. If no image files are found, the user is notified.

Include subfolders — if enabled, images in the selected folder and in every folder below it are processed. If disabled, only images in the selected folder are processed.

Any extension — any file Photoshop is able to open is processed. If Photoshop cannot open a file, the error is reported in the log file. The script ignores a list of extensions we know won’t open (i.e. txt, doc, etc.). Because the script won’t even try, these are not reported in the log file.

Only the extension(s) — files matching extensions in the list are processed. Enter a single extension or separate multiple extensions with a space or comma. The preceding dot is not necessary and if present is ignored.

PDF/AI/EPS options — additional options when the script encounters PDF, Illustrator (PDF compatible), or vector EPS. The script recognizes raster EPS and processes normally, not as vector.

PDF panel — the choice to rasterize the First page or All pages, or instead extract all Images from the PDF.

Crop to — the page box used to crop the PDF page or Illustrator art. Does not apply to vector EPS, which always crop to the bounding box.

Resolution — pixels per inch used to rasterize the PDF page, Illustrator art, or vector EPS. Does not apply to PDF images, which maintain their original resolution.

Mode — the color space used to rasterize the PDF page, Illustrator art, or vector EPS. Does not apply to PDF images, which maintain their original color space. When vector files are rasterized, the color profile used is determined by the application Color Settings, just as when opening vector files directly in Photoshop. Set the desired color profiles using the menu Edit > Color Settings before launching the script.

Section 2: Group of four output formats

The script outputs images in the formats PSD, TIF, JPG, and PNG. To enable output of a format, click its checkbox Save in folder. Options available vary between formats as described below.

Options common to all output formats

Save in folder — enable the checkbox to save a version of each image in the selected format, then enter a folder name in which the copies are saved (required).

Original file name + — a suffix of characters appended to each output file name. The characters entered must be legal to use in file names. Any illegal characters are automatically removed. Having no suffix is allowed, in which case output file names exactly match input file names.

Adjust PPI to — enable the checkbox and enter the desired pixels-per-inch value.

Set/Resample — determines how Photoshop arrives at the entered PPI value. Set does not change the number of pixels, only records how many make up an inch. Resample maintains the current image dimensions (in inches) and increases or decreases the number of pixels to arrive at the entered PPI value. Note Resample method is Automatic.

Maximum pixels, width and height — enable the checkbox to limit the final pixel dimensions of the image, and enter a value in pixels for the width and/or height. It is acceptable to omit one of the dimensions. In that case, the entered dimension is limited and the other falls wherever it may. When both values are entered, neither dimension exceeds the value entered. One dimension may result in fewer pixels than entered if necessary to maintain proportions. In other words, setting both values does not define precise width and height; it only defines the upper limit of each dimension.

IMPORTANT NOTE: if the Maximum pixels option is enabled and Adjust PPI to is also enabled, it is usually best to select Set rather than Resample because PPI is adjusted before evaluating maximum pixels. When PPI is resampled to a low value (i.e. 72), the result might be fewer pixels than the maximum entered. This could be desired behavior, or possibly not. Just know that PPI adjustment happens first, then the image is reduced to limit maximum pixels.

Options unique to particular formats

PSD, TIF, and JPG

Convert to profile — converts color to the selected profile prior to saving a copy of the image. This occurs after merging layers or flattening to ensure any adjustment layers are applied in the original color space before conversion to the selected profile.

Keep all paths, Discard all paths, Keep paths... — Keep all paths leaves all paths untouched. Discard all paths removes all paths including any set to clipping path. Keep paths... displays an additional dialog with further options:

Input field — enter the path names to keep. Separate multiple path names with a comma. Match to path names is case-insensitive.

Keep first path, any name — the first path in the Paths panel is retained, regardless of its name.

Keep clipping path — the path assigned to clipping path is retained.

Vector masks: save as paths and keep all — vector mask paths and shape layer paths are copied to normal paths and named incrementally (Path 2, Path 3, etc.). Because other transformations may apply vector masks and rasterize shape layers, which then removes the actual path (for example, merge to single layer or flatten), the copying to a normal path for these elements occurs before other transformations.

PSD and TIF

Layers as-is — layers are untouched and alpha channels are retained, as well as ruler guides. This option does not exist for JPG or PNG. JPG requires the image is flattened. PNG supports a single layer, but not multiple layers, which the input image may have.

IMPORTANT NOTE: This option is disabled when other options are enabled that alter color or pixel dimensions. Adjustment layers cannot change color space and maintain faithful results, and layer effects do not scale when an image is resized. For these reasons, when the corresponding options are enabled, the image must be merged to a single layer or flattened to maintain appearance.

PSD, TIF, and PNG

Single merged layer — hidden layers are discarded and the remaining layers are merged to a single layer. If a layer mask remains, it is applied. Alpha channels and ruler guides are discarded. The option does not exist for JPG as it must be flattened.

Flatten — result is a single “Background” layer. Alpha channels and ruler guides are discarded. JPG always performs this step.

The above two options are performed before resizing so that any effects, smart objects, and shape layers are rasterized at original resolution to maintain appearance.

JPG

Embed color profile — embeds into the JPG the current color profile, either for the original color space if not converted, or the profile selected for the Convert to profile option. The option exists for JPG so that files intended for print can include profiles, important to preserve in that case, but JPG for web may omit profiles, as the profile is excess and only increases file size.

Quality — JPEG image quality. Valid range is from 0 to 12. 0 is extreme compression resulting in low quality. 12 is light compression that is virtually indistinguishable from the original, the highest possible quality, which of course, results in the largest file size. 10 to 12 is recommended for print or other high-quality reproduction. For web images, 5 to 8 is an acceptable range.

JPG and PNG

Rename for web — detects characters in the file name that require URL encoding, replaces them with a dash, and converts the file name to lowercase. Prevents URLs that look like “…/This%20is%20the%20File%20Name.jpg”. Instead the result is “…/this-is-the-file-name.jpg”.

PNG

PNG-8/PNG-24 — the choice of bit depth. PNG-8 is indexed color, (8 bits per pixel, of a single channel), whereas PNG-24 is RGB color (24 bits per pixel, or 8 bits per channel, of 3 channels). PNG-8 produces smaller files but at the cost of color precision. The user is the judge of that trade-off and which bit depth is appropriate for the project.

Section 3: Output

Alongside input files, in folders specified above — each format selected to output is saved in the specified folder, which is created in the input folder and in all subfolders if the option is enabled.

Other — select a folder and files are output to the location instead of alongside input files. If Include subfolders is enabled, all are created in the output location.

Whether output is saved alongside input files or in another folder, output files are always saved in each format’s specified Save in folder, which are required and created if needed, including within subfolders. This is necessary to avoid duplicate file name conflicts. If less complex folder structure is desired, use other tools or manually arrange input files in a flat structure before processing.

Replace existing output files — when enabled, existing output files are replaced. When disabled, the user is asked to confirm the replacement.

Section 4: Settings

The current options may be saved and restored later. Select from the Load drop-down list to choose saved settings, and the current options are updated. Click the Delete button, and the saved settings selected in the Load drop-down list are permanently removed. Click the Save button, provide a name for the settings, and the current options are preserved. If the name already exists, the user may choose to replace the saved settings. Or click the checkbox Replace settings, and choose the settings to replace.

The script provides default saved settings named [Default]. These settings cannot be deleted but may be updated to the current values. Save settings, click the checkbox Replace settings, and choose [Default].

Further reading

If you’ve reached this point, you know enough to use the script. The remainder is not crucial to read, but helps understand how the script works. This section is last, in the interest of minimizing “Too Long; Didn’t Read” (TL;DR)

Image modes and how each is processed

Of the formats Photoshop can open, the script recognizes aspects of the image and acts intelligently based on the output format. Depending on the combination of factors, images are either processed without issue, or a warning is reported in the log file when particular situations are encountered.

Bitmap — PSD and TIF support bitmap mode, but if asked to Convert to profile, the request is not supported. In this case, the image is converted to grayscale and then to the selected color profile. If Convert to profile is not enabled, bitmap images remain bitmap in PSD and TIF. JPG does not support bitmap mode, and though technically PNG does, saving bitmaps as PNG makes little sense as the format’s intent is for web graphics. JPG and PNG bitmaps are converted to grayscale, then if enabled, to the selected color profile.

Duotone — PSD is the only format (of those the script provides) that supports duotone mode. If Convert to profile is enabled, the image is converted to RGB and then to the selected color profile, otherwise remains duotone mode. TIF, JPG, and PNG do not support duotone mode, so always convert to RGB, then if enabled, to the selected color profile.

Indexed color — PSD, TIF, and PNG-8 support indexed colored and unless converted retain the original color space. JPG and PNG-24 formats do not support indexed color and convert to RGB, then if enabled, to the selected color profile.

Spot color channels — PSD and TIF are the only formats (of those the script provides) that support spot channels. For these formats, whether or not Convert to profile is enabled, spot channels are ignored and remain as-is. JPG and PNG convert to RGB and then merge spot channels to replicate the appearance of the image with the spot colors. Then, if enabled, color is converted to the selected profile.

Multichannel — PSD is the only format (of those the script provides) that support multichannel mode. Because converting multichannel to other color spaces is unreliable, the script does not attempt to do so. Therefore, there is never a change in mode. Multichannel images remain as-is. TIF, JPG, and PNG do not support multichannel mode, and because converting to other color spaces is unreliable, these formats are not saved. A warning to that effect is reported in the log file. It is recommended to work with multichannel images directly in Photoshop rather than use automated tools such as this script.

16 and 32 bits per channel — PSD and TIF support more than 8 bits per channel and will retain values higher than 8 unless Convert to profile is enabled, in which case the image is converted to 8 bits per channel and then to the selected color profile. In all cases, whether converting color or not, JPG and PNG are converted to 8 bits per channel. For the choice PNG-8, the image is further reduced to single channel 8-bit indexed color. 32 bits per channel is not entirely compatible with color management and may result in undesired color shifts, whether converting color or not. It is recommended to work with 32-bit images directly in Photoshop rather than use automated tools such as this script.

TIF compression

The script outputs TIF format with LZW compression and ZIP layer compression (if layers are preserved).

JPG

When saved, format option used is Baseline Standard for maximum compatibility.

Embedded color profiles

JPG is the only format with the option Embed color profile. PSD and TIF always embed the profile (if applicable, based on mode and whether a profile is assigned), and PNG never embeds a profile.

PNG color space

Images saved as PNG are always converted to sRGB color space web standard. For PNG-8, if not already indexed color, the image is converted to indexed color using local (adaptive) palette, 256 colors none forced, transparency enabled and matte of none. The PNG format never embeds a color profile.

Duplicate file names

To protect against duplicate file names overwriting one another, files are output to specified folders. However, because output files are the file’s base name (name without extension) plus the output format extension added, there remains one situation in which duplicate file names could occur — when input files of different extensions, in the same folder, have the same base name. When this circumstance exists, the base name retains the input file extension, which is normally replaced by the output format extension. Any output file with two extensions (because the input extension is retained) is not a glitch; it is named this way to prevent duplicate names overwriting each other.

Available color profiles

For the option Convert to profile, the list of profiles from which to choose is compiled by searching known locations in the system for .icc/.icm files and extracting the profile name. This occurs each time the script is launched. The list should include most of the same profiles Photoshop displays in dialogs such as Color Settings, but it doesn’t match exactly. If a needed profile does not appear in the list, add the profile to a location both Photoshop and the script look for profiles (below) and relaunch the script.

macOS

    :Library:ColorSync:Profiles

Windows

    \Windows\System32\spool\drivers\color

For help installing scripts, see https://www.marspremedia.com/software/how-to-adobe-cc

IMPORTANT: by downloading the script you agree that the software is provided without any warranty, express or implied. USE AT YOUR OWN RISK. Always make backups of important data.

Reach the author William Campbell at https://www.marspremedia.com/contact
