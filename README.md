# expo-symbol-crypto

Enhancing Symbol Blockchain App Development on Expo Environment.
A crypto alternative package for running symbol-sdk on Expo managed React Native environment.

## Key Features

* **Seamless Integration with Symbol SDK:** expo-symbol-packages is designed to seamlessly integrate with symbol-sdk. You can use existing symbol-sdk code without any modifications.
* **Enhanced Security:** expo-crypto is a powerful library for securely using cryptographic functions in Expo environment. expo-symbol-packages leverages expo-crypto to achieve high security.

## Target Users

* Developers considering Symbol blockchain application development on Expo environment
* Developers who want to leverage the convenience of Managed React Native while developing secure Symbol applications
* Developers already familiar with symbol-sdk


## Setup

1. Expand the Expo template and add symbol-sdk.
2. Configure `metro.config.js`.

```
npx create-expo-app my-app
npm install symbol-sdk@2 buffer events readable-stream expo-symbol-crypto
```

```javascript
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = {
  ...getDefaultConfig(__dirname),
  resolver: {
    extraNodeModules: {
      crypto: require.resolve("expo-symbol-crypto"),
      stream: require.resolve("readable-stream"),
      buffer: require.resolve("buffer"),
      events: require.resolve("events"),
    },
  },
};

module.exports = config;
```

Then add `./shim.js` to project root.

```js
global.process = require("process");
process.browser = false;
if (typeof Buffer === "undefined") global.Buffer = require("buffer").Buffer;
```

Finally, import on App.js

```js
import "./shim";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```

## Contributing

expo-symbol-crypto is an open-source project. Contributions are welcome. Please refer to the GitHub repository for details.

## License

This software is provided under the [MIT License](./LICENSE).

## Contact

For questions or feedback, please contact us through the GitHub repository.
