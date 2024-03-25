
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: March 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateSalary() {
  // input
  const numberOfHour = parseInt(document.getElementById('number-of-hour').value)
  const payRate = parseInt(document.getElementById('pay-rate').value)
  const TAX_RATE = 0.18

  // process
  const payBeforeTaxes = numberOfHour * payRate
  const taxes = payBeforeTaxes * TAX_RATE
  const payAfterTaxes= payBeforeTaxes - taxes
  // output
  document.getElementById('salary').innerHTML = "Your pay will be: $" + payAfterTaxes.toFixed(2)
  document.getElementById('taxes').innerHTML = "Your govermnet will take will be: $" + taxes.toFixed(2)
}
