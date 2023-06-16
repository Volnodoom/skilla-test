import { calculateInOutToClient } from "utils/utils";

/**
 * @typedef partner_data
 * @type {Object}
 * @property {number} name
 * @property {number} phone
 */

/**
 * @typedef serverDatum
 * @type {Object}
 * @property {partner_data} partner_data
 * @property {number} id
 * @property {number} in_out
 * @property {string} partnership_id
 * @property {number} time
 * @property {string} date
 * @property {string} date_notime
 * @property {string} record
 * @property {string} source
 * @property {string} name
 * @property {string} phone
 * @property {string} person_name
 * @property {string} person_surname
 * @property {string} person_avatar
 */

/**
 * @typedef partnerData
 * @type {Object}
 * @property {number} name
 * @property {number} phone
 */

/**
 * @typedef clientDatum
 * @type {Object}
 * @property {number} id
 * @property {string} partnershipId
 * @property {partnerData} partnerData
 * @property {string} date
 * @property {string} dateNoTime
 * @property {number} duration
 * @property {string} record
 * @property {string} source
 * @property {string} inOut
 * @property {string} personName
 * @property {string} personSurname
 * @property {string} personAvatar
 */

/**
 * @param {serverDatum} serverCallData
 * @returns {clientDatum}
 */


export const adapterCallsInfo = (serverCallData) => {
const clientCallInfo = {
    id: serverCallData.id,
    partnershipId: serverCallData['partnership_id'],
    partnerData: {
      name: serverCallData['partner_data'].name,
      phone: serverCallData['partner_data'].phone,
    },
    date: serverCallData.date,
    dateNoTime: serverCallData['date_notime'],
    duration: serverCallData.time,
    record: serverCallData.record,
    source: serverCallData.source,
    inOut: calculateInOutToClient(serverCallData['in_out']),
    personName: serverCallData['person_name'],
    personSurname: serverCallData['person_surname'],
    personAvatar: serverCallData['person_avatar'],
  }

  return clientCallInfo;
}
