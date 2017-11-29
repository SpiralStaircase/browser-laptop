/* global describe, it, before, after */

const assert = require('assert')
const sinon = require('sinon')
let dates

require('../../braveUnit')

describe('update date handling', function () {
  const exampleDate = 1510708981887 // Tuesday November 14th 2017, 6:23:01 PM
  let fakeClock
  before(function () {
    fakeClock = sinon.useFakeTimers(exampleDate)
    dates = require('../../../../app/dates')
  })
  after(function () {
    fakeClock.restore()
  })

  describe('todayYMD', function () {
    it('returns YYYY-MM-DD of today', function () {
      assert.equal(dates.todayYMD(), '2017-11-14', 'today')
    })
  })

  describe('todayWOY', function () {
    it('returns the ISO week number for today', function () {
      assert.equal(dates.todayWOY(), 314, 'ISO week number')
    })
  })

  describe('todayMonth', function () {
    it('returns the month of today as a number', function () {
      assert.equal(dates.todayMonth(), 11, 'Month of today')
    })
  })

  describe('lastMonday', function () {
    it('returns YYYY-MM-DD of closest Monday in the past to current date', function () {
      var d = new Date(exampleDate)
      assert.equal(dates.lastMonday(d), '2017-11-13', 'previous Monday')
    })
  })
})
