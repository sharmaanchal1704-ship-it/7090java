const Q=[
{s:0,t:"Program to copy all elements of one array into another array",c:`package single_dimensional_array;

public class Q1 {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = new int[arr1.length];
        for (int i = 0; i < arr1.length; i++) {
            arr2[i] = arr1[i];
        }
        System.out.println("Elements of original array:");
        for (int x : arr1) System.out.print(x + " ");
        System.out.println();
        System.out.println("Elements of new array:");
        for (int x : arr2) System.out.print(x + " ");
    }
}`,o:`Elements of original array:
1 2 3 4 5
Elements of new array:
1 2 3 4 5`},
{s:0,t:"Program to find the frequency of each element in the array",c:`package single_dimensional_array;

public class Q2 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 8, 3, 2, 2, 2, 5, 1};
        int[] fr = new int[arr.length];
        int visited = -1;
        for (int i = 0; i < arr.length; i++) {
            int count = 1;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                    fr[j] = visited;
                }
            }
            if (fr[i] != visited) fr[i] = count;
        }
        System.out.println("Element | Frequency");
        for (int i = 0; i < arr.length; i++) {
            if (fr[i] != visited)
                System.out.println("   " + arr[i] + "    |    " + fr[i]);
        }
    }
}`,o:`Element | Frequency
   1    |    2
   2    |    4
   8    |    1
   3    |    1
   5    |    1`},
{s:0,t:"Program to left rotate the elements of an array",c:`package single_dimensional_array;

public class Q3 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int n = 3;
        System.out.println("Original array:");
        for (int x : arr) System.out.print(x + " ");
        for (int i = 0; i < n; i++) {
            int first = arr[0];
            for (int j = 0; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr[arr.length - 1] = first;
        }
        System.out.println();
        System.out.println("Array after left rotation:");
        for (int x : arr) System.out.print(x + " ");
    }
}`,o:`Original array:
1 2 3 4 5
Array after left rotation:
4 5 1 2 3`},
{s:0,t:"Program to print the duplicate elements of an array",c:`package single_dimensional_array;

public class Q4 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 2, 7, 8, 8, 3};
        System.out.println("Duplicate elements in given array:");
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j])
                    System.out.println(arr[j]);
            }
        }
    }
}`,o:`Duplicate elements in given array:
2
3
8`},
{s:0,t:"Program to print the elements of an array",c:`package single_dimensional_array;

public class Q5 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Elements of given array:");
        for (int x : arr) System.out.print(x + " ");
    }
}`,o:`Elements of given array:
1 2 3 4 5`},
{s:0,t:"Program to print the elements of an array in reverse order",c:`package single_dimensional_array;

public class Q6 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original array:");
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
        System.out.println("Array in reverse order:");
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}`,o:`Original array:
1 2 3 4 5
Array in reverse order:
5 4 3 2 1`},
{s:0,t:"Program to print the elements of an array present on even position",c:`package single_dimensional_array;

public class Q7 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Elements of array on even position:");
        for (int i = 1; i < arr.length; i += 2) {
            System.out.print(arr[i] + " ");
        }
    }
}`,o:`Elements of array on even position:
2 4`},
{s:0,t:"Program to print the elements of an array present on odd position",c:`package single_dimensional_array;

public class Q8 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Elements of array on odd position:");
        for (int i = 0; i < arr.length; i += 2) {
            System.out.print(arr[i] + " ");
        }
    }
}`,o:`Elements of array on odd position:
1 3 5`},
{s:0,t:"Program to print the largest element in an array",c:`package single_dimensional_array;

public class Q9 {
    public static void main(String[] args) {
        int[] arr = {25, 11, 7, 75, 56};
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        System.out.println("Largest element in the array: " + max);
    }
}`,o:`Largest element in the array: 75`},
{s:0,t:"Program to print the smallest element in an array",c:`package single_dimensional_array;

public class Q10 {
    public static void main(String[] args) {
        int[] arr = {25, 11, 7, 75, 56};
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
        }
        System.out.println("Smallest element in the array: " + min);
    }
}`,o:`Smallest element in the array: 7`},
{s:0,t:"Program to print the number of elements present in an array",c:`package single_dimensional_array;

public class Q11 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        System.out.println("Number of elements present in the array: " + arr.length);
    }
}`,o:`Number of elements present in the array: 6`},
{s:0,t:"Program to print the sum of all the items of the array",c:`package single_dimensional_array;

public class Q12 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println("Sum of all the elements of an array: " + sum);
    }
}`,o:`Sum of all the elements of an array: 15`},
{s:0,t:"Program to right rotate the elements of an array",c:`package single_dimensional_array;

public class Q13 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int n = 3;
        System.out.println("Original array:");
        for (int x : arr) System.out.print(x + " ");
        for (int i = 0; i < n; i++) {
            int last = arr[arr.length - 1];
            for (int j = arr.length - 1; j > 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = last;
        }
        System.out.println();
        System.out.println("Array after right rotation:");
        for (int x : arr) System.out.print(x + " ");
    }
}`,o:`Original array:
1 2 3 4 5
Array after right rotation:
3 4 5 1 2`},
{s:0,t:"Program to sort the elements of an array in ascending order",c:`package single_dimensional_array;

public class Q14 {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 7, 1};
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Elements of array sorted in ascending order:");
        for (int x : arr) System.out.print(x + " ");
    }
}`,o:`Elements of array sorted in ascending order:
1 2 5 7 8`},
{s:0,t:"Program to sort the elements of an array in descending order",c:`package single_dimensional_array;

public class Q15 {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 7, 1};
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Elements of array sorted in descending order:");
        for (int x : arr) System.out.print(x + " ");
    }
}`,o:`Elements of array sorted in descending order:
8 7 5 2 1`},
{s:0,t:"Program to Find 3rd Largest Number in an array",c:`package single_dimensional_array;

public class Q16 {
    public static void main(String[] args) {
        int[] arr = {10, 5, 20, 8, 15, 25};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE, third = Integer.MIN_VALUE;
        for (int x : arr) {
            if (x > first) {
                third = second;
                second = first;
                first = x;
            } else if (x > second) {
                third = second;
                second = x;
            } else if (x > third) {
                third = x;
            }
        }
        System.out.println("3rd largest number: " + third);
    }
}`,o:`3rd largest number: 15`},
{s:0,t:"Program to Find 2nd Largest Number in an array",c:`package single_dimensional_array;

public class Q17 {
    public static void main(String[] args) {
        int[] arr = {10, 5, 20, 8, 15, 25};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int x : arr) {
            if (x > first) {
                second = first;
                first = x;
            } else if (x > second && x != first) {
                second = x;
            }
        }
        System.out.println("2nd largest number: " + second);
    }
}`,o:`2nd largest number: 20`},
{s:0,t:"Program to Find Largest Number in an array",c:`package single_dimensional_array;

public class Q18 {
    public static void main(String[] args) {
        int[] arr = {10, 5, 20, 8, 15, 25};
        int largest = arr[0];
        for (int x : arr) {
            if (x > largest) largest = x;
        }
        System.out.println("Largest number: " + largest);
    }
}`,o:`Largest number: 25`},
{s:0,t:"Program to Find 2nd Smallest Number in an array",c:`package single_dimensional_array;

public class Q19 {
    public static void main(String[] args) {
        int[] arr = {10, 5, 20, 8, 15, 25};
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int x : arr) {
            if (x < first) {
                second = first;
                first = x;
            } else if (x < second && x != first) {
                second = x;
            }
        }
        System.out.println("2nd smallest number: " + second);
    }
}`,o:`2nd smallest number: 8`},
{s:0,t:"Program to Find Smallest Number in an array",c:`package single_dimensional_array;

public class Q20 {
    public static void main(String[] args) {
        int[] arr = {10, 5, 20, 8, 15, 25};
        int smallest = arr[0];
        for (int x : arr) {
            if (x < smallest) smallest = x;
        }
        System.out.println("Smallest number: " + smallest);
    }
}`,o:`Smallest number: 5`},
{s:0,t:"Program to Remove Duplicate Element in an array",c:`package single_dimensional_array;

public class Q21 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 3, 5};
        int[] result = new int[arr.length];
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            boolean duplicate = false;
            for (int j = 0; j < count; j++) {
                if (arr[i] == result[j]) {
                    duplicate = true;
                    break;
                }
            }
            if (!duplicate) result[count++] = arr[i];
        }
        System.out.println("Array after removing duplicates:");
        for (int i = 0; i < count; i++) {
            System.out.print(result[i] + " ");
        }
    }
}`,o:`Array after removing duplicates:
1 2 3 4 5`},
{s:0,t:"Program to Print Odd and Even Numbers from an array",c:`package single_dimensional_array;

public class Q22 {
    public static void main(String[] args) {
        int[] arr = {12, 7, 9, 4, 15, 22, 3};
        System.out.println("Even numbers:");
        for (int x : arr) {
            if (x % 2 == 0) System.out.print(x + " ");
        }
        System.out.println();
        System.out.println("Odd numbers:");
        for (int x : arr) {
            if (x % 2 != 0) System.out.print(x + " ");
        }
    }
}`,o:`Even numbers:
12 4 22
Odd numbers:
7 9 15 3`},
{s:0,t:"How to Sort an Array in Java",c:`package single_dimensional_array;

import java.util.Arrays;

public class Q23 {
    public static void main(String[] args) {
        int[] arr = {9, 3, 7, 1, 5};
        Arrays.sort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,o:`Sorted array: [1, 3, 5, 7, 9]`},
{s:1,t:"Write a Java method to find the smallest number among three numbers.",c:`package functions;

public class Q1 {
    static int smallest(int a, int b, int c) {
        int min = a;
        if (b < min) min = b;
        if (c < min) min = c;
        return min;
    }

    public static void main(String[] args) {
        System.out.println("Smallest number: " + smallest(25, 37, 29));
    }
}`,o:`Smallest number: 25`},
{s:1,t:"Write a Java method to compute the average of three numbers.",c:`package functions;

public class Q2 {
    static double average(double a, double b, double c) {
        return (a + b + c) / 3;
    }

    public static void main(String[] args) {
        System.out.printf("Average = %.2f%n", average(10, 20, 25));
    }
}`,o:`Average = 18.33`},
{s:1,t:"Write a Java method to display the middle character of a string. (odd length: one middle character, even length: two middle characters)",c:`package functions;

public class Q3 {
    static void middle(String s) {
        int len = s.length();
        if (len % 2 == 0)
            System.out.println(s + " -> " + s.substring(len / 2 - 1, len / 2 + 1));
        else
            System.out.println(s + " -> " + s.charAt(len / 2));
    }

    public static void main(String[] args) {
        middle("Hello");
        middle("Java");
    }
}`,o:`Hello -> l
Java -> av`},
{s:1,t:"Write a Java method to count all the words in a string.",c:`package functions;

public class Q4 {
    static int countWords(String s) {
        int count = 0;
        boolean inWord = false;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != ' ') {
                if (!inWord) {
                    count++;
                    inWord = true;
                }
            } else {
                inWord = false;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String s = "The quick brown fox jumps over the lazy dog";
        System.out.println("Number of words: " + countWords(s));
    }
}`,o:`Number of words: 9`},
{s:1,t:"Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",c:`package functions;

public class Q5 {
    static double futureValue(double investment, double annualRate, int years) {
        double monthlyRate = annualRate / 1200;
        return investment * Math.pow(1 + monthlyRate, years * 12);
    }

    public static void main(String[] args) {
        double amount = 1000, rate = 7;
        int years = 5;
        System.out.printf("Investment: %.2f, Rate: %.2f%%, Years: %d%n", amount, rate, years);
        System.out.printf("Future value: %.2f%n", futureValue(amount, rate, years));
    }
}`,o:`Investment: 1000.00, Rate: 7.00%, Years: 5
Future value: 1417.63`},
{s:1,t:"Write a Java method to print characters between two characters (i.e. A to P).",c:`package functions;

public class Q6 {
    static void printChars(char start, char end) {
        for (char c = start; c <= end; c++) {
            System.out.print(c + " ");
        }
    }

    public static void main(String[] args) {
        printChars('A', 'P');
    }
}`,o:`A B C D E F G H I J K L M N O P`},
{s:1,t:"Write a Java method to check whether a string is a valid password. (Rules: at least 8 characters, only letters and digits, at least 2 digits)",c:`package functions;

public class Q7 {
    static boolean isValid(String p) {
        if (p.length() < 8) return false;
        int digits = 0;
        for (int i = 0; i < p.length(); i++) {
            char c = p.charAt(i);
            if (!Character.isLetterOrDigit(c)) return false;
            if (Character.isDigit(c)) digits++;
        }
        return digits >= 2;
    }

    public static void main(String[] args) {
        String[] passwords = {"abcd1234", "abc123", "abcdefg1", "abcd@1234"};
        for (String p : passwords) {
            System.out.println(p + " -> " + (isValid(p) ? "Valid" : "Invalid"));
        }
    }
}`,o:`abcd1234 -> Valid
abc123 -> Invalid
abcdefg1 -> Invalid
abcd@1234 -> Invalid`},
{s:1,t:"Write a Java method to display the current date and time.",c:`package functions;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Q8 {
    static void showDateTime() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter f = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Current date and time: " + now.format(f));
    }

    public static void main(String[] args) {
        showDateTime();
    }
}`,o:`Current date and time: 2026-10-17 05:40:24`},
{s:1,t:"Write a Java method to find all twin prime numbers less than 100.",c:`package functions;

public class Q9 {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    static void twinPrimes(int limit) {
        for (int i = 2; i + 2 < limit; i++) {
            if (isPrime(i) && isPrime(i + 2))
                System.out.println("(" + i + ", " + (i + 2) + ")");
        }
    }

    public static void main(String[] args) {
        twinPrimes(100);
    }
}`,o:`(3, 5)
(5, 7)
(11, 13)
(17, 19)
(29, 31)
(41, 43)
(59, 61)
(71, 73)`},
{s:1,t:"Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",c:`package functions;

public class Q10 {
    static int countTwos(int n) {
        int count = 0;
        while (n > 0) {
            if (n % 10 == 2) count++;
            n /= 10;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println("Digit 2 in 2252: " + countTwos(2252));
        System.out.println("Digit 2 in 1345: " + countTwos(1345));
    }
}`,o:`Digit 2 in 2252: 3
Digit 2 in 1345: 0`},
{s:1,t:"Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",c:`package functions;

public class Q11 {
    static boolean consecutive(int a, int b, int c) {
        int max = Math.max(a, Math.max(b, c));
        int min = Math.min(a, Math.min(b, c));
        return (max - min == 2) && a != b && b != c && a != c;
    }

    public static void main(String[] args) {
        System.out.println(consecutive(5, 6, 7));
        System.out.println(consecutive(7, 5, 6));
        System.out.println(consecutive(1, 3, 5));
    }
}`,o:`true
true
false`},
{s:1,t:"Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",c:`package functions;

public class Q12 {
    static boolean middlePoint(int a, int b, int c) {
        return (2 * a == b + c) || (2 * b == a + c) || (2 * c == a + b);
    }

    public static void main(String[] args) {
        System.out.println(middlePoint(2, 5, 8));
        System.out.println(middlePoint(1, 4, 9));
    }
}`,o:`true
false`},
{s:1,t:"Write a Java method that checks whether all the characters in a given string are vowels (a, e, i, o, u) or not. Return true if each character in the string is a vowel, otherwise return false.",c:`package functions;

public class Q13 {
    static boolean allVowels(String s) {
        for (int i = 0; i < s.length(); i++) {
            if ("aeiou".indexOf(Character.toLowerCase(s.charAt(i))) == -1)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(allVowels("aeiou"));
        System.out.println(allVowels("aeiouxyz"));
    }
}`,o:`true
false`},
{s:2,t:"Program to Check if a String contains only digits?",c:`package strings;

public class Q1 {
    public static void main(String[] args) {
        String[] arr = {"12345", "123a5"};
        for (String s : arr) {
            boolean onlyDigits = !s.isEmpty();
            for (int i = 0; i < s.length(); i++) {
                if (!Character.isDigit(s.charAt(i))) {
                    onlyDigits = false;
                    break;
                }
            }
            System.out.println(s + " contains only digits: " + onlyDigits);
        }
    }
}`,o:`12345 contains only digits: true
123a5 contains only digits: false`},
{s:2,t:"Program to perform Deep Copy for String?",c:`package strings;

public class Q2 {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = new String(s1);
        System.out.println("Original: " + s1);
        System.out.println("Copy: " + s2);
        System.out.println("Same reference (==): " + (s1 == s2));
        System.out.println("Same content (equals): " + s1.equals(s2));
    }
}`,o:`Original: hello
Copy: hello
Same reference (==): false
Same content (equals): true`},
{s:2,t:"Program to prove String is immutable programmatically?",c:`package strings;

public class Q3 {
    public static void main(String[] args) {
        String s = "Hello";
        s.concat(" World");
        System.out.println("After concat without assignment: " + s);
        String old = s;
        s = s.concat(" World");
        System.out.println("After assigning the result: " + s);
        System.out.println("Old string is still: " + old);
        System.out.println("Same object: " + (old == s));
    }
}`,o:`After concat without assignment: Hello
After assigning the result: Hello World
Old string is still: Hello
Same object: false`},
{s:2,t:"Program to remove all occurrences of a given character from input String?",c:`package strings;

public class Q4 {
    public static void main(String[] args) {
        String s = "Programming";
        char ch = 'm';
        String result = s.replace(String.valueOf(ch), "");
        System.out.println("Original string: " + s);
        System.out.println("After removing '" + ch + "': " + result);
    }
}`,o:`Original string: Programming
After removing 'm': Prograing`},
{s:2,t:"Program to append the string using StringBuffer class",c:`package strings;

public class Q5 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" Java");
        sb.append(8);
        System.out.println(sb);
    }
}`,o:`Hello Java8`},
{s:2,t:"Program to insert the string using StringBuffer class",c:`package strings;

public class Q6 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello World");
        sb.insert(6, "Java ");
        System.out.println(sb);
        sb.insert(0, ">> ");
        System.out.println(sb);
    }
}`,o:`Hello Java World
>> Hello Java World`},
{s:2,t:"Program to Add Characters to a String",c:`package strings;

