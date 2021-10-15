Part 1 Question 1:
values added: 20
I would say that by line 9, "values added: 20" would print out if the code above was ran. Vars are function-scoped or global-scoped so as it is written, it exists in the function sumValues.

Part 1 Question 2:
final result: 20
I would say that by line 13, "final result: 20" would print out if the code above was ran. Since result is still in the function (sumValues) and it's a var, it should still have 20 as the value.

Part 1 Question 3:
values added: 20
I would say that by line 9, "values added: 20" would print out if the code above was ran. Lets are block-scoped so since "result" is defined in the if-block, it value of "result" will be 20.

Part 1 Question 4:
ERROR
The console.log part on line 13 is trying to access "result" which is defined as a let in the if-block. However, where it is being accessed is out of scope which is why it leads to an ERROR.

Part 1 Question 5:
ERROR
There is an ERROR by line 9 because we are trying to assign another value to "result" which is already defined as a constant variable. Constants cannot be reassigned a value, they are supposed to be assigned and then unchanged.

Part 1 Question 6:
ERROR
There is an ERROR by line 13 because we are trying to assign another value to "result" which is already defined as a constant variable. There has already been an ERROR by line 9, which means at line 13 the ERROR will still be there. Had the constant not been reassigned, then by those two lines it would have just printed out the value as 0.
