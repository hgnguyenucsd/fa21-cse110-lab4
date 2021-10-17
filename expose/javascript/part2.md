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

DATA TYPES

Part 2 Questions 12:
A. student.name
B. student["Grad Year"]
C. student.greeting();
D. student["Favorite Teacher"].name
E. student.courseLoad[0]

Part 2 Questions 13:
A. ‘3’ + 2
Output: 32
This is string concatenation and the 2 becomes a string and attaches itself behind the 3.
B. ‘3’ - 2
Output: 1
Since strings cannot subtract, it knows to make its type and integer and perform the subtraction on that.
C. 3 + null
Output: 3
The null type equates to a 0 as an integer so it basically just did the addition operation on 3 and 0.
D. ‘3’ + null
Output: 3null
The null type just becomes "null" as a string and concatenates itself behind the '3'.
E. true + 3
Output: 4
"True" equates to 1 which is why when performed the addition operation on another numerical value, it will just add 1 to it. That is why we get 4 (1 + 3).
F. false + null
Output: 0
Both false and null equate to 0, numerically. The above is basically saying 0 + 0.
G. '3' + undefined
Output: 3undefined
Undefined here gets treated as a string so it will just get concatenated to 3 which will give us that output.
H. '3' - undefined
Output: NaN
Undefined when used with numeric conversions becomes NaN. Subtract 3 by NaN will not result in any numerical value that we can perceive, therefore our output is just "NaN".

Part 2 Questions 14:
A. ‘2’ > 1
Output: true
In this case the string '2' will become the number 2, which is greater than 1. That is why true is being outputted.
B. ‘2’ < ‘12’
Output: false
This is just a string comparison which compares strings in alphabetical order. It just so happens that those two strings are numbers and "2" comes after "1" in the alphanumeric order when comparing the characters one at a time.
C. 2 == ‘2’
Output: true
This comparison equates to true because immdiately because 2 and '2' AFTER type conversion will equate the to same thing. The double equals sign is a non-strict equality check that converts the type before comparing.
D. 2 === ‘2’
Output: false
This comparison equates to false immediately because 2 and '2' are not of the same type. The triple equals sign is a strict equality check that does not type convert.
E. true == 2
Output: false
This comparison equates to false because even after doing the type conversion, they will not be equal to each other as true is 1 in numerical value.
F. true === Boolean(2)
Output: true
Boolean(2) is true because Boolean of a non-zero positive number is true. In this case, they are both of the same type as well (Boolean). Since both are the same type and equate to true, we get true for the comparison.

Part 2 Questions 15:
The difference between "==" and "===" is that "==" (double equals) compares two values without converting the type, while "===" (triple equals) checks the equality without type conversion. That means something like "false" technically has a value of 0 and will equals (return true when compared with) the actual numerical value "0". When it checks for equality without type conversion, that means it brings into account the typing. If they are different types it can immediately return "false".

Part 2 Questions 16:
Check part2-question16.js.

Part 2 Questions 17:
[ 2, 4, 6 ]
This was very interesting to see, since we are able to pass functions in as arguments to a parameter of another function. As I read through the code, it seems that newArr is adding to it the callback called onto the original array. In this case doSomething was passed into callback. So when callback was called, in reality doSomething was actually being called, and what that does is multiply the number it's being passed into by 2. That is why we get the array, [2, 4, 6], which is the original array with each element multiplied by 2.

Part 2 Questions 18:
Check part2-question18.js

Part 2 Questions 19:
1
4
3
2
For the output 1 gets printed out first, then immediately after 4 gets printed, then 3 gets printed out without a delay but goes after 4, and then lastly 2 gets printed out with about a second delay.
