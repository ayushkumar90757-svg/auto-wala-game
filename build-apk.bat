@echo off
echo ========================================================
echo   AUTO WALA: Indian City Life - Android APK Builder
echo ========================================================
echo.

set PATH=C:\Users\ayush\AppData\Local\nodejs;%PATH%

echo [1/3] Building latest 3D game web assets...
call npm run build

echo.
echo [2/3] Syncing game assets into native Android project...
powershell -Command "Copy-Item -Path 'dist\*' -Destination 'android\app\src\main\assets\public' -Recurse -Force"

echo.
echo [3/3] Checking Gradle environment...
where gradlew >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ------------------------------------------------------------
    echo Native Android project is fully generated in 'android/'!
    echo To build your APK:
    echo 1. Open Android Studio
    echo 2. Click 'Open an Existing Project' and choose the 'android' folder
    echo 3. Click 'Build' -> 'Build Bundle(s) / APK(s)' -> 'Build APK(s)'
    echo.
    echo Your APK will be generated at:
    echo android\app\build\outputs\apk\debug\app-debug.apk
    echo ------------------------------------------------------------
) else (
    echo Building APK with Gradle...
    cd android
    call gradlew.bat assembleDebug
    cd ..
)

echo.
pause
