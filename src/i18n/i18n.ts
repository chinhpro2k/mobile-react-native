import i18n from 'i18n-js'

const en = require('./en')
const vi = require('./vi')

i18n.fallbacks = true
i18n.translations = { en, vi }

i18n.locale = 'vi'
