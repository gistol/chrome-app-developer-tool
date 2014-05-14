/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/
var exec = cordova.require('cordova/exec');

function eventHandler(type) {
    exports.onEvent && exports.onEvent(type);
}

exports.onEvent = null;

exports.create = function(url, win) {
    exec(eventHandler, null, 'AppHarnessUI', 'events', []);
    exec(win, null, 'AppHarnessUI', 'create', [url]);
};

exports.destroy = function(win) {
    exec(win, null, 'AppHarnessUI', 'destroy', []);
};

exports.createOverlay = function(url, win) {
    exec(win, null, 'AppHarnessUI', 'createOverlay', [url]);
};

exports.destroyOverlay = function(win) {
    exec(win, null, 'AppHarnessUI', 'destroyOverlay', []);
};

exports.evalJs = function(code, win) {
    exec(win, null, 'AppHarnessUI', 'evalJs', [code]);
};
