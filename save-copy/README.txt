
Save Copy

Script for Adobe Photoshop

The script is a companion tool to Batch Multi Save (https://www.marspremedia.com/software/photoshop/batch-multi-save), with identical save functionality, only not a batch and not multiple formats at the same time. The script saves a copy of an open image in a selected format after performing specified transformations, such as conversion to CMYK and flattening, one example. Not only a time saver, the script also ensures the consistency of images transformed and saved.

- Save JPG, PNG, PSD, or TIF
- Convert to any color profile
- Layers as-is, merged, or flatten
- Adjust PPI, set or resample
- Limit pixels in either dimension
- Keep paths, discard all, or keep special cases
- Rename for web use
- Save and restore all settings

The original idea for Batch Multi Save was to automate saving final files after color correction/retouching. This works great for a folder of images, but later during production, often times a few images need editing and I want them saved the same as earlier, but I didn't want to have to reprocess the entire folder of working images. So I made this tool using the same code for saving files from Batch Multi Save in a script designed to save a copy of an image open in Photoshop.

All of what the script does can be done manually, as we normally do. Change color space, resize the image, dump alpha channels and paths, etc., then Save As to produce a “final” copy of the image to link in a layout or send to the client. The benefit of the script is that it does the same consistently, and in fewer steps, saving time.

How to use the script

The interface has three sections: Transform, Output, and Settings. Enable desired options and click the OK button to begin. If any concerns are encountered, the user is notified.

Section 1: Transform

Convert to profile — converts color to the selected profile prior to saving a copy of the image. This occurs after merging layers or flattening to ensure any adjustment layers are applied in the original color space before conversion to the selected profile. Note that when saving a copy in PNG format the image is always converted to sRGB web standard and the option to select otherwise is disabled.

TIP: Converting to another profile is primarily to make CMYK separations for print, which of course is functionality the script provides. But as well, this option can convert duotones to RGB or CMYK, or convert those and other color spaces to grayscale (use the profile Dot Gain 20%).

Adjust PPI to — enable the checkbox and enter the desired pixels-per-inch value.

Set/Resample — determines how Photoshop arrives at the entered PPI value. Set does not change the number of pixels, only records how many make up an inch. Resample maintains the current image dimensions (in inches) and increases or decreases the number of pixels to arrive at the entered PPI value. Note Resample method is Automatic.

Maximum pixels, width and height — enable the checkbox to limit the final pixel dimensions of the image, and enter a value in pixels for the width and/or height. It is acceptable to omit one of the dimensions. In that case, the entered dimension is limited and the other falls wherever it may. When both values are entered, neither dimension exceeds the value entered. One dimension may result in fewer pixels than entered if necessary to maintain proportions. In other words, setting both values does not define precise width and height; it only defines the upper limit of each dimension.

IMPORTANT NOTE: if the Maximum pixels option is enabled and Adjust PPI to is also enabled, it is usually best to select Set rather than Resample because PPI is adjusted before evaluating maximum pixels. When PPI is resampled to a low value (i.e. 72), the result might be fewer pixels than the maximum entered. This could be desired behavior, or possibly not. Just know that PPI adjustment happens first, then the image is reduced to limit maximum pixels.

Keep all paths, Discard all paths, Keep paths... — Keep all paths leaves all paths untouched. Discard all paths removes all paths including any set to clipping path. Keep paths... displays an additional dialog with further options:

Input field — enter the path names to keep. Separate multiple path names with a comma. Match to path names is case-insensitive.

Keep first path, any name — the first path in the Paths panel is retained, regardless of its name.

Keep clipping path — the path assigned to clipping path is retained.

Vector masks: save as paths and keep all — vector mask paths and shape layer paths are copied to normal paths and named incrementally (Path 2, Path 3, etc.). Because other transformations may apply vector masks and rasterize shape layers, which then removes the actual path (for example, merge to single layer or flatten), the copying to a normal path for these elements occurs before other transformations.

Layers as-is — layers are untouched and alpha channels are retained, as well as ruler guides. This option does not exist for JPG or PNG. JPG requires the image is flattened. PNG supports a single layer, but not multiple layers, which the original image may have.

IMPORTANT NOTE: This option is disabled when other options are enabled that alter color or pixel dimensions. Adjustment layers cannot change color space and maintain faithful results, and layer effects do not scale when an image is resized. For these reasons, when the corresponding options are enabled, the image must be merged to a single layer or flattened to maintain appearance.

Single merged layer — hidden layers are discarded and the remaining layers are merged to a single layer. If a layer mask remains, it is applied. Alpha channels and ruler guides are discarded. The option does not exist for JPG as it must be flattened.

Flatten — result is a single “Background” layer. Alpha channels and ruler guides are discarded. JPG always performs this step.

The above two options are performed before resizing so that any effects, smart objects, and shape layers are rasterized at original resolution to maintain appearance.

Section 3: Output

Format — the file format of the copy saved. Select JPG, PNG-8, PNG-24, PSD, or TIF.

PNG-8 versus PNG-24 is the choice of bit depth. PNG-8 is indexed color, (8 bits per pixel, of a single channel), whereas PNG-24 is RGB color (24 bits per pixel, or 8 bits per channel, of 3 channels). PNG-8 produces smaller files but at the cost of color precision. The user is the judge of that trade-off and which bit depth is appropriate for the project.

Original file name + — a suffix of characters appended to each output file name. The characters entered must be legal to use in file names. Any illegal characters are automatically removed. Having no suffix is allowed, in which case output file names exactly match input file names.

Rename for web — detects characters in the file name that require URL encoding, replaces them with a dash, and converts the file name to lowercase. Prevents URLs that look like “…/This%20is%20the%20File%20Name.jpg”. Instead the result is “…/this-is-the-file-name.jpg”.

Save in original folder — enable to direct output to the same folder where the open image is located in the file system. When enabled, the button Folder is disabled and the path beside the button is updated to the original folder location.

Folder — the location to which a copy of the image is saved. Click the button Folder and navigate to the desired location. Unique to this particular script, the output folder location is stored in settings and is preserved between launches of the script. This is to enhance productivity by not requiring a folder is selected every launch of the script, rather only when a different location is required.

Replace existing output files — when enabled, existing output files are replaced. When disabled, the user is asked to confirm the replacement.

Options exclusive to the JPG format

Quality — JPEG image quality. Valid range is from 0 to 12. 0 is extreme compression resulting in low quality. 12 is light compression that is virtually indistinguishable from the original, the highest possible quality, which of course, results in the largest file size. 10 to 12 is recommended for print or other high-quality reproduction. For web images, 5 to 8 is an acceptable range.

Embed color profile — embeds into the JPG the current color profile, either for the original color space if not converted, or the profile selected for the Convert to profile option. The option exists for JPG so that files intended for print can include profiles, important to preserve in that case, but JPG for web may omit profiles, as the profile is excess and only increases file size.

Section 4: Settings

The current options may be saved and restored later. Select from the Load drop-down list to choose saved settings, and the current options are updated. Click the Delete button, and the saved settings selected in the Load drop-down list are permanently removed. Click the Save button, provide a name for the settings, and the current options are preserved. If the name already exists, the user may choose to replace the saved settings. Or click the checkbox Replace settings, and choose the settings to replace.

The script provides default saved settings named [Default]. These settings cannot be deleted but may be updated to the current values. Save settings, click the checkbox Replace settings, and choose [Default].

When settings are saved, there is also the option to include Output folder.

Each time the script is launched, the output folder is restored to the last location used. To override this default, enable the option to include Output folder. When the saved settings are loaded, the output folder is restored to the value saved.

Further reading

If you’ve reached this point, you know enough to use the script. The remainder is not crucial to read, but helps understand how the script works. This section is last, in the interest of minimizing “Too Long; Didn’t Read.”

Image modes and how each is processed

The script recognizes aspects of the image and acts intelligently based on the output format. Depending on the combination of factors, images are either transformed without issue, or the user is notified when particular situations are encountered.

Bitmap — PSD and TIF support bitmap mode, but if asked to Convert to profile, the request is not supported. In this case, the image is converted to grayscale and then to the selected color profile. If Convert to profile is not enabled, bitmap images remain bitmap in PSD and TIF. JPG does not support bitmap mode, and though technically PNG does, saving bitmaps as PNG makes little sense as the format’s intent is for web graphics. JPG and PNG bitmaps are converted to grayscale, then if enabled, to the selected color profile.

Duotone — PSD is the only format (of those the script provides) that supports duotone mode. If Convert to profile is enabled, the image is converted to RGB and then to the selected color profile, otherwise remains duotone mode. TIF, JPG, and PNG do not support duotone mode, so always convert to RGB, then if enabled, to the selected color profile.

Indexed color — PSD, TIF, and PNG-8 support indexed color and unless converted retain the original color space. JPG and PNG-24 do not support indexed color and convert to RGB, then if enabled, to the selected color profile.

Spot color channels — PSD and TIF are the only formats (of those the script provides) that support spot channels. For these formats, whether or not Convert to profile is enabled, spot channels are ignored and remain as-is. JPG and PNG convert to RGB and then merge spot channels to replicate the appearance of the image with the spot colors. Then, if enabled, color is converted to the selected profile.

Multichannel — PSD is the only format (of those the script provides) that support multichannel mode. Because converting multichannel to other color spaces is unreliable, the script does not attempt to do so. Therefore, there is never a change in mode. Multichannel images remain as-is. TIF, JPG, and PNG do not support multichannel mode, and because converting to other color spaces is unreliable, these formats are not saved and the user if notified. For these reasons, this tool is not recommended for multichannel images.

16 and 32 bits per channel — PSD and TIF support more than 8 bits per channel and will retain values higher than 8 unless Convert to profile is enabled, in which case the image is converted to 8 bits per channel and then to the selected color profile. In all cases, whether converting color or not, JPG and PNG are converted to 8 bits per channel. 32 bits per channel is not entirely compatible with color management and may result in undesired color shifts, whether converting color or not. For these reasons, this tool is not recommended for 32-bit images.

TIF compression

The script outputs TIF format with LZW compression and ZIP layer compression (if layers are preserved).

JPG

When saved, format option used is Baseline Standard for maximum compatibility.

Embedded color profiles

JPG is the only format with the option Embed color profile. PSD and TIF always embed the profile (if applicable, based on mode and whether a profile is assigned), and PNG never embeds a profile.

PNG color space

Images saved as PNG are always converted to sRGB color space web standard. For PNG-8, if not already indexed color, the image is converted to indexed color using local (adaptive) palette, 256 colors none forced, transparency enabled and matte of none. The PNG format never embeds a color profile.

Available color profiles

For the option Convert to profile, the list of profiles from which to choose is compiled by searching known locations in the system for .icc/.icm files and extracting the profile name. This occurs each time the script is launched. The list should include most of the same profiles Photoshop displays in dialogs such as Color Settings, but it doesn’t match exactly. If a needed profile does not appear in the list, add the profile to a location both Photoshop and the script look for profiles (below) and relaunch the script.

macOS

    :Library:ColorSync:Profiles

Windows

    \Windows\System32\spool\drivers\color

For help installing scripts, see https://www.marspremedia.com/software/how-to-adobe-cc

IMPORTANT: by downloading the script you agree that the software is provided without any warranty, express or implied. USE AT YOUR OWN RISK. Always make backups of important data.

Reach the author William Campbell at https://www.marspremedia.com/contact
