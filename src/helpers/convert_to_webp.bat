@echo off
setlocal enabledelayedexpansion

:: Set the path to the cwebp executable
set CWEBP_PATH=D:\libwebp-1.4.0-windows-x64\bin\cwebp.exe

:: Set the target folder path
set TARGET_FOLDER=C:\Users\BiYuyang\Desktop\GithubRepo\Algorithm-Game\public\textures

:: Set the quality (0-100, where 100 is lossless)
set QUALITY=50

:: Loop through all PNG files in the target folder
for %%F in ("%TARGET_FOLDER%\*.png") do (
    :: Get the file name without extension
    set "filename=%%~nF"
    
    :: Convert PNG to WebP
    "%CWEBP_PATH%" -q %QUALITY% "%%F" -o "%TARGET_FOLDER%\!filename!.webp"
    
    if !errorlevel! equ 0 (
        echo Converted: %%F to !filename!.webp
    ) else (
        echo Failed to convert: %%F
    )
)

echo Conversion complete.
pause