public class Q7 {
    public static void main(String[] args) {
        String s = "Java";
        s = s + '!';
        s = '#' + s;
        System.out.println(s);
    }
}`,o:`#Java!`},
{s:2,t:"Program to Add Characters to a String (at a given position)",c:`package strings;

public class Q8 {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Java");
        sb.insert(2, '-');
        System.out.println(sb);
    }
}`,o:`Ja-va`},
{s:2,t:"Program to Check Anagram",c:`package strings;

import java.util.Arrays;

public class Q9 {
    public static void main(String[] args) {
        String a = "listen", b = "silent";
        char[] x = a.toCharArray();
        char[] y = b.toCharArray();
        Arrays.sort(x);
        Arrays.sort(y);
        if (Arrays.equals(x, y))
            System.out.println(a + " and " + b + " are anagrams");
        else
            System.out.println(a + " and " + b + " are not anagrams");
    }
}`,o:`listen and silent are anagrams`},
{s:2,t:"Program to check whether a string is a Palindrome",c:`package strings;

public class Q10 {
    public static void main(String[] args) {
        String s = "madam";
        String rev = new StringBuilder(s).reverse().toString();
        if (s.equals(rev))
            System.out.println(s + " is a palindrome");
        else
            System.out.println(s + " is not a palindrome");
    }
}`,o:`madam is a palindrome`},
{s:2,t:"Program to Convert Enum to String",c:`package strings;

public class Q11 {
    public static void main(String[] args) {
        Day d = Day.MONDAY;
        String s = d.toString();
        System.out.println("Enum to String: " + s);
        for (Day x : Day.values()) {
            System.out.println(x.name());
        }
    }

    enum Day { MONDAY, TUESDAY, WEDNESDAY }
}`,o:`Enum to String: MONDAY
MONDAY
TUESDAY
WEDNESDAY`},
{s:2,t:"Program to Convert String to String Array",c:`package strings;

import java.util.Arrays;

public class Q12 {
    public static void main(String[] args) {
        String s = "apple,banana,cherry";
        String[] arr = s.split(",");
        System.out.println("Length of array: " + arr.length);
        System.out.println(Arrays.toString(arr));
    }
}`,o:`Length of array: 3
[apple, banana, cherry]`},
{s:2,t:"Program to count number of words in a String?",c:`package strings;

public class Q13 {
    public static void main(String[] args) {
        String s = "Welcome to the world of Java programming";
        String[] words = s.trim().split(" ");
        System.out.println("Number of words: " + words.length);
    }
}`,o:`Number of words: 7`},
{s:2,t:"Program to count the total number of characters in a string",c:`package strings;

public class Q14 {
    public static void main(String[] args) {
        String s = "Hello Java Program";
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != ' ') count++;
        }
        System.out.println("Total number of characters (excluding spaces): " + count);
    }
}`,o:`Total number of characters (excluding spaces): 16`},
{s:2,t:"Program to count the total number of punctuation characters exists in a String",c:`package strings;

public class Q15 {
    public static void main(String[] args) {
        String s = "Hello, World! How are you? (Fine; thanks.)";
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (String.valueOf(s.charAt(i)).matches("\\\\p{Punct}")) count++;
        }
        System.out.println("Total punctuation characters: " + count);
    }
}`,o:`Total punctuation characters: 7`},
{s:2,t:"Program to count the total number of vowels and consonants in a string",c:`package strings;

public class Q16 {
    public static void main(String[] args) {
        String s = "Hello World";
        int vowels = 0, consonants = 0;
        for (char c : s.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                if ("aeiou".indexOf(c) != -1) vowels++;
                else consonants++;
            }
        }
        System.out.println("Number of vowels: " + vowels);
        System.out.println("Number of consonants: " + consonants);
    }
}`,o:`Number of vowels: 3
Number of consonants: 7`},
{s:2,t:"Program to determine whether a given string is palindrome",c:`package strings;

public class Q17 {
    public static void main(String[] args) {
        String s = "racecar";
        boolean pal = true;
        int i = 0, j = s.length() - 1;
        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) {
                pal = false;
                break;
            }
            i++;
            j--;
        }
        System.out.println(s + (pal ? " is a palindrome" : " is not a palindrome"));
    }
}`,o:`racecar is a palindrome`},
{s:2,t:"Program to determine whether one string is a rotation of another",c:`package strings;

public class Q18 {
    public static void main(String[] args) {
        String s1 = "ABCD", s2 = "CDAB";
        if (s1.length() == s2.length() && (s1 + s1).contains(s2))
            System.out.println(s2 + " is a rotation of " + s1);
        else
            System.out.println(s2 + " is not a rotation of " + s1);
    }
}`,o:`CDAB is a rotation of ABCD`},
{s:2,t:"Program to divide a string in 'N' equal parts.",c:`package strings;

public class Q19 {
    public static void main(String[] args) {
        String s = "aaaabbbbcccc";
        int n = 3;
        if (s.length() % n != 0) {
            System.out.println("String cannot be divided into " + n + " equal parts");
        } else {
            int size = s.length() / n;
            for (int i = 0; i < n; i++) {
                System.out.println("Part " + (i + 1) + ": " + s.substring(i * size, (i + 1) * size));
            }
        }
    }
}`,o:`Part 1: aaaa
Part 2: bbbb
Part 3: cccc`},
{s:2,t:"Program to find all subsets of a string",c:`package strings;

public class Q20 {
    public static void main(String[] args) {
        String s = "abc";
        int n = s.length();
        for (int mask = 1; mask < (1 << n); mask++) {
            String sub = "";
            for (int j = 0; j < n; j++) {
                if ((mask & (1 << j)) != 0) sub += s.charAt(j);
            }
            System.out.println(sub);
        }
    }
}`,o:`a
b
ab
c
ac
bc
abc`},
{s:2,t:"Program to find all the permutations of a string",c:`package strings;

public class Q21 {
    static void permute(String s, int l, int r) {
        if (l == r) {
            System.out.println(s);
            return;
        }
        for (int i = l; i <= r; i++) {
            s = swap(s, l, i);
            permute(s, l + 1, r);
            s = swap(s, l, i);
        }
    }
    static String swap(String s, int i, int j) {
        char[] c = s.toCharArray();
        char t = c[i];
        c[i] = c[j];
        c[j] = t;
        return new String(c);
    }

    public static void main(String[] args) {
        permute("ABC", 0, 2);
    }
}`,o:`ABC
ACB
BAC
BCA
CBA
CAB`},
{s:2,t:"Program to find maximum and minimum occurring character in a string",c:`package strings;

public class Q22 {
    public static void main(String[] args) {
        String s = "success";
        int[] freq = new int[256];
        for (char c : s.toCharArray()) freq[c]++;
        char maxCh = s.charAt(0), minCh = s.charAt(0);
        for (char c : s.toCharArray()) {
            if (freq[c] > freq[maxCh]) maxCh = c;
            if (freq[c] < freq[minCh]) minCh = c;
        }
        System.out.println("Maximum occurring character: " + maxCh);
        System.out.println("Minimum occurring character: " + minCh);
    }
}`,o:`Maximum occurring character: s
Minimum occurring character: u`},
{s:2,t:"Program to find Reverse of the string",c:`package strings;

public class Q23 {
    public static void main(String[] args) {
        String s = "Programming";
        char[] c = s.toCharArray();
        int i = 0, j = c.length - 1;
        while (i < j) {
            char t = c[i];
            c[i++] = c[j];
            c[j--] = t;
        }
        System.out.println("Original string: " + s);
        System.out.println("Reversed string: " + new String(c));
    }
}`,o:`Original string: Programming
Reversed string: gnimmargorP`},
{s:2,t:"Program to find the duplicate characters in a string",c:`package strings;

import java.util.*;

public class Q24 {
    public static void main(String[] args) {
        String s = "programming";
        Map<Character, Integer> map = new LinkedHashMap<>();
        for (char c : s.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);
        System.out.println("Duplicate characters in " + s + ":");
        for (Map.Entry<Character, Integer> e : map.entrySet()) {
            if (e.getValue() > 1) System.out.println(e.getKey() + " : " + e.getValue());
        }
    }
}`,o:`Duplicate characters in programming:
r : 2
g : 2
m : 2`},
{s:2,t:"Program to find the duplicate words in a string",c:`package strings;

import java.util.*;

public class Q25 {
    public static void main(String[] args) {
        String s = "big black bug bit a big black dog on his big black nose";
        Map<String, Integer> map = new LinkedHashMap<>();
        for (String w : s.split(" ")) map.put(w, map.getOrDefault(w, 0) + 1);
        System.out.println("Duplicate words:");
        for (Map.Entry<String, Integer> e : map.entrySet()) {
            if (e.getValue() > 1) System.out.println(e.getKey() + " : " + e.getValue());
        }
    }
}`,o:`Duplicate words:
big : 3
black : 3`},
{s:2,t:"Program to find the frequency of characters",c:`package strings;

import java.util.*;

public class Q26 {
    public static void main(String[] args) {
        String s = "hello world";
        Map<Character, Integer> map = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            if (c != ' ') map.put(c, map.getOrDefault(c, 0) + 1);
        }
        for (Map.Entry<Character, Integer> e : map.entrySet()) {
            System.out.println(e.getKey() + " : " + e.getValue());
        }
    }
}`,o:`h : 1
e : 1
l : 3
o : 2
w : 1
r : 1
d : 1`},
{s:2,t:"Program to find the largest and smallest word in a string",c:`package strings;

public class Q27 {
    public static void main(String[] args) {
        String s = "Java programming is really fun";
        String largest = "", smallest = null;
        for (String w : s.split(" ")) {
            if (w.length() > largest.length()) largest = w;
            if (smallest == null || w.length() < smallest.length()) smallest = w;
        }
        System.out.println("Largest word: " + largest);
        System.out.println("Smallest word: " + smallest);
    }
}`,o:`Largest word: programming
Smallest word: is`},
{s:2,t:"Program to find the longest repeating sequence in a string",c:`package strings;

public class Q28 {
    public static void main(String[] args) {
        String s = "geeksforgeeks";
        int n = s.length();
        int[][] dp = new int[n + 1][n + 1];
        String res = "";
        int resLen = 0;
        for (int i = 1; i <= n; i++) {
            for (int j = i + 1; j <= n; j++) {
                if (s.charAt(i - 1) == s.charAt(j - 1) && dp[i - 1][j - 1] < (j - i)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    if (dp[i][j] > resLen) {
                        resLen = dp[i][j];
                        res = s.substring(i - resLen, i);
                    }
                }
            }
        }
        System.out.println("Longest repeating sequence: " + res);
    }
}`,o:`Longest repeating sequence: geeks`},
{s:2,t:"Program to find the most repeated word in a text file",c:`package strings;

import java.io.*;
import java.util.*;

public class Q29 {
    public static void main(String[] args) throws Exception {
        try (FileWriter fw = new FileWriter("words.txt")) {
            fw.write("the quick brown fox jumps over the lazy dog the end");
        }
        Map<String, Integer> map = new HashMap<>();
        try (BufferedReader br = new BufferedReader(new FileReader("words.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                for (String w : line.toLowerCase().split(" ")) {
                    map.put(w, map.getOrDefault(w, 0) + 1);
                }
            }
        }
        String best = "";
        int max = 0;
        for (Map.Entry<String, Integer> e : map.entrySet()) {
            if (e.getValue() > max) {
                max = e.getValue();
                best = e.getKey();
            }
        }
        System.out.println("Most repeated word: " + best + " (" + max + " times)");
    }
}`,o:`Most repeated word: the (3 times)`},
{s:2,t:"Program to find the number of the words in the given text file",c:`package strings;

import java.io.*;

public class Q30 {
    public static void main(String[] args) throws Exception {
        try (FileWriter fw = new FileWriter("sample.txt")) {
            fw.write("Java is a high level language");
        }
        int count = 0;
        try (BufferedReader br = new BufferedReader(new FileReader("sample.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                count += line.trim().split(" ").length;
            }
        }
        System.out.println("Number of words in the file: " + count);
    }
}`,o:`Number of words in the file: 6`},
{s:2,t:"Program to Get a Character From the Given String",c:`package strings;

public class Q31 {
    public static void main(String[] args) {
        String s = "Hello World";
        System.out.println("Character at index 0: " + s.charAt(0));
        System.out.println("Character at index 4: " + s.charAt(4));
        System.out.println("Last character: " + s.charAt(s.length() - 1));
    }
}`,o:`Character at index 0: H
Character at index 4: o
Last character: d`},
{s:2,t:"Program to Insert a string into another string",c:`package strings;

public class Q32 {
    public static void main(String[] args) {
        String s = "Hello World";
        String ins = "Java ";
        StringBuilder sb = new StringBuilder(s);
        sb.insert(6, ins);
        System.out.println(sb);
    }
}`,o:`Hello Java World`},
{s:2,t:"Program to Iterate Over Characters in String",c:`package strings;

public class Q33 {
    public static void main(String[] args) {
        String s = "Java";
        for (int i = 0; i < s.length(); i++) {
            System.out.println("Character at index " + i + ": " + s.charAt(i));
        }
    }
}`,o:`Character at index 0: J
Character at index 1: a
Character at index 2: v
Character at index 3: a`},
{s:2,t:"Program to Print a New Line in String",c:`package strings;

public class Q34 {
    public static void main(String[] args) {
        System.out.println("Hello\\nWorld");
        String s = "Line1" + System.lineSeparator() + "Line2";
        System.out.println(s);
    }
}`,o:`Hello
World
Line1
Line2`},
{s:2,t:"Program to Print even length words",c:`package strings;

public class Q35 {
    public static void main(String[] args) {
        String s = "Java is a fun programming language";
        for (String w : s.split(" ")) {
            if (w.length() % 2 == 0) System.out.println(w);
        }
    }
}`,o:`Java
is
language`},
{s:2,t:"Program to print smallest and biggest possible palindrome word in a given string",c:`package strings;

public class Q36 {
    public static void main(String[] args) {
        String s = "Mom and dad went to see nitin at noon level";
        String smallest = null, biggest = null;
        for (String w : s.split(" ")) {
            String lw = w.toLowerCase();
            if (new StringBuilder(lw).reverse().toString().equals(lw)) {
                if (smallest == null || w.length() < smallest.length()) smallest = w;
                if (biggest == null || w.length() > biggest.length()) biggest = w;
            }
        }
        System.out.println("Smallest palindrome word: " + smallest);
        System.out.println("Biggest palindrome word: " + biggest);
    }
}`,o:`Smallest palindrome word: Mom
Biggest palindrome word: nitin`},
{s:2,t:"Program to remove all the white spaces from a string",c:`package strings;

public class Q37 {
    public static void main(String[] args) {
        String s = "  Java is   fun  ";
        String result = s.replaceAll("\\\\s", "");
        System.out.println("After removing white spaces: " + result);
    }
}`,o:`After removing white spaces: Javaisfun`},
{s:2,t:"Program to replace lower-case characters with upper-case and vice-versa",c:`package strings;

public class Q38 {
    public static void main(String[] args) {
        String s = "Hello World 123";
        String result = "";
        for (char c : s.toCharArray()) {
            if (Character.isUpperCase(c)) result += Character.toLowerCase(c);
            else if (Character.isLowerCase(c)) result += Character.toUpperCase(c);
            else result += c;
        }
        System.out.println("Original: " + s);
        System.out.println("Converted: " + result);
    }
}`,o:`Original: Hello World 123
Converted: hELLO wORLD 123`},
{s:2,t:"Program to replace the spaces of a string with a specific character",c:`package strings;

public class Q39 {
    public static void main(String[] args) {
        String s = "Java is fun";
        String result = s.replace(' ', '-');
        System.out.println(result);
    }
}`,o:`Java-is-fun`},
{s:2,t:"Program to separate the Individual Characters from a String",c:`package strings;

public class Q40 {
    public static void main(String[] args) {
        String s = "Java";
        for (char c : s.toCharArray()) {
            System.out.print(c + " ");
        }
    }
}`,o:`J a v a`},
{s:2,t:"Program to Splitting into a number of sub-strings",c:`package strings;

public class Q41 {
    public static void main(String[] args) {
        String s = "one,two,three,four";
        String[] parts = s.split(",");
        System.out.println("Number of sub-strings: " + parts.length);
        for (String p : parts) System.out.println(p);
        String[] two = s.split(",", 2);
        System.out.println("Split with limit 2: " + two[0] + " | " + two[1]);
    }
}`,o:`Number of sub-strings: 4
one
two
three
four
Split with limit 2: one | two,three,four`},
{s:2,t:"Program to swap two string variables without using third or temp variable.",c:`package strings;

public class Q42 {
    public static void main(String[] args) {
        String a = "Hello", b = "World";
        System.out.println("Before swap: a = " + a + ", b = " + b);
        a = a + b;
        b = a.substring(0, a.length() - b.length());
        a = a.substring(b.length());
        System.out.println("After swap: a = " + a + ", b = " + b);
    }
}`,o:`Before swap: a = Hello, b = World
After swap: a = World, b = Hello`},
{s:2,t:"Program to Swapping Pair of Characters",c:`package strings;

public class Q43 {
    public static void main(String[] args) {
        String s = "abcdefg";
        char[] c = s.toCharArray();
        for (int i = 0; i + 1 < c.length; i += 2) {
            char t = c[i];
            c[i] = c[i + 1];
            c[i + 1] = t;
        }
        System.out.println("Original: " + s);
        System.out.println("After swapping pairs: " + new String(c));
    }
}`,o:`Original: abcdefg
After swapping pairs: badcfeg`},
{s:2,t:"Read two String user input and check if first contains second? (input: Welcome to Java / Java)",c:`package strings;

import java.util.Scanner;

public class Q44 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String s1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String s2 = sc.nextLine();
        System.out.println("First string contains second string: " + s1.contains(s2));
    }
}`,o:`Enter first string: Welcome to Java
Enter second string: Java
First string contains second string: true`},
{s:2,t:"Reserve String without reverse() function",c:`package strings;

public class Q45 {
    public static void main(String[] args) {
        String s = "Hello Java";
        String rev = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            rev = rev + s.charAt(i);
        }
        System.out.println("Reversed string: " + rev);
    }
}`,o:`Reversed string: avaJ olleH`},
{s:2,t:"Reverse String Word by Word",c:`package strings;

public class Q46 {
    public static void main(String[] args) {
        String s = "Welcome to Java programming";
        String[] words = s.split(" ");
        String result = "";
        for (int i = words.length - 1; i >= 0; i--) {
            result += words[i] + (i > 0 ? " " : "");
        }
        System.out.println(result);
    }
}`,o:`programming Java to Welcome`},
{s:2,t:"Write a program to check if two Strings are created with same characters?",c:`package strings;

import java.util.*;

public class Q47 {
    public static void main(String[] args) {
        String[][] pairs = {{"abcabc", "cba"}, {"abc", "abd"}};
        for (String[] p : pairs) {
            Set<Character> s1 = new HashSet<>();
            Set<Character> s2 = new HashSet<>();
            for (char c : p[0].toCharArray()) s1.add(c);
            for (char c : p[1].toCharArray()) s2.add(c);
            System.out.println(p[0] + " and " + p[1] + " have same characters: " + s1.equals(s2));
        }
    }
}`,o:`abcabc and cba have same characters: true
abc and abd have same characters: false`},
{s:2,t:"Write a program to find out first non repeated character from input String?",c:`package strings;

import java.util.*;

public class Q48 {
    public static void main(String[] args) {
        String s = "swiss";
        Map<Character, Integer> map = new LinkedHashMap<>();
        for (char c : s.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);
        for (Map.Entry<Character, Integer> e : map.entrySet()) {
            if (e.getValue() == 1) {
                System.out.println("First non repeated character: " + e.getKey());
                break;
            }
        }
    }
}`,o:`First non repeated character: w`},
{s:2,t:"Create an object StringBuffer class to reverse the string.",c:`package strings;

public class Q49 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello Java");
        sb.reverse();
        System.out.println("Reversed string: " + sb);
    }
}`,o:`Reversed string: avaJ olleH`},
{s:2,t:"Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.",c:`package strings;

public class Q50 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println("After append: " + sb);
        sb.insert(5, ",");
        System.out.println("After insert: " + sb);
        sb.delete(5, 6);
        System.out.println("After delete: " + sb);
        sb.replace(6, 11, "Java");
        System.out.println("After replace: " + sb);
    }
}`,o:`After append: Hello World
After insert: Hello, World
After delete: Hello World
After replace: Hello Java`},
{s:3,t:"Enter the Matrix of rows and columns entered by the user and print in matrix format (input: 2 3 and elements 1 2 3 4 5 6)",c:`package multi_dimensional_array;

import java.util.Scanner;

public class Q1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int r = sc.nextInt();
        System.out.print("Enter number of columns: ");
        int c = sc.nextInt();
        int[][] m = new int[r][c];
        System.out.print("Enter the elements: ");
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++)
                m[i][j] = sc.nextInt();
        System.out.println("Matrix is:");
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++)
                System.out.print(m[i][j] + " ");
            System.out.println();
        }
    }
}`,o:`Enter number of rows: 2
Enter number of columns: 3
Enter the elements: 1 2 3 4 5 6
Matrix is:
1 2 3
4 5 6`},
{s:3,t:"Program to Add Two Matrices",c:`package multi_dimensional_array;

public class Q2 {
    static void print(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] a = {{1, 2, 3}, {4, 5, 6}};
        int[][] b = {{7, 8, 9}, {10, 11, 12}};
        int[][] sum = new int[2][3];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 3; j++)
                sum[i][j] = a[i][j] + b[i][j];
        System.out.println("Sum of the matrices:");
        print(sum);
    }
}`,o:`Sum of the matrices:
8 10 12
14 16 18`},
{s:3,t:"Program to Multiply Two Matrices",c:`package multi_dimensional_array;

public class Q3 {
    static void print(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] a = {{1, 2, 3}, {4, 5, 6}};
        int[][] b = {{7, 8}, {9, 10}, {11, 12}};
        int[][] c = new int[2][2];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 2; j++)
                for (int k = 0; k < 3; k++)
                    c[i][j] += a[i][k] * b[k][j];
        System.out.println("Product of the matrices:");
        print(c);
    }
}`,o:`Product of the matrices:
58 64
139 154`},
{s:3,t:"Program to subtract the two matrices",c:`package multi_dimensional_array;

public class Q4 {
    static void print(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] a = {{10, 20, 30}, {40, 50, 60}};
        int[][] b = {{1, 2, 3}, {4, 5, 6}};
        int[][] diff = new int[2][3];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 3; j++)
                diff[i][j] = a[i][j] - b[i][j];
        System.out.println("Difference of the matrices:");
        print(diff);
    }
}`,o:`Difference of the matrices:
9 18 27
36 45 54`},
{s:3,t:"Program to determine whether two matrices are equal",c:`package multi_dimensional_array;

public class Q5 {
    static boolean isEqual(int[][] x, int[][] y) {
        if (x.length != y.length || x[0].length != y[0].length) return false;
        for (int i = 0; i < x.length; i++)
            for (int j = 0; j < x[0].length; j++)
                if (x[i][j] != y[i][j]) return false;
        return true;
    }

    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};
        int[][] b = {{1, 2}, {3, 4}};
        int[][] c = {{1, 2}, {3, 5}};
        System.out.println("a and b equal: " + isEqual(a, b));
        System.out.println("a and c equal: " + isEqual(a, c));
    }
}`,o:`a and b equal: true
a and c equal: false`},
{s:3,t:"Program to display the lower triangular matrix",c:`package multi_dimensional_array;

public class Q6 {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("Lower triangular matrix:");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (j <= i) System.out.print(m[i][j] + " ");
                else System.out.print("0 ");
            }
            System.out.println();
        }
    }
}`,o:`Lower triangular matrix:
1 0 0
4 5 0
7 8 9`},
{s:3,t:"Program to display the upper triangular matrix",c:`package multi_dimensional_array;

public class Q7 {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("Upper triangular matrix:");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (j >= i) System.out.print(m[i][j] + " ");
                else System.out.print("0 ");
            }
            System.out.println();
        }
    }
}`,o:`Upper triangular matrix:
1 2 3
0 5 6
0 0 9`},
{s:3,t:"Program to find the frequency of odd & even numbers in the given matrix",c:`package multi_dimensional_array;

public class Q8 {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int odd = 0, even = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (m[i][j] % 2 == 0) even++;
                else odd++;
            }
        }
        System.out.println("Frequency of odd numbers: " + odd);
        System.out.println("Frequency of even numbers: " + even);
    }
}`,o:`Frequency of odd numbers: 5
Frequency of even numbers: 4`},
{s:3,t:"Program to find the sum of each row and each column of a matrix",c:`package multi_dimensional_array;

public class Q9 {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int i = 0; i < 3; i++) {
            int sum = 0;
            for (int j = 0; j < 3; j++) sum += m[i][j];
            System.out.println("Sum of row " + (i + 1) + ": " + sum);
        }
        for (int j = 0; j < 3; j++) {
            int sum = 0;
            for (int i = 0; i < 3; i++) sum += m[i][j];
            System.out.println("Sum of column " + (j + 1) + ": " + sum);
        }
    }
}`,o:`Sum of row 1: 6
Sum of row 2: 15
Sum of row 3: 24
Sum of column 1: 12
Sum of column 2: 15
Sum of column 3: 18`},
{s:3,t:"Program to find the transpose of a given matrix",c:`package multi_dimensional_array;

public class Q10 {
    static void print(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}};
        int[][] t = new int[3][2];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 3; j++)
                t[j][i] = m[i][j];
        System.out.println("Original matrix:");
        print(m);
        System.out.println("Transpose of the matrix:");
        print(t);
    }
}`,o:`Original matrix:
1 2 3
4 5 6
Transpose of the matrix:
1 4
2 5
3 6`},
{s:3,t:"Program to determine whether a given matrix is an identity matrix",c:`package multi_dimensional_array;

public class Q11 {
    static boolean isIdentity(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                if (i == j && m[i][j] != 1) return false;
                if (i != j && m[i][j] != 0) return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[][] a = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};
        int[][] b = {{1, 0, 0}, {0, 2, 0}, {0, 0, 1}};
        System.out.println("Matrix a is identity: " + isIdentity(a));
        System.out.println("Matrix b is identity: " + isIdentity(b));
    }
}`,o:`Matrix a is identity: true
Matrix b is identity: false`},
{s:3,t:"Program to Transpose matrix",c:`package multi_dimensional_array;

public class Q12 {
    static void print(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int i = 0; i < 3; i++) {
            for (int j = i + 1; j < 3; j++) {
                int temp = m[i][j];
                m[i][j] = m[j][i];
                m[j][i] = temp;
            }
        }
        System.out.println("Transpose of the matrix:");
        print(m);
    }
}`,o:`Transpose of the matrix:
1 4 7
2 5 8
3 6 9`},
{s:3,t:"Program to determine whether a given matrix is a sparse matrix",c:`package multi_dimensional_array;

public class Q13 {
    public static void main(String[] args) {
        int[][] m = {{1, 0, 0}, {0, 0, 2}, {0, 0, 0}};
        int zeros = 0;
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (m[i][j] == 0) zeros++;
        System.out.println("Number of zeros: " + zeros);
        if (zeros > (3 * 3) / 2)
            System.out.println("The given matrix is a sparse matrix");
        else
            System.out.println("The given matrix is not a sparse matrix");
    }
}`,o:`Number of zeros: 7
The given matrix is a sparse matrix`},
{s:4,t:"Write a Java program to print 'Hello World!' on screen",c:`package basic_programming_construct;

public class Q1 {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,o:`Hello World!`},
{s:4,t:"Write a Java program to print the sum of two numbers",c:`package basic_programming_construct;

public class Q2 {
    public static void main(String[] args) {
        int a = 10, b = 20;
        System.out.println("Sum = " + (a + b));
    }
}`,o:`Sum = 30`},
{s:4,t:"Write a Java program that takes two numbers and display the product of two numbers",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        System.out.println("Product = " + (a * b));
    }
}`,o:`Enter first number: 6
Enter second number: 7
Product = 42`},
{s:4,t:"Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",c:`package basic_programming_construct;

public class Q4 {
    public static void main(String[] args) {
        int a = 20, b = 6;
        System.out.println("Sum = " + (a + b));
        System.out.println("Multiply = " + (a * b));
        System.out.println("Subtract = " + (a - b));
        System.out.println("Divide = " + (a / b));
        System.out.println("Remainder = " + (a % b));
    }
}`,o:`Sum = 26
Multiply = 120
Subtract = 14
Divide = 3
Remainder = 2`},
{s:4,t:"Write a Java program that takes five numbers as input to calculate and print the average of the numbers",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double sum = 0;
        for (int i = 1; i <= 5; i++) {
            System.out.print("Enter number " + i + ": ");
            sum += sc.nextDouble();
        }
        System.out.println("Average = " + sum / 5);
    }
}`,o:`Enter number 1: 10
Enter number 2: 20
Enter number 3: 30
Enter number 4: 40
Enter number 5: 50
Average = 30.0`},
{s:4,t:"Write a Java program to swap two variables",c:`package basic_programming_construct;

public class Q6 {
    public static void main(String[] args) {
        int a = 10, b = 20;
        System.out.println("Before swap: a = " + a + ", b = " + b);
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After swap: a = " + a + ", b = " + b);
    }
}`,o:`Before swap: a = 10, b = 20
After swap: a = 20, b = 10`},
{s:4,t:"Write a Java program to convert a decimal number to binary numbers",c:`package basic_programming_construct;

public class Q7 {
    public static void main(String[] args) {
        int n = 25, original = n;
        String bin = "";
        while (n > 0) {
            bin = (n % 2) + bin;
            n /= 2;
        }
        System.out.println("Binary of " + original + " = " + bin);
    }
}`,o:`Binary of 25 = 11001`},
{s:4,t:"Write a Java program to convert a binary number to decimal number",c:`package basic_programming_construct;

public class Q8 {
    public static void main(String[] args) {
        String bin = "11001";
        int dec = 0;
        for (char c : bin.toCharArray()) {
            dec = dec * 2 + (c - '0');
        }
        System.out.println("Decimal of " + bin + " = " + dec);
    }
}`,o:`Decimal of 11001 = 25`},
{s:4,t:"Write a Java program to check whether Java is installed on your computer or not",c:`package basic_programming_construct;

public class Q9 {
    public static void main(String[] args) {
        String version = System.getProperty("java.version");
        if (version != null)
            System.out.println("Java is installed. Version: " + version);
        else
            System.out.println("Java is not installed");
    }
}`,o:`Java is installed. Version: 21.0.10`},
{s:4,t:"Write a Java program and compute the sum of the digits of an integer",c:`package basic_programming_construct;

public class Q10 {
    public static void main(String[] args) {
        int n = 1234, sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println("Sum of the digits = " + sum);
    }
}`,o:`Sum of the digits = 10`},
{s:4,t:"Write a Java program to compare two numbers",c:`package basic_programming_construct;

