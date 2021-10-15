Part 2 Question 1:
3
"3" will get printed out because "i" is being declared as a var. Since it is declared as a var, it is function-scoped and exists in the whole function. The length of the list being passed in is 3 so "console.log(i)" will print out 3.

Part 2 Question 2:
150
"150" will get printed out because what it does is it takes all the prices from the list and then multiplies it by 1 minus the discount for each item. In this case, the last item has a price of 300 and the discount is 50%. That gives us a discounted price of 150.

Part 2 Question 3:
150
"150" will get printed out because finalPrice just gets set equal to the discountedPrice with some rounding. It is essentially the final price of the discounted item.

Part 2 Question 4:
[ 50, 100, 150 ]
"[ 50, 100, 150 ]" will be returned from the function call because the function returns a list. That list consists of all the discounted prices, in this case we have 3 all with a 50% discount.

Part 2 Question 5:
ERROR
Running the code at line 12 will result in an ERROR because we're using let. Let is block-scoped and when we called console.log(i), it is no longer in the scope of where "i" is located (which is inside the for loop, while our call was outside the for loop).

Part 2 Question 6:
ERROR
Similar to the previous question, line 13 will also give us an error. Let was used for the variable definition of "discountedPrice" which lives inside the for-loop block. That is it's scope, but we tried to access that variable outside of its scope, thus giving us an ERROR.

Part 2 Question 7:
150
"150" will get printed out because although we are using let for our variable definition, it exists inside the same block/scope as the console.log(finalPrice) call. For that reason, there would be no ERROR and "150" will print out as intended.

Part 2 Question 8:
[ 50, 100, 150 ]
"[ 50, 100, 150 ]" will be returned from the function call because the function returns a list. Even with the let keyword being used for the variable declaration, the return call is within the same block/scope as the definition of the variable. That is why there is no ERROR and the list still prints out as usual.

Part 2 Question 9:
ERROR
Running the code at line 11 will result in an ERROR because we're using let. Let is block-scoped and when we called console.log(i), it is no longer in the scope of where "i" is located (which is inside the for loop, while our call was outside the for loop).

Not sure if there was an error in the code, but maybe the idea was to use "const i" for this one? In that case it would be a different ERROR, which would state that you can't assign another value to a const (using i++).

Part 2 Question 10:
3
"3" will be printed out because the "length" (in this case there are 3 elements) was assigned "prices.length" to start and stays that way throughout the whole program. Since it's a constant it cannot be altered later on, otherwise we'd get an ERROR.

Part 2 Question 11:
[ 50, 100, 150 ]
"[ 50, 100, 150 ]" will still get printed out here because "const discounted", which is the list, is never getting reassigned. We use a function call in order to push onto the list new values, however, it is not actually getting reassigned a value. That is why there is no ERROR given to us.
