"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference lib="ES2023" />
var fs = require("fs");
var Main = /** @class */ (function () {
    function Main() {
        this.discovries = [
            { name: "Water", emoji: "💧", isNew: false, madeBy: ["elem", "elem"] }, { name: "Wind", emoji: "🌬️", isNew: false, madeBy: ["elem", "elem"] }, { name: "Fire", emoji: "🔥", isNew: false, madeBy: ["elem", "elem"] }, { name: "Earth", emoji: "🌍", isNew: false, madeBy: ["elem", "elem"] }
        ];
    }
    Main.prototype.fetchData = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://neal.fun/api/infinite-craft/pair?first=".concat(a, "&second=").concat(b), {
                            "headers": {
                                "accept": "*/*",
                                "accept-language": "fa-IR,fa;q=0.9,en-US;q=0.8,en;q=0.7",
                                "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                                "sec-ch-ua-mobile": "?0",
                                "sec-ch-ua-platform": "\"Windows\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "cookie": "_ga=GA1.1.784179861.1707461070; _ga_L7MJCSDHKV=GS1.1.1710318910.9.1.1710318914.0.0.0; __cf_bm=hmf4sxUWfHmp4bdDBIKtt7M9beJbuIx2.diG06Gxll8-1710318914-1.0.1.1-Kcs_LZ7SvKMHZT1fkcWPGjSuf2RkgexUjm7An_4CxXv__WftZWVRVPnGNS4CPEJhPU7n5ylizYVBinq9yP8YjA; cf_clearance=e2Jf4PVh4_LZxvJRmS_D4yjF8o_Nf6kQHixy9xRIQww-1710318916-1.0.1.1-nJDOI0eozswgc.ocYacBR5X5hTyuLdpaOGc3csDC0bl0eanTlTzO3Txlizamc5SZifPQvkW6VAwdkZMHxJeKbQ",
                                "Referer": "https://neal.fun/infinite-craft/",
                                "Referrer-Policy": "strict-origin-when-cross-origin"
                            },
                            "body": null,
                            "method": "GET"
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Main.prototype.checkDiscovery = function (discovery, secondDiscovery) {
        return __awaiter(this, void 0, void 0, function () {
            var res, toPush_1, exists, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.fetchData(discovery.name, secondDiscovery.name)];
                    case 1:
                        res = _a.sent();
                        toPush_1 = { name: res.result, emoji: res.emoji, isNew: res.isNew, madeBy: [discovery.name, secondDiscovery.name] };
                        exists = this.discovries.some(function (item) { return item.name === toPush_1.name && item.emoji === toPush_1.emoji; });
                        if (!exists) {
                            this.discovries.push(toPush_1);
                        }
                        if (res.isNew) {
                            console.log("New one found! " + res.emoji + " " + res.result);
                            console.log("Made by " + discovery.name + " and " + secondDiscovery.name);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [4 /*yield*/, this.checkDiscovery(discovery, secondDiscovery)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.runtime = function (load) {
        return __awaiter(this, void 0, void 0, function () {
            var count, _i, _a, discovery, _b, _c, secondDiscovery, toWrite;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        count = 1;
                        if (load) {
                            this.discovries = JSON.parse(fs.readFileSync("all.json", 'utf-8'));
                        }
                        _i = 0, _a = this.discovries;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        discovery = _a[_i];
                        _b = 0, _c = this.discovries;
                        _d.label = 2;
                    case 2:
                        if (!(_b < _c.length)) return [3 /*break*/, 5];
                        secondDiscovery = _c[_b];
                        return [4 /*yield*/, this.checkDiscovery(discovery, secondDiscovery)];
                    case 3:
                        _d.sent();
                        count++;
                        if ((count % 20) == 0) {
                            toWrite = void 0;
                            // if (load) {
                            // toWrite = fs.readFileSync("all.json", 'utf-8');
                            // } else {
                            toWrite = JSON.stringify(this.discovries);
                            // }
                            fs.writeFile("all.json", toWrite, function (err) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                console.log("File created and text written successfully!");
                            });
                        }
                        _d.label = 4;
                    case 4:
                        _b++;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}());
// Chnage this if needed.
var load = false;
var p = new Main();
p.runtime(load);