public class Q11 {
    public static void main(String[] args) {
        int a = 15, b = 20;
        if (a > b) System.out.println(a + " is greater than " + b);
        else if (a < b) System.out.println(a + " is less than " + b);
        else System.out.println(a + " is equal to " + b);
    }
}`,o:`15 is less than 20`},
{s:4,t:"Write a Java program to count the letters, spaces, numbers and other characters of an input string",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s = sc.nextLine();
        int letters = 0, spaces = 0, digits = 0, others = 0;
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) letters++;
            else if (c == ' ') spaces++;
            else if (Character.isDigit(c)) digits++;
            else others++;
        }
        System.out.println("Letters: " + letters);
        System.out.println("Spaces: " + spaces);
        System.out.println("Numbers: " + digits);
        System.out.println("Other characters: " + others);
    }
}`,o:`Enter a string: Hello World 123 @#
Letters: 10
Spaces: 3
Numbers: 3
Other characters: 2`},
{s:4,t:"Write a Java program to print the ascii value of a given character",c:`package basic_programming_construct;

public class Q13 {
    public static void main(String[] args) {
        char ch = 'A';
        int ascii = ch;
        System.out.println("ASCII value of " + ch + " = " + ascii);
    }
}`,o:`ASCII value of A = 65`},
{s:4,t:"Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q14 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt();
        int nn = n * 11, nnn = n * 111;
        System.out.println(n + " + " + nn + " + " + nnn + " = " + (n + nn + nnn));
    }
}`,o:`Enter an integer: 5
5 + 55 + 555 = 615`},
{s:4,t:"Write a Java program to display the system time",c:`package basic_programming_construct;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Q15 {
    public static void main(String[] args) {
        LocalTime now = LocalTime.now();
        System.out.println("Current time: " + now.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
    }
}`,o:`Current time: 05:50:09`},
{s:4,t:"Write a Java program to print the odd numbers from 1 to 20",c:`package basic_programming_construct;

public class Q16 {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i % 2 != 0) System.out.print(i + " ");
        }
    }
}`,o:`1 3 5 7 9 11 13 15 17 19`},
{s:4,t:"Write a Java program to print the even numbers from 1 to 20",c:`package basic_programming_construct;

public class Q17 {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0) System.out.print(i + " ");
        }
    }
}`,o:`2 4 6 8 10 12 14 16 18 20`},
{s:4,t:"Write a Java program to convert a string to an integer",c:`package basic_programming_construct;

public class Q18 {
    public static void main(String[] args) {
        String s = "1234";
        int n = Integer.parseInt(s);
        System.out.println("Integer value: " + n);
        System.out.println("Value + 1 = " + (n + 1));
    }
}`,o:`Integer value: 1234
Value + 1 = 1235`},
{s:4,t:"Write a Java program to convert seconds to hour, minute and seconds",c:`package basic_programming_construct;

public class Q19 {
    public static void main(String[] args) {
        int total = 3725;
        int h = total / 3600;
        int m = (total % 3600) / 60;
        int s = total % 60;
        System.out.println(total + " seconds = " + h + " hour(s), " + m + " minute(s), " + s + " second(s)");
    }
}`,o:`3725 seconds = 1 hour(s), 2 minute(s), 5 second(s)`},
{s:4,t:"Write a Java program to compute the sum of the first 100 prime numbers",c:`package basic_programming_construct;

public class Q20 {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int count = 0, num = 2;
        long sum = 0;
        while (count < 100) {
            if (isPrime(num)) {
                sum += num;
                count++;
            }
            num++;
        }
        System.out.println("Sum of the first 100 prime numbers = " + sum);
    }
}`,o:`Sum of the first 100 prime numbers = 24133`},
{s:4,t:"Write a Java program to swap the first and last elements of an array and create a new array",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q21 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int[] result = arr.clone();
        int temp = result[0];
        result[0] = result[result.length - 1];
        result[result.length - 1] = temp;
        System.out.println("Original array: " + Arrays.toString(arr));
        System.out.println("New array: " + Arrays.toString(result));
    }
}`,o:`Original array: [1, 2, 3, 4, 5]
New array: [5, 2, 3, 4, 1]`},
{s:4,t:"Write a Java program to count the number of even and odd elements in a given array",c:`package basic_programming_construct;

public class Q22 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int even = 0, odd = 0;
        for (int x : arr) {
            if (x % 2 == 0) even++;
            else odd++;
        }
        System.out.println("Number of even elements: " + even);
        System.out.println("Number of odd elements: " + odd);
    }
}`,o:`Number of even elements: 3
Number of odd elements: 4`},
{s:4,t:"Write a Java program to compute the square root of an given integer",c:`package basic_programming_construct;

public class Q23 {
    public static void main(String[] args) {
        int n = 144;
        System.out.println("Square root of " + n + " = " + Math.sqrt(n));
    }
}`,o:`Square root of 144 = 12.0`},
{s:4,t:"Write a Java program to check if a positive number is a palindrome or not",c:`package basic_programming_construct;

public class Q24 {
    public static void main(String[] args) {
        int n = 121, temp = n, rev = 0;
        while (temp > 0) {
            rev = rev * 10 + temp % 10;
            temp /= 10;
        }
        System.out.println(n + (n == rev ? " is a palindrome" : " is not a palindrome"));
    }
}`,o:`121 is a palindrome`},
{s:4,t:"Write a Java program to add two numbers without using any arithmetic operators",c:`package basic_programming_construct;

public class Q25 {
    public static void main(String[] args) {
        int a = 15, b = 27;
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        System.out.println("Sum = " + a);
    }
}`,o:`Sum = 42`},
{s:4,t:"Write a Java program to add all the digits of a given positive integer",c:`package basic_programming_construct;

public class Q26 {
    public static void main(String[] args) {
        int n = 98765, sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println("Sum of digits = " + sum);
    }
}`,o:`Sum of digits = 35`},
{s:4,t:"Java program to find area of circle",c:`package basic_programming_construct;

public class Q27 {
    public static void main(String[] args) {
        double r = 5;
        System.out.printf("Area of circle = %.2f%n", Math.PI * r * r);
    }
}`,o:`Area of circle = 78.54`},
{s:4,t:"Java Program to find area of rectangle",c:`package basic_programming_construct;

public class Q28 {
    public static void main(String[] args) {
        int length = 10, width = 5;
        System.out.println("Area of rectangle = " + (length * width));
    }
}`,o:`Area of rectangle = 50`},
{s:4,t:"Java Program to find area of triangle",c:`package basic_programming_construct;

public class Q29 {
    public static void main(String[] args) {
        double base = 10, height = 6;
        System.out.println("Area of triangle = " + (0.5 * base * height));
    }
}`,o:`Area of triangle = 30.0`},
{s:4,t:"Java Program to find area of equilateral triangle",c:`package basic_programming_construct;

public class Q30 {
    public static void main(String[] args) {
        double side = 6;
        System.out.printf("Area of equilateral triangle = %.2f%n", (Math.sqrt(3) / 4) * side * side);
    }
}`,o:`Area of equilateral triangle = 15.59`},
{s:4,t:"Java Program to find area of rhombus",c:`package basic_programming_construct;

public class Q31 {
    public static void main(String[] args) {
        double d1 = 8, d2 = 6;
        System.out.println("Area of rhombus = " + (d1 * d2) / 2);
    }
}`,o:`Area of rhombus = 24.0`},
{s:4,t:"Java Program to find area of parallelogram",c:`package basic_programming_construct;

public class Q32 {
    public static void main(String[] args) {
        double base = 10, height = 7;
        System.out.println("Area of parallelogram = " + (base * height));
    }
}`,o:`Area of parallelogram = 70.0`},
{s:4,t:"Java Program to find area of Prism (rectangular prism surface area)",c:`package basic_programming_construct;

public class Q33 {
    public static void main(String[] args) {
        double l = 5, w = 4, h = 3;
        System.out.println("Area of prism = " + (2 * (l * w + l * h + w * h)));
    }
}`,o:`Area of prism = 94.0`},
{s:4,t:"Java Program to find volume of sphere",c:`package basic_programming_construct;

public class Q34 {
    public static void main(String[] args) {
        double r = 5;
        System.out.printf("Volume of sphere = %.2f%n", (4.0 / 3) * Math.PI * r * r * r);
    }
}`,o:`Volume of sphere = 523.60`},
{s:4,t:"Java Program to find volume of cylinder",c:`package basic_programming_construct;

public class Q35 {
    public static void main(String[] args) {
        double r = 3, h = 7;
        System.out.printf("Volume of cylinder = %.2f%n", Math.PI * r * r * h);
    }
}`,o:`Volume of cylinder = 197.92`},
{s:4,t:"Java Program to find volume of cuboid",c:`package basic_programming_construct;

public class Q36 {
    public static void main(String[] args) {
        double l = 5, w = 4, h = 3;
        System.out.println("Volume of cuboid = " + (l * w * h));
    }
}`,o:`Volume of cuboid = 60.0`},
{s:4,t:"Java Program to find volume of cone",c:`package basic_programming_construct;

public class Q37 {
    public static void main(String[] args) {
        double r = 3, h = 7;
        System.out.printf("Volume of cone = %.2f%n", (1.0 / 3) * Math.PI * r * r * h);
    }
}`,o:`Volume of cone = 65.97`},
{s:4,t:"Java program to find surface area of cuboid",c:`package basic_programming_construct;

public class Q38 {
    public static void main(String[] args) {
        double l = 5, w = 4, h = 3;
        System.out.println("Surface area of cuboid = " + (2 * (l * w + w * h + h * l)));
    }
}`,o:`Surface area of cuboid = 94.0`},
{s:4,t:"Java program to find surface area of cylinder",c:`package basic_programming_construct;

public class Q39 {
    public static void main(String[] args) {
        double r = 3, h = 7;
        System.out.printf("Surface area of cylinder = %.2f%n", 2 * Math.PI * r * (h + r));
    }
}`,o:`Surface area of cylinder = 188.50`},
{s:4,t:"Java program to find surface area of cube",c:`package basic_programming_construct;

public class Q40 {
    public static void main(String[] args) {
        double side = 4;
        System.out.println("Surface area of cube = " + (6 * side * side));
    }
}`,o:`Surface area of cube = 96.0`},
{s:4,t:"Java program to calculate average marks",c:`package basic_programming_construct;

public class Q41 {
    public static void main(String[] args) {
        int[] marks = {78, 85, 90, 67, 80};
        int total = 0;
        for (int m : marks) total += m;
        System.out.println("Total marks = " + total);
        System.out.printf("Average marks = %.2f%n", (double) total / marks.length);
    }
}`,o:`Total marks = 400
Average marks = 80.00`},
{s:4,t:"Java program to check vowel or consonant",c:`package basic_programming_construct;

public class Q42 {
    public static void main(String[] args) {
        char ch = 'e';
        if ("aeiouAEIOU".indexOf(ch) != -1)
            System.out.println(ch + " is a vowel");
        else
            System.out.println(ch + " is a consonant");
    }
}`,o:`e is a vowel`},
{s:4,t:"Java program to sum of N numbers",c:`package basic_programming_construct;

public class Q43 {
    public static void main(String[] args) {
        int n = 10, sum = 0;
        for (int i = 1; i <= n; i++) sum += i;
        System.out.println("Sum of first " + n + " numbers = " + sum);
    }
}`,o:`Sum of first 10 numbers = 55`},
{s:4,t:"Java program to find factorial of any number",c:`package basic_programming_construct;

public class Q44 {
    public static void main(String[] args) {
        int n = 6;
        long fact = 1;
        for (int i = 2; i <= n; i++) fact *= i;
        System.out.println("Factorial of " + n + " = " + fact);
    }
}`,o:`Factorial of 6 = 720`},
{s:4,t:"Java Program to calculate electricity bill (first 100 units Rs.5, next 100 units Rs.7, above 200 units Rs.10)",c:`package basic_programming_construct;

public class Q45 {
    public static void main(String[] args) {
        int units = 250;
        double bill;
        if (units <= 100) bill = units * 5;
        else if (units <= 200) bill = 500 + (units - 100) * 7;
        else bill = 500 + 700 + (units - 200) * 10;
        System.out.println("Units consumed: " + units);
        System.out.printf("Electricity bill = Rs. %.2f%n", bill);
    }
}`,o:`Units consumed: 250
Electricity bill = Rs. 1700.00`},
{s:4,t:"Java Program To Calculate CGPA Percentage",c:`package basic_programming_construct;

public class Q46 {
    public static void main(String[] args) {
        double cgpa = 8.5;
        double percentage = cgpa * 9.5;
        System.out.println("CGPA = " + cgpa);
        System.out.printf("Percentage = %.2f%%%n", percentage);
    }
}`,o:`CGPA = 8.5
Percentage = 80.75%`},
{s:4,t:"Java Program to calculate compound interest",c:`package basic_programming_construct;

public class Q47 {
    public static void main(String[] args) {
        double principal = 10000, rate = 5, time = 3;
        double amount = principal * Math.pow(1 + rate / 100, time);
        System.out.printf("Compound interest = %.2f%n", amount - principal);
        System.out.printf("Total amount = %.2f%n", amount);
    }
}`,o:`Compound interest = 1576.25
Total amount = 11576.25`},
{s:4,t:"Java Program To Calculate Batting Average",c:`package basic_programming_construct;

public class Q48 {
    public static void main(String[] args) {
        int runs = 3200, innings = 100, notOuts = 10;
        double average = (double) runs / (innings - notOuts);
        System.out.printf("Batting average = %.2f%n", average);
    }
}`,o:`Batting average = 35.56`},
{s:4,t:"Java Pogram to Calculate Commission Percentage",c:`package basic_programming_construct;

public class Q49 {
    public static void main(String[] args) {
        double sales = 50000, commission = 4000;
        double percentage = (commission / sales) * 100;
        System.out.printf("Commission percentage = %.2f%%%n", percentage);
    }
}`,o:`Commission percentage = 8.00%`},
{s:4,t:"Java Pogram To Find Distance Between Two Points",c:`package basic_programming_construct;

public class Q50 {
    public static void main(String[] args) {
        double x1 = 1, y1 = 2, x2 = 4, y2 = 6;
        double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        System.out.println("Distance between the points = " + distance);
    }
}`,o:`Distance between the points = 5.0`},
{s:4,t:"Java Program To Calculate Power Of Number",c:`package basic_programming_construct;

public class Q51 {
    public static void main(String[] args) {
        int base = 2, exp = 10;
        long result = 1;
        for (int i = 1; i <= exp; i++) result *= base;
        System.out.println(base + "^" + exp + " = " + result);
    }
}`,o:`2^10 = 1024`},
{s:4,t:"Write a Java program to take three numbers from the user and print the greatest number",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q52 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        System.out.print("Enter third number: ");
        int c = sc.nextInt();
        int max = a;
        if (b > max) max = b;
        if (c > max) max = c;
        System.out.println("Greatest number = " + max);
    }
}`,o:`Enter first number: 12
Enter second number: 45
Enter third number: 30
Greatest number = 45`},
{s:4,t:"Write a Java program to find the number of days in a month",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q53 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter month (1-12): ");
        int month = sc.nextInt();
        System.out.print("Enter year: ");
        int year = sc.nextInt();
        int days;
        switch (month) {
            case 2:
                days = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
                break;
            case 4: case 6: case 9: case 11:
                days = 30;
                break;
            default:
                days = 31;
        }
        System.out.println("Number of days = " + days);
    }
}`,o:`Enter month (1-12): 2
Enter year: 2024
Number of days = 29`},
{s:4,t:"Write a Java program to test a number is positive or negative",c:`package basic_programming_construct;

public class Q54 {
    public static void main(String[] args) {
        int n = -7;
        if (n > 0) System.out.println(n + " is positive");
        else if (n < 0) System.out.println(n + " is negative");
        else System.out.println("The number is zero");
    }
}`,o:`-7 is negative`},
{s:4,t:"Write a Java Program to accept number of week's day (1-7) and print name of the day",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q55 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter day number (1-7): ");
        int day = sc.nextInt();
        switch (day) {
            case 1: System.out.println("Monday"); break;
            case 2: System.out.println("Tuesday"); break;
            case 3: System.out.println("Wednesday"); break;
            case 4: System.out.println("Thursday"); break;
            case 5: System.out.println("Friday"); break;
            case 6: System.out.println("Saturday"); break;
            case 7: System.out.println("Sunday"); break;
            default: System.out.println("Invalid day number");
        }
    }
}`,o:`Enter day number (1-7): 3
Wednesday`},
{s:4,t:"Write a Java program that takes a year from user and print whether that year is a leap year or not",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q56 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a year: ");
        int year = sc.nextInt();
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
            System.out.println(year + " is a leap year");
        else
            System.out.println(year + " is not a leap year");
    }
}`,o:`Enter a year: 2024
2024 is a leap year`},
{s:4,t:"Write a Java program to input 5 numbers from keyboard and find their sum and average",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q57 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        for (int i = 1; i <= 5; i++) {
            System.out.print("Enter number " + i + ": ");
            sum += sc.nextInt();
        }
        System.out.println("Sum = " + sum);
        System.out.println("Average = " + sum / 5.0);
    }
}`,o:`Enter number 1: 4
Enter number 2: 8
Enter number 3: 15
Enter number 4: 16
Enter number 5: 23
Sum = 66
Average = 13.2`},
{s:4,t:"Write a program in Java to display the first 5 natural numbers",c:`package basic_programming_construct;

public class Q58 {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
    }
}`,o:`1 2 3 4 5`},
{s:4,t:"Write a java program to check vowel or consonant (input from user)",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q59 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a character: ");
        char ch = sc.next().charAt(0);
        if (!Character.isLetter(ch))
            System.out.println(ch + " is not an alphabet");
        else if ("aeiouAEIOU".indexOf(ch) != -1)
            System.out.println(ch + " is a vowel");
        else
            System.out.println(ch + " is a consonant");
    }
}`,o:`Enter a character: b
b is a consonant`},
{s:4,t:"Write a Java program to display the cube of the number upto given an integer",c:`package basic_programming_construct;

public class Q60 {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            System.out.println("Number is : " + i + " and cube of " + i + " is : " + (i * i * i));
        }
    }
}`,o:`Number is : 1 and cube of 1 is : 1
Number is : 2 and cube of 2 is : 8
Number is : 3 and cube of 3 is : 27
Number is : 4 and cube of 4 is : 64
Number is : 5 and cube of 5 is : 125`},
{s:4,t:"Write a Java program to display the n terms of odd natural number and their sum",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q61 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            int odd = 2 * i - 1;
            System.out.print(odd + " ");
            sum += odd;
        }
        System.out.println();
        System.out.println("The sum of the odd numbers = " + sum);
    }
}`,o:`Enter number of terms: 5
1 3 5 7 9
The sum of the odd numbers = 25`},
{s:4,t:"Write a Java program to display the multiplication table of a given integer",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q62 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}`,o:`Enter a number: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`},
{s:4,t:"Write a Java program that reads an integer and check whether it is negative, zero, or positive",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q63 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt();
        if (n < 0) System.out.println("Negative");
        else if (n == 0) System.out.println("Zero");
        else System.out.println("Positive");
    }
}`,o:`Enter an integer: -5
Negative`},
{s:4,t:"Write a Java program that reads an positive integer and count the number of digits",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q64 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        int n = sc.nextInt();
        int count = 0;
        while (n > 0) {
            count++;
            n /= 10;
        }
        System.out.println("Number of digits = " + count);
    }
}`,o:`Enter a positive integer: 12345
Number of digits = 5`},
{s:4,t:"Write a Java program that accepts three numbers and check All numbers are equal or not",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q65 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        System.out.print("Enter third number: ");
        int c = sc.nextInt();
        if (a == b && b == c)
            System.out.println("All numbers are equal");
        else
            System.out.println("All numbers are not equal");
    }
}`,o:`Enter first number: 5
Enter second number: 5
Enter third number: 5
All numbers are equal`},
{s:4,t:"Write a java program that accepts three numbers from the user and check if numbers are in 'increasing' or 'decreasing' order.",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q66 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        System.out.print("Enter third number: ");
        int c = sc.nextInt();
        if (a < b && b < c) System.out.println("Increasing order");
        else if (a > b && b > c) System.out.println("Decreasing order");
        else System.out.println("Neither increasing nor decreasing order");
    }
}`,o:`Enter first number: 3
Enter second number: 7
Enter third number: 9
Increasing order`},
{s:4,t:"Write a Java program that determines a student's grade (90+ A, 80+ B, 70+ C, 60+ D, 50+ E, else F)",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q67 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();
        char grade;
        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else if (marks >= 60) grade = 'D';
        else if (marks >= 50) grade = 'E';
        else grade = 'F';
        System.out.println("Grade: " + grade);
    }
}`,o:`Enter marks: 78
Grade: C`},
{s:4,t:"Write a Java program to create a simple calculator",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q68 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double a = sc.nextDouble();
        System.out.print("Enter operator (+, -, *, /): ");
        char op = sc.next().charAt(0);
        System.out.print("Enter second number: ");
        double b = sc.nextDouble();
        double result;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
            default:
                System.out.println("Invalid operator");
                return;
        }
        System.out.printf("%.2f %c %.2f = %.2f%n", a, op, b, result);
    }
}`,o:`Enter first number: 12
Enter operator (+, -, *, /): *
Enter second number: 4
12.00 * 4.00 = 48.00`},
{s:4,t:"Write a Java program to concatenate two string",c:`package basic_programming_construct;

public class Q69 {
    public static void main(String[] args) {
        String s1 = "Hello", s2 = " Java";
        System.out.println("Using + operator: " + (s1 + s2));
        System.out.println("Using concat(): " + s1.concat(s2));
    }
}`,o:`Using + operator: Hello Java
Using concat(): Hello Java`},
{s:4,t:"Write a Java program to convert all characters in a string to lowercase",c:`package basic_programming_construct;

public class Q70 {
    public static void main(String[] args) {
        String s = "HELLO World";
        System.out.println(s.toLowerCase());
    }
}`,o:`hello world`},
{s:4,t:"Write a Java program to convert all characters in a string to uppercase",c:`package basic_programming_construct;

public class Q71 {
    public static void main(String[] args) {
        String s = "hello World";
        System.out.println(s.toUpperCase());
    }
}`,o:`HELLO WORLD`},
{s:4,t:"Write a Java program to trim a string(remove whitespaces)",c:`package basic_programming_construct;

public class Q72 {
    public static void main(String[] args) {
        String s = "   Java Programming   ";
        System.out.println("Before trim: [" + s + "]");
        System.out.println("After trim: [" + s.trim() + "]");
    }
}`,o:`Before trim: [   Java Programming   ]
After trim: [Java Programming]`},
{s:4,t:"Write a Java program to get a substring of a given string between two specified positions",c:`package basic_programming_construct;

public class Q73 {
    public static void main(String[] args) {
        String s = "Hello World";
        System.out.println(s.substring(2, 7));
    }
}`,o:`llo W`},
{s:4,t:"Write a Java program to replace all the 'd' characters with 'f' characters",c:`package basic_programming_construct;

public class Q74 {
    public static void main(String[] args) {
        String s = "dad and daddy";
        System.out.println("Original: " + s);
        System.out.println("After replace: " + s.replace('d', 'f'));
    }
}`,o:`Original: dad and daddy
After replace: faf anf faffy`},
{s:4,t:"Write a java program to get the length of a given string",c:`package basic_programming_construct;

public class Q75 {
    public static void main(String[] args) {
        String s = "Hello Java";
        System.out.println("Length of the string = " + s.length());
    }
}`,o:`Length of the string = 10`},
{s:4,t:"Write a java program to print current date and time in the specified format",c:`package basic_programming_construct;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Q76 {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now.format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
    }
}`,o:`17-10-2026 05:50:49`},
{s:4,t:"Write a Java program to get the character at the given index within the String",c:`package basic_programming_construct;

public class Q77 {
    public static void main(String[] args) {
        String s = "Programming";
        int index = 3;
        System.out.println("Character at index " + index + " = " + s.charAt(index));
    }
}`,o:`Character at index 3 = g`},
{s:4,t:"Write a java program to remove a particular character from a string",c:`package basic_programming_construct;

public class Q78 {
    public static void main(String[] args) {
        String s = "Programming";
        char ch = 'r';
        System.out.println("After removing '" + ch + "': " + s.replace(String.valueOf(ch), ""));
    }
}`,o:`After removing 'r': Pogamming`},
{s:4,t:"Write a java program to reverse a String",c:`package basic_programming_construct;

public class Q79 {
    public static void main(String[] args) {
        String s = "Hello Java";
        String rev = new StringBuilder(s).reverse().toString();
        System.out.println("Reversed string: " + rev);
    }
}`,o:`Reversed string: avaJ olleH`},
{s:4,t:"Write a java program to remove html tags from a string",c:`package basic_programming_construct;

public class Q80 {
    public static void main(String[] args) {
        String html = "<h1>Hello</h1><p>Java <b>World</b></p>";
        String text = html.replaceAll("<[^>]*>", "");
        System.out.println("Without html tags: " + text);
    }
}`,o:`Without html tags: HelloJava World`},
{s:4,t:"Write a java program to count total number of lines from a string",c:`package basic_programming_construct;

public class Q81 {
    public static void main(String[] args) {
        String s = "Line1\\nLine2\\nLine3";
        String[] lines = s.split("\\n");
        System.out.println("Total number of lines: " + lines.length);
    }
}`,o:`Total number of lines: 3`},
{s:4,t:"Write a Java program to sum values of an array",c:`package basic_programming_construct;

public class Q82 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int x : arr) sum += x;
        System.out.println("Sum of array values = " + sum);
    }
}`,o:`Sum of array values = 15`},
{s:4,t:"Write a Java program to find the index of an array element",c:`package basic_programming_construct;

public class Q83 {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30, index = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                index = i;
                break;
            }
        }
        System.out.println("Index of " + key + " = " + index);
    }
}`,o:`Index of 30 = 2`},
{s:4,t:"Write a Java program to calculate the average value of array elements",c:`package basic_programming_construct;

public class Q84 {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int sum = 0;
        for (int x : arr) sum += x;
        System.out.println("Average = " + (double) sum / arr.length);
    }
}`,o:`Average = 30.0`},
{s:4,t:"Write a Java program to test if an array contains a specific value",c:`package basic_programming_construct;

public class Q85 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int[] keys = {3, 9};
        for (int key : keys) {
            boolean found = false;
            for (int x : arr) {
                if (x == key) {
                    found = true;
                    break;
                }
            }
            System.out.println("Array contains " + key + ": " + found);
        }
    }
}`,o:`Array contains 3: true
Array contains 9: false`},
{s:4,t:"Write a Java program to find the maximum and minimum value of an array",c:`package basic_programming_construct;

public class Q86 {
    public static void main(String[] args) {
        int[] arr = {25, 11, 7, 75, 56};
        int max = arr[0], min = arr[0];
        for (int x : arr) {
            if (x > max) max = x;
            if (x < min) min = x;
        }
        System.out.println("Maximum value = " + max);
        System.out.println("Minimum value = " + min);
    }
}`,o:`Maximum value = 75
Minimum value = 7`},
{s:4,t:"Write a Java program to insert an element (specific position) into an array",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q87 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int pos = 2, value = 99;
        int[] result = new int[arr.length + 1];
        for (int i = 0, j = 0; i < result.length; i++) {
            if (i == pos) result[i] = value;
            else result[i] = arr[j++];
        }
        System.out.println("Original array: " + Arrays.toString(arr));
        System.out.println("New array: " + Arrays.toString(result));
    }
}`,o:`Original array: [1, 2, 3, 4, 5]
New array: [1, 2, 99, 3, 4, 5]`},
{s:4,t:"Write a Java program to reverse an array of integer values",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q88 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
}`,o:`Reversed array: [5, 4, 3, 2, 1]`},
{s:4,t:"Write a Java program to find the common elements between two arrays",c:`package basic_programming_construct;

public class Q89 {
    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5};
        int[] b = {3, 5, 7, 9};
        System.out.println("Common elements:");
        for (int x : a) {
            for (int y : b) {
                if (x == y) System.out.println(x);
            }
        }
    }
}`,o:`Common elements:
3
5`},
{s:4,t:"Write a Java program to find the duplicate values of an array of integer values",c:`package basic_programming_construct;

public class Q90 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 5, 3};
        System.out.println("Duplicate values:");
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) System.out.println(arr[j]);
            }
        }
    }
}`,o:`Duplicate values:
2
3`},
{s:4,t:"Write a Java program to convert an array to ArrayList",c:`package basic_programming_construct;

import java.util.*;

public class Q91 {
    public static void main(String[] args) {
        String[] arr = {"Java", "Python", "C++"};
        ArrayList<String> list = new ArrayList<>(Arrays.asList(arr));
        System.out.println("ArrayList: " + list);
    }
}`,o:`ArrayList: [Java, Python, C++]`},
{s:4,t:"Write a Java program to add two matrices of the same size",c:`package basic_programming_construct;

public class Q92 {
    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};
        int[][] b = {{5, 6}, {7, 8}};
        System.out.println("Sum of the matrices:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print((a[i][j] + b[i][j]) + " ");
            }
            System.out.println();
        }
    }
}`,o:`Sum of the matrices:
6 8
10 12`},
{s:4,t:"Write a Java program to find second largest number from the array",c:`package basic_programming_construct;

public class Q93 {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int x : arr) {
            if (x > first) {
                second = first;
                first = x;
            } else if (x > second && x != first) {
                second = x;
            }
        }
        System.out.println("Second largest number = " + second);
    }
}`,o:`Second largest number = 34`},
{s:4,t:"Write a Java program to find second lowest number from the array",c:`package basic_programming_construct;

public class Q94 {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34};
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int x : arr) {
            if (x < first) {
                second = first;
                first = x;
            } else if (x < second && x != first) {
                second = x;
            }
        }
        System.out.println("Second lowest number = " + second);
    }
}`,o:`Second lowest number = 10`},
{s:4,t:"Write a Java program to find the number of even and odd integers in a given array of integers",c:`package basic_programming_construct;

public class Q95 {
    public static void main(String[] args) {
        int[] arr = {5, 8, 12, 7, 3, 10};
        int even = 0, odd = 0;
        for (int x : arr) {
            if (x % 2 == 0) even++;
            else odd++;
        }
        System.out.println("Number of even integers: " + even);
        System.out.println("Number of odd integers: " + odd);
    }
}`,o:`Number of even integers: 3
Number of odd integers: 3`},
{s:4,t:"Write a Java program to get the difference between the largest and smallest values in an array of integers",c:`package basic_programming_construct;

public class Q96 {
    public static void main(String[] args) {
        int[] arr = {10, 3, 25, 8};
        int max = arr[0], min = arr[0];
        for (int x : arr) {
            if (x > max) max = x;
            if (x < min) min = x;
        }
        System.out.println("Difference between largest and smallest = " + (max - min));
    }
}`,o:`Difference between largest and smallest = 22`},
{s:4,t:"Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q97 {
    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 1, 1, 0, 1, 0};
        int zeros = 0;
        for (int x : arr) {
            if (x == 0) zeros++;
        }
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i < zeros ? 0 : 1;
        }
        System.out.println("Array after segregation: " + Arrays.toString(arr));
    }
}`,o:`Array after segregation: [0, 0, 0, 0, 1, 1, 1, 1]`},
{s:4,t:"Write a Java program to cyclically rotate a given array clockwise by one",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q98 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int last = arr[arr.length - 1];
        for (int i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = last;
        System.out.println("Rotated array: " + Arrays.toString(arr));
    }
}`,o:`Rotated array: [5, 1, 2, 3, 4]`},
{s:4,t:"java program to print all unique element in an array (elements that appear only once)",c:`package basic_programming_construct;

public class Q99 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 3, 5};
        System.out.println("Unique elements:");
        for (int i = 0; i < arr.length; i++) {
            int count = 0;
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) count++;
            }
            if (count == 1) System.out.println(arr[i]);
        }
    }
}`,o:`Unique elements:
1
4
5`},
{s:4,t:"Write a Java Program to Sort the Array in an Ascending Order",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q100 {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 7, 1};
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Ascending order: " + Arrays.toString(arr));
    }
}`,o:`Ascending order: [1, 2, 5, 7, 8]`},
{s:4,t:"Write a Java Program to Sort the Array in an Descending Order",c:`package basic_programming_construct;

