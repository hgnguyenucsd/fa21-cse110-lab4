1. The bug was that num1 and num2 were of string type when it got pulled in from the browser. This caused it to do a concatenation instead of adding it.
2. One way I would fix it would be to find some way to typecast the variables of string type to be those of an integer or number. Once they're an integer or number then I can do the addition normally. In this case, I just used Number().
