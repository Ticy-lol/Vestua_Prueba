/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */
var csv = require("csvtojson");
var csvwriter = require("csv-writer");

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`);

var BrowserEvents = [];

function writeCsv(json) {
  var createCsvWriter = csvwriter.createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: "output.csv",
    header: [
      { id: "id", title: "productId" },
      { id: "clicks", title: "clicks" },
      { id: "impressions", title: "impressions" },
      { id: "ctr", title: "ctr" },
    ],
  });
  csvWriter
    .writeRecords(json)
    .then(() => console.log("Data uploaded into csv successfully"));
}
function uniqueImpressions(productId) {
  let BrowserImpressions = [];
  let BrowserImpressionsUser = [];
  BrowserEvents.forEach((item) => {
    if (
      !BrowserImpressionsUser.includes(item.user) &&
      item.eventType === "impression" &&
      item.entityId == productId
    ) {
      BrowserImpressions.push(item);
      BrowserImpressionsUser.push(item.user);
    }
  });
  return BrowserImpressions.length;
}

function uniqueClicks(productId) {
  let BrowserClicks = [];
  let BrowserClicksUser = [];
  BrowserEvents.forEach((item) => {
    if (
      !BrowserClicksUser.includes(item.user) &&
      item.eventType === "click" &&
      item.entityId == productId
    ) {
      BrowserClicks.push(item);
      BrowserClicksUser.push(item.user);
    }
  });
  return BrowserClicks.length;
}
function UniqueEntityIds() {
  let uniqueEntityId = {};
  let jsonData = [];

  let array = BrowserEvents.filter(function (item) {
    var exists = !uniqueEntityId[item.entityId];
    uniqueEntityId[item.entityId] = true;
    if (exists == true) {
      let obj = {};
      obj.id = item.entityId;
      obj.clicks = uniqueClicks(item.entityId);
      obj.impressions = uniqueImpressions(item.entityId);
      obj.ctr = obj.clicks / obj.impressions;
      jsonData.push(obj);
    }
    return exists;
  });
  /*
  BrowserEvents.forEach((item) => {
    if (!uniqueEntityId.includes(item.entityId)) {
      uniqueEntityId.push(item.entityId);
      let obj = {};
      obj.id = item.entityId;
      obj.clicks = uniqueClicks(item.entityId);
      obj.impressions = uniqueImpressions(item.entityId);
      obj.ctr = obj.clicks / obj.impressions;
      jsonData.push(obj);
    }
  });*/
  writeCsv(jsonData);
}

const csvFilePath = "BrowsingEvents.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    BrowserEvents = jsonObj;
    UniqueEntityIds();
  });
