# Rust React Chat App

Copy of https://github.com/ahmadrosid/rust-react-chat updated to use [Flox](https://flox.dev) environments.

In order to build the backend and run the application:
```console
$ flox activate -r zmitchell/rust_env
$ flox activate # activates the Rust backend environment
$ cargo run
```

You can also work on the frontend:
```
$ flox activate -d ui
$ npm run dev
```

_Or_ you can work on both frontend and backend:
```console
$ flox activate -r zmitchell/rust_env
$ flox activate
$ flox activate -d ui
$ # do work
```

![img](screenshot.png)
