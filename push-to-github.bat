@echo off
echo ========================================================
echo   Push Auto Wala to GitHub for 1-Click Cloud APK Build
echo ========================================================
echo.
set PATH=%LOCALAPPDATA%\git\cmd;%PATH%

set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/your-username/auto-wala.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No repository URL entered!
    pause
    exit /b
)

echo.
echo Adding remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Pushing main branch to GitHub...
git push -u origin main

echo.
echo ========================================================
echo  Pushed successfully! 
echo  Now open your GitHub repository in your browser:
echo  1. Click the 'Actions' tab at the top.
echo  2. Click on 'Build Auto Wala APK'.
echo  3. Wait ~90 seconds, then download your APK from 'Artifacts'!
echo ========================================================
echo.
pause
