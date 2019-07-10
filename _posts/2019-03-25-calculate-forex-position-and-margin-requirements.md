---
layout: post
title: "Calculate Forex Position and Margin requirements"
date: 2019-03-25 11:53:02 +0100
author: Arne Gockeln
categories: [trading]
keywords: "forex, trading, position size"
description: "A tutorial to calculate the forex position size."
---

If you go for manual forex trading you need to calculate the correct position size. The position size and margin requirement depends on your risk and money management and needs to be calculated for every trade again.

Let's have a look at the formulas to calculate the risk, position size, pip value and margin.

## Account Risk

First we need to have a look at our account size, how much we can risk and how far our stop loss is for the next trade.

| Variable             | Value     |
| -------------------- | --------- |
| Account denomination | EUR       |
| Account balance      | 10,000.00 |
| Risk in %            | 2         |
| Stop Loss in Pips    | 12        |

## Instrument

Let's have a look at the instrument we want to trade. In our first example we use EUR/USD. Note that the base of the instrument is equal to the account denomination. **EUR**/USD == EUR.

| Variable                  | Value   |
| ------------------------- | ------- |
| Instrument                | EUR/USD |
| Contract Size             | 100,000 |
| Point                     | 0.0001  |
| Exchange Rate Ask EUR/USD | 1.1201  |

## Formulas

### Risk

The formula for the risk in account denomination is common:


$$
balance \cdot (risk \div 100) = 10000 \cdot (2 \div 100) = 200
$$


That is **200 EUR** risk for the next trade.

---

### Pip Value

Ok, now we need to calculate the pip value:


$$
Point \div ExchRate \cdot ContractSize = 0.0001 \div 1.1201 \cdot 100,000 = 8.9277
$$


The pip value is **8.9277** EUR.

---

### Lot & Units

As we know that we want to risk 200 Euro for a 12 pip stop loss we now can calculate the lot size:


$$
Risk \div SL \div PipValue = 200 \div 12 \div 8.9277 = 1.86684
$$


The Lot size is **1.86684**. Or if you want to have that value in units you need to multiply it by the contract size value.


$$
Lot \cdot ContractSize = 1.86684 \cdot 100,000 = 186,684
$$




---

### Margin Requirement

To get the required margin for your trade you need the margin ratio and the margin exchange rate. 

| Variable                     | Value  |
| ---------------------------- | ------ |
| Margin Ratio                 | 30:1   |
| Margin Exchange Rate EUR/EUR | 1.0000 |




$$
MarginExchRate \cdot Units \div MarginRatio = 1 \cdot 186,684 \div 30 = 6,222.80
$$


The required margin for this trade is **6,222.80** EUR.



---

## Base currency != Account denomination

But what if the base of the currency pair does not equal to your account denomination like in **GBP**/JPY. Don't worry, it's simple.

The only thing we need is the Ask price of EUR/JPY as our exchange rate and put that in the formula for the pip value. Also note that the point size is 0.01 for JPY pairs.

| Variable                  | Value   |
| ------------------------- | ------- |
| Instrument                | GBP/JPY |
| Contract Size             | 100,000 |
| Point                     | 0.01    |
| Exchange Rate Ask EUR/JPY | 126.525 |

### Pip Value

$$
Point \div ExchRate \cdot ContractSize = 0.01 \div 126.525 \cdot 100,000 = 7.9035
$$

The pip value equals to **7.9035 EUR**.

---

### Lot & Units

$$
Risk \div SL \div PipValue = 200 \div 12 \div 7.9035 = 2.10877
$$

The lot size is **2.10877**. In units this is **210877**.

---

### Margin Requirement

| Variable                             | Value   |
| ------------------------------------ | ------- |
| Margin Ratio                         | 30      |
| Margin Exchange Rate ASK GBP/**EUR** | 1.32389 |


$$
MarginExchRate \cdot Units \div MarginRatio = 1.32389 \cdot 210877 \div 30 = 9,305.93
$$


The margin requirement for the GBP/JPY trade is **9,305.93** Euro.



## Is there an app?

That is a lot of math for one trade and as the markets are fast in lower timeframes I don't want to do the math in my head. So I decided to put in some work and developed a small application for this. I call it **FX Calculator** and it is a macOS app.

![FX Calc Screenshot]({{ site.url }}/uploads/032019/fxcalc_screenshot.png)

{% include paddle.html productname="FX Calculator" productid="555206" %}

Or you can download the source code of [FX Calculator on github](https://github.com/arnegockeln/fxcalc){:target="_blank"} and compile it yourself. 