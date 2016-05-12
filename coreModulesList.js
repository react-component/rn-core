const coreModulesList = [
  "ARTSerializablePath",
  "ActionSheetIOS",
  "ActivityIndicatorIOS",
  "AdSupportIOS",
  "Alert",
  "AlertIOS",
  "Animated",
  "AnimatedImplementation",
  "AppRegistry",
  "AppState",
  "AppStateIOS",
  "AssetRegistry",
  "AsyncStorage",
  "BackAndroid",
  "BatchedBridge",
  "BorderBox",
  "BoundingDimensions",
  "BoxInspector",
  "CameraRoll",
  "Clipboard",
  "ColorPropType",
  "DatePickerAndroid",
  "DatePickerIOS",
  "Dimensions",
  "DocumentSelectionState",
  "DrawerLayoutAndroid",
  "Easing",
  "EdgeInsetsPropType",
  "ElementBox",
  "ElementProperties",
  "EmitterSubscription",
  "ErrorUtils",
  "EventEmitter",
  "EventEmitterWithHolding",
  "EventHolder",
  "EventPluginHub",
  "EventPropagators",
  "EventSubscription",
  "EventSubscriptionVendor",
  "EventValidator",
  "ExceptionsManager",
  "FormData",
  "Geolocation",
  "HMRClient",
  "IOSDefaultEventPluginOrder",
  "IOSNativeBridgeEventPlugin",
  "Image",
  "ImageEditor",
  "ImagePickerIOS",
  "ImageResizeMode",
  "ImageStore",
  "ImageStylePropTypes",
  "ImmediateImplementation",
  "InitializeJavaScriptAppEngine",
  "Inspector",
  "InspectorOverlay",
  "InspectorPanel",
  "InspectorUtils",
  "IntentAndroid",
  "InteractionManager",
  "InteractionMixin",
  "Interpolation",
  "JSTimers",
  "JSTimersExecution",
  "LayoutAnimation",
  "LayoutPropTypes",
  "LinkedStateMixin",
  "Linking",
  "LinkingIOS",
  "ListView",
  "ListViewDataSource",
  "Map",
  "MapView",
  "MatrixMath",
  "MessageQueue",
  "Modal",
  "NativeMethodsMixin",
  "NativeModules",
  "NavigationAnimatedView",
  "NavigationCard",
  "NavigationContainer",
  "NavigationContext",
  "NavigationEvent",
  "NavigationEventEmitter",
  "NavigationExperimental",
  "NavigationFindReducer",
  "NavigationHeader",
  "NavigationReducer",
  "NavigationRootContainer",
  "NavigationStackReducer",
  "NavigationState",
  "NavigationTabsReducer",
  "NavigationTreeNode",
  "NavigationView",
  "Navigator",
  "NavigatorBreadcrumbNavigationBar",
  "NavigatorBreadcrumbNavigationBarStyles",
  "NavigatorIOS",
  "NavigatorNavigationBar",
  "NavigatorNavigationBarStylesAndroid",
  "NavigatorNavigationBarStylesIOS",
  "NavigatorSceneConfigs",
  "NetInfo",
  "NodeHandle",
  "PanResponder",
  "PerformanceLogger",
  "PerformanceOverlay",
  "Picker",
  "PickerAndroid",
  "PickerIOS",
  "PixelRatio",
  "Platform",
  "PointPropType",
  "Position",
  "ProgressBarAndroid",
  "ProgressViewIOS",
  "Promise",
  "PullToRefreshViewAndroid",
  "PushNotificationIOS",
  "RCTDebugComponentOwnership",
  "RCTDeviceEventEmitter",
  "RCTEventEmitter",
  "RCTLog",
  "RCTNativeAppEventEmitter",
  "RCTNetworking",
  "RCTRenderingPerf",
  "React",
  "ReactChildren",
  "ReactClass",
  "ReactComponentWithPureRenderMixin",
  "ReactCurrentOwner",
  "ReactDefaultBatchingStrategy",
  "ReactDefaultPerf",
  "ReactElement",
  "ReactElementValidator",
  "ReactEventEmitterMixin",
  "ReactFragment",
  "ReactInstanceHandles",
  "ReactInstanceMap",
  "ReactMultiChild",
  "ReactMultiChildUpdateTypes",
  "ReactNative",
  "ReactNativeART",
  "ReactNativeAttributePayload",
  "ReactNativeBaseComponent",
  "ReactNativeComponentEnvironment",
  "ReactNativeDOMIDOperations",
  "ReactNativeDefaultInjection",
  "ReactNativeEventEmitter",
  "ReactNativeGlobalInteractionHandler",
  "ReactNativeGlobalResponderHandler",
  "ReactNativeMount",
  "ReactNativeReconcileTransaction",
  "ReactNativeStyleAttributes",
  "ReactNativeTagHandles",
  "ReactNativeTextComponent",
  "ReactNativeViewAttributes",
  "ReactPerf",
  "ReactPropTypes",
  "ReactReconciler",
  "ReactTestUtils",
  "ReactUpdateQueue",
  "RecyclerViewBackedScrollView",
  "RefreshControl",
  "ResponderEventPlugin",
  "ScrollResponder",
  "ScrollView",
  "SegmentedControlIOS",
  "Set",
  "Settings",
  "ShadowPropTypesIOS",
  "SliderIOS",
  "SnapshotViewIOS",
  "SourceMap",
  "SourceMapsCache",
  "SourceMapsUtils",
  "SpringConfig",
  "StaticContainer.react",
  "StaticRenderer",
  "StatusBar",
  "StatusBarIOS",
  "StyleInspector",
  "StyleSheet",
  "StyleSheetPropType",
  "StyleSheetRegistry",
  "StyleSheetTypes",
  "StyleSheetValidation",
  "Subscribable",
  "Switch",
  "SwitchAndroid",
  "SwitchIOS",
  "SyntheticEvent",
  "Systrace",
  "TabBarIOS",
  "TabBarItemIOS",
  "TaskQueue",
  "Text",
  "TextInput",
  "TextInputState",
  "TextStylePropTypes",
  "TimePickerAndroid",
  "ToastAndroid",
  "ToolbarAndroid",
  "TouchEventUtils",
  "TouchHistoryMath",
  "Touchable",
  "TouchableHighlight",
  "TouchableNativeFeedback",
  "TouchableOpacity",
  "TouchableWithoutFeedback",
  "TransformPropTypes",
  "UIManager",
  "UnimplementedView",
  "UniversalWorkerNodeHandle",
  "VibrationIOS",
  "View",
  "ViewPagerAndroid",
  "ViewStylePropTypes",
  "WebSocket",
  "WebSocketBase",
  "WebSocketEvent",
  "WebView",
  "XMLHttpRequest",
  "XMLHttpRequestBase",
  "YellowBox",
  "_shouldPolyfillES6Collection",
  "art/core/class.js",
  "art/core/color",
  "art/core/path.js",
  "art/core/transform",
  "base64-js",
  "bezier",
  "buildStyleInterpolator",
  "clamp",
  "cloneWithProps",
  "copyProperties",
  "createReactNativeComponentClass",
  "createStrictShapeTypeChecker",
  "deepDiffer",
  "deepFreezeAndThrowOnMutationInDev",
  "deprecatedPropType",
  "dismissKeyboard",
  "emptyObject",
  "ensureComponentIsNative",
  "ensurePositiveDelayProps",
  "event-target-shim",
  "fbjs/lib/containsNode",
  "fbjs/lib/joinClasses",
  "fbjs/lib/keyOf",
  "fbjs/lib/mapObject",
  "fbjs/lib/shallowEqual",
  "fetch",
  "findNodeHandle",
  "flattenStyle",
  "getObjectValues",
  "global/window",
  "guid",
  "immutable",
  "insetsDiffer",
  "instantiateReactComponent",
  "invariant",
  "isEmpty",
  "isNode",
  "keyMirror",
  "lodash/assign",
  "lodash/difference",
  "lodash/find",
  "logError",
  "mapWithSeparator",
  "matricesDiffer",
  "merge",
  "mergeHelpers",
  "mergeInto",
  "mixInEventEmitter",
  "normalizeColor",
  "onlyChild",
  "parseErrorStack",
  "performanceNow",
  "pointsDiffer",
  "processColor",
  "processDecelerationRate",
  "processTransform",
  "promise/setimmediate/done",
  "promise/setimmediate/es6-extensions",
  "promise/setimmediate/rejection-tracking",
  "queryLayoutByID",
  "react-deep-force-update",
  "react-native",
  "react-proxy",
  "react-timer-mixin",
  "react-transform-hmr",
  "rebound",
  "regenerator/runtime",
  "renderApplication",
  "requestAnimationFrame",
  "requireNativeComponent",
  "resolveAssetSource",
  "resolveBoxStyle",
  "setImmediate",
  "setupDevtools",
  "sizesDiffer",
  "stacktrace-parser",
  "stringifySafe",
  "styleDiffer",
  "toIterator",
  "update",
  "verifyPropTypes",
  "warning"
];

module.exports = coreModulesList;
