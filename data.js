map = new Map();
const data = [
    ["https://www.bilibili.tv/en/video/4794375606243328?bstar_from=bstar-web.homepage.recommend.all", "https://raw.githubusercontent.com/sarangf924/sarangf924/refs/heads/main/BR/1.srt"],
    ["key2", "value2"],
    ["key3", "value3"]
    // Add more key-value pairs as needed
];

data.forEach(([key, value]) => map.set(key, value)); // Add all pairs at once
//console.log(map.get(window.location.href)); // Outputs: "value1"
