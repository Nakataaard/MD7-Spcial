let handler = async m => m.reply(`
╭─「 Donasi • E Wallet 」
│ DANA •  [085748894171]
│ GOPAY •  [085748894171]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler