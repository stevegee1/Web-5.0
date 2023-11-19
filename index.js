import {Web5} from "@web5/api"
import {webcrypto} from "node:crypto"

if(!globalThis.crypto) globalThis.crypto= webcrypto

const {web5, did:stevenDid}= await Web5.connect()

const {record} = await web5.dwn.records.create({
    data:"Hello Segun",
    message:{
        dataFormat: "text/plain"

    }
})
//const readResult = await record.data.text()
const updatedResult = await record.update({
    data:"This is Ogar Segun Stephen"
})
const deleteResult= await record.delete()
const readingResult = await record.data.text()
console.log(readingResult)
