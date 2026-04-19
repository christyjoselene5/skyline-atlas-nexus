# Android APK Setup

This project is now scaffolded for Capacitor-based Android packaging.

## Files Added

- `package.json`
- `capacitor.config.json`
- existing web app assets in the project root

## Build The APK On A Machine With Android Tooling

1. Install:
   - Node.js
   - Android Studio
   - Java SDK

2. In this project folder, run:

```bash
npm install
npx cap add android
npx cap sync
npx cap open android
```

3. In Android Studio:
   - wait for Gradle sync
   - choose `Build > Build Bundle(s) / APK(s) > Build APK(s)`

## Notes

- Capacitor is configured to package the current root app files from `webDir: "."`.
- This keeps the Android package source aligned with the exact version you are previewing now.
- The `www/` folder is included as an optional staging area for a future cleaner asset move, but it is not the active packaging source.
- A release APK will still require signing inside Android Studio.

## Branding Assets

Prepared Android-friendly branding files:

- `branding/adaptive-icon-foreground.svg`
- `branding/adaptive-icon-background.svg`
- `branding/splash.svg`

You can export these to PNGs and use them for Android app icons and splash screens.

## Optional Next Step

If you want, I can next prepare:

- a synced `www/` production asset copy of the full app
- Android resource naming guidance for icons and splash assets
- branding assets for Play Store-style packaging