import java.util.Arrays;

public class Q101 {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 7, 1};
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Descending order: " + Arrays.toString(arr));
    }
}`,o:`Descending order: [8, 7, 5, 2, 1]`},
{s:4,t:"Write a Java Program to Sort Names in an Alphabetical Order",c:`package basic_programming_construct;

public class Q102 {
    public static void main(String[] args) {
        String[] names = {"Ravi", "Amit", "Neha", "Kiran"};
        for (int i = 0; i < names.length; i++) {
            for (int j = i + 1; j < names.length; j++) {
                if (names[i].compareTo(names[j]) > 0) {
                    String temp = names[i];
                    names[i] = names[j];
                    names[j] = temp;
                }
            }
        }
        System.out.println("Names in alphabetical order:");
        for (String n : names) System.out.println(n);
    }
}`,o:`Names in alphabetical order:
Amit
Kiran
Neha
Ravi`},
{s:4,t:"Write a Java Program to Display Transpose Matrix",c:`package basic_programming_construct;

public class Q103 {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("Transpose matrix:");
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 2; i++) {
                System.out.print(m[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,o:`Transpose matrix:
1 4
2 5
3 6`},
{s:4,t:"Write a Java Program to Search Key Elements in an Array",c:`package basic_programming_construct;

public class Q104 {
    public static void main(String[] args) {
        int[] arr = {5, 8, 12, 3, 9};
        int key = 12;
        boolean found = false;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                System.out.println("Key " + key + " found at position " + (i + 1));
                found = true;
                break;
            }
        }
        if (!found) System.out.println("Key not found");
    }
}`,o:`Key 12 found at position 3`},
{s:4,t:"Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q105 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int total = 0;
        for (int i = 1; i <= 5; i++) {
            System.out.print("Enter marks of subject " + i + ": ");
            total += sc.nextInt();
        }
        System.out.println("Total marks = " + total + " out of 500");
        System.out.println("Percentage = " + total / 5.0 + "%");
    }
}`,o:`Enter marks of subject 1: 78
Enter marks of subject 2: 85
Enter marks of subject 3: 90
Enter marks of subject 4: 67
Enter marks of subject 5: 80
Total marks = 400 out of 500
Percentage = 80.0%`},
{s:4,t:"Write a java program to print numbers from 1 to 10 using loop",c:`package basic_programming_construct;

public class Q106 {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
    }
}`,o:`1 2 3 4 5 6 7 8 9 10`},
{s:4,t:"Write a java program to calculate the sum of first 10 natural number using loop",c:`package basic_programming_construct;

public class Q107 {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) sum += i;
        System.out.println("Sum of first 10 natural numbers = " + sum);
    }
}`,o:`Sum of first 10 natural numbers = 55`},
{s:4,t:"Write a Java program to print multiplication table of given number",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q108 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}`,o:`Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`},
{s:4,t:"Write a Java program to find the factorial value of any number entered through the keyboard",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q109 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        long fact = 1;
        for (int i = 2; i <= n; i++) fact *= i;
        System.out.println("Factorial of " + n + " = " + fact);
    }
}`,o:`Enter a number: 5
Factorial of 5 = 120`},
{s:4,t:"Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q110 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt();
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        System.out.println("Reversed number = " + rev);
    }
}`,o:`Enter an integer: 12345
Reversed number = 54321`},
{s:4,t:"Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q111 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int evenSum = 0, oddSum = 0;
        while (true) {
            System.out.print("Enter an integer (-1 to stop): ");
            int n = sc.nextInt();
            if (n == -1) break;
            if (n % 2 == 0) evenSum += n;
            else oddSum += n;
        }
        System.out.println("Sum of even integers = " + evenSum);
        System.out.println("Sum of odd integers = " + oddSum);
    }
}`,o:`Enter an integer (-1 to stop): 4
Enter an integer (-1 to stop): 7
Enter an integer (-1 to stop): 10
Enter an integer (-1 to stop): 3
Enter an integer (-1 to stop): 8
Enter an integer (-1 to stop): -1
Sum of even integers = 22
Sum of odd integers = 10`},
{s:4,t:"Write a Java program to check whether the number is a prime number or not",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q112 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        boolean prime = n > 1;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }
        System.out.println(n + (prime ? " is a prime number" : " is not a prime number"));
    }
}`,o:`Enter a number: 29
29 is a prime number`},
{s:4,t:"Write a Java program to calculate HCF of Two given numbers using loop",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q113 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        int hcf = 1;
        for (int i = 1; i <= a && i <= b; i++) {
            if (a % i == 0 && b % i == 0) hcf = i;
        }
        System.out.println("HCF = " + hcf);
    }
}`,o:`Enter first number: 48
Enter second number: 18
HCF = 6`},
{s:4,t:"Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q114 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int pos = 0, neg = 0, zero = 0;
        while (true) {
            System.out.print("Enter a number (999 to stop): ");
            int n = sc.nextInt();
            if (n == 999) break;
            if (n > 0) pos++;
            else if (n < 0) neg++;
            else zero++;
        }
        System.out.println("Positive numbers: " + pos);
        System.out.println("Negative numbers: " + neg);
        System.out.println("Zeros: " + zero);
    }
}`,o:`Enter a number (999 to stop): 5
Enter a number (999 to stop): -3
Enter a number (999 to stop): 0
Enter a number (999 to stop): 8
Enter a number (999 to stop): -1
Enter a number (999 to stop): 0
Enter a number (999 to stop): 999
Positive numbers: 2
Negative numbers: 2
Zeros: 2`},
{s:4,t:"Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q115 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;
        while (true) {
            System.out.print("Enter a number (999 to stop): ");
            int n = sc.nextInt();
            if (n == 999) break;
            if (n > max) max = n;
            if (n < min) min = n;
        }
        System.out.println("Largest number = " + max);
        System.out.println("Smallest number = " + min);
    }
}`,o:`Enter a number (999 to stop): 15
Enter a number (999 to stop): -4
Enter a number (999 to stop): 22
Enter a number (999 to stop): 8
Enter a number (999 to stop): 999
Largest number = 22
Smallest number = -4`},
{s:4,t:"Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",c:`package basic_programming_construct;

public class Q116 {
    public static void main(String[] args) {
        System.out.println("Armstrong numbers between 1 and 600:");
        for (int n = 1; n <= 600; n++) {
            int temp = n, sum = 0;
            while (temp > 0) {
                int d = temp % 10;
                sum += d * d * d;
                temp /= 10;
            }
            if (sum == n) System.out.print(n + " ");
        }
    }
}`,o:`Armstrong numbers between 1 and 600:
1 153 370 371 407`},
{s:4,t:"Write a java program to count total number of notes in entered amount using loop",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q117 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter amount: ");
        int amount = sc.nextInt();
        int[] notes = {500, 200, 100, 50, 20, 10, 5, 2, 1};
        for (int note : notes) {
            int count = amount / note;
            if (count > 0) System.out.println(note + " x " + count);
            amount %= note;
        }
    }
}`,o:`Enter amount: 2575
500 x 5
50 x 1
20 x 1
5 x 1`},
{s:4,t:"Write a Java program to print Fibonacci series of n terms where n is input by user using loop",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q118 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();
        int a = 0, b = 1;
        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
    }
}`,o:`Enter number of terms: 10
0 1 1 2 3 5 8 13 21 34`},
{s:4,t:"Write a java program to calculate the sum of following series where n is input by user (1 + 1/2 + 1/3 + ... + 1/n)",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q119 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = sc.nextInt();
        double sum = 0;
        for (int i = 1; i <= n; i++) sum += 1.0 / i;
        System.out.printf("Sum of the series = %.4f%n", sum);
    }
}`,o:`Enter n: 5
Sum of the series = 2.2833`},
{s:4,t:"Write a Java method to compute the average of three numbers",c:`package basic_programming_construct;

public class Q120 {
    static double average(double a, double b, double c) {
        return (a + b + c) / 3;
    }

    public static void main(String[] args) {
        System.out.printf("Average = %.2f%n", average(10, 20, 25));
    }
}`,o:`Average = 18.33`},
{s:4,t:"Write a Java method to find the smallest number among three numbers",c:`package basic_programming_construct;

public class Q121 {
    static int smallest(int a, int b, int c) {
        int min = a;
        if (b < min) min = b;
        if (c < min) min = c;
        return min;
    }

    public static void main(String[] args) {
        System.out.println("Smallest number = " + smallest(25, 37, 19));
    }
}`,o:`Smallest number = 19`},
{s:4,t:"Write a Java method to count all words in a string",c:`package basic_programming_construct;

public class Q122 {
    static int countWords(String s) {
        return s.trim().split(" ").length;
    }

    public static void main(String[] args) {
        System.out.println("Number of words = " + countWords("The quick brown fox jumps"));
    }
}`,o:`Number of words = 5`},
{s:4,t:"Write a Java method to count all vowels in a string",c:`package basic_programming_construct;

public class Q123 {
    static int countVowels(String s) {
        int count = 0;
        for (char c : s.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(c) != -1) count++;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println("Number of vowels = " + countVowels("Hello Java Programming"));
    }
}`,o:`Number of vowels = 7`},
{s:4,t:"Write a Java method to compute the sum of the digits in an integer",c:`package basic_programming_construct;

public class Q124 {
    static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println("Sum of digits = " + sumOfDigits(1234));
    }
}`,o:`Sum of digits = 10`},
{s:4,t:"Write a Java method to check whether an year entered by the user is a leap year or not",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q125 {
    static boolean isLeap(int y) {
        return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a year: ");
        int year = sc.nextInt();
        System.out.println(year + (isLeap(year) ? " is a leap year" : " is not a leap year"));
    }
}`,o:`Enter a year: 2024
2024 is a leap year`},
{s:4,t:"Write a Java method to calculate the area of a triangle",c:`package basic_programming_construct;

public class Q126 {
    static double triangleArea(double base, double height) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {
        System.out.println("Area of triangle = " + triangleArea(10, 6));
    }
}`,o:`Area of triangle = 30.0`},
{s:4,t:"Write a Java method to find the area of a pentagon",c:`package basic_programming_construct;

public class Q127 {
    static double pentagonArea(double side) {
        return 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * side * side;
    }

    public static void main(String[] args) {
        System.out.printf("Area of pentagon = %.2f%n", pentagonArea(5));
    }
}`,o:`Area of pentagon = 43.01`},
{s:4,t:"Write a Java method to find number is even number or not",c:`package basic_programming_construct;

public class Q128 {
    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println("10 is even: " + isEven(10));
        System.out.println("7 is even: " + isEven(7));
    }
}`,o:`10 is even: true
7 is even: false`},
{s:4,t:"Write a Java method to check numbers is palindrome number or not",c:`package basic_programming_construct;

public class Q129 {
    static boolean isPalindrome(int n) {
        int temp = n, rev = 0;
        while (temp > 0) {
            rev = rev * 10 + temp % 10;
            temp /= 10;
        }
        return n == rev;
    }

    public static void main(String[] args) {
        System.out.println("121 is palindrome: " + isPalindrome(121));
        System.out.println("123 is palindrome: " + isPalindrome(123));
    }
}`,o:`121 is palindrome: true
123 is palindrome: false`},
{s:4,t:"Write a Java method to displays prime numbers between 1 to 20",c:`package basic_programming_construct;

public class Q130 {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("Prime numbers between 1 and 20:");
        for (int i = 1; i <= 20; i++) {
            if (isPrime(i)) System.out.print(i + " ");
        }
    }
}`,o:`Prime numbers between 1 and 20:
2 3 5 7 11 13 17 19`},
{s:4,t:"Write a Java method to find GCD and LCM of Two Numbers",c:`package basic_programming_construct;

public class Q131 {
    static int gcd(int a, int b) {
        while (b != 0) {
            int t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    public static void main(String[] args) {
        int a = 12, b = 18;
        int g = gcd(a, b);
        System.out.println("GCD = " + g);
        System.out.println("LCM = " + (a * b) / g);
    }
}`,o:`GCD = 6
LCM = 36`},
{s:4,t:"Write a Java method to find factorial using recursion in java",c:`package basic_programming_construct;

public class Q132 {
    static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5 = " + factorial(5));
    }
}`,o:`Factorial of 5 = 120`},
{s:4,t:"Write a Java program to reverse an integer number",c:`package basic_programming_construct;

public class Q133 {
    static int reverse(int n) {
        int rev = 0;
        while (n != 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        System.out.println("Reversed number = " + reverse(12345));
    }
}`,o:`Reversed number = 54321`},
{s:4,t:"Write a Java program to round a float number to specified decimals",c:`package basic_programming_construct;

public class Q134 {
    public static void main(String[] args) {
        float f = 3.14159f;
        int decimals = 2;
        double scale = Math.pow(10, decimals);
        float rounded = (float) (Math.round(f * scale) / scale);
        System.out.println("Original value: " + f);
        System.out.println("Rounded to " + decimals + " decimals: " + rounded);
    }
}`,o:`Original value: 3.14159
Rounded to 2 decimals: 3.14`},
{s:4,t:"Write a Java program to test if a double number is an integer",c:`package basic_programming_construct;

public class Q135 {
    public static void main(String[] args) {
        double[] values = {5.0, 5.5};
        for (double d : values) {
            if (d % 1 == 0) System.out.println(d + " is an integer");
            else System.out.println(d + " is not an integer");
        }
    }
}`,o:`5.0 is an integer
5.5 is not an integer`},
{s:4,t:"Write a Java program to round up the result of integer division",c:`package basic_programming_construct;

public class Q136 {
    public static void main(String[] args) {
        int a = 7, b = 2;
        int rounded = (a + b - 1) / b;
        System.out.println(a + " / " + b + " rounded up = " + rounded);
    }
}`,o:`7 / 2 rounded up = 4`},
{s:4,t:"Write a Java program to convert Roman number to an integer number",c:`package basic_programming_construct;

public class Q137 {
    static int value(char c) {
        switch (c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }

    public static void main(String[] args) {
        String roman = "MCMXCIV";
        int result = 0;
        for (int i = 0; i < roman.length(); i++) {
            int cur = value(roman.charAt(i));
            if (i + 1 < roman.length() && cur < value(roman.charAt(i + 1)))
                result -= cur;
            else
                result += cur;
        }
        System.out.println(roman + " = " + result);
    }
}`,o:`MCMXCIV = 1994`},
{s:4,t:"Write a Java program to convert a float value to absolute value",c:`package basic_programming_construct;

public class Q138 {
    public static void main(String[] args) {
        float f = -5.75f;
        System.out.println("Absolute value of " + f + " = " + Math.abs(f));
    }
}`,o:`Absolute value of -5.75 = 5.75`},
{s:4,t:"Write a Java program to accept a float value of number and return a rounded float value",c:`package basic_programming_construct;

import java.util.Scanner;

public class Q139 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a float value: ");
        float f = sc.nextFloat();
        float rounded = Math.round(f);
        System.out.println("Rounded value: " + rounded);
    }
}`,o:`Enter a float value: 3.7
Rounded value: 4.0`},
{s:5,t:"Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",c:`package interfaces;

public class Q1 {
    public static void main(String[] args) {
        Shape r = new Rectangle(5, 3);
        Shape c = new Circle(4);
        Shape t = new Triangle(6, 4);
        System.out.println("Area of Rectangle = " + r.getArea());
        System.out.printf("Area of Circle = %.2f%n", c.getArea());
        System.out.println("Area of Triangle = " + t.getArea());
    }

    interface Shape {
        double getArea();
    }

    static class Rectangle implements Shape {
        double length, width;
        Rectangle(double length, double width) {
            this.length = length;
            this.width = width;
        }
        public double getArea() { return length * width; }
    }

    static class Circle implements Shape {
        double radius;
        Circle(double radius) { this.radius = radius; }
        public double getArea() { return Math.PI * radius * radius; }
    }

    static class Triangle implements Shape {
        double base, height;
        Triangle(double base, double height) {
            this.base = base;
            this.height = height;
        }
        public double getArea() { return 0.5 * base * height; }
    }
}`,o:`Area of Rectangle = 15.0
Area of Circle = 50.27
Area of Triangle = 12.0`},
{s:5,t:"Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\".",c:`package interfaces;

public class Q2 {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.bark();
    }

    interface Animal {
        void bark();
    }

    static class Dog implements Animal {
        public void bark() {
            System.out.println("Dog is barking");
        }
    }
}`,o:`Dog is barking`},
{s:5,t:"Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",c:`package interfaces;

public class Q3 {
    public static void main(String[] args) {
        Flyable[] objects = {new Spacecraft(), new Airplane(), new Helicopter()};
        for (Flyable f : objects) {
            f.fly_obj();
        }
    }

    interface Flyable {
        void fly_obj();
    }

    static class Spacecraft implements Flyable {
        public void fly_obj() { System.out.println("Spacecraft is flying in space"); }
    }

    static class Airplane implements Flyable {
        public void fly_obj() { System.out.println("Airplane is flying in the sky"); }
    }

    static class Helicopter implements Flyable {
        public void fly_obj() { System.out.println("Helicopter is flying with rotors"); }
    }
}`,o:`Spacecraft is flying in space
Airplane is flying in the sky
Helicopter is flying with rotors`},
{s:5,t:"Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",c:`package interfaces;

import java.util.*;

public class Q4 {
    public static void main(String[] args) {
        Bank bank = new Bank();
        SavingsAccount savings = new SavingsAccount(10000);
        CurrentAccount current = new CurrentAccount(5000);
        bank.addAccount(savings);
        bank.addAccount(current);

        savings.deposit(2000);
        savings.withdraw(1500);
        savings.addBonus(100);
        current.withdraw(6000);

        bank.showAccounts();
    }

    interface Account {
        void deposit(double amount);
        void withdraw(double amount);
        double calculateInterest();
        double getBalance();
    }

    static class SavingsAccount implements Account {
        private double balance;
        private double rate = 4;
        SavingsAccount(double balance) { this.balance = balance; }
        public void deposit(double amount) { balance += amount; }
        public void withdraw(double amount) {
            if (balance - amount < 500)
                System.out.println("Savings: minimum balance of 500 must be maintained");
            else
                balance -= amount;
        }
        public double calculateInterest() { return balance * rate / 100; }
        public double getBalance() { return balance; }
        public void addBonus(double bonus) { balance += bonus; }
    }

    static class CurrentAccount implements Account {
        private double balance;
        private double overdraftLimit = 2000;
        CurrentAccount(double balance) { this.balance = balance; }
        public void deposit(double amount) { balance += amount; }
        public void withdraw(double amount) {
            if (amount > balance + overdraftLimit)
                System.out.println("Current: overdraft limit exceeded");
            else
                balance -= amount;
        }
        public double calculateInterest() { return 0; }
        public double getBalance() { return balance; }
        public double getOverdraftLimit() { return overdraftLimit; }
    }

