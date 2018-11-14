module.exports = {
    presets: [
        '@vue/app'
    ],
    "env": {
        "test": {
            "presets": [
                "@vue/app"
                //["@vue/app", { "targets": { "node": "current" }}]
            ]
        }
    }
}
