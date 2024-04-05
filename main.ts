/// <reference lib="ES2023" />
import * as fs from 'fs';

interface IDiscovery {
    name: string;
    emoji: string;
    isNew: boolean
    madeBy: string[]
}

interface IAPIReturn {
    result: string;
    emoji: string;
    isNew: boolean;
}

class Main {
    async fetchData(a: string, b: string): Promise<IAPIReturn> {
        const response = await fetch(`https://neal.fun/api/infinite-craft/pair?first=${a}&second=${b}`, {
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
        });
        const data = await response.json();
        return data;
    }

    async checkDiscovery(discovery: IDiscovery, secondDiscovery: IDiscovery) {
        try {
            let res = await this.fetchData(discovery.name, secondDiscovery.name);
            let toPush = { name: res.result, emoji: res.emoji, isNew: res.isNew, madeBy: [discovery.name, secondDiscovery.name] };

            let exists = this.discovries.some(item => item.name === toPush.name && item.emoji === toPush.emoji);

            if (!exists) {
                this.discovries.push(toPush);
            }

            if (res.isNew) {
                console.log("New one found! " + res.emoji + " " + res.result);
                console.log("Made by " + discovery.name + " and " + secondDiscovery.name);
            }



        } catch (error) {
            console.warn(error);
            await this.checkDiscovery(discovery, secondDiscovery);
        }
    }

    discovries: IDiscovery[] = [
        { name: "Water", emoji: "💧", isNew: false, madeBy: ["elem", "elem"] }, { name: "Wind", emoji: "🌬️", isNew: false, madeBy: ["elem", "elem"] }, { name: "Fire", emoji: "🔥", isNew: false, madeBy: ["elem", "elem"] }, { name: "Earth", emoji: "🌍", isNew: false, madeBy: ["elem", "elem"] }
    ]

    async runtime(load: boolean) {
        let count = 1
        if (load) { this.discovries = JSON.parse(fs.readFileSync("all.json", 'utf-8')); }
        for (let discovery of this.discovries) {
            for (let secondDiscovery of this.discovries) {
                await this.checkDiscovery(discovery, secondDiscovery);
                count++;

                if ((count % 20) == 0) {
                    let toWrite: string;
                    // if (load) {
                        // toWrite = fs.readFileSync("all.json", 'utf-8');
                    // } else {
                        toWrite = JSON.stringify(this.discovries);
                    // }
                    fs.writeFile("all.json", toWrite, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        console.log("File created and text written successfully!");
                    });
                }
            }
        }
    }
}

// Chnage this if needed.
var load: boolean = false;

let p = new Main()
p.runtime(load);