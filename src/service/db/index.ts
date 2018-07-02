import * as mongoose from 'mongoose'

// FIXME: move credentials and other config stuff to a config file

mongoose.connect('mongodb://localhost/webmechwarrior')
;(mongoose as any).Promise = global.Promise

export const db = mongoose.connection

mongoose.pluralize(undefined)
db.on('error', console.error.bind(console, '[MongoDB connection error]'))