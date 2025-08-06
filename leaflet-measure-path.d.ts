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
        showOnHover?: boolean;
        minPixelDistance?: number;
        showDistances?: boolean;
        showArea?: boolean;
        showTotalDistance?: boolean;
        imperial?: boolean;
        ha?: boolean;
        formatDistance?: (distance: number) => string;
        formatArea?: (area: number) => string;
        lang?: {
            totalLength?: string;
            totalArea?: string;
            segmentLength?: string;
        };
    }

    interface PolylineOptions {
        showMeasurements?: boolean;
        measurementOptions?: MeasurementOptions;
    }

    interface CircleMarkerOptions {
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
        showMeasurements(options?: MeasurementOptions): this;
        hideMeasurements(): this;
        updateMeasurements(): void;
        formatArea(area: number): string;

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