    static class Bank {
        private List<Account> accounts = new ArrayList<>();
        void addAccount(Account a) { accounts.add(a); }
        void showAccounts() {
            for (Account a : accounts) {
                System.out.println(a.getClass().getSimpleName()
                    + " -> Balance: " + a.getBalance()
                    + ", Interest: " + a.calculateInterest());
            }
        }
    }
}`,o:`SavingsAccount -> Balance: 10600.0, Interest: 424.0
CurrentAccount -> Balance: -1000.0, Interest: 0.0`},
{s:5,t:"Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",c:`package interfaces;

public class Q5 {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(10, 5);
        r.display();
        r.resizeWidth(20);
        r.resizeHeight(15);
        r.display();
    }

    interface Resizable {
        void resizeWidth(int width);
        void resizeHeight(int height);
    }

    static class Rectangle implements Resizable {
        int width, height;
        Rectangle(int width, int height) {
            this.width = width;
            this.height = height;
        }
        public void resizeWidth(int width) { this.width = width; }
        public void resizeHeight(int height) { this.height = height; }
        void display() {
            System.out.println("Width = " + width + ", Height = " + height);
        }
    }
}`,o:`Width = 10, Height = 5
Width = 20, Height = 15`},
{s:5,t:"Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",c:`package interfaces;

public class Q6 {
    public static void main(String[] args) {
        Drawable[] shapes = {new Circle(), new Rectangle(), new Triangle()};
        for (Drawable d : shapes) {
            d.draw();
        }
    }

    interface Drawable {
        void draw();
    }

    static class Circle implements Drawable {
        public void draw() { System.out.println("Drawing a Circle"); }
    }

    static class Rectangle implements Drawable {
        public void draw() { System.out.println("Drawing a Rectangle"); }
    }

    static class Triangle implements Drawable {
        public void draw() { System.out.println("Drawing a Triangle"); }
    }
}`,o:`Drawing a Circle
Drawing a Rectangle
Drawing a Triangle`},
{s:5,t:"Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",c:`package interfaces;

import java.util.Arrays;

public class Q7 {
    public static void main(String[] args) {
        int[] a = {64, 25, 12, 22, 11};
        int[] b = a.clone();
        new BubbleSort().sort(a);
        new SelectionSort().sort(b);
        System.out.println("Bubble sort: " + Arrays.toString(a));
        System.out.println("Selection sort: " + Arrays.toString(b));
    }

    interface Sortable {
        void sort(int[] array);
    }

    static class BubbleSort implements Sortable {
        public void sort(int[] array) {
            for (int i = 0; i < array.length - 1; i++) {
                for (int j = 0; j < array.length - i - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        int temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
    }

    static class SelectionSort implements Sortable {
        public void sort(int[] array) {
            for (int i = 0; i < array.length - 1; i++) {
                int min = i;
                for (int j = i + 1; j < array.length; j++) {
                    if (array[j] < array[min]) min = j;
                }
                int temp = array[min];
                array[min] = array[i];
                array[i] = temp;
            }
        }
    }
}`,o:`Bubble sort: [11, 12, 22, 25, 64]
Selection sort: [11, 12, 22, 25, 64]`},
{s:5,t:"Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",c:`package interfaces;

public class Q8 {
    public static void main(String[] args) {
        Playable[] games = {new Football(), new Volleyball(), new Basketball()};
        for (Playable p : games) {
            p.play();
        }
    }

    interface Playable {
        void play();
    }

    static class Football implements Playable {
        public void play() { System.out.println("Playing Football"); }
    }

    static class Volleyball implements Playable {
        public void play() { System.out.println("Playing Volleyball"); }
    }

    static class Basketball implements Playable {
        public void play() { System.out.println("Playing Basketball"); }
    }
}`,o:`Playing Football
Playing Volleyball
Playing Basketball`},
{s:5,t:"Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",c:`package interfaces;

public class Q9 {
    public static void main(String[] args) {
        Searchable doc = new Document("Java is a popular programming language");
        Searchable page = new WebPage("www.example.com", "Learn Java and Python online");
        doc.search("Java");
        doc.search("C++");
        page.search("Python");
        page.search("Ruby");
    }

    interface Searchable {
        void search(String keyword);
    }

    static class Document implements Searchable {
        private String text;
        Document(String text) { this.text = text; }
        public void search(String keyword) {
            if (text.toLowerCase().contains(keyword.toLowerCase()))
                System.out.println("Document: '" + keyword + "' found");
            else
                System.out.println("Document: '" + keyword + "' not found");
        }
    }

    static class WebPage implements Searchable {
        private String url, content;
        WebPage(String url, String content) {
            this.url = url;
            this.content = content;
        }
        public void search(String keyword) {
            if (content.toLowerCase().contains(keyword.toLowerCase()))
                System.out.println("WebPage " + url + ": '" + keyword + "' found");
            else
                System.out.println("WebPage " + url + ": '" + keyword + "' not found");
        }
    }
}`,o:`Document: 'Java' found
Document: 'C++' not found
WebPage www.example.com: 'Python' found
WebPage www.example.com: 'Ruby' not found`},
{s:5,t:"Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms. (AES uses javax.crypto; RSA is a small textbook demo)",c:`package interfaces;

import java.math.BigInteger;
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

public class Q10 {
    public static void main(String[] args) throws Exception {
        Encryptable aes = new AES();
        String enc1 = aes.encrypt("Hello Java");
        System.out.println("AES encrypted: " + enc1);
        System.out.println("AES decrypted: " + aes.decrypt(enc1));

        Encryptable rsa = new RSA();
        String enc2 = rsa.encrypt("Hi");
        System.out.println("RSA encrypted: " + enc2);
        System.out.println("RSA decrypted: " + rsa.decrypt(enc2));
    }

    interface Encryptable {
        String encrypt(String data) throws Exception;
        String decrypt(String encryptedData) throws Exception;
    }

    static class AES implements Encryptable {
        private final SecretKeySpec key = new SecretKeySpec("MySecretKey12345".getBytes(), "AES");
        public String encrypt(String data) throws Exception {
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.ENCRYPT_MODE, key);
            return Base64.getEncoder().encodeToString(cipher.doFinal(data.getBytes()));
        }
        public String decrypt(String encryptedData) throws Exception {
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, key);
            return new String(cipher.doFinal(Base64.getDecoder().decode(encryptedData)));
        }
    }

    // Textbook RSA with small primes (p = 61, q = 53), for demonstration only
    static class RSA implements Encryptable {
        private final BigInteger n = BigInteger.valueOf(3233);
        private final BigInteger e = BigInteger.valueOf(17);
        private final BigInteger d = BigInteger.valueOf(2753);
        public String encrypt(String data) {
            StringBuilder sb = new StringBuilder();
            for (char c : data.toCharArray()) {
                sb.append(BigInteger.valueOf(c).modPow(e, n)).append(" ");
            }
            return sb.toString().trim();
        }
        public String decrypt(String encryptedData) {
            StringBuilder sb = new StringBuilder();
            for (String part : encryptedData.split(" ")) {
                sb.append((char) new BigInteger(part).modPow(d, n).intValue());
            }
            return sb.toString();
        }
    }
}`,o:`AES encrypted: 5TNRf/GOr6BG0D45c6mPgw==
AES decrypted: Hello Java
RSA encrypted: 3000 3179
RSA decrypted: Hi`},
{s:5,t:"Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",c:`package interfaces;

import java.util.Arrays;

public class Q11 {
    public static void main(String[] args) {
        int[] a = {34, 7, 23, 32, 5, 62};
        int[] b = a.clone();
        new QuickSort().sort(a);
        new MergeSort().sort(b);
        System.out.println("Quick sort (descending): " + Arrays.toString(a));
        System.out.println("Merge sort (descending): " + Arrays.toString(b));
    }

    interface Sortable {
        void sort(int[] array);
    }

    static class QuickSort implements Sortable {
        public void sort(int[] array) {
            quick(array, 0, array.length - 1);
        }
        private void quick(int[] a, int low, int high) {
            if (low < high) {
                int pivot = a[high], i = low - 1;
                for (int j = low; j < high; j++) {
                    if (a[j] > pivot) {
                        i++;
                        int t = a[i]; a[i] = a[j]; a[j] = t;
                    }
                }
                int t = a[i + 1]; a[i + 1] = a[high]; a[high] = t;
                quick(a, low, i);
                quick(a, i + 2, high);
            }
        }
    }

    static class MergeSort implements Sortable {
        public void sort(int[] array) {
            if (array.length < 2) return;
            int mid = array.length / 2;
            int[] left = Arrays.copyOfRange(array, 0, mid);
            int[] right = Arrays.copyOfRange(array, mid, array.length);
            sort(left);
            sort(right);
            int i = 0, j = 0, k = 0;
            while (i < left.length && j < right.length) {
                if (left[i] >= right[j]) array[k++] = left[i++];
                else array[k++] = right[j++];
            }
            while (i < left.length) array[k++] = left[i++];
            while (j < right.length) array[k++] = right[j++];
        }
    }
}`,o:`Quick sort (descending): [62, 34, 32, 23, 7, 5]
Merge sort (descending): [62, 34, 32, 23, 7, 5]`},
{s:6,t:"Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.",c:`package packages;

import java.util.Date;

public class Q1 {
    public static void main(String[] args) {
        Date d = new Date();
        System.out.println("Current date: " + d);
    }
}`,o:`Current date: Sat Oct 17 11:12:04 UTC 2026`},
{s:6,t:"Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.",c:`package packages;

public class Q2 {
    public static void main(String[] args) {
        java.util.Date d = new java.util.Date();
        System.out.println("Current date: " + d);
    }
}`,o:`Current date: Sat Oct 17 11:12:05 UTC 2026`},
{s:6,t:"Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",c:`package packages;

import java.util.Date;

public class Q3 extends Date {
    public static void main(String[] args) {
        Q3 m = new Q3();
        System.out.println("Current date: " + m);
    }
}`,o:`Current date: Sat Oct 17 11:12:06 UTC 2026`},
{s:6,t:"Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.",c:`package packages;

public class Q4 extends java.util.Date {
    public static void main(String[] args) {
        Q4 m = new Q4();
        System.out.println("Current date: " + m);
    }
}`,o:`Current date: Sat Oct 17 11:12:07 UTC 2026`},
{s:6,t:"Create a Java program to create a package with multiple default classes.",c:`// Compile and run (from the source folder): javac -d out pack/Demo.java packages/Q5.java  then  java -cp out packages.Q5

// File: packages/Q5.java
package packages;

import pack.Demo;

public class Q5 {
    public static void main(String[] args) {
        Demo.run();
    }
}

// File: pack/Demo.java
package pack;

class A {
    void show() { System.out.println("Class A (default access)"); }
}

class B {
    void show() { System.out.println("Class B (default access)"); }
}

class C {
    void show() { System.out.println("Class C (default access)"); }
}

public class Demo {
    public static void run() {
        new A().show();
        new B().show();
        new C().show();
    }
}`,o:`Class A (default access)
Class B (default access)
Class C (default access)`},
{s:6,t:"Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",c:`// Compile and run (from the source folder): javac -d out pack/Add.java pack/Divide.java pack/Multiply.java pack/Subtract.java packages/Q6.java  then  java -cp out packages.Q6

// File: packages/Q6.java
package packages;

import pack.*;

public class Q6 {
    public static void main(String[] args) {
        Add a = new Add();
        Subtract s = new Subtract();
        Multiply m = new Multiply();
        Divide d = new Divide();
        System.out.println("Addition: " + a.add(20, 10));
        System.out.println("Subtraction: " + s.subtract(20, 10));
        System.out.println("Multiplication: " + m.multiply(20, 10));
        System.out.println("Division: " + d.divide(20, 10));
    }
}

// File: pack/Add.java
package pack;

public class Add {
    public int add(int a, int b) { return a + b; }
}

// File: pack/Subtract.java
package pack;

public class Subtract {
    public int subtract(int a, int b) { return a - b; }
}

// File: pack/Multiply.java
package pack;

public class Multiply {
    public int multiply(int a, int b) { return a * b; }
}

// File: pack/Divide.java
package pack;

public class Divide {
    public double divide(int a, int b) { return (double) a / b; }
}`,o:`Addition: 30
Subtraction: 10
Multiplication: 200
Division: 2.0`},
{s:6,t:"Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",c:`// Compile and run (from the source folder): javac -d out employee/Emp.java packages/Q7.java  then  java -cp out packages.Q7

// File: packages/Q7.java
package packages;

import employee.Emp;

public class Q7 {
    public static void main(String[] args) {
        Emp e = new Emp("Ravi", 101, "A", 30000);
        e.calculateAllowance();
        e.calculateHra();
        e.calculateDa();
        e.calculateGrossPay();
        e.calculatePf();
        e.calculateIncomeTax();
        e.calculateNetPay();
        e.display();
    }
}

// File: employee/Emp.java
package employee;

public class Emp {
    String name, category;
    int empid;
    double bpay, hra, da, npay, pf, grosspay, incometax, allowance;

    public Emp(String name, int empid, String category, double bpay) {
        this.name = name;
        this.empid = empid;
        this.category = category;
        this.bpay = bpay;
    }

    public void calculateAllowance() {
        if (category.equals("A")) allowance = 5000;
        else if (category.equals("B")) allowance = 3000;
        else allowance = 1000;
    }
    public void calculateHra() { hra = 0.20 * bpay; }
    public void calculateDa() { da = 0.50 * bpay; }
    public void calculateGrossPay() { grosspay = bpay + hra + da + allowance; }
    public void calculatePf() { pf = 0.12 * bpay; }
    public void calculateIncomeTax() { incometax = grosspay > 50000 ? 0.10 * grosspay : 0; }
    public void calculateNetPay() { npay = grosspay - pf - incometax; }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Employee ID: " + empid);
        System.out.println("Category: " + category);
        System.out.printf("Basic Pay: %.2f%n", bpay);
        System.out.printf("HRA: %.2f%n", hra);
        System.out.printf("DA: %.2f%n", da);
        System.out.printf("Allowance: %.2f%n", allowance);
        System.out.printf("Gross Pay: %.2f%n", grosspay);
        System.out.printf("PF: %.2f%n", pf);
        System.out.printf("Income Tax: %.2f%n", incometax);
        System.out.printf("Net Pay: %.2f%n", npay);
    }
}`,o:`Name: Ravi
Employee ID: 101
Category: A
Basic Pay: 30000.00
HRA: 6000.00
DA: 15000.00
Allowance: 5000.00
Gross Pay: 56000.00
PF: 3600.00
Income Tax: 5600.00
Net Pay: 46800.00`},
{s:6,t:"Create a Java program to create a package with public class and protected members to be accessed in another class.",c:`// Compile and run (from the source folder): javac -d out pack/Vehicle.java packages/Q8.java  then  java -cp out packages.Q8

// File: packages/Q8.java
package packages;

import pack.Vehicle;

public class Q8 extends Vehicle {
    public static void main(String[] args) {
        Q8 m = new Q8();
        m.showBrand();
        System.out.println("Accessing protected member directly: " + m.brand);
    }
}

// File: pack/Vehicle.java
package pack;

public class Vehicle {
    protected String brand = "Toyota";

    protected void showBrand() {
        System.out.println("Brand: " + brand);
    }
}`,o:`Brand: Toyota
Accessing protected member directly: Toyota`},
{s:6,t:"Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",c:`// Compile and run (from the source folder): javac -d out c4/sample/Sample.java packages/Q9.java  then  java -cp out packages.Q9

// File: packages/Q9.java
package packages;

import c4.sample.Sample;

public class Q9 extends Sample {
    public static void main(String[] args) {
        Q9 m = new Q9();
        m.display();
    }
}

// File: c4/sample/Sample.java
package c4.sample;

public class Sample {
    protected String message = "Hello from package c4.sample";

    protected void display() {
        System.out.println(message);
    }
}`,o:`Hello from package c4.sample`},
{s:6,t:"Create a Java program to create a package with public class and public members to be accessed in another class.",c:`// Compile and run (from the source folder): javac -d out pack/Calculator.java packages/Q10.java  then  java -cp out packages.Q10

// File: packages/Q10.java
package packages;

import pack.Calculator;

public class Q10 {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Name: " + c.name);
        System.out.println("Sum = " + c.add(15, 25));
    }
}

// File: pack/Calculator.java
package pack;

public class Calculator {
    public String name = "Simple Calculator";

    public int add(int a, int b) {
        return a + b;
    }
}`,o:`Name: Simple Calculator
Sum = 40`},
{s:7,t:"Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",c:`package inheritance;

public class Q1 {
    public static void main(String[] args) {
        Animal a = new Animal();
        Animal c = new Cat();
        a.makeSound();
        c.makeSound();
    }

    static class Animal {
        void makeSound() { System.out.println("Animal makes a sound"); }
    }

    static class Cat extends Animal {
        @Override
        void makeSound() { System.out.println("Cat barks: Bow Bow"); }
    }
}`,o:`Animal makes a sound
Cat barks: Bow Bow`},
{s:7,t:"Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print \"Repairing a car\".",c:`package inheritance;

public class Q2 {
    public static void main(String[] args) {
        Vehicle v = new Vehicle();
        Vehicle c = new Car();
        v.drive();
        c.drive();
    }

    static class Vehicle {
        void drive() { System.out.println("Driving a vehicle"); }
    }

    static class Car extends Vehicle {
        @Override
        void drive() { System.out.println("Repairing a car"); }
    }
}`,o:`Driving a vehicle
Repairing a car`},
{s:7,t:"Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",c:`package inheritance;

public class Q3 {
    public static void main(String[] args) {
        Shape s = new Rectangle(8, 5);
        System.out.println("Area of rectangle = " + s.getArea());
    }

    static class Shape {
        double getArea() { return 0; }
    }

    static class Rectangle extends Shape {
        double length, width;
        Rectangle(double length, double width) {
            this.length = length;
            this.width = width;
        }
        @Override
        double getArea() { return length * width; }
    }
}`,o:`Area of rectangle = 40.0`},
{s:7,t:"Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",c:`package inheritance;

public class Q4 {
    public static void main(String[] args) {
        HRManager hr = new HRManager();
        hr.work();
        System.out.println("Salary = " + hr.getSalary());
        hr.addEmployee("Ravi");
    }

    static class Employee {
        void work() { System.out.println("Employee is working"); }
        double getSalary() { return 30000; }
    }

    static class HRManager extends Employee {
        @Override
        void work() { System.out.println("HR Manager is managing recruitment and employee records"); }
        void addEmployee(String name) { System.out.println("Employee " + name + " added"); }
    }
}`,o:`HR Manager is managing recruitment and employee records
Salary = 30000.0
Employee Ravi added`},
{s:7,t:"Write a Java program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",c:`package inheritance;

public class Q5 {
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount(500);
        acc.deposit(200);
        acc.withdraw(550);
        acc.withdraw(100);
        System.out.println("Final balance = " + acc.balance);
    }

    static class BankAccount {
        double balance;
        BankAccount(double balance) { this.balance = balance; }
        void deposit(double amount) {
            balance += amount;
            System.out.println("Deposited " + amount + ", balance = " + balance);
        }
        void withdraw(double amount) {
            balance -= amount;
            System.out.println("Withdrawn " + amount + ", balance = " + balance);
        }
    }

    static class SavingsAccount extends BankAccount {
        SavingsAccount(double balance) { super(balance); }
        @Override
        void withdraw(double amount) {
            if (balance - amount < 100)
                System.out.println("Withdrawal of " + amount + " denied: balance cannot fall below 100");
            else
                super.withdraw(amount);
        }
    }
}`,o:`Deposited 200.0, balance = 700.0
Withdrawn 550.0, balance = 150.0
Withdrawal of 100.0 denied: balance cannot fall below 100
Final balance = 150.0`},
{s:7,t:"Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",c:`package inheritance;

public class Q6 {
    public static void main(String[] args) {
        Animal a = new Cheetah();
        a.move();
    }

    static class Animal {
        void move() { System.out.println("Animal moves"); }
    }

    static class Cheetah extends Animal {
        @Override
        void move() { System.out.println("Cheetah runs very fast"); }
    }
}`,o:`Cheetah runs very fast`},
{s:7,t:"Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",c:`package inheritance;

public class Q7 {
    public static void main(String[] args) {
        Employee e = new Employee("John", "Smith", 101, "Manager");
        System.out.println("First name: " + e.getFirstName());
        System.out.println("Last name: " + e.getLastName());
        System.out.println("Employee ID: " + e.getEmployeeId());
    }

    static class Person {
        private String firstName, lastName;
        Person(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        String getFirstName() { return firstName; }
        String getLastName() { return lastName; }
    }

    static class Employee extends Person {
        private int employeeId;
        private String jobTitle;
        Employee(String firstName, String lastName, int employeeId, String jobTitle) {
            super(firstName, lastName);
            this.employeeId = employeeId;
            this.jobTitle = jobTitle;
        }
        int getEmployeeId() { return employeeId; }
        @Override
        String getLastName() { return super.getLastName() + " (" + jobTitle + ")"; }
    }
}`,o:`First name: John
Last name: Smith (Manager)
Employee ID: 101`},
{s:7,t:"Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",c:`package inheritance;

public class Q8 {
    public static void main(String[] args) {
        Shape s = new Circle(5);
        System.out.printf("Area of circle = %.2f%n", s.getArea());
        System.out.printf("Perimeter of circle = %.2f%n", s.getPerimeter());
    }

    static class Shape {
        double getPerimeter() { return 0; }
        double getArea() { return 0; }
    }

    static class Circle extends Shape {
        double radius;
        Circle(double radius) { this.radius = radius; }
        @Override
        double getPerimeter() { return 2 * Math.PI * radius; }
        @Override
        double getArea() { return Math.PI * radius * radius; }
    }
}`,o:`Area of circle = 78.54
Perimeter of circle = 31.42`},
{s:7,t:"Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",c:`package inheritance;

public class Q9 {
    public static void main(String[] args) {
        Vehicle[] vehicles = {
            new Truck("Volvo", "FH16", 2020, "Diesel"),
            new Car("Toyota", "Camry", 2022, "Petrol"),
            new Motorcycle("Yamaha", "R15", 2021, "Petrol")
        };
        double[] distance = {300, 400, 200};
        double[] fuelUsed = {50, 25, 4};
        for (int i = 0; i < vehicles.length; i++) {
            Vehicle v = vehicles[i];
            v.display();
            System.out.println("Fuel efficiency: " + v.fuelEfficiency(distance[i], fuelUsed[i]) + " km/l");
            System.out.println("Distance in 2 hours at 60 km/h: " + v.distanceTraveled(60, 2) + " km");
            System.out.println("Maximum speed: " + v.maxSpeed() + " km/h");
            System.out.println();
        }
    }

    static class Vehicle {
        String make, model, fuelType;
        int year;
        Vehicle(String make, String model, int year, String fuelType) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.fuelType = fuelType;
        }
        double fuelEfficiency(double distance, double fuelUsed) { return distance / fuelUsed; }
        double distanceTraveled(double speed, double hours) { return speed * hours; }
        int maxSpeed() { return 100; }
        void display() {
            System.out.println(year + " " + make + " " + model + " (" + fuelType + ")");
        }
    }

    static class Truck extends Vehicle {
        Truck(String make, String model, int year, String fuelType) { super(make, model, year, fuelType); }
        @Override
        int maxSpeed() { return 90; }
    }

    static class Car extends Vehicle {
        Car(String make, String model, int year, String fuelType) { super(make, model, year, fuelType); }
        @Override
        int maxSpeed() { return 180; }
    }

    static class Motorcycle extends Vehicle {
        Motorcycle(String make, String model, int year, String fuelType) { super(make, model, year, fuelType); }
        @Override
        int maxSpeed() { return 200; }
    }
}`,o:`2020 Volvo FH16 (Diesel)
Fuel efficiency: 6.0 km/l
Distance in 2 hours at 60 km/h: 120.0 km
Maximum speed: 90 km/h

2022 Toyota Camry (Petrol)
Fuel efficiency: 16.0 km/l
Distance in 2 hours at 60 km/h: 120.0 km
Maximum speed: 180 km/h

2021 Yamaha R15 (Petrol)
Fuel efficiency: 50.0 km/l
Distance in 2 hours at 60 km/h: 120.0 km
Maximum speed: 200 km/h`},
{s:7,t:"Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",c:`package inheritance;

public class Q10 {
    public static void main(String[] args) {
        Employee[] staff = {
            new Manager("Asha", "Delhi", 80000, "Project Manager"),
            new Developer("Ravi", "Pune", 60000, "Java Developer"),
            new Programmer("Neha", "Mumbai", 50000, "Junior Programmer")
        };
        for (Employee e : staff) {
            e.generateReport();
            e.manageProject("Online Banking");
            System.out.println();
        }
    }

    static class Employee {
        String name, address, jobTitle;
        double salary;
        Employee(String name, String address, double salary, String jobTitle) {
            this.name = name;
            this.address = address;
            this.salary = salary;
            this.jobTitle = jobTitle;
        }
        double calculateBonus() { return salary * 0.05; }
        void generateReport() {
            System.out.println("Performance report");
            System.out.println("Name: " + name + ", Address: " + address);
            System.out.println("Job title: " + jobTitle + ", Salary: " + salary);
            System.out.printf("Bonus: %.2f%n", calculateBonus());
        }
        void manageProject(String project) {
            System.out.println(name + " is working on project " + project);
        }
    }

