## 🔦 About

This monorepo is a starter for an Expo + Next.js app using [Expo Router](https://expo.github.io/router/) to enable a file-system based routing in native apps. The API is very Next.js- and Remix-esque. I view it as the future of cross-platform routing.

## 📦 Included packages

- [`solito`](https://solito.dev/) for cross-platform navigation
- [`moti`](https://moti.fyi/) for animations
- [`dripsy`](https://www.dripsy.xyz/) for theming/design (you can bring your own, too)
- Expo SDK 49
- Next.js 13
- Expo Router 2

## 🗂 Folder layout

- `apps` entry points for each app

  - `mobile`
    - `app` you'll be creating files inside of `apps/expo/app` to use file system routing on iOS and Android.
  - `web`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

## 🏁 Start the app

- Install dependencies: `yarn`

Run the local development server for all apps:

```sh
yarn dev
```

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev:
  - First, build a dev client onto your device or simulator
    - `cd apps/expo`
    - Then, either `expo run:ios`, or `eas build`
  - After building the dev client, from the root of the monorepo...
    - `yarn native` (This runs `expo start --dev-client`)

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).
