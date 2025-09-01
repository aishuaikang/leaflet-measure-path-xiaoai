// Type definitions for leaflet-measure-path
// Project: https://github.com/perliedman/leaflet-measure-path
// Definitions by: GitHub Copilot

import * as L from "leaflet";

declare module "leaflet" {
    namespace Marker {
        interface MeasurementOptions extends L.LayerOptions {
            pane?: string;
        }

        class Measurement extends L.Layer {
            options: MeasurementOptions;

            constructor(
                latlng: L.LatLngExpression,
                measurement: string,
                title: string,
                rotation: number,
                options?: MeasurementOptions
            );

            addTo(map: L.Map): this;
            onAdd(map: L.Map): this;
            onRemove(map: L.Map): this;

            private _latlng: L.LatLng;
            private _measurement: string;
            private _title: string;
            private _rotation: number;
            protected _map: L.Map;
            private _element: HTMLDivElement;

            private _setPosition(): void;
            private _animateZoom(opt: L.ZoomAnimEvent): void;
        }
    }

    namespace marker {
        function measurement(
            latLng: L.LatLngExpression,
            measurement: string,
            title: string,
            rotation: number,
            options?: Marker.MeasurementOptions
        ): Marker.Measurement;
    }

    interface MeasurementOptions {
        /** Show measurements only on hover */
        showOnHover?: boolean;
        /** Minimum pixel distance between measurement labels */
        minPixelDistance?: number;
        /** Show distance measurements on polyline segments */
        showDistances?: boolean;
        /** Show area measurements for polygons and circles */
        showArea?: boolean;
        /** Show radius measurements for circles */
        showRadius?: boolean;
        /** Show total distance for polylines */
        showTotalDistance?: boolean;
        /** Use imperial units (feet, miles, acres) instead of metric */
        imperial?: boolean;
        /** Use hectares for area measurements */
        ha?: boolean;
        /** Custom formatter function for distance measurements */
        formatDistance?: (distance: number) => string;
        /** Custom formatter function for area measurements */
        formatArea?: (area: number) => string;
        /** Localization strings */
        lang?: {
            totalLength?: string;
            totalArea?: string;
            segmentLength?: string;
            radius?: string;
        };
    }

    interface PolylineOptions {
        showMeasurements?: boolean;
        measurementOptions?: MeasurementOptions;
    }

    interface CircleOptions {
        showMeasurements?: boolean;
        measurementOptions?: MeasurementOptions;
    }

    interface PolygonOptions {
        showMeasurements?: boolean;
        measurementOptions?: MeasurementOptions;
    }

    interface Polyline {
        showMeasurements(options?: MeasurementOptions): this;
        hideMeasurements(): this;
        updateMeasurements(): this;
        formatDistance(distance: number): string;
        formatArea(area: number): string;

        _measurementOptions?: MeasurementOptions;
        _measurementLayer?: L.LayerGroup;
        _getRotation(ll1: L.LatLng, ll2: L.LatLng): number;
    }

    interface Circle {
        /** Show measurements on the circle */
        showMeasurements(options?: MeasurementOptions): this;
        /** Hide measurements from the circle */
        hideMeasurements(): this;
        /** Update measurement display */
        updateMeasurements(): void;
        /** Format area value for display */
        formatArea(area: number): string;
        /** Format distance value for display (used for radius) */
        formatDistance(distance: number): string;

        _measurementOptions?: MeasurementOptions;
        _measurementLayer?: L.LayerGroup;
    }

    interface Polygon {
        showMeasurements(options?: MeasurementOptions): this;
        hideMeasurements(): this;
        updateMeasurements(): this;
        formatDistance(distance: number): string;
        formatArea(area: number): string;

        _measurementOptions?: MeasurementOptions;
        _measurementLayer?: L.LayerGroup;
        _getRotation(ll1: L.LatLng, ll2: L.LatLng): number;
    }
}