    static class Manager extends Employee {
        Manager(String name, String address, double salary, String jobTitle) { super(name, address, salary, jobTitle); }
        @Override
        double calculateBonus() { return salary * 0.20; }
        @Override
        void manageProject(String project) {
            System.out.println(name + " is managing the team of project " + project);
        }
    }

    static class Developer extends Employee {
        Developer(String name, String address, double salary, String jobTitle) { super(name, address, salary, jobTitle); }
        @Override
        double calculateBonus() { return salary * 0.10; }
        @Override
        void manageProject(String project) {
            System.out.println(name + " is developing modules of project " + project);
        }
    }

    static class Programmer extends Employee {
        Programmer(String name, String address, double salary, String jobTitle) { super(name, address, salary, jobTitle); }
        @Override
        double calculateBonus() { return salary * 0.08; }
        @Override
        void manageProject(String project) {
            System.out.println(name + " is writing and testing code for project " + project);
        }
    }
}`,o:`Performance report
Name: Asha, Address: Delhi
Job title: Project Manager, Salary: 80000.0
Bonus: 16000.00
Asha is managing the team of project Online Banking

Performance report
Name: Ravi, Address: Pune
Job title: Java Developer, Salary: 60000.0
Bonus: 6000.00
Ravi is developing modules of project Online Banking

Performance report
Name: Neha, Address: Mumbai
Job title: Junior Programmer, Salary: 50000.0
Bonus: 4000.00
Neha is writing and testing code for project Online Banking`},
{s:7,t:"Create a program, showing an example of super keyword",c:`package inheritance;

public class Q11 {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();
    }

    static class Parent {
        String name = "Parent";
        Parent() { System.out.println("Parent constructor called"); }
    }

    static class Child extends Parent {
        String name = "Child";
        Child() {
            super();
            System.out.println("Child constructor called");
        }
        void show() {
            System.out.println("Child name: " + name);
            System.out.println("Parent name: " + super.name);
        }
    }
}`,o:`Parent constructor called
Child constructor called
Child name: Child
Parent name: Parent`},
{s:7,t:"Create a program, showing an example of super function",c:`package inheritance;

public class Q12 {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.display();
    }

    static class Animal {
        void display() { System.out.println("This is an Animal"); }
    }

    static class Dog extends Animal {
        @Override
        void display() {
            super.display();
            System.out.println("This is a Dog");
        }
    }
}`,o:`This is an Animal
This is a Dog`},
{s:7,t:"Create a program, showing an example of method overriding",c:`package inheritance;

public class Q13 {
    public static void main(String[] args) {
        Bank b1 = new SBI();
        Bank b2 = new HDFC();
        System.out.println("SBI rate of interest: " + b1.getRateOfInterest() + "%");
        System.out.println("HDFC rate of interest: " + b2.getRateOfInterest() + "%");
    }

    static class Bank {
        double getRateOfInterest() { return 0; }
    }

    static class SBI extends Bank {
        @Override
        double getRateOfInterest() { return 7; }
    }

    static class HDFC extends Bank {
        @Override
        double getRateOfInterest() { return 8; }
    }
}`,o:`SBI rate of interest: 7.0%
HDFC rate of interest: 8.0%`},
{s:7,t:"Create a program, showing an example of dynamic method dispatch",c:`package inheritance;

public class Q14 {
    public static void main(String[] args) {
        Shape ref;
        ref = new Circle();
        ref.draw();
        ref = new Square();
        ref.draw();
        ref = new Triangle();
        ref.draw();
    }

    static class Shape {
        void draw() { System.out.println("Drawing a shape"); }
    }

    static class Circle extends Shape {
        @Override
        void draw() { System.out.println("Drawing a circle"); }
    }

    static class Square extends Shape {
        @Override
        void draw() { System.out.println("Drawing a square"); }
    }

    static class Triangle extends Shape {
        @Override
        void draw() { System.out.println("Drawing a triangle"); }
    }
}`,o:`Drawing a circle
Drawing a square
Drawing a triangle`},
{s:7,t:"Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",c:`package inheritance;

public class Q15 {
    public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();
        lion.sound();
        tiger.sound();
    }

    abstract static class Animal {
        abstract void sound();
    }

    static class Lion extends Animal {
        void sound() { System.out.println("Lion roars: Roar!"); }
    }

    static class Tiger extends Animal {
        void sound() { System.out.println("Tiger growls: Growl!"); }
    }
}`,o:`Lion roars: Roar!
Tiger growls: Growl!`},
{s:7,t:"Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",c:`package inheritance;

public class Q16 {
    public static void main(String[] args) {
        Shape c = new Circle(5);
        Shape t = new Triangle(3, 4, 5);
        System.out.printf("Circle area = %.2f, perimeter = %.2f%n", c.calculateArea(), c.calculatePerimeter());
        System.out.printf("Triangle area = %.2f, perimeter = %.2f%n", t.calculateArea(), t.calculatePerimeter());
    }

    abstract static class Shape {
        abstract double calculateArea();
        abstract double calculatePerimeter();
    }

    static class Circle extends Shape {
        double r;
        Circle(double r) { this.r = r; }
        double calculateArea() { return Math.PI * r * r; }
        double calculatePerimeter() { return 2 * Math.PI * r; }
    }

    static class Triangle extends Shape {
        double a, b, c;
        Triangle(double a, double b, double c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        double calculateArea() {
            double s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }
        double calculatePerimeter() { return a + b + c; }
    }
}`,o:`Circle area = 78.54, perimeter = 31.42
Triangle area = 6.00, perimeter = 12.00`},
{s:7,t:"Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",c:`package inheritance;

public class Q17 {
    public static void main(String[] args) {
        BankAccount s = new SavingsAccount(5000);
        BankAccount c = new CurrentAccount(2000);
        s.deposit(1000);
        s.withdraw(5500);
        s.withdraw(1000);
        c.deposit(500);
        c.withdraw(3000);
        c.withdraw(1000);
    }

    abstract static class BankAccount {
        protected double balance;
        BankAccount(double balance) { this.balance = balance; }
        abstract void deposit(double amount);
        abstract void withdraw(double amount);
    }

    static class SavingsAccount extends BankAccount {
        SavingsAccount(double balance) { super(balance); }
        void deposit(double amount) {
            balance += amount;
            System.out.println("Savings: deposited " + amount + ", balance = " + balance);
        }
        void withdraw(double amount) {
            if (balance - amount < 500)
                System.out.println("Savings: withdrawal denied, minimum balance of 500 required");
            else {
                balance -= amount;
                System.out.println("Savings: withdrawn " + amount + ", balance = " + balance);
            }
        }
    }

    static class CurrentAccount extends BankAccount {
        CurrentAccount(double balance) { super(balance); }
        void deposit(double amount) {
            balance += amount;
            System.out.println("Current: deposited " + amount + ", balance = " + balance);
        }
        void withdraw(double amount) {
            if (amount > balance + 1000)
                System.out.println("Current: overdraft limit of 1000 exceeded");
            else {
                balance -= amount;
                System.out.println("Current: withdrawn " + amount + ", balance = " + balance);
            }
        }
    }
}`,o:`Savings: deposited 1000.0, balance = 6000.0
Savings: withdrawn 5500.0, balance = 500.0
Savings: withdrawal denied, minimum balance of 500 required
Current: deposited 500.0, balance = 2500.0
Current: withdrawn 3000.0, balance = -500.0
Current: overdraft limit of 1000 exceeded`},
{s:7,t:"Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",c:`package inheritance;

public class Q18 {
    public static void main(String[] args) {
        Animal[] animals = {new Lion(), new Tiger(), new Deer()};
        for (Animal a : animals) {
            a.eat();
            a.sleep();
        }
    }

    abstract static class Animal {
        abstract void eat();
        abstract void sleep();
    }

    static class Lion extends Animal {
        void eat() { System.out.println("Lion eats meat"); }
        void sleep() { System.out.println("Lion sleeps up to 20 hours a day"); }
    }

    static class Tiger extends Animal {
        void eat() { System.out.println("Tiger hunts and eats deer"); }
        void sleep() { System.out.println("Tiger sleeps in the shade during the day"); }
    }

    static class Deer extends Animal {
        void eat() { System.out.println("Deer eats grass and leaves"); }
        void sleep() { System.out.println("Deer takes short naps and stays alert"); }
    }
}`,o:`Lion eats meat
Lion sleeps up to 20 hours a day
Tiger hunts and eats deer
Tiger sleeps in the shade during the day
Deer eats grass and leaves
Deer takes short naps and stays alert`},
{s:7,t:"Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",c:`package inheritance;

public class Q19 {
    public static void main(String[] args) {
        Employee m = new Manager("Asha", 50000, 15000);
        Employee p = new Programmer("Ravi", 160, 300);
        m.displayInfo();
        p.displayInfo();
    }

    abstract static class Employee {
        String name;
        Employee(String name) { this.name = name; }
        abstract double calculateSalary();
        abstract void displayInfo();
    }

    static class Manager extends Employee {
        double basic, allowance;
        Manager(String name, double basic, double allowance) {
            super(name);
            this.basic = basic;
            this.allowance = allowance;
        }
        double calculateSalary() { return basic + allowance; }
        void displayInfo() {
            System.out.println("Manager: " + name + ", Salary: " + calculateSalary());
        }
    }

    static class Programmer extends Employee {
        int hours;
        double ratePerHour;
        Programmer(String name, int hours, double ratePerHour) {
            super(name);
            this.hours = hours;
            this.ratePerHour = ratePerHour;
        }
        double calculateSalary() { return hours * ratePerHour; }
        void displayInfo() {
            System.out.println("Programmer: " + name + ", Salary: " + calculateSalary());
        }
    }
}`,o:`Manager: Asha, Salary: 65000.0
Programmer: Ravi, Salary: 48000.0`},
{s:7,t:"Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",c:`package inheritance;

public class Q20 {
    public static void main(String[] args) {
        Shape3D sphere = new Sphere(3);
        Shape3D cube = new Cube(4);
        System.out.printf("Sphere volume = %.2f, surface area = %.2f%n", sphere.calculateVolume(), sphere.calculateSurfaceArea());
        System.out.printf("Cube volume = %.2f, surface area = %.2f%n", cube.calculateVolume(), cube.calculateSurfaceArea());
    }

    abstract static class Shape3D {
        abstract double calculateVolume();
        abstract double calculateSurfaceArea();
    }

    static class Sphere extends Shape3D {
        double r;
        Sphere(double r) { this.r = r; }
        double calculateVolume() { return (4.0 / 3) * Math.PI * r * r * r; }
        double calculateSurfaceArea() { return 4 * Math.PI * r * r; }
    }

    static class Cube extends Shape3D {
        double side;
        Cube(double side) { this.side = side; }
        double calculateVolume() { return side * side * side; }
        double calculateSurfaceArea() { return 6 * side * side; }
    }
}`,o:`Sphere volume = 113.10, surface area = 113.10
Cube volume = 64.00, surface area = 96.00`},
{s:7,t:"Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",c:`package inheritance;

public class Q21 {
    public static void main(String[] args) {
        Vehicle car = new Car();
        Vehicle bike = new Motorcycle();
        car.startEngine();
        car.stopEngine();
        bike.startEngine();
        bike.stopEngine();
    }

    abstract static class Vehicle {
        abstract void startEngine();
        abstract void stopEngine();
    }

    static class Car extends Vehicle {
        void startEngine() { System.out.println("Car engine started with the push button"); }
        void stopEngine() { System.out.println("Car engine stopped"); }
    }

    static class Motorcycle extends Vehicle {
        void startEngine() { System.out.println("Motorcycle engine started with the kick"); }
        void stopEngine() { System.out.println("Motorcycle engine stopped"); }
    }
}`,o:`Car engine started with the push button
Car engine stopped
Motorcycle engine started with the kick
Motorcycle engine stopped`},
{s:7,t:"Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",c:`package inheritance;

public class Q22 {
    public static void main(String[] args) {
        Person a = new Athlete();
        Person l = new LazyPerson();
        a.eat();
        a.exercise();
        l.eat();
        l.exercise();
    }

    abstract static class Person {
        abstract void eat();
        abstract void exercise();
    }

    static class Athlete extends Person {
        void eat() { System.out.println("Athlete eats a healthy, protein-rich diet"); }
        void exercise() { System.out.println("Athlete exercises for 3 hours every day"); }
    }

    static class LazyPerson extends Person {
        void eat() { System.out.println("Lazy person eats junk food"); }
        void exercise() { System.out.println("Lazy person never exercises"); }
    }
}`,o:`Athlete eats a healthy, protein-rich diet
Athlete exercises for 3 hours every day
Lazy person eats junk food
Lazy person never exercises`},
{s:7,t:"Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",c:`package inheritance;

public class Q23 {
    public static void main(String[] args) {
        Instrument g = new Glockenspiel();
        Instrument v = new Violin();
        g.tune();
        g.play();
        v.tune();
        v.play();
    }

    abstract static class Instrument {
        abstract void play();
        abstract void tune();
    }

    static class Glockenspiel extends Instrument {
        void play() { System.out.println("Playing the glockenspiel by striking the metal bars with mallets"); }
        void tune() { System.out.println("Tuning the glockenspiel by adjusting the length of the bars"); }
    }

    static class Violin extends Instrument {
        void play() { System.out.println("Playing the violin with a bow"); }
        void tune() { System.out.println("Tuning the violin by turning the pegs"); }
    }
}`,o:`Tuning the glockenspiel by adjusting the length of the bars
Playing the glockenspiel by striking the metal bars with mallets
Tuning the violin by turning the pegs
Playing the violin with a bow`},
{s:7,t:"Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",c:`package inheritance;

public class Q24 {
    public static void main(String[] args) {
        Shape2D r = new Rectangle(10, 5);
        Shape2D c = new Circle(4);
        r.draw();
        r.resize(2);
        c.draw();
        c.resize(1.5);
    }

    abstract static class Shape2D {
        abstract void draw();
        abstract void resize(double factor);
    }

    static class Rectangle extends Shape2D {
        double length, width;
        Rectangle(double length, double width) {
            this.length = length;
            this.width = width;
        }
        void draw() { System.out.println("Drawing a rectangle " + length + " x " + width); }
        void resize(double factor) {
            length *= factor;
            width *= factor;
            System.out.println("Resized rectangle: " + length + " x " + width);
        }
    }

    static class Circle extends Shape2D {
        double radius;
        Circle(double radius) { this.radius = radius; }
        void draw() { System.out.println("Drawing a circle with radius " + radius); }
        void resize(double factor) {
            radius *= factor;
            System.out.println("Resized circle: radius " + radius);
        }
    }
}`,o:`Drawing a rectangle 10.0 x 5.0
Resized rectangle: 20.0 x 10.0
Drawing a circle with radius 4.0
Resized circle: radius 6.0`},
{s:7,t:"Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",c:`package inheritance;

public class Q25 {
    public static void main(String[] args) {
        Bird eagle = new Eagle();
        Bird hawk = new Hawk();
        eagle.fly();
        eagle.makeSound();
        hawk.fly();
        hawk.makeSound();
    }

    abstract static class Bird {
        abstract void fly();
        abstract void makeSound();
    }

    static class Eagle extends Bird {
        void fly() { System.out.println("Eagle soars high in the sky"); }
        void makeSound() { System.out.println("Eagle screeches: Kee-kee-kee"); }
    }

    static class Hawk extends Bird {
        void fly() { System.out.println("Hawk glides and dives to hunt"); }
        void makeSound() { System.out.println("Hawk cries: Kree-eee"); }
    }
}`,o:`Eagle soars high in the sky
Eagle screeches: Kee-kee-kee
Hawk glides and dives to hunt
Hawk cries: Kree-eee`},
{s:7,t:"Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",c:`package inheritance;

public class Q26 {
    public static void main(String[] args) {
        GeometricShape t = new Triangle(3, 4, 5);
        GeometricShape s = new Square(4);
        System.out.println("Triangle area = " + t.area() + ", perimeter = " + t.perimeter());
        System.out.println("Square area = " + s.area() + ", perimeter = " + s.perimeter());
    }

    abstract static class GeometricShape {
        abstract double area();
        abstract double perimeter();
    }

    static class Triangle extends GeometricShape {
        double a, b, c;
        Triangle(double a, double b, double c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        double area() {
            double s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }
        double perimeter() { return a + b + c; }
    }

    static class Square extends GeometricShape {
        double side;
        Square(double side) { this.side = side; }
        double area() { return side * side; }
        double perimeter() { return 4 * side; }
    }
}`,o:`Triangle area = 6.0, perimeter = 12.0
Square area = 16.0, perimeter = 16.0`},
{s:8,t:"Enter the character from user using InputStreamReader",c:`package input_output;

import java.io.*;

public class Q1 {
    public static void main(String[] args) throws Exception {
        InputStreamReader isr = new InputStreamReader(System.in);
        System.out.print("Enter a character: ");
        char ch = (char) isr.read();
        System.out.println("You entered: " + ch);
    }
}`,o:`Enter a character: A
You entered: A`},
{s:8,t:"Enter the string from user using BufferedStreamReader (BufferedReader)",c:`package input_output;

import java.io.*;

public class Q2 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter a string: ");
        String s = br.readLine();
        System.out.println("You entered: " + s);
    }
}`,o:`Enter a string: Hello Java
You entered: Hello Java`},
{s:8,t:"Enter the integer from user using Scanner class",c:`package input_output;

import java.util.Scanner;

public class Q3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt();
        System.out.println("You entered: " + n);
    }
}`,o:`Enter an integer: 25
You entered: 25`},
{s:8,t:"Enter the float from user using Scanner class",c:`package input_output;

import java.util.Scanner;

public class Q4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a float value: ");
        float f = sc.nextFloat();
        System.out.println("You entered: " + f);
    }
}`,o:`Enter a float value: 3.14
You entered: 3.14`},
{s:8,t:"Enter the double from user using Scanner class",c:`package input_output;

import java.util.Scanner;

public class Q5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a double value: ");
        double d = sc.nextDouble();
        System.out.println("You entered: " + d);
    }
}`,o:`Enter a double value: 99.99
You entered: 99.99`},
{s:8,t:"Enter the boolean from user using Scanner class",c:`package input_output;

import java.util.Scanner;

public class Q6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a boolean value (true/false): ");
        boolean b = sc.nextBoolean();
        System.out.println("You entered: " + b);
    }
}`,o:`Enter a boolean value (true/false): true
You entered: true`},
{s:8,t:"Enter the short integer from user using Scanner class",c:`package input_output;

import java.util.Scanner;

public class Q7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a short integer: ");
        short s = sc.nextShort();
        System.out.println("You entered: " + s);
    }
}`,o:`Enter a short integer: 120
You entered: 120`},
{s:8,t:"Enter the long integer from user using Scanner class",c:`package input_output;

import java.util.Scanner;

public class Q8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a long integer: ");
        long l = sc.nextLong();
        System.out.println("You entered: " + l);
    }
}`,o:`Enter a long integer: 123456789012
You entered: 123456789012`},
{s:8,t:"Get all characters from the file and display on the screen (the program first creates data.txt)",c:`package input_output;

import java.io.*;

public class Q9 {
    public static void main(String[] args) throws Exception {
        try (FileWriter fw = new FileWriter("data.txt")) {
            fw.write("Hello Java\\nFile Handling");
        }
        try (FileReader fr = new FileReader("data.txt")) {
            int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
        }
    }
}`,o:`Hello Java
File Handling`},
{s:8,t:"Get all characters from the file, count number of lines, words, characters and display on the screen (the program first creates sample.txt)",c:`package input_output;

import java.io.*;

public class Q10 {
    public static void main(String[] args) throws Exception {
        try (FileWriter fw = new FileWriter("sample.txt")) {
            fw.write("Java is fun\\nFile handling in Java\\nHello World");
        }
        int lines = 0, words = 0, chars = 0;
        try (BufferedReader br = new BufferedReader(new FileReader("sample.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                lines++;
                chars += line.length();
                if (!line.trim().isEmpty()) words += line.trim().split(" ").length;
            }
        }
        System.out.println("Number of lines: " + lines);
        System.out.println("Number of words: " + words);
        System.out.println("Number of characters: " + chars);
    }
}`,o:`Number of lines: 3
Number of words: 9
Number of characters: 43`},
{s:9,t:"Write a Java program that throws an exception and catch it using a try-catch block.",c:`package exception_handling;

public class Q1 {
    public static void main(String[] args) {
        try {
            System.out.println("Inside try block");
            throw new Exception("This is a thrown exception");
        } catch (Exception e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }
}`,o:`Inside try block
Caught exception: This is a thrown exception`},
{s:9,t:"Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",c:`package exception_handling;

public class Q2 {
    static void checkEven(int n) {
        if (n % 2 != 0)
            throw new IllegalArgumentException(n + " is an odd number");
        System.out.println(n + " is an even number");
    }

    public static void main(String[] args) {
        int[] numbers = {8, 7};
        for (int n : numbers) {
            try {
                checkEven(n);
            } catch (IllegalArgumentException e) {
                System.out.println("Exception: " + e.getMessage());
            }
        }
    }
}`,o:`8 is an even number
Exception: 7 is an odd number`},
{s:9,t:"Write a Java program to create a method that reads a file and throws an exception if the file is not found",c:`package exception_handling;

import java.io.*;

public class Q3 {
    static void readFile(String name) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader(name))) {
            System.out.println("Read from " + name + ": " + br.readLine());
        }
    }

    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("exists.txt")) {
            fw.write("File content");
        } catch (IOException e) {
            System.out.println("Could not create file");
        }
        String[] files = {"exists.txt", "missing.txt"};
        for (String f : files) {
            try {
                readFile(f);
            } catch (FileNotFoundException e) {
                System.out.println("File not found: " + f);
            } catch (IOException e) {
                System.out.println("I/O error: " + e.getMessage());
            }
        }
    }
}`,o:`Read from exists.txt: File content
File not found: missing.txt`},
{s:9,t:"Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive",c:`package exception_handling;

import java.io.*;

public class Q4 {
    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("numbers.txt")) {
            fw.write("-5\\n-3\\n4\\n-1");
        } catch (IOException e) {
            System.out.println("Could not create file");
        }
        try (BufferedReader br = new BufferedReader(new FileReader("numbers.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                int n = Integer.parseInt(line.trim());
                if (n > 0) throw new PositiveNumberException("Positive number found: " + n);
                System.out.println("Valid number: " + n);
            }
        } catch (PositiveNumberException e) {
            System.out.println("Exception: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        }
    }

    static class PositiveNumberException extends Exception {
        PositiveNumberException(String message) { super(message); }
    }
}`,o:`Valid number: -5
Valid number: -3
Exception: Positive number found: 4`},
{s:9,t:"Write a Java program that reads a file and throws an exception if the file is empty.",c:`package exception_handling;

import java.io.*;

public class Q5 {
    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("empty.txt")) {
            // nothing is written, so the file stays empty
        } catch (IOException e) {
            System.out.println("Could not create file");
        }
        try {
            File file = new File("empty.txt");
            if (file.length() == 0) throw new Exception("File is empty");
            System.out.println("File has content");
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}`,o:`Exception: File is empty`},
{s:9,t:"Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates",c:`package exception_handling;

import java.util.*;

public class Q6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            arr[i] = sc.nextInt();
        }
        try {
            Set<Integer> seen = new HashSet<>();
            for (int x : arr) {
                if (!seen.add(x)) throw new Exception("Duplicate number found: " + x);
            }
            System.out.println("No duplicates found");
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}`,o:`Enter number of elements: 5
Enter number 1: 4
Enter number 2: 7
Enter number 3: 2
Enter number 4: 7
Enter number 5: 9
Exception: Duplicate number found: 7`},
{s:9,t:"Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",c:`package exception_handling;

public class Q7 {
    static void checkVowels(String s) throws Exception {
        boolean found = false;
        for (char c : s.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(c) != -1) {
                found = true;
                break;
            }
        }
        if (!found) throw new Exception("\\"" + s + "\\" does not contain any vowels");
        System.out.println("\\"" + s + "\\" contains vowels");
    }

    public static void main(String[] args) {
        String[] words = {"Hello", "rhythm"};
        for (String w : words) {
            try {
                checkVowels(w);
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
            }
        }
    }
}`,o:`"Hello" contains vowels
Exception: "rhythm" does not contain any vowels`},
{s:9,t:"Write a Java program to connect the Java API to Database, if connection not successful then throw an exception (output shown when no database server is running)",c:`package exception_handling;

import java.sql.*;

