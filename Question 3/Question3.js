const changePossibilities = (target, denominations) => {
    let combinations = [1];

    denominations.forEach(coin => {
      for (let amount = 1; amount <= target; amount++) {
        if (combinations[amount] === undefined) combinations[amount] = 0;
        if (amount >= coin)combinations[amount] += combinations[amount - coin];
      }
    })

    return combinations[target];
}