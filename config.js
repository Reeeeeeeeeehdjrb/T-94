module.exports = {
    app: {
        token: 'MTE2MTc3ODY5MDU5ODkxMjAxMA.G67P2v.ViY1ZPlFLj3EGQstl3lgOZ122KVeU4brOZu1hM',
        playing: 'by Zerio ❤️',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
