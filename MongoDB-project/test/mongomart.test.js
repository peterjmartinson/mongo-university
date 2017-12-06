const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      sinon = require('sinon'),
      ItemDAO = require('../items').ItemDAO,
      CartDAO = require('../cart').CartDAO;

describe('The canary', function() {
  it('tweets', function() {
    assert.ok(true);
  });
});

MongoClient.connect('mongodb://localhost:27017/mongomart', function(err, db) {
  "use strict";

  // assert.equal(null, err);

  describe('ItemDAO', function() {
    beforeEach(function() {
      this.items = new ItemDAO(db);
    });

    afterEach(function() {
      this.items = {};
    });

    it('should exist', function() {
      let items = this.items;
      // console.log(items);
      assert.ok(true);
    });

    it('should contain function getCategories()', function() {
      let items = this.items;
      console.log(items.db);
      assert.equal(typeof items.getCategories, 'function');
    });

    it('should do something!!', function() {
      let items = this.items;

      let toArray = sinon.stub();
      let aggregate = sinon.stub();

      items.db = {
        "collection" : sinon.stub()
      }

      console.log(items.db.collection.returns)

      // items.db = {
      //   "collection" : {
      //     "aggregate" : {
      //       "toArray" : sinon.stub()
      //     }
      //   }
      // };

      let fake_callback = sinon.stub();

      items.getCategories(fake_callback);
      assert.equal(items.db.collection.aggregate.toArray.called, true);

    });

  });

  // db.close();
});



        // this.db.collection("item").aggregate(
        //     { $match: { category: { $ne : null }} },
        //     { $group: { _id:"$category", num:{$sum:1}} },
        //     { $sort: { _id:-1} })
        //   .toArray(function(err, docs) {
        //     assert.equal(null, err);
        //     var category_total = 0;
        //     docs.forEach(function(doc) {
        //       category_total += doc.num;
        //       categories.push(doc);
        //     });
