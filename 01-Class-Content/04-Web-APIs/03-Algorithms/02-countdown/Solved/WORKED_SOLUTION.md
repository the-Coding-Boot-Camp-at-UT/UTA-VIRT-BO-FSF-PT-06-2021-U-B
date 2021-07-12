# Countdown

The objective of this problem is when given a number (`num`), print every number, starting with `num` down to and including the number `1`.

So far we've done problems that have included counting up with for-loops. If we wanted to count _up_ from `1` to a given number, we might write code that looks like this:

```js
for (var i = 1; i <= num; i++) {
  console.log(i);
}
```

So we should be thinking: "what do we need to change to count down instead of up?"

A for-loop can be broken up into four parts:

1. A counter: `var i = 1;`

After each iteration of the loop, the counter should move closer to meeting a _condition_ that should end the loop.

2. A condition: `i <= num;`

The loop should continue for as long as the condition is true. In this case, as long as `i` is less than or equal to `num`, the loop should repeat.

3. A final expression: `i++;`

The final expression is run at the end of each iteration of the loop. This should bring the _counter_ closer to breaking the _condition_. In this case, the _counter_ is incremented by `1` on each iteration of the loop until it is no longer less than or equal to `num`.

4. The body: `{ console.log(i); }`

The code to be run at each iteration of the loop. The value of the counter is available at each iteration. In this case, if `num` is `5`, then the loop should print `1`, `2`, `3`, `4`, `5` to the console.

So understanding how for-loops work, we should be able to conclude that in order to count down from `num` to `1`, we must do a few things differently:

1. We must start the counter at `num`. This will ensure that `num` is logged at the first iteration.

2. We must set the condition so that the loop continues while the counter is more than `0` -- or more than or equal to `1`.

3. We set the final statement to decrement the counter -- that is, it should decrease by `1` after each iteration to bring it closer to breaking the condition.

```js
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
}
```

You can try out your solution by running it in your Chrome console and giving it a few different inputs.

When thinking about these types of problems, it's helpful to sketch out your logic on paper. It's easy to count down yourself, but it can be a little less obvious how you might instruct your code to do the same. Even if a problem does feel obvious, still practice writing out the general steps you need to take at first. This will help you when you need to thing through more complex problems.
