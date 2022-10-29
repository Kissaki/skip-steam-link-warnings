@echo off
"C:\Program Files\7-Zip\7z.exe" a skip-steam-link-warning.zip manifest.json background_script.js
IF ERRORLEVEL 1 (
  pause
  EXIT /B 1
)
