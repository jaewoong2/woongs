"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var styleSlice_1 = require("slices/styleSlice");
var useReducerHook_1 = require("./useReducerHook");
var useNavigation = function () {
    var _a = react_1.useState([]), breadCrumbs = _a[0], setBreadCrumbs = _a[1];
    var dispatch = useReducerHook_1.useAppDispatch();
    var addNavigation = react_1.useCallback(function (breadCrumb) {
        if ('length' in breadCrumb) {
            setBreadCrumbs(function (prev) { return __spreadArrays(prev, breadCrumb); });
        }
        else {
            setBreadCrumbs(function (prev) { return __spreadArrays(prev, [breadCrumb]); });
        }
    }, []);
    var reset = react_1.useCallback(function () {
        setBreadCrumbs(function () { return []; });
    }, []);
    react_1.useEffect(function () {
        console.log('hi');
        dispatch(styleSlice_1.setNavigation(breadCrumbs));
        return function () {
            reset();
        };
    }, [reset, dispatch]);
    react_1.useEffect(function () {
        return function () {
            reset();
        };
    }, []);
    return {
        addNavigation: addNavigation,
        reset: reset
    };
};
exports["default"] = useNavigation;
