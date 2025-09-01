// TypeScript 类型测试文件
// 这个文件用于验证类型定义是否正确

import * as L from "leaflet";
import "./leaflet-measure-path";

// 测试 Polyline 的测量功能
const polyline = L.polyline([
    [51.505, -0.09],
    [51.51, -0.1],
    [51.515, -0.11],
]);

// 测试 showMeasurements 方法
polyline.showMeasurements({
    showOnHover: true,
    minPixelDistance: 20,
    showDistances: true,
    showArea: false,
    showTotalDistance: true,
    imperial: false,
    ha: true,
    formatDistance: (distance: number) => `${distance.toFixed(2)} m`,
    formatArea: (area: number) => `${area.toFixed(2)} m²`,
    lang: {
        totalLength: "总长度",
        totalArea: "总面积",
        segmentLength: "段长度",
    },
});

// 测试 hideMeasurements 方法
polyline.hideMeasurements();

// 测试 updateMeasurements 方法
polyline.updateMeasurements();

// 测试 Polygon 的测量功能
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
]);

polygon.showMeasurements({
    showArea: true,
    lang: {
        totalArea: "面积",
    },
});

// 测试 Circle 的测量功能
const circle = L.circle([51.508, -0.11], 500);

// 测试圆形的测量选项，包括新的 showRadius 功能
circle.showMeasurements({
    showOnHover: false,
    showArea: true,
    showRadius: true,
    imperial: false,
    formatDistance: (distance: number) => `${distance.toFixed(1)} 米`,
    formatArea: (area: number) => `${area.toFixed(1)} 平方米`,
    lang: {
        totalArea: "总面积",
        radius: "半径",
    },
});

// 测试圆形的方法
circle.hideMeasurements();
circle.updateMeasurements();

// 测试 Marker.Measurement 类
const measurement = L.marker.measurement(
    [51.505, -0.09],
    "100 m",
    "距离测量",
    0,
    { pane: "markerPane" }
);

// 测试构造函数选项
const polylineWithOptions = L.polyline(
    [
        [51.505, -0.09],
        [51.51, -0.1],
    ],
    {
        showMeasurements: true,
        measurementOptions: {
            showRadius: true, // 测试新增的选项
            lang: {
                radius: "半径",
            },
        },
    }
);

const circleWithOptions = L.circle([51.508, -0.11], 500, {
    showMeasurements: true,
    measurementOptions: {
        showArea: true,
        showRadius: true,
    },
});

// 测试另一个圆形配置
const anotherCircle = L.circle([51.508, -0.11], {
    radius: 500,
    showMeasurements: true,
    measurementOptions: {
        showArea: true,
        lang: {
            totalArea: "圆形面积",
        },
    },
});

// 测试 Measurement marker
const measurementMarker = L.marker.measurement(
    [51.505, -0.09],
    "100 m",
    "距离测量",
    0,
    {}
);

// 测试格式化函数
const formattedDistance = polyline.formatDistance(1500);
const formattedArea = polygon.formatArea(25000);

console.log("TypeScript 类型测试通过！");