public class Q8 {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        try (Connection con = DriverManager.getConnection(url, "root", "password")) {
            System.out.println("Connected to the database successfully");
        } catch (SQLException e) {
            System.out.println("Connection failed: " + e.getMessage());
        }
    }
}`,o:`Connection failed: No suitable driver found for jdbc:mysql://localhost:3306/testdb`},
{s:9,t:"Write a Java program to manage the driver with path, username and password, if not successful then throw an exception (output shown when the MySQL driver jar is not on the classpath)",c:`package exception_handling;

import java.sql.*;

public class Q9 {
    public static void main(String[] args) {
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root", password = "password";
        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Driver loaded and connected successfully");
            con.close();
        } catch (ClassNotFoundException e) {
            System.out.println("Driver not found: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("Connection failed: " + e.getMessage());
        }
    }
}`,o:`Driver not found: com.mysql.cj.jdbc.Driver`},
{s:9,t:"Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception (output shown when no database server is running)",c:`package exception_handling;

import java.sql.*;

public class Q10 {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String[] queries = {
            "INSERT INTO students VALUES (1, 'Ravi')",
            "UPDATE students SET name = 'Amit' WHERE id = 1",
            "DELETE FROM students WHERE id = 1"
        };
        try (Connection con = DriverManager.getConnection(url, "root", "password");
             Statement st = con.createStatement()) {
            for (String q : queries) {
                int rows = st.executeUpdate(q);
                System.out.println(q + " -> " + rows + " row(s) affected");
            }
        } catch (SQLException e) {
            System.out.println("SQL operation failed: " + e.getMessage());
        }
    }
}`,o:`SQL operation failed: No suitable driver found for jdbc:mysql://localhost:3306/testdb`},
{s:9,t:"Write a Java program to show an example of throws Keyword.",c:`package exception_handling;

public class Q11 {
    static void validate(int age) throws Exception {
        if (age < 18) throw new Exception("Age " + age + " is not eligible to vote");
        System.out.println("Age " + age + " is eligible to vote");
    }

    public static void main(String[] args) {
        try {
            validate(20);
            validate(15);
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}`,o:`Age 20 is eligible to vote
Exception: Age 15 is not eligible to vote`},
{s:9,t:"Write a Java program to show an example of multiple catch",c:`package exception_handling;

public class Q12 {
    public static void main(String[] args) {
        int[] a = new int[3];
        String s = null;
        for (int i = 0; i < 3; i++) {
            try {
                if (i == 0) a[5] = 10;
                else if (i == 1) System.out.println(10 / 0);
                else System.out.println(s.length());
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Array index error: " + e.getMessage());
            } catch (ArithmeticException e) {
                System.out.println("Arithmetic error: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("General exception caught");
            }
        }
    }
}`,o:`Array index error: Index 5 out of bounds for length 3
Arithmetic error: / by zero
General exception caught`},
{s:9,t:"Write a Java program to show an example of nested try block.",c:`package exception_handling;

public class Q13 {
    public static void main(String[] args) {
        try {
            System.out.println("Outer try block started");
            try {
                System.out.println("Inner try block started");
                int result = 10 / 0;
                System.out.println(result);
            } catch (ArithmeticException e) {
                System.out.println("Inner catch: " + e.getMessage());
            }
            int[] arr = new int[2];
            arr[5] = 1;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Outer catch: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }
    }
}`,o:`Outer try block started
Inner try block started
Inner catch: / by zero
Outer catch: Index 5 out of bounds for length 2
Finally block executed`},
{s:10,t:"Write a Java program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",c:`package object_oriented_programming;

public class Q1 {
    public static void main(String[] args) {
        Person p1 = new Person("Ravi", 25);
        Person p2 = new Person("Neha", 22);
        System.out.println("Name: " + p1.name + ", Age: " + p1.age);
        System.out.println("Name: " + p2.name + ", Age: " + p2.age);
    }

    static class Person {
        String name;
        int age;
        Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }
}`,o:`Name: Ravi, Age: 25
Name: Neha, Age: 22`},
{s:10,t:"Write a Java program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",c:`package object_oriented_programming;

public class Q2 {
    public static void main(String[] args) {
        Dog d1 = new Dog("Tommy", "Labrador");
        Dog d2 = new Dog("Bruno", "Beagle");
        d1.setName("Max");
        d2.setBreed("Pug");
        System.out.println("Dog 1: " + d1.getName() + ", " + d1.getBreed());
        System.out.println("Dog 2: " + d2.getName() + ", " + d2.getBreed());
    }

    static class Dog {
        private String name, breed;
        Dog(String name, String breed) {
            this.name = name;
            this.breed = breed;
        }
        String getName() { return name; }
        String getBreed() { return breed; }
        void setName(String name) { this.name = name; }
        void setBreed(String breed) { this.breed = breed; }
    }
}`,o:`Dog 1: Max, Labrador
Dog 2: Bruno, Pug`},
{s:10,t:"Write a Java program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle.",c:`package object_oriented_programming;

public class Q3 {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(8, 5);
        System.out.println("Area = " + r.area());
        System.out.println("Perimeter = " + r.perimeter());
    }

    static class Rectangle {
        double width, height;
        Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
        double area() { return width * height; }
        double perimeter() { return 2 * (width + height); }
    }
}`,o:`Area = 40.0
Perimeter = 26.0`},
{s:10,t:"Write a Java program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",c:`package object_oriented_programming;

public class Q4 {
    public static void main(String[] args) {
        Circle c = new Circle(5);
        System.out.println("Radius = " + c.getRadius());
        System.out.printf("Area = %.2f%n", c.area());
        System.out.printf("Circumference = %.2f%n", c.circumference());
        c.setRadius(7);
        System.out.println("Radius after update = " + c.getRadius());
        System.out.printf("New area = %.2f%n", c.area());
    }

    static class Circle {
        private double radius;
        Circle(double radius) { this.radius = radius; }
        double getRadius() { return radius; }
        void setRadius(double radius) { this.radius = radius; }
        double area() { return Math.PI * radius * radius; }
        double circumference() { return 2 * Math.PI * radius; }
    }
}`,o:`Radius = 5.0
Area = 78.54
Circumference = 31.42
Radius after update = 7.0
New area = 153.94`},
{s:10,t:"Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",c:`package object_oriented_programming;

import java.util.*;

public class Q5 {
    public static void main(String[] args) {
        BookCollection collection = new BookCollection();
        collection.addBook(new Book("Java Basics", "James Gosling", "111"));
        collection.addBook(new Book("Clean Code", "Robert Martin", "222"));
        collection.addBook(new Book("Effective Java", "Joshua Bloch", "333"));
        collection.removeBook("222");
        collection.removeBook("999");
        collection.display();
    }

    static class Book {
        String title, author, isbn;
        Book(String title, String author, String isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        }
        public String toString() { return title + " by " + author + " (ISBN: " + isbn + ")"; }
    }

    static class BookCollection {
        private List<Book> books = new ArrayList<>();
        void addBook(Book b) {
            books.add(b);
            System.out.println("Added: " + b);
        }
        void removeBook(String isbn) {
            boolean removed = books.removeIf(b -> b.isbn.equals(isbn));
            System.out.println(removed ? "Removed book with ISBN " + isbn : "No book found with ISBN " + isbn);
        }
        void display() {
            System.out.println("Books in the collection:");
            for (Book b : books) System.out.println(b);
        }
    }
}`,o:`Added: Java Basics by James Gosling (ISBN: 111)
Added: Clean Code by Robert Martin (ISBN: 222)
Added: Effective Java by Joshua Bloch (ISBN: 333)
Removed book with ISBN 222
No book found with ISBN 999
Books in the collection:
Java Basics by James Gosling (ISBN: 111)
Effective Java by Joshua Bloch (ISBN: 333)`},
{s:10,t:"Write a Java program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",c:`package object_oriented_programming;

public class Q6 {
    public static void main(String[] args) {
        Employee e = new Employee("Ravi", "Developer", 40000);
        e.display();
        System.out.println("Annual salary = " + e.calculateAnnualSalary());
        e.updateSalary(10);
        e.display();
    }

    static class Employee {
        String name, jobTitle;
        double salary;
        Employee(String name, String jobTitle, double salary) {
            this.name = name;
            this.jobTitle = jobTitle;
            this.salary = salary;
        }
        double calculateAnnualSalary() { return salary * 12; }
        void updateSalary(double percent) {
            salary += salary * percent / 100;
            System.out.println("Salary increased by " + percent + "%");
        }
        void display() {
            System.out.println(name + " (" + jobTitle + ") monthly salary: " + salary);
        }
    }
}`,o:`Ravi (Developer) monthly salary: 40000.0
Annual salary = 480000.0
Salary increased by 10.0%
Ravi (Developer) monthly salary: 44000.0`},
{s:10,t:"Write a Java program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",c:`package object_oriented_programming;

import java.util.*;

public class Q7 {
    public static void main(String[] args) {
        Bank bank = new Bank();
        bank.addAccount(new Account(101, "Ravi", 5000));
        bank.addAccount(new Account(102, "Neha", 8000));
        bank.deposit(101, 1500);
        bank.withdraw(102, 2000);
        bank.withdraw(101, 9000);
        bank.removeAccount(102);
        bank.showAccounts();
    }

    static class Account {
        int number;
        String holder;
        double balance;
        Account(int number, String holder, double balance) {
            this.number = number;
            this.holder = holder;
            this.balance = balance;
        }
    }

    static class Bank {
        private List<Account> accounts = new ArrayList<>();
        private Account find(int number) {
            for (Account a : accounts) if (a.number == number) return a;
            return null;
        }
        void addAccount(Account a) {
            accounts.add(a);
            System.out.println("Account " + a.number + " added for " + a.holder);
        }
        void removeAccount(int number) {
            Account a = find(number);
            if (a != null) {
                accounts.remove(a);
                System.out.println("Account " + number + " removed");
            } else System.out.println("Account not found");
        }
        void deposit(int number, double amount) {
            Account a = find(number);
            if (a != null) {
                a.balance += amount;
                System.out.println("Deposited " + amount + " in account " + number + ", balance = " + a.balance);
            }
        }
        void withdraw(int number, double amount) {
            Account a = find(number);
            if (a == null) return;
            if (amount > a.balance)
                System.out.println("Insufficient balance in account " + number);
            else {
                a.balance -= amount;
                System.out.println("Withdrawn " + amount + " from account " + number + ", balance = " + a.balance);
            }
        }
        void showAccounts() {
            System.out.println("Accounts in the bank:");
            for (Account a : accounts)
                System.out.println(a.number + " - " + a.holder + " - " + a.balance);
        }
    }
}`,o:`Account 101 added for Ravi
Account 102 added for Neha
Deposited 1500.0 in account 101, balance = 6500.0
Withdrawn 2000.0 from account 102, balance = 6000.0
Insufficient balance in account 101
Account 102 removed
Accounts in the bank:
101 - Ravi - 6500.0`},
{s:10,t:"Write a Java program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",c:`package object_oriented_programming;

public class Q8 {
    public static void main(String[] args) {
        TrafficLight light = new TrafficLight();
        for (int i = 0; i < 4; i++) {
            System.out.println("Color: " + light.color + ", Duration: " + light.duration + " seconds"
                + ", Red: " + light.isRed() + ", Green: " + light.isGreen());
            light.changeColor();
        }
    }

    static class TrafficLight {
        String color = "RED";
        int duration = 30;
        void changeColor() {
            if (color.equals("RED")) { color = "GREEN"; duration = 25; }
            else if (color.equals("GREEN")) { color = "YELLOW"; duration = 5; }
            else { color = "RED"; duration = 30; }
        }
        boolean isRed() { return color.equals("RED"); }
        boolean isGreen() { return color.equals("GREEN"); }
    }
}`,o:`Color: RED, Duration: 30 seconds, Red: true, Green: false
Color: GREEN, Duration: 25 seconds, Red: false, Green: true
Color: YELLOW, Duration: 5 seconds, Red: false, Green: false
Color: RED, Duration: 30 seconds, Red: true, Green: false`},
{s:10,t:"Write a Java program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",c:`package object_oriented_programming;

import java.time.LocalDate;
import java.time.Period;

public class Q9 {
    public static void main(String[] args) {
        Employee e = new Employee("Ravi", 45000, LocalDate.of(2018, 5, 10));
        System.out.println("Name: " + e.name);
        System.out.println("Hire date: " + e.hireDate);
        System.out.println("Years of service: " + e.yearsOfService());
    }

    static class Employee {
        String name;
        double salary;
        LocalDate hireDate;
        Employee(String name, double salary, LocalDate hireDate) {
            this.name = name;
            this.salary = salary;
            this.hireDate = hireDate;
        }
        int yearsOfService() {
            return Period.between(hireDate, LocalDate.now()).getYears();
        }
    }
}`,o:`Name: Ravi
Hire date: 2018-05-10
Years of service: 8`},
{s:10,t:"Write a Java program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",c:`package object_oriented_programming;

import java.util.*;

public class Q10 {
    public static void main(String[] args) {
        Student s = new Student("Neha", "A");
        s.addCourse("Java");
        s.addCourse("Python");
        s.addCourse("Databases");
        s.removeCourse("Python");
        s.display();
    }

    static class Student {
        String name, grade;
        List<String> courses = new ArrayList<>();
        Student(String name, String grade) {
            this.name = name;
            this.grade = grade;
        }
        void addCourse(String course) {
            courses.add(course);
            System.out.println(course + " added");
        }
        void removeCourse(String course) {
            if (courses.remove(course)) System.out.println(course + " removed");
            else System.out.println(course + " not found");
        }
        void display() {
            System.out.println("Student: " + name + ", Grade: " + grade);
            System.out.println("Courses: " + courses);
        }
    }
}`,o:`Java added
Python added
Databases added
Python removed
Student: Neha, Grade: A
Courses: [Java, Databases]`},
{s:10,t:"Write a Java program to create a class called \"Library\" with a collection of books and methods to add and remove books.",c:`package object_oriented_programming;

import java.util.*;

public class Q11 {
    public static void main(String[] args) {
        Library lib = new Library();
        lib.addBook("Java Basics");
        lib.addBook("Data Structures");
        lib.addBook("Algorithms");
        lib.removeBook("Data Structures");
        lib.removeBook("Operating Systems");
        lib.showBooks();
    }

    static class Library {
        private List<String> books = new ArrayList<>();
        void addBook(String title) {
            books.add(title);
            System.out.println("Added: " + title);
        }
        void removeBook(String title) {
            if (books.remove(title)) System.out.println("Removed: " + title);
            else System.out.println("Book not found: " + title);
        }
        void showBooks() {
            System.out.println("Books in the library: " + books);
        }
    }
}`,o:`Added: Java Basics
Added: Data Structures
Added: Algorithms
Removed: Data Structures
Book not found: Operating Systems
Books in the library: [Java Basics, Algorithms]`},
{s:10,t:"Write a Java program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",c:`package object_oriented_programming;

import java.time.LocalTime;

public class Q12 {
    public static void main(String[] args) {
        Airplane plane = new Airplane("AI-202", "Mumbai", LocalTime.of(10, 30));
        plane.checkStatus();
        plane.delay(45);
        plane.checkStatus();
    }

    static class Airplane {
        String flightNumber, destination;
        LocalTime departureTime;
        boolean delayed = false;
        Airplane(String flightNumber, String destination, LocalTime departureTime) {
            this.flightNumber = flightNumber;
            this.destination = destination;
            this.departureTime = departureTime;
        }
        void checkStatus() {
            System.out.println("Flight " + flightNumber + " to " + destination
                + " departs at " + departureTime + " - " + (delayed ? "Delayed" : "On time"));
        }
        void delay(int minutes) {
            departureTime = departureTime.plusMinutes(minutes);
            delayed = true;
            System.out.println("Flight delayed by " + minutes + " minutes");
        }
    }
}`,o:`Flight AI-202 to Mumbai departs at 10:30 - On time
Flight delayed by 45 minutes
Flight AI-202 to Mumbai departs at 11:15 - Delayed`},
{s:10,t:"Write a Java program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",c:`package object_oriented_programming;

import java.util.*;

public class Q13 {
    public static void main(String[] args) {
        Inventory inv = new Inventory();
        inv.addProduct("Pen", 50);
        inv.addProduct("Notebook", 3);
        inv.addProduct("Marker", 2);
        inv.removeProduct("Marker");
        inv.checkLowInventory(5);
    }

    static class Inventory {
        private Map<String, Integer> stock = new LinkedHashMap<>();
        void addProduct(String name, int quantity) {
            stock.put(name, quantity);
            System.out.println("Added " + name + " (" + quantity + ")");
        }
        void removeProduct(String name) {
            if (stock.remove(name) != null) System.out.println("Removed " + name);
            else System.out.println(name + " not found");
        }
        void checkLowInventory(int threshold) {
            System.out.println("Products with low inventory (below " + threshold + "):");
            for (Map.Entry<String, Integer> e : stock.entrySet()) {
                if (e.getValue() < threshold)
                    System.out.println(e.getKey() + " - " + e.getValue() + " left");
            }
        }
    }
}`,o:`Added Pen (50)
Added Notebook (3)
Added Marker (2)
Removed Marker
Products with low inventory (below 5):
Notebook - 3 left`},
{s:10,t:"Write a Java program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",c:`package object_oriented_programming;

import java.util.*;

public class Q14 {
    public static void main(String[] args) {
        School school = new School();
        school.addStudent("Ravi");
        school.addStudent("Neha");
        school.addTeacher("Mr. Sharma");
        school.createClass("Class 10A");
        school.removeStudent("Ravi");
        school.display();
    }

    static class School {
        private List<String> students = new ArrayList<>();
        private List<String> teachers = new ArrayList<>();
        private List<String> classes = new ArrayList<>();
        void addStudent(String name) { students.add(name); System.out.println("Student added: " + name); }
        void removeStudent(String name) { students.remove(name); System.out.println("Student removed: " + name); }
        void addTeacher(String name) { teachers.add(name); System.out.println("Teacher added: " + name); }
        void removeTeacher(String name) { teachers.remove(name); System.out.println("Teacher removed: " + name); }
        void createClass(String name) { classes.add(name); System.out.println("Class created: " + name); }
        void display() {
            System.out.println("Students: " + students);
            System.out.println("Teachers: " + teachers);
            System.out.println("Classes: " + classes);
        }
    }
}`,o:`Student added: Ravi
Student added: Neha
Teacher added: Mr. Sharma
Class created: Class 10A
Student removed: Ravi
Students: [Neha]
Teachers: [Mr. Sharma]
Classes: [Class 10A]`},
{s:10,t:"Write a Java program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song. (output changes on every run because the song is chosen randomly)",c:`package object_oriented_programming;

import java.util.*;

public class Q15 {
    public static void main(String[] args) {
        MusicLibrary lib = new MusicLibrary();
        lib.addSong("Shape of You");
        lib.addSong("Believer");
        lib.addSong("Faded");
        lib.addSong("Perfect");
        lib.removeSong("Faded");
        lib.playRandomSong();
    }

    static class MusicLibrary {
        private List<String> songs = new ArrayList<>();
        private Random random = new Random();
        void addSong(String song) {
            songs.add(song);
            System.out.println("Added: " + song);
        }
        void removeSong(String song) {
            if (songs.remove(song)) System.out.println("Removed: " + song);
            else System.out.println("Song not found: " + song);
        }
        void playRandomSong() {
            if (songs.isEmpty()) System.out.println("No songs in the library");
            else System.out.println("Now playing: " + songs.get(random.nextInt(songs.size())));
        }
    }
}`,o:`Added: Shape of You
Added: Believer
Added: Faded
Added: Perfect
Removed: Faded
Now playing: Shape of You`},
{s:10,t:"Write a Java program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",c:`package object_oriented_programming;

public class Q16 {
    public static void main(String[] args) {
        Shape[] shapes = {new Rectangle(8, 5), new Circle(5), new Triangle(3, 4, 5)};
        for (Shape s : shapes) {
            System.out.printf("%s -> Area: %.2f, Perimeter: %.2f%n", s.getClass().getSimpleName(), s.area(), s.perimeter());
        }
    }

    abstract static class Shape {
        abstract double area();
        abstract double perimeter();
    }

    static class Rectangle extends Shape {
        double l, w;
        Rectangle(double l, double w) { this.l = l; this.w = w; }
        double area() { return l * w; }
        double perimeter() { return 2 * (l + w); }
    }

    static class Circle extends Shape {
        double r;
        Circle(double r) { this.r = r; }
        double area() { return Math.PI * r * r; }
        double perimeter() { return 2 * Math.PI * r; }
    }

    static class Triangle extends Shape {
        double a, b, c;
        Triangle(double a, double b, double c) { this.a = a; this.b = b; this.c = c; }
        double area() {
            double s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }
        double perimeter() { return a + b + c; }
    }
}`,o:`Rectangle -> Area: 40.00, Perimeter: 26.00
Circle -> Area: 78.54, Perimeter: 31.42
Triangle -> Area: 6.00, Perimeter: 12.00`},
{s:10,t:"Write a Java program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",c:`package object_oriented_programming;

import java.util.*;

public class Q17 {
    public static void main(String[] args) {
        Movie m = new Movie("Inception", "Christopher Nolan", Arrays.asList("Leonardo DiCaprio", "Tom Hardy"));
        m.addReview("Mind-blowing story");
        m.addReview("Great visuals and music");
        m.display();
    }

    static class Movie {
        String title, director;
        List<String> actors;
        private List<String> reviews = new ArrayList<>();
        Movie(String title, String director, List<String> actors) {
            this.title = title;
            this.director = director;
            this.actors = actors;
        }
        void addReview(String review) { reviews.add(review); }
        List<String> getReviews() { return reviews; }
        void display() {
            System.out.println("Title: " + title);
            System.out.println("Director: " + director);
            System.out.println("Actors: " + actors);
            System.out.println("Reviews:");
            for (String r : getReviews()) System.out.println("- " + r);
        }
    }
}`,o:`Title: Inception
Director: Christopher Nolan
Actors: [Leonardo DiCaprio, Tom Hardy]
Reviews:
- Mind-blowing story
- Great visuals and music`},
{s:10,t:"Write a Java program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",c:`package object_oriented_programming;

import java.util.*;

public class Q18 {
    public static void main(String[] args) {
        Restaurant r = new Restaurant();
        r.addItem("Pizza", 250);
        r.addItem("Burger", 120);
        r.addItem("Pasta", 180);
        r.removeItem("Burger");
        r.addRating(4);
        r.addRating(5);
        r.addRating(3);
        r.showMenu();
        System.out.println("Average rating = " + r.averageRating());
    }

    static class Restaurant {
        private Map<String, Double> menu = new LinkedHashMap<>();
        private List<Integer> ratings = new ArrayList<>();
        void addItem(String name, double price) { menu.put(name, price); }
        void removeItem(String name) { menu.remove(name); }
        void addRating(int rating) { ratings.add(rating); }
        double averageRating() {
            int sum = 0;
            for (int r : ratings) sum += r;
            return ratings.isEmpty() ? 0 : (double) sum / ratings.size();
        }
        void showMenu() {
            System.out.println("Menu:");
            for (Map.Entry<String, Double> e : menu.entrySet())
                System.out.println(e.getKey() + " - Rs. " + e.getValue());
        }
    }
}`,o:`Menu:
Pizza - Rs. 250.0
Pasta - Rs. 180.0
Average rating = 4.0`},
{s:10,t:"Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",c:`package object_oriented_programming;

import java.util.*;

public class Q19 {
    public static void main(String[] args) {
        TravelBooking tb = new TravelBooking();
        tb.searchFlights("Goa");
        tb.searchHotels("Goa");
        int id1 = tb.book("Flight to Goa");
        int id2 = tb.book("Hotel in Goa");
        tb.showReservations();
        tb.cancel(id1);
        tb.showReservations();
    }

    static class TravelBooking {
        private Map<String, Integer> flights = new LinkedHashMap<>();
        private Map<String, Integer> hotels = new LinkedHashMap<>();
        private Map<Integer, String> reservations = new LinkedHashMap<>();
        private int nextId = 1;
        TravelBooking() {
            flights.put("Goa", 4500);
            flights.put("Delhi", 3500);
            hotels.put("Goa", 2500);
            hotels.put("Delhi", 3000);
        }
        void searchFlights(String city) {
            if (flights.containsKey(city))
                System.out.println("Flight available to " + city + " for Rs. " + flights.get(city));
            else System.out.println("No flights to " + city);
        }
        void searchHotels(String city) {
            if (hotels.containsKey(city))
                System.out.println("Hotel available in " + city + " for Rs. " + hotels.get(city) + " per night");
            else System.out.println("No hotels in " + city);
        }
        int book(String item) {
            reservations.put(nextId, item);
            System.out.println("Booked: " + item + " (Reservation ID " + nextId + ")");
            return nextId++;
        }
        void cancel(int id) {
            if (reservations.remove(id) != null) System.out.println("Reservation " + id + " cancelled");
            else System.out.println("Reservation not found");
        }
        void showReservations() {
            System.out.println("Reservations: " + reservations);
        }
    }
}`,o:`Flight available to Goa for Rs. 4500
Hotel available in Goa for Rs. 2500 per night
Booked: Flight to Goa (Reservation ID 1)
Booked: Hotel in Goa (Reservation ID 2)
Reservations: {1=Flight to Goa, 2=Hotel in Goa}
Reservation 1 cancelled
Reservations: {2=Hotel in Goa}`},
{s:10,t:"Create a class showing an example of default constructor.",c:`package object_oriented_programming;

public class Q20 {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println("Name: " + s.name + ", Age: " + s.age);
    }

    static class Student {
        String name;
        int age;
        // No constructor is written, so Java provides a default constructor
    }
}`,o:`Name: null, Age: 0`},
{s:10,t:"Create a class showing an example of parameterized constructor.",c:`package object_oriented_programming;

public class Q21 {
    public static void main(String[] args) {
        Student s1 = new Student("Ravi", 21);
        Student s2 = new Student("Neha", 22);
        s1.display();
        s2.display();
    }

    static class Student {
        String name;
        int age;
        Student(String name, int age) {
            this.name = name;
            this.age = age;
        }
        void display() { System.out.println("Name: " + name + ", Age: " + age); }
    }
}`,o:`Name: Ravi, Age: 21
Name: Neha, Age: 22`},
{s:10,t:"Create a class showing an example of copy constructor.",c:`package object_oriented_programming;

public class Q22 {
    public static void main(String[] args) {
        Student s1 = new Student("Ravi", 21);
        Student s2 = new Student(s1);
        s1.display();
        s2.display();
    }

    static class Student {
        String name;
        int age;
        Student(String name, int age) {
            this.name = name;
            this.age = age;
        }
        Student(Student other) {
            this.name = other.name;
            this.age = other.age;
        }
        void display() { System.out.println("Name: " + name + ", Age: " + age); }
    }
}`,o:`Name: Ravi, Age: 21
Name: Ravi, Age: 21`},
{s:10,t:"Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",c:`package object_oriented_programming;

import java.util.Scanner;

public class Q23 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student[] students = new Student[10];
        for (int i = 0; i < 10; i++) {
            System.out.print("Enter name of student " + (i + 1) + ": ");
            String name = sc.next();
            System.out.print("Enter class of student " + (i + 1) + ": ");
            String cls = sc.next();
            students[i] = new Student(name, cls);
        }
        System.out.println("Roll No | Name | Class");
        for (Student s : students) s.display();
    }

    static class Student {
        static int counter = 0;
        int rollNo;
        String name, className;
        Student(String name, String className) {
            this.rollNo = ++counter;
            this.name = name;
            this.className = className;
        }
        void display() { System.out.println(rollNo + " | " + name + " | " + className); }
    }
}`,o:`Enter name of student 1: Amit
Enter class of student 1: 10A
Enter name of student 2: Ravi
Enter class of student 2: 10A
Enter name of student 3: Neha
Enter class of student 3: 10B
Enter name of student 4: Priya
Enter class of student 4: 10B
Enter name of student 5: Kiran
Enter class of student 5: 10C
Enter name of student 6: Sita
Enter class of student 6: 10C
Enter name of student 7: Arjun
Enter class of student 7: 10A
Enter name of student 8: Meera
Enter class of student 8: 10B
Enter name of student 9: Rohan
Enter class of student 9: 10C
Enter name of student 10: Anita
Enter class of student 10: 10A
Roll No | Name | Class
1 | Amit | 10A
2 | Ravi | 10A
3 | Neha | 10B
4 | Priya | 10B
5 | Kiran | 10C
6 | Sita | 10C
7 | Arjun | 10A
8 | Meera | 10B
9 | Rohan | 10C
10 | Anita | 10A`},
{s:10,t:"Create a class showing the area of circle and rectangle by method overloading.",c:`package object_oriented_programming;

public class Q24 {
    public static void main(String[] args) {
        AreaCalculator calc = new AreaCalculator();
        System.out.printf("Area of circle = %.2f%n", calc.area(5));
        System.out.println("Area of rectangle = " + calc.area(8, 5));
    }

    static class AreaCalculator {
        double area(double radius) { return Math.PI * radius * radius; }
        double area(double length, double width) { return length * width; }
    }
}`,o:`Area of circle = 78.54
Area of rectangle = 40.0`},
{s:10,t:"Create a class, entering the command line arguments from the user and show all the arguments as output.. (run: java object_oriented_programming.Q25 Hello Java 2026)",c:`package object_oriented_programming;

public class Q25 {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + (i + 1) + ": " + args[i]);
        }
    }
}`,o:`Number of arguments: 3
Argument 1: Hello
Argument 2: Java
Argument 3: 2026`},
{s:10,t:"Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",c:`package object_oriented_programming;

public class Q26 {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Ravi");
        p.setAge(25);
        p.setCountry("India");
        System.out.println("Name: " + p.getName());
        System.out.println("Age: " + p.getAge());
        System.out.println("Country: " + p.getCountry());
    }

    static class Person {
        private String name, country;
        private int age;
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public int getAge() { return age; }
        public void setAge(int age) { this.age = age; }
        public String getCountry() { return country; }
        public void setCountry(String country) { this.country = country; }
    }
}`,o:`Name: Ravi
Age: 25
Country: India`},
{s:10,t:"Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",c:`package object_oriented_programming;

public class Q27 {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.setAccountNumber("ACC1001");
        acc.setBalance(5000);
        System.out.println("Account number: " + acc.getAccountNumber());
        System.out.println("Balance: " + acc.getBalance());
        acc.setBalance(7500);
        System.out.println("Updated balance: " + acc.getBalance());
    }

    static class BankAccount {
        private String accountNumber;
        private double balance;
        public String getAccountNumber() { return accountNumber; }
        public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }
        public double getBalance() { return balance; }
        public void setBalance(double balance) { this.balance = balance; }
    }
}`,o:`Account number: ACC1001
Balance: 5000.0
Updated balance: 7500.0`},
{s:10,t:"Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",c:`package object_oriented_programming;

public class Q28 {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        r.setLength(10);
        r.setWidth(4);
        System.out.println("Length: " + r.getLength());
        System.out.println("Width: " + r.getWidth());
        r.setWidth(6);
        System.out.println("Updated width: " + r.getWidth());
    }

    static class Rectangle {
        private double length, width;
        public double getLength() { return length; }
        public void setLength(double length) { this.length = length; }
        public double getWidth() { return width; }
        public void setWidth(double width) { this.width = width; }
    }
}`,o:`Length: 10.0
Width: 4.0
Updated width: 6.0`},
{s:10,t:"Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",c:`package object_oriented_programming;

public class Q29 {
    public static void main(String[] args) {
        Employee e = new Employee(101, "Ravi", 55000);
        e.setEmployee_name("Ravi Kumar");
        System.out.println("ID: " + e.getEmployee_id());
        System.out.println("Name: " + e.getEmployee_name());
        System.out.println("Salary: " + e.getEmployee_salary());
    }

    static class Employee {
        private int employee_id;
        private String employee_name;
        private double employee_salary;
        Employee(int id, String name, double salary) {
            this.employee_id = id;
            this.employee_name = name;
            this.employee_salary = salary;
        }
        public int getEmployee_id() { return employee_id; }
        public void setEmployee_id(int id) { this.employee_id = id; }
        public String getEmployee_name() { return employee_name; }
        public void setEmployee_name(String name) { this.employee_name = name; }
        public String getEmployee_salary() { return String.format("Rs. %,.2f", employee_salary); }
    }
}`,o:`ID: 101
Name: Ravi Kumar
Salary: Rs. 55,000.00`},
{s:10,t:"Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",c:`package object_oriented_programming;

public class Q30 {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.setRadius(5);
        System.out.println("Radius = " + c.getRadius());
        System.out.printf("Area = %.2f%n", c.calculateArea());
        System.out.printf("Perimeter = %.2f%n", c.calculatePerimeter());
        c.setRadius(10);
        System.out.printf("Area after changing radius to %.1f = %.2f%n", c.getRadius(), c.calculateArea());
    }

    static class Circle {
        private double radius;
        public double getRadius() { return radius; }
        public void setRadius(double radius) { this.radius = radius; }
        public double calculateArea() { return Math.PI * radius * radius; }
        public double calculatePerimeter() { return 2 * Math.PI * radius; }
    }
}`,o:`Radius = 5.0
Area = 78.54
Perimeter = 31.42
Area after changing radius to 10.0 = 314.16`},
{s:10,t:"Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",c:`package object_oriented_programming;

public class Q31 {
    public static void main(String[] args) {
        Car car = new Car("Toyota", "Camry", 2022, 15000);
        car.setYear(2023);
        System.out.println("Company: " + car.getCompany_name());
        System.out.println("Model: " + car.getModel_name());
        System.out.println("Year: " + car.getYear());
        System.out.println("Mileage: " + car.getMileage() + " km");
    }

    static class Car {
        private String company_name, model_name;
        private int year;
        private double mileage;
        Car(String company, String model, int year, double mileage) {
            this.company_name = company;
            this.model_name = model;
            this.year = year;
            this.mileage = mileage;
        }
        public String getCompany_name() { return company_name; }
        public void setCompany_name(String company_name) { this.company_name = company_name; }
        public String getModel_name() { return model_name; }
        public void setModel_name(String model_name) { this.model_name = model_name; }
        public int getYear() { return year; }
        public void setYear(int year) { this.year = year; }
        public double getMileage() { return mileage; }
    }
}`,o:`Company: Toyota
Model: Camry
Year: 2023
Mileage: 15000.0 km`},
{s:10,t:"Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",c:`package object_oriented_programming;

import java.util.*;

public class Q32 {
    public static void main(String[] args) {
        Student s = new Student(1, "Neha");
        s.addGrade(85);
        s.addGrade(92);
        s.addGrade(105);
        s.addGrade(-5);
        s.addGrade(78);
        System.out.println("Student: " + s.getStudent_name() + " (ID " + s.getStudent_id() + ")");
        System.out.println("Grades: " + s.getGrades());
    }

    static class Student {
        private int student_id;
        private String student_name;
        private List<Integer> grades = new ArrayList<>();
        Student(int id, String name) {
            this.student_id = id;
            this.student_name = name;
        }
        public int getStudent_id() { return student_id; }
        public void setStudent_id(int id) { this.student_id = id; }
        public String getStudent_name() { return student_name; }
        public void setStudent_name(String name) { this.student_name = name; }
        public List<Integer> getGrades() { return grades; }
        public void addGrade(int grade) {
            if (grade < 0 || grade > 100)
                System.out.println("Invalid grade " + grade + ": must be between 0 and 100");
            else
                grades.add(grade);
        }
    }
}`,o:`Invalid grade 105: must be between 0 and 100
Invalid grade -5: must be between 0 and 100
Student: Neha (ID 1)
Grades: [85, 92, 78]`},
{s:11,t:"Write a Java program to create a basic Java thread that prints \"Hello, World!\" when executed.",c:`package multithreading;

public class Q1 {
    public static void main(String[] args) throws Exception {
        HelloThread t = new HelloThread();
        t.start();
        t.join();
    }

    static class HelloThread extends Thread {
        public void run() {
            System.out.println("Hello, World!");
        }
    }
}`,o:`Hello, World!`},
{s:11,t:"Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.",c:`package multithreading;

public class Q2 {
    public static void main(String[] args) throws Exception {
        NumberThread even = new NumberThread(true);
        NumberThread odd = new NumberThread(false);
        even.start();
        odd.start();
        even.join();
        odd.join();
        System.out.println("Even numbers: " + even.result);
        System.out.println("Odd numbers: " + odd.result);
    }

    static class NumberThread extends Thread {
        boolean findEven;
        String result = "";
        NumberThread(boolean findEven) { this.findEven = findEven; }
        public void run() {
            for (int i = 1; i <= 20; i++) {
                if ((i % 2 == 0) == findEven) result += i + " ";
            }
        }
    }
}`,o:`Even numbers: 2 4 6 8 10 12 14 16 18 20
Odd numbers: 1 3 5 7 9 11 13 15 17 19`},
{s:11,t:"Write a Java program that sorts an array of integers using multiple threads.",c:`package multithreading;

import java.util.Arrays;

public class Q3 {
    public static void main(String[] args) throws Exception {
        int[] arr = {9, 4, 7, 1, 8, 2, 6, 3, 5, 0};
        int mid = arr.length / 2;
        SortThread t1 = new SortThread(arr, 0, mid);
        SortThread t2 = new SortThread(arr, mid, arr.length);
        t1.start();
        t2.start();
        t1.join();
        t2.join();

        int[] sorted = new int[arr.length];
        int i = 0, j = mid, k = 0;
        while (i < mid && j < arr.length) {
            sorted[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
        }
        while (i < mid) sorted[k++] = arr[i++];
        while (j < arr.length) sorted[k++] = arr[j++];
        System.out.println("Sorted array: " + Arrays.toString(sorted));
    }

    static class SortThread extends Thread {
        int[] a;
        int from, to;
        SortThread(int[] a, int from, int to) {
            this.a = a;
            this.from = from;
            this.to = to;
        }
        public void run() {
            Arrays.sort(a, from, to);
        }
    }
}`,o:`Sorted array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`},
{s:11,t:"Write a Java program that performs matrix multiplication using multiple threads.",c:`package multithreading;

public class Q4 {
    public static void main(String[] args) throws Exception {
        int[][] a = {{1, 2, 3}, {4, 5, 6}};
        int[][] b = {{7, 8}, {9, 10}, {11, 12}};
        int[][] c = new int[2][2];
        RowMultiplier[] threads = new RowMultiplier[2];
        for (int i = 0; i < 2; i++) {
            threads[i] = new RowMultiplier(i, a, b, c);
            threads[i].start();
        }
        for (RowMultiplier t : threads) t.join();
        System.out.println("Product matrix:");
        for (int[] row : c) {
            for (int x : row) System.out.print(x + " ");
            System.out.println();
        }
    }

    static class RowMultiplier extends Thread {
        int row;
        int[][] a, b, c;
        RowMultiplier(int row, int[][] a, int[][] b, int[][] c) {
            this.row = row;
            this.a = a;
            this.b = b;
            this.c = c;
        }
        public void run() {
            for (int j = 0; j < b[0].length; j++)
                for (int k = 0; k < b.length; k++)
                    c[row][j] += a[row][k] * b[k][j];
        }
    }
}`,o:`Product matrix:
58 64
139 154`},
{s:11,t:"Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.",c:`package multithreading;

public class Q5 {
    public static void main(String[] args) throws Exception {
        int limit = 100;
        int parts = 4;
        int size = limit / parts;
        PrimeSum[] threads = new PrimeSum[parts];
        for (int i = 0; i < parts; i++) {
            threads[i] = new PrimeSum(i * size + 1, (i + 1) * size);
            threads[i].start();
        }
        long total = 0;
        for (PrimeSum t : threads) {
            t.join();
            System.out.println("Sum of primes from " + t.start + " to " + t.end + " = " + t.sum);
            total += t.sum;
        }
        System.out.println("Sum of all prime numbers up to " + limit + " = " + total);
    }

    static class PrimeSum extends Thread {
        int start, end;
        long sum = 0;
        PrimeSum(int start, int end) {
            this.start = start;
            this.end = end;
        }
        static boolean isPrime(int n) {
            if (n < 2) return false;
            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0) return false;
            }
            return true;
        }
        public void run() {
            for (int i = start; i <= end; i++) {
                if (isPrime(i)) sum += i;
            }
        }
    }
}`,o:`Sum of primes from 1 to 25 = 100
Sum of primes from 26 to 50 = 228
Sum of primes from 51 to 75 = 384
Sum of primes from 76 to 100 = 348
Sum of all prime numbers up to 100 = 1060`},
{s:11,t:"Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads. (simulated: the pages are fake, so no internet is needed)",c:`package multithreading;

public class Q6 {
    public static void main(String[] args) throws Exception {
        String[] urls = {"www.site-a.com", "www.site-b.com", "www.site-c.com"};
        Crawler[] crawlers = new Crawler[urls.length];
        for (int i = 0; i < urls.length; i++) {
            crawlers[i] = new Crawler(urls[i], 5 + i * 3);
            crawlers[i].start();
        }
        for (Crawler c : crawlers) {
            c.join();
            System.out.println("Crawled " + c.url + " -> " + c.linksFound + " links found");
        }
        System.out.println("All websites crawled");
    }

    static class Crawler extends Thread {
        String url;
        int linksFound;
        int simulatedLinks;
        Crawler(String url, int simulatedLinks) {
            this.url = url;
            this.simulatedLinks = simulatedLinks;
        }
        public void run() {
            try {
                Thread.sleep(200); // simulate the time taken to download the page
            } catch (InterruptedException e) {
                return;
            }
            linksFound = simulatedLinks;
        }
    }
}`,o:`Crawled www.site-a.com -> 5 links found
Crawled www.site-b.com -> 8 links found
Crawled www.site-c.com -> 11 links found
All websites crawled`},
{s:11,t:"Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.",c:`package multithreading;

public class Q7 {
    public static void main(String[] args) throws Exception {
        Account account = new Account(5000);
        Thread[] threads = new Thread[4];
        for (int i = 0; i < 2; i++) {
            threads[i] = new Thread(() -> {
                for (int n = 0; n < 500; n++) account.deposit(10);
            });
            threads[i + 2] = new Thread(() -> {
                for (int n = 0; n < 200; n++) account.withdraw(10);
            });
        }
        for (Thread t : threads) t.start();
        for (Thread t : threads) t.join();
        System.out.println("Initial balance = 5000");
        System.out.println("Final balance = " + account.getBalance());
    }

    static class Account {
        private int balance;
        Account(int balance) { this.balance = balance; }
        synchronized void deposit(int amount) { balance += amount; }
        synchronized void withdraw(int amount) {
            if (balance >= amount) balance -= amount;
        }
        synchronized int getBalance() { return balance; }
    }
}`,o:`Initial balance = 5000
Final balance = 11000`},
{s:11,t:"Create the program to create multiple threads by using Runnbale interface",c:`package multithreading;

public class Q8 {
    public static void main(String[] args) throws Exception {
        for (int i = 1; i <= 3; i++) {
            Thread t = new Thread(new MyTask(i));
            t.start();
            t.join();
        }
        System.out.println("All threads finished");
    }

    static class MyTask implements Runnable {
        int id;
        MyTask(int id) { this.id = id; }
        public void run() {
            System.out.println("Task " + id + " is running in " + Thread.currentThread().getName());
        }
    }
}`,o:`Task 1 is running in Thread-0
Task 2 is running in Thread-1
Task 3 is running in Thread-2
All threads finished`},
{s:11,t:"Create the program to create multiple threads by using Thread class",c:`package multithreading;

public class Q9 {
    public static void main(String[] args) throws Exception {
        for (int i = 1; i <= 3; i++) {
            MyThread t = new MyThread(i);
            t.start();
            t.join();
        }
        System.out.println("All threads finished");
    }

    static class MyThread extends Thread {
        int id;
        MyThread(int id) { this.id = id; }
        public void run() {
            System.out.println("Thread " + id + " is running as " + getName());
        }
    }
}`,o:`Thread 1 is running as Thread-0
Thread 2 is running as Thread-1
Thread 3 is running as Thread-2
All threads finished`},
{s:11,t:"Create the program to create multiple threads, set its name and its priority.",c:`package multithreading;

public class Q10 {
    public static void main(String[] args) throws Exception {
        Runnable task = () -> {
            Thread t = Thread.currentThread();
            System.out.println(t.getName() + " is running with priority " + t.getPriority());
        };
        Thread t1 = new Thread(task, "Worker-1");
        Thread t2 = new Thread(task, "Worker-2");
        Thread t3 = new Thread(task);
        t3.setName("Worker-3");
        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.NORM_PRIORITY);
        t3.setPriority(Thread.MAX_PRIORITY);
        Thread[] threads = {t1, t2, t3};
        for (Thread t : threads) {
            t.start();
            t.join();
        }
    }
}`,o:`Worker-1 is running with priority 1
Worker-2 is running with priority 5
Worker-3 is running with priority 10`},
{s:11,t:"Create the program to create multiple threads, show an example of synchronization keyword.",c:`package multithreading;

public class Q11 {
    public static void main(String[] args) throws Exception {
        Counter counter = new Counter();
        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) counter.increment(); });
        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) counter.increment(); });
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Final count = " + counter.getCount());
    }

    static class Counter {
        private int count = 0;
        // synchronized lets only one thread update count at a time
        synchronized void increment() { count++; }
        int getCount() { return count; }
    }
}`,o:`Final count = 2000`},
{s:11,t:"Create the program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.",c:`package multithreading;

public class Q12 {
    public static void main(String[] args) throws Exception {
        Signal signal = new Signal();
        Thread[] waiters = new Thread[3];
        for (int i = 0; i < 3; i++) {
            final int id = i + 1;
            waiters[i] = new Thread(() -> {
                try {
                    signal.waitForSignal("Waiter-" + id);
                    Thread.sleep(id * 200);   // sleep() keeps the order of the output fixed
                    System.out.println("Waiter-" + id + " resumed");
                } catch (InterruptedException e) { }
            });
            waiters[i].start();
            Thread.sleep(300);
        }
        System.out.println("Main: calling notifyAll()");
        signal.sendSignal();
        for (Thread t : waiters) t.join();
        System.out.println("All waiting threads resumed");
    }

    static class Signal {
        private boolean ready = false;

        synchronized void waitForSignal(String name) throws InterruptedException {
            System.out.println(name + " is waiting");
            while (!ready) {
                wait();            // releases the lock and waits until notified
            }
        }

        synchronized void sendSignal() {
            ready = true;
            notifyAll();           // wakes up all waiting threads (notify() wakes only one)
        }
    }
}`,o:`Waiter-1 is waiting
Waiter-2 is waiting
Waiter-3 is waiting
Main: calling notifyAll()
Waiter-1 resumed
Waiter-2 resumed
Waiter-3 resumed
All waiting threads resumed`},
{s:11,t:"Create the program to create multiple threads, show an example of join and yield methods.",c:`package multithreading;

public class Q13 {
    public static void main(String[] args) throws Exception {
        Worker w1 = new Worker("Worker-1");
        Worker w2 = new Worker("Worker-2");
        w1.start();
        w2.start();
        w1.join();   // main waits until Worker-1 finishes
        w2.join();   // main waits until Worker-2 finishes
        System.out.println(w1.getName() + " result: " + w1.sum);
        System.out.println(w2.getName() + " result: " + w2.sum);
        System.out.println("Main continues after both workers have finished");
    }

    static class Worker extends Thread {
        int sum = 0;
        Worker(String name) { super(name); }
        public void run() {
            for (int i = 1; i <= 5; i++) {
                sum += i;
                Thread.yield();   // hint to the scheduler to let other threads run
            }
        }
    }
}`,o:`Worker-1 result: 15
Worker-2 result: 15
Main continues after both workers have finished`}
];
const SEC=[
["📚","Single Dimensional Array","copy, rotate, sort, largest, duplicates"],
["⚙️","Functions","methods with parameters and return values"],
["🧵","Strings","palindrome, anagram, StringBuffer, words, characters"],
["🔲","Multi Dimensional Array","matrix input, add, multiply, transpose, triangular, sparse"],
["🔢","Basic Programming Construct","basic programs, area and volume, loops, arrays, strings, methods"],
["🧩","Interfaces","Shape, Drawable, Sortable, banking, encryption"],
["📦","Packages","java.util.Date, user-defined, nested, protected, public"],
["🌳","Inheritance","overriding, super, dynamic dispatch, abstract classes"],
["⌨️","Input/Output","InputStreamReader, BufferedReader, Scanner, file reading"],
["🛡️","Exception Handling","throw, throws, multiple catch, nested try, files, database"],
["🧱","Object Oriented Programming","classes, constructors, overloading, encapsulation, collections"],
["🔀","Multithreading","threads, Runnable, synchronization, wait and notify"]];
function copy(b,txt){navigator.clipboard.writeText(txt).then(()=>{b.textContent="Copied!";setTimeout(()=>b.textContent="Copy",1200)}).catch(()=>{})}
function mk(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function home(){
  document.getElementById("sub").textContent="Choose a section to open its questions with code and output.";
  const L=document.getElementById("list");L.textContent="";L.className="grid";
  SEC.forEach((s,i)=>{
    const n=Q.filter(q=>q.s===i).length,a=mk("a","card");a.href="#s"+i;
    a.append(mk("div","ico",s[0]),mk("h3","",s[1]),mk("span","cnt",n+" questions"));
    L.append(a);
  });
}
function show(id){
  const s=SEC[id];if(!s)return home();
  document.getElementById("sub").textContent=s[1];
  const L=document.getElementById("list");L.textContent="";L.className="";
  const back=mk("a","back","← All sections");back.href="#";L.append(back);
  Q.filter(q=>q.s===id).forEach((q,k)=>{
    const d=mk("div","q"),h=mk("h2");
    h.append(mk("span","","Q"+(k+1)+"."),document.createTextNode(q.t));d.append(h);
    [["Code",q.c,"code"],["Output",q.o,"out"]].forEach(([l,v,c])=>{
      const r=mk("div","lbl"),b=mk("button","","Copy");b.onclick=()=>copy(b,v);
      r.append(mk("span","",l));if(l==="Code")r.append(b);d.append(r,mk("pre",c,v));
    });
    L.append(d);
  });
}
function route(){const m=location.hash.match(/^#s(\d+)$/);m?show(+m[1]):home();window.scrollTo(0,0)}
window.onhashchange=route;route();
