# Skyline Atlas Nexus

This workspace now includes an installable Progressive Web App setup:

- `manifest.webmanifest`
- `service-worker.js`
- `icons/`

## What You Can Do Now

1. Host the folder on any static web host.
2. Open the hosted URL on Android or desktop Chrome.
3. Use the browser's install option to install it like an app.

## Why There Is No APK In This Workspace

An Android APK could not be generated here because this environment does not have:

- Java
- Gradle
- Android SDK / Android Studio

## Fastest Path To A Real APK

Use Android Studio or Capacitor on a machine with Android tooling:

1. Create a Capacitor app.
2. Copy `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `service-worker.js`, and `icons/` into the web assets folder.
3. Add Android platform support.
4. Build a debug or release APK from Android Studio.

## Suggested Capacitor Flow

```bash
npm create @capacitor/app
```

Choose a vanilla app, then replace the generated web assets with the files from this folder.

If you want, the next step I can do here is scaffold the Capacitor project files so you only need to open them in Android Studio and build the APK there.
