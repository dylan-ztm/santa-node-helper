# santa-node-helper
Day 1 Advent of Code Challenge - 2015

Exercise 274, The Complete Web Developer in 2020: Zero To Mastery

Instructions: The santa-helper.js script solves the Advent of Code challenge listed below by reading all of the characters from
the santa-input.txt file.  To test this script, you will need to download the script and the text file to a folder on your computer.  To change the input file to a different one, you can modify the INSTRUCTION_FILE variable. The original coding challenge from Advent of Code 2015 is listed below.  Any feedback on how this script can be improved is always welcome!

--- Day 1: Not Quite Lisp ---
Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Here's an easy puzzle to warm you up.

Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

For example:
()() results in floor 0.
)())()) results in floor -3.

To what floor do the instructions take Santa?
----------------------------------------------------

--- Part Two ---
Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?
