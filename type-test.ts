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
const circle = L.circle([51.508, -0.11], {
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
