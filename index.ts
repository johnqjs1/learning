/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_map_simple]
let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 54.397, lng: -0.5 },
    zoom: 8,
  });
}

initMap();
// [END maps_map_simple]
export {};
