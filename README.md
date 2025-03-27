# carbon-footprint-calculator
app to calculate your own carbon footprint

## Requirements
- [node 18](https://nodejs.org/en) or higher (recommend using a version manager like [nvm](https://github.com/nvm-sh/nvm))
- [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/)
- [XCode](https://developer.apple.com/xcode/) (for iOS development)

## Installation - IOS
1. Clone the repository
2. Run `yarn install` in `./carbonFootprintCalculator` to install dependencies
3. Run `pod install` in `./carbonFootprintCalculator/ios` to install iOS dependencies
4. Open the `./carbonFootprintCalculator/ios/carbonFootprintCalculator.xcworkspace` file in XCode
5. Open `./carbon-footprint-calculator/carbonFootprintCalculator/ios/Pods/Flipper/xplat/Flipper/FlipperTransportTypes.h` and add the following import: `#include <functional>`
6. Open `./carbon-footprint-calculator/carbonFootprintCalculator/ios/Pods/boost/boost/container_hash/hash.hpp`, navigate to line 131 (`struct hash_base : std::unary_function<T, std::size_t> {};`) and replace `unary_function` with `__unary_function`
7. Run the app in XCode

For steps 5. and 6. if you don't find these files, you might have to run the project in XCode first (you'll receive errors).
